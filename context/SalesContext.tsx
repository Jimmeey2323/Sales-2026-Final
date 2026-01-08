import React, { createContext, useContext, useState, useEffect } from 'react';
import { MonthData, Offer } from '../types';
import { MONTHS_DATA } from '../constants';

interface SalesContextType {
  data: MonthData[];
  addOffer: (monthId: string, offer: Omit<Offer, 'id'>) => void;
  updateOffer: (monthId: string, offerId: string, offer: Partial<Offer>) => void;
  deleteOffer: (monthId: string, offerId: string) => void;
  toggleCancelled: (monthId: string, offerId: string) => void;
  resetData: () => void;
}

const SalesContext = createContext<SalesContextType | undefined>(undefined);

const STORAGE_KEY = 'physique57_sales_plan_v1';

// Helper to generate IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

export const SalesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MonthData[]>(() => {
    // Try to load from local storage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
    
    // Initialize with IDs if missing
    return MONTHS_DATA.map(month => ({
      ...month,
      offers: month.offers.map(offer => ({
        ...offer,
        id: offer.id || generateId(),
        cancelled: offer.cancelled || false
      }))
    }));
  });

  // Save to local storage whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

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

  const resetData = () => {
    if (!window.confirm("This will factory reset all data. Are you sure?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setData(MONTHS_DATA.map(month => ({
      ...month,
      offers: month.offers.map(offer => ({
        ...offer,
        id: generateId(),
        cancelled: false
      }))
    })));
  };

  return (
    <SalesContext.Provider value={{ data, addOffer, updateOffer, deleteOffer, toggleCancelled, resetData }}>
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
