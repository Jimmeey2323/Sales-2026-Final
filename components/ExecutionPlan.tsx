import React, { useState } from 'react';
import { MonthData, Offer, MarketingCollateral, CRMTimeline } from '../types';
import { Target, TrendingUp, Users, DollarSign, Package, Megaphone, ListTodo, Edit2, Save, X } from 'lucide-react';
import { useSalesData } from '../context/SalesContext';

// Indian currency formatter
const formatIndianCurrency = (amount: number): string => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)}Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)}K`;
  }
  return `₹${amount.toFixed(0)}`;
};

interface ExecutionPlanProps {
  month: MonthData;
}

export const ExecutionPlan: React.FC<ExecutionPlanProps> = ({ month }) => {
  const { updateMarketingCollateral, updateCRMTimeline, setMonthMarketingCollateral, setMonthCRMTimeline } = useSalesData();
  const [editingMarketing, setEditingMarketing] = useState<string | null>(null);
  const [editingCRM, setEditingCRM] = useState<string | null>(null);
  const [tempMarketing, setTempMarketing] = useState<Partial<MarketingCollateral>>({});
  const [tempCRM, setTempCRM] = useState<Partial<CRMTimeline>>({});
  
  // Filter out cancelled offers
  const activeOffers = month.offers.filter(o => !o.cancelled);
  
  // Calculate revenue projections from each offer using location-specific units
  const calculateOfferRevenue = (offer: Offer): { mumbai: number; bengaluru: number; total: number; mumbaiUnits: number; bengaluruUnits: number } => {
    // Get location-specific units or fall back to targetUnits
    const targetUnitsMumbai = typeof (offer.targetUnitsMumbai || offer.targetUnits) === 'number' 
      ? (offer.targetUnitsMumbai || offer.targetUnits) as number
      : parseInt((offer.targetUnitsMumbai || offer.targetUnits) as string) || 0;
    
    const targetUnitsBengaluru = typeof (offer.targetUnitsBengaluru || offer.targetUnits) === 'number' 
      ? (offer.targetUnitsBengaluru || offer.targetUnits) as number
      : parseInt((offer.targetUnitsBengaluru || offer.targetUnits) as string) || 0;
    
    const mumbaiPrice = offer.finalPriceMumbai || offer.priceMumbai || 0;
    const bengaluruPrice = offer.finalPriceBengaluru || offer.priceBengaluru || 0;
    
    const mumbaiRevenue = mumbaiPrice * targetUnitsMumbai;
    const bengaluruRevenue = bengaluruPrice * targetUnitsBengaluru;
    
    return {
      mumbai: mumbaiRevenue,
      bengaluru: bengaluruRevenue,
      total: mumbaiRevenue + bengaluruRevenue,
      mumbaiUnits: targetUnitsMumbai,
      bengaluruUnits: targetUnitsBengaluru
    };
  };

  // Calculate total projected revenue
  const offerRevenues = activeOffers.map(offer => ({
    offer,
    revenue: calculateOfferRevenue(offer)
  }));

  const totalProjectedRevenue = offerRevenues.reduce((sum, item) => sum + item.revenue.total, 0);
  const totalMumbaiRevenue = offerRevenues.reduce((sum, item) => sum + item.revenue.mumbai, 0);
  const totalBengaluruRevenue = offerRevenues.reduce((sum, item) => sum + item.revenue.bengaluru, 0);
  
  // Parse target revenue (remove ₹ and commas)
  const parseRevenue = (revenueStr: string): number => {
    return parseInt(revenueStr.replace(/[₹,]/g, '')) || 0;
  };
  
  const targetRevenue = parseRevenue(month.revenueTargetTotal);
  const revenueGap = targetRevenue - totalProjectedRevenue;
  const achievementPercent = targetRevenue > 0 ? Math.round((totalProjectedRevenue / targetRevenue) * 100) : 0;

  // Use stored marketing collateral or generate from offers
  const marketingCollateral: MarketingCollateral[] = month.marketingCollateral && month.marketingCollateral.length > 0 
    ? month.marketingCollateral 
    : [];
  const crmTimeline: CRMTimeline[] = month.crmTimeline && month.crmTimeline.length > 0
    ? month.crmTimeline
    : [];
  
  // Generate from offers if not stored
  if (marketingCollateral.length === 0) {
    // Helper to get specific dates based on month
    const getMonthDates = (monthName: string) => {
      const monthMap: { [key: string]: { launch: string; prelaunched: string; adsStart: string; adsEnd: string } } = {
        'January': { launch: 'Jan 15, 2026', prelaunched: 'Jan 10, 2026', adsStart: 'Jan 15, 2026', adsEnd: 'Jan 31, 2026' },
        'February': { launch: 'Feb 10, 2026', prelaunched: 'Feb 5, 2026', adsStart: 'Feb 10, 2026', adsEnd: 'Feb 28, 2026' },
        'March': { launch: 'Mar 12, 2026', prelaunched: 'Mar 7, 2026', adsStart: 'Mar 12, 2026', adsEnd: 'Mar 31, 2026' },
        'April': { launch: 'Apr 10, 2026', prelaunched: 'Apr 5, 2026', adsStart: 'Apr 10, 2026', adsEnd: 'Apr 30, 2026' },
        'May': { launch: 'May 12, 2026', prelaunched: 'May 7, 2026', adsStart: 'May 12, 2026', adsEnd: 'May 31, 2026' },
        'June': { launch: 'Jun 10, 2026', prelaunched: 'Jun 5, 2026', adsStart: 'Jun 10, 2026', adsEnd: 'Jun 30, 2026' },
        'July': { launch: 'Jul 12, 2026', prelaunched: 'Jul 7, 2026', adsStart: 'Jul 12, 2026', adsEnd: 'Jul 31, 2026' },
        'August': { launch: 'Aug 10, 2026', prelaunched: 'Aug 5, 2026', adsStart: 'Aug 10, 2026', adsEnd: 'Aug 31, 2026' },
        'September': { launch: 'Sep 10, 2026', prelaunched: 'Sep 5, 2026', adsStart: 'Sep 10, 2026', adsEnd: 'Sep 30, 2026' },
        'October': { launch: 'Oct 12, 2026', prelaunched: 'Oct 7, 2026', adsStart: 'Oct 12, 2026', adsEnd: 'Oct 31, 2026' },
        'November': { launch: 'Nov 10, 2026', prelaunched: 'Nov 5, 2026', adsStart: 'Nov 10, 2026', adsEnd: 'Nov 30, 2026' },
        'December': { launch: 'Dec 10, 2026', prelaunched: 'Dec 5, 2026', adsStart: 'Dec 10, 2026', adsEnd: 'Dec 31, 2026' }
      };
      return monthMap[monthName] || monthMap['January'];
    };
    
    const monthDates = getMonthDates(month.name);
    
    // Helper to generate creative messaging based on offer
    const generateCreativeMessaging = (offer: Offer, medium: string): string => {
      const theme = month.theme.toLowerCase();
      let messaging = '';
      
      // Base messaging on medium and offer type
      if (medium === 'Email Marketing') {
        messaging = `Subject line highlighting ${offer.type.toLowerCase()} offer. Feature ${theme} theme imagery. Clear CTA button. Include offer details without specific pricing.`;
      } else if (medium === 'WhatsApp Broadcast') {
        messaging = `Short, engaging message with ${theme} theme. Include offer highlight and booking link. Max 2-3 lines. Friendly, conversational tone.`;
      } else if (medium === 'Physical Posters' || medium === 'Tent Cards') {
        messaging = `Bold headline with ${theme} visuals. Highlight key benefit of ${offer.type.toLowerCase()} offer. Large, easy-to-read text. QR code for booking.`;
      } else if (medium === 'Meta Ads Platform' || medium === 'Instagram' || medium === 'Facebook') {
        messaging = `Eye-catching ${theme} themed imagery. Carousel or single image. Emphasize transformation/results. CTA: Book Now. Target: fitness enthusiasts aged 25-45.`;
      }
      
      return messaging || `${theme} themed creative highlighting ${offer.title}. Focus on benefits, not pricing.`;
    };
    
    activeOffers.forEach(offer => {
      if (offer.marketingCollateral) {
        const content = offer.marketingCollateral;
        const lowerContent = content.toLowerCase();
        
        // Skip website/landing page entries
        if (lowerContent.includes('landing page') || lowerContent.includes('website')) {
          return;
        }
        
        // Create separate entries for each collateral type mentioned
        const collateralTypes: Array<{ type: string; medium: string; collateralNeeded: string }> = [];
        
        if (lowerContent.includes('email')) {
          collateralTypes.push({
            type: 'Email Campaign',
            medium: 'Email Marketing',
            collateralNeeded: 'Email design with HTML template'
          });
        }
        
        if (lowerContent.includes('whatsapp')) {
          collateralTypes.push({
            type: 'WhatsApp Blast',
            medium: 'WhatsApp Broadcast',
            collateralNeeded: 'WhatsApp image with text overlay'
          });
        }
        
        if (lowerContent.includes('poster') || lowerContent.includes('easel')) {
          collateralTypes.push({
            type: 'In-Studio Materials',
            medium: 'Physical Posters',
            collateralNeeded: 'A3 poster design (print-ready)'
          });
        }
        
        if (lowerContent.includes('tent card')) {
          collateralTypes.push({
            type: 'In-Studio Materials',
            medium: 'Tent Cards',
            collateralNeeded: 'Tent card design (front desk)'
          });
        }
        
        if (lowerContent.includes('meta ads') || lowerContent.includes('instagram') || lowerContent.includes('facebook')) {
          collateralTypes.push({
            type: 'Social Media Ads',
            medium: 'Meta Ads Platform',
            collateralNeeded: 'Square (1080x1080) and Story (1080x1920) formats'
          });
        }
        
        // If no specific types found, create one generic entry
        if (collateralTypes.length === 0) {
          collateralTypes.push({
            type: 'Mixed Media',
            medium: 'Multi-channel',
            collateralNeeded: content.split(',')[0] || content.substring(0, 50)
          });
        }
        
        // Create separate marketing collateral entry for each type
        collateralTypes.forEach(({ type, medium, collateralNeeded }) => {
          marketingCollateral.push({
            id: Math.random().toString(36).substr(2, 9),
            offer: offer.title,
            collateralNeeded,
            type,
            medium,
            messaging: generateCreativeMessaging(offer, medium),
            dueDate: monthDates.prelaunched,
            notes: offer.whyItWorks || ''
          });
        });
        
        // Add to CRM timeline with specific dates
        if (lowerContent.includes('meta ads') || lowerContent.includes('instagram') || lowerContent.includes('facebook') || lowerContent.includes('google ads')) {
          crmTimeline.push({
            id: Math.random().toString(36).substr(2, 9),
            offer: offer.title,
            content: generateCreativeMessaging(offer, 'Meta Ads Platform'),
            sendDate: monthDates.launch,
            adsStartDate: monthDates.adsStart,
            adsEndDate: monthDates.adsEnd
          });
        }
        
        if (lowerContent.includes('email')) {
          crmTimeline.push({
            id: Math.random().toString(36).substr(2, 9),
            offer: offer.title,
            content: generateCreativeMessaging(offer, 'Email Marketing'),
            sendDate: monthDates.prelaunched
          });
        }
        
        if (lowerContent.includes('whatsapp')) {
          crmTimeline.push({
            id: Math.random().toString(36).substr(2, 9),
            offer: offer.title,
            content: generateCreativeMessaging(offer, 'WhatsApp Broadcast'),
            sendDate: monthDates.launch
          });
        }
      }
    });
    
    // Persist generated data to database
    if (marketingCollateral.length > 0) {
      setMonthMarketingCollateral(month.id, marketingCollateral);
    }
    if (crmTimeline.length > 0) {
      setMonthCRMTimeline(month.id, crmTimeline);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Target className="w-5 h-5 text-gray-700" />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold text-gray-900">Sales Execution Plan</h3>
          <p className="text-sm text-gray-500">Revenue projections & sales targets breakdown</p>
        </div>
      </div>

      {/* Revenue Summary Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Target Revenue</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatIndianCurrency(targetRevenue)}</div>
          <div className="text-xs text-gray-500 mt-1">{month.revenueTargetTotal}</div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Projected Revenue</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatIndianCurrency(totalProjectedRevenue)}</div>
          <div className={`text-xs mt-1 ${achievementPercent >= 100 ? 'text-green-600' : 'text-orange-600'}`}>
            {achievementPercent}% of target
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              {revenueGap > 0 ? 'Revenue Gap' : 'Surplus'}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatIndianCurrency(Math.abs(revenueGap))}
          </div>
          <div className={`text-xs mt-1 ${revenueGap > 0 ? 'text-orange-600' : 'text-green-600'}`}>
            {revenueGap > 0 ? 'Additional sales needed' : 'Above target!'}
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Total Target Units</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {activeOffers.reduce((sum, o) => sum + (typeof o.targetUnits === 'number' ? o.targetUnits : parseInt(o.targetUnits as string) || 0), 0)}
          </div>
          <div className="text-xs text-gray-500 mt-1">Across {activeOffers.length} offers</div>
        </div>
      </div>

      {/* Revenue Breakdown by Offer */}
      <div className="bg-white rounded-xl border-2 border-indigo-200 overflow-hidden shadow-sm">
        <div className="bg-white px-6 py-4 border-b-2 border-indigo-200">
          <h4 className="text-lg font-bold text-indigo-700 flex items-center gap-2">
            <Package className="w-5 h-5 text-indigo-600" />
            Revenue Breakdown by Offer
          </h4>
          <p className="text-xs text-gray-600 mt-1">Projected revenue calculations based on target units sold</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-indigo-200">
              <tr>
                <th className="px-5 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Offer</th>
                <th className="px-5 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Type</th>
                <th className="px-5 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Units</th>
                <th className="px-5 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Mumbai Price</th>
                <th className="px-5 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Bengaluru Price</th>
                <th className="px-5 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Mumbai Revenue</th>
                <th className="px-5 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Bengaluru Revenue</th>
                <th className="px-5 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Total Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {offerRevenues.map(({ offer, revenue }) => {
                const targetUnits = typeof offer.targetUnits === 'number' ? offer.targetUnits : parseInt(offer.targetUnits as string) || 0;
                const mumbaiPrice = offer.finalPriceMumbai || offer.priceMumbai || 0;
                const bengaluruPrice = offer.finalPriceBengaluru || offer.priceBengaluru || 0;
                
                return (
                  <tr key={offer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-900 text-sm">{offer.title}</div>
                      {offer.promoteOnAds && (
                        <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          <Megaphone className="w-3 h-3" />
                          Promoted
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700">
                        {offer.type}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-gray-900 text-sm">{targetUnits}</td>
                    <td className="px-5 py-4 text-right text-sm font-medium text-gray-700">{formatIndianCurrency(mumbaiPrice)}</td>
                    <td className="px-5 py-4 text-right text-sm font-medium text-gray-700">{formatIndianCurrency(bengaluruPrice)}</td>
                    <td className="px-5 py-4 text-right font-semibold text-gray-900 text-sm">{formatIndianCurrency(revenue.mumbai)}</td>
                    <td className="px-5 py-4 text-right font-semibold text-gray-900 text-sm">{formatIndianCurrency(revenue.bengaluru)}</td>
                    <td className="px-5 py-4 text-right font-bold text-gray-900 text-base">{formatIndianCurrency(revenue.total)}</td>
                  </tr>
                );
              })}
              
              {/* Totals Row */}
              <tr className="bg-indigo-50 font-bold border-t-2 border-indigo-200">
                <td className="px-5 py-5 text-indigo-900 text-sm" colSpan={2}>TOTAL PROJECTED REVENUE</td>
                <td className="px-5 py-5 text-right text-indigo-900 text-sm">
                  {activeOffers.reduce((sum, o) => sum + (typeof o.targetUnits === 'number' ? o.targetUnits : parseInt(o.targetUnits as string) || 0), 0)}
                </td>
                <td className="px-5 py-5" colSpan={2}></td>
                <td className="px-5 py-5 text-right text-indigo-900 text-sm">{formatIndianCurrency(totalMumbaiRevenue)}</td>
                <td className="px-5 py-5 text-right text-indigo-900 text-sm">{formatIndianCurrency(totalBengaluruRevenue)}</td>
                <td className="px-5 py-5 text-right text-indigo-900 text-lg font-black">{formatIndianCurrency(totalProjectedRevenue)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Marketing Collateral Requirements */}
      {marketingCollateral.length > 0 && (
        <div className="bg-white rounded-xl border-2 border-indigo-200 overflow-hidden shadow-sm">
          <div className="bg-white px-6 py-4 border-b-2 border-indigo-200">
            <h4 className="text-lg font-bold text-indigo-700 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-indigo-600" />
              Design Team Collateral Requests
            </h4>
            <p className="text-xs text-gray-600 mt-1">Creative requirements for design team with specific deadlines and promotional channels (click to edit)</p>
          </div>
          
          <div className="p-6 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {marketingCollateral.map((item, index) => {
                const isEditing = editingMarketing === item.id;
                const displayItem = isEditing ? { ...item, ...tempMarketing } : item;
                
                return (
                  <div key={item.id || index} className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all relative">
                    <button
                      onClick={() => {
                        if (isEditing) {
                          if (item.id) {
                            updateMarketingCollateral(month.id, item.id, tempMarketing);
                          }
                          setEditingMarketing(null);
                          setTempMarketing({});
                        } else {
                          setEditingMarketing(item.id || null);
                          setTempMarketing(item);
                        }
                      }}
                      className="absolute top-3 right-3 p-1.5 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      {isEditing ? (
                        <Save className="w-4 h-4 text-green-600" />
                      ) : (
                        <Edit2 className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                    
                    {isEditing && (
                      <button
                        onClick={() => {
                          setEditingMarketing(null);
                          setTempMarketing({});
                        }}
                        className="absolute top-3 right-12 p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    )}
                    
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                      <span className="px-3 py-1.5 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-lg">
                        {displayItem.offer}
                      </span>
                      {isEditing ? (
                        <input
                          type="text"
                          value={displayItem.type}
                          onChange={(e) => setTempMarketing({...tempMarketing, type: e.target.value})}
                          className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md border border-gray-300 focus:border-indigo-500 outline-none"
                        />
                      ) : (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md">
                          {displayItem.type}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3.5">
                      <div>
                        <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Creative Requirements</div>
                        {isEditing ? (
                          <input
                            type="text"
                            value={displayItem.collateralNeeded}
                            onChange={(e) => setTempMarketing({...tempMarketing, collateralNeeded: e.target.value})}
                            className="w-full text-sm font-semibold text-gray-900 border border-gray-300 rounded px-2 py-1 focus:border-indigo-500 outline-none"
                            placeholder="e.g., Email Template, WhatsApp Graphic, Instagram Story..."
                          />
                        ) : (
                          <div className="text-sm font-semibold text-gray-900">{displayItem.collateralNeeded}</div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Promotional Channel</div>
                          {isEditing ? (
                            <input
                              type="text"
                              value={displayItem.medium}
                              onChange={(e) => setTempMarketing({...tempMarketing, medium: e.target.value})}
                              className="w-full text-sm font-medium text-gray-800 border border-gray-300 rounded px-2 py-1 focus:border-indigo-500 outline-none"
                              placeholder="WhatsApp, Email, In-Studio, etc."
                            />
                          ) : (
                            <div className="text-sm font-medium text-gray-800">{displayItem.medium}</div>
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Delivery Deadline</div>
                          {isEditing ? (
                            <input
                              type="text"
                              value={displayItem.dueDate}
                              onChange={(e) => setTempMarketing({...tempMarketing, dueDate: e.target.value})}
                              className="w-full text-sm font-bold text-indigo-700 border border-gray-300 rounded px-2 py-1 focus:border-indigo-500 outline-none"
                              placeholder="e.g., Jan 10, 2026"
                            />
                          ) : (
                            <div className="text-sm font-bold text-indigo-700">{displayItem.dueDate}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="bg-indigo-50 rounded-lg p-3">
                        <div className="text-xs font-bold text-indigo-700 uppercase tracking-wide mb-1.5">Design Instructions</div>
                        {isEditing ? (
                          <textarea
                            value={displayItem.messaging}
                            onChange={(e) => setTempMarketing({...tempMarketing, messaging: e.target.value})}
                            className="w-full text-xs leading-relaxed text-gray-700 border border-gray-300 rounded px-2 py-1 focus:border-indigo-500 outline-none bg-white"
                            rows={3}
                            placeholder="Detailed creative brief for design team..."
                          />
                        ) : (
                          <div className="text-xs leading-relaxed text-gray-700">{displayItem.messaging}</div>
                        )}
                      </div>
                      
                      {(displayItem.notes || isEditing) && (
                        <div className="border-t border-gray-200 pt-3">
                          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Additional Notes</div>
                          {isEditing ? (
                            <textarea
                              value={displayItem.notes || ''}
                              onChange={(e) => setTempMarketing({...tempMarketing, notes: e.target.value})}
                              className="w-full text-xs text-gray-600 italic leading-relaxed border border-gray-300 rounded px-2 py-1 focus:border-indigo-500 outline-none"
                              rows={2}
                              placeholder="Special requirements, file formats, etc."
                            />
                          ) : (
                            <div className="text-xs text-gray-600 italic leading-relaxed">{displayItem.notes}</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* CRM & Campaign Timeline */}
      {crmTimeline.length > 0 && (
        <div className="bg-white rounded-xl border-2 border-indigo-200 overflow-hidden shadow-sm">
          <div className="bg-white px-6 py-4 border-b-2 border-indigo-200">
            <h4 className="text-lg font-bold text-indigo-700 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-indigo-600" />
              CRM & Campaign Timeline
            </h4>
            <p className="text-xs text-gray-600 mt-1">Creative send dates, social media ads schedule & messaging (click to edit)</p>
          </div>
          
          <div className="p-6 bg-gray-50">
            <div className="space-y-4">
              {crmTimeline.map((item, index) => {
                const isEditing = editingCRM === item.id;
                const displayItem = isEditing ? { ...item, ...tempCRM } : item;
                
                return (
                  <div key={item.id || index} className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all relative">
                    <button
                      onClick={() => {
                        if (isEditing) {
                          if (item.id) {
                            updateCRMTimeline(month.id, item.id, tempCRM);
                          }
                          setEditingCRM(null);
                          setTempCRM({});
                        } else {
                          setEditingCRM(item.id || null);
                          setTempCRM(item);
                        }
                      }}
                      className="absolute top-3 right-3 p-1.5 hover:bg-indigo-50 rounded-lg transition-colors z-10"
                    >
                      {isEditing ? (
                        <Save className="w-4 h-4 text-green-600" />
                      ) : (
                        <Edit2 className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                    
                    {isEditing && (
                      <button
                        onClick={() => {
                          setEditingCRM(null);
                          setTempCRM({});
                        }}
                        className="absolute top-3 right-12 p-1.5 hover:bg-red-50 rounded-lg transition-colors z-10"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Megaphone className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3 pb-3 border-b border-gray-200">
                          <span className="px-3 py-1.5 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-lg">
                            {displayItem.offer}
                          </span>
                          {(displayItem.sendDate || isEditing) && (
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-md">
                              <span className="text-xs font-medium text-gray-600">Send:</span>
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={displayItem.sendDate || ''}
                                  onChange={(e) => setTempCRM({...tempCRM, sendDate: e.target.value})}
                                  className="text-xs font-bold text-blue-700 border border-gray-300 rounded px-1 py-0.5 w-24 focus:border-indigo-500 outline-none bg-white"
                                />
                              ) : (
                                <span className="text-xs font-bold text-blue-700">{displayItem.sendDate}</span>
                              )}
                            </div>
                          )}
                        </div>
                        
                        {(displayItem.adsStartDate || displayItem.adsEndDate || isEditing) && (
                          <div className="flex flex-wrap items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                            {(displayItem.adsStartDate || isEditing) && (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-md">
                                <span className="text-xs font-medium text-gray-600">Ads Start:</span>
                                {isEditing ? (
                                  <input
                                    type="text"
                                    value={displayItem.adsStartDate || ''}
                                    onChange={(e) => setTempCRM({...tempCRM, adsStartDate: e.target.value})}
                                    className="text-xs font-bold text-green-700 border border-gray-300 rounded px-1 py-0.5 w-24 focus:border-indigo-500 outline-none bg-white"
                                  />
                                ) : (
                                  <span className="text-xs font-bold text-green-700">{displayItem.adsStartDate}</span>
                                )}
                              </div>
                            )}
                            {(displayItem.adsEndDate || isEditing) && (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-50 rounded-md">
                                <span className="text-xs font-medium text-gray-600">Ads End:</span>
                                {isEditing ? (
                                  <input
                                    type="text"
                                    value={displayItem.adsEndDate || ''}
                                    onChange={(e) => setTempCRM({...tempCRM, adsEndDate: e.target.value})}
                                    className="text-xs font-bold text-red-700 border border-gray-300 rounded px-1 py-0.5 w-24 focus:border-indigo-500 outline-none bg-white"
                                  />
                                ) : (
                                  <span className="text-xs font-bold text-red-700">{displayItem.adsEndDate}</span>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          {isEditing ? (
                            <textarea
                              value={displayItem.content}
                              onChange={(e) => setTempCRM({...tempCRM, content: e.target.value})}
                              className="w-full text-sm text-gray-800 leading-relaxed font-medium border border-gray-300 rounded px-2 py-1 focus:border-indigo-500 outline-none bg-white"
                              rows={3}
                            />
                          ) : (
                            <p className="text-sm text-gray-800 leading-relaxed font-medium">{displayItem.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
