import React, { createContext, useContext, useState, useEffect } from 'react';
import { MonthData, Offer, MarketingCollateral, CRMTimeline } from '../types';
import { MONTHS_DATA } from '../constants';
import { initializeDatabase, loadSalesData, saveSalesData } from '../lib/neon';

interface SalesContextType {
  data: MonthData[];
  addOffer: (monthId: string, offer: Omit<Offer, 'id'>) => void;
  updateOffer: (monthId: string, offerId: string, offer: Partial<Offer>) => void;
  deleteOffer: (monthId: string, offerId: string) => void;
  toggleCancelled: (monthId: string, offerId: string) => void;
  updateMarketingCollateral: (monthId: string, id: string, updates: Partial<MarketingCollateral>) => void;
  updateCRMTimeline: (monthId: string, id: string, updates: Partial<CRMTimeline>) => void;
  setMonthMarketingCollateral: (monthId: string, items: MarketingCollateral[]) => void;
  setMonthCRMTimeline: (monthId: string, items: CRMTimeline[]) => void;
  resetData: () => void;
  isLoading: boolean;
}

const SalesContext = createContext<SalesContextType | undefined>(undefined);

const STORAGE_KEY = 'physique57_sales_plan_v1';

// Helper to generate IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

export const SalesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MonthData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize database and load data on mount
  useEffect(() => {
    async function loadData() {
      try {
        // Initialize database schema
        await initializeDatabase();
        
        // Try to load from Neon database first
        const neonData = await loadSalesData();
        
        if (neonData && Array.isArray(neonData)) {
          setData(neonData);
        } else {
          // Fallback to localStorage
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            try {
              const parsedData = JSON.parse(saved);
              setData(parsedData);
              // Sync to Neon
              await saveSalesData(parsedData);
            } catch (e) {
              console.error("Failed to parse saved data", e);
              initializeDefaultData();
            }
          } else {
            initializeDefaultData();
          }
        }
      } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to localStorage if Neon fails
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          try {
            setData(JSON.parse(saved));
          } catch (e) {
            initializeDefaultData();
          }
        } else {
          initializeDefaultData();
        }
      } finally {
        setIsLoading(false);
      }
    }

    function initializeDefaultData() {
      const defaultData = MONTHS_DATA.map(month => ({
        ...month,
        offers: month.offers.map(offer => ({
          ...offer,
          id: offer.id || generateId(),
          cancelled: offer.cancelled || false
        }))
      }));
      setData(defaultData);
      // Save to Neon
      saveSalesData(defaultData).catch(console.error);
    }

    loadData();
  }, []);

  // Save to both local storage and Neon whenever data changes
  useEffect(() => {
    if (!isLoading && data.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // Async save to Neon (non-blocking)
      saveSalesData(data).catch(err => {
        console.error('Failed to save to Neon:', err);
      });
    }
  }, [data, isLoading]);

  const addOffer = (monthId: string, offer: Omit<Offer, 'id'>) => {
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        offers: [...month.offers, { ...offer, id: generateId(), cancelled: false }]
      };
    }));
  };

  const updateOffer = (monthId: string, offerId: string, updates: Partial<Offer>) => {
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        offers: month.offers.map(offer => 
          offer.id === offerId ? { ...offer, ...updates } : offer
        )
      };
    }));
  };

  const deleteOffer = (monthId: string, offerId: string) => {
    if (!window.confirm("Are you sure you want to delete this offer?")) return;
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        offers: month.offers.filter(offer => offer.id !== offerId)
      };
    }));
  };

  const toggleCancelled = (monthId: string, offerId: string) => {
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        offers: month.offers.map(offer => 
          offer.id === offerId ? { ...offer, cancelled: !offer.cancelled } : offer
        )
      };
    }));
  };

  const updateMarketingCollateral = (monthId: string, id: string, updates: Partial<MarketingCollateral>) => {
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        marketingCollateral: (month.marketingCollateral || []).map(item =>
          item.id === id ? { ...item, ...updates } : item
        )
      };
    }));
  };

  const updateCRMTimeline = (monthId: string, id: string, updates: Partial<CRMTimeline>) => {
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        crmTimeline: (month.crmTimeline || []).map(item =>
          item.id === id ? { ...item, ...updates } : item
        )
      };
    }));
  };

  const setMonthMarketingCollateral = (monthId: string, items: MarketingCollateral[]) => {
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        marketingCollateral: items
      };
    }));
  };

  const setMonthCRMTimeline = (monthId: string, items: CRMTimeline[]) => {
    setData(prev => prev.map(month => {
      if (month.id !== monthId) return month;
      return {
        ...month,
        crmTimeline: items
      };
    }));
  };

  const resetData = () => {
    if (!window.confirm("This will factory reset all data. Are you sure?")) return;
    localStorage.removeItem(STORAGE_KEY);
    const resetData = MONTHS_DATA.map(month => ({
      ...month,
      offers: month.offers.map(offer => ({
        ...offer,
        id: generateId(),
        cancelled: false
      }))
    }));
    setData(resetData);
    // Save reset data to Neon
    saveSalesData(resetData).catch(console.error);
  };

  return (
    <SalesContext.Provider value={{ data, addOffer, updateOffer, deleteOffer, toggleCancelled, updateMarketingCollateral, updateCRMTimeline, setMonthMarketingCollateral, setMonthCRMTimeline, resetData, isLoading }}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSalesData = () => {
  const context = useContext(SalesContext);
  if (context === undefined) {
    throw new Error('useSalesData must be used within a SalesProvider');
  }
  return context;
};
