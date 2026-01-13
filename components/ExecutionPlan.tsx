import React from 'react';
import { MonthData, Offer } from '../types';
import { Target, TrendingUp, Users, DollarSign, Package, Megaphone, ListTodo } from 'lucide-react';

interface ExecutionPlanProps {
  month: MonthData;
}

export const ExecutionPlan: React.FC<ExecutionPlanProps> = ({ month }) => {
  // Filter out cancelled offers
  const activeOffers = month.offers.filter(o => !o.cancelled);
  
  // Calculate revenue projections from each offer
  const calculateOfferRevenue = (offer: Offer): { mumbai: number; bengaluru: number; total: number } => {
    const targetUnits = typeof offer.targetUnits === 'number' ? offer.targetUnits : 
                        typeof offer.targetUnits === 'string' ? parseInt(offer.targetUnits) || 0 : 0;
    
    const mumbaiRevenue = (offer.finalPriceMumbai || offer.priceMumbai || 0) * targetUnits;
    const bengaluruRevenue = (offer.finalPriceBengaluru || offer.priceBengaluru || 0) * targetUnits;
    
    // If no separate pricing, use Mumbai price for both or estimate 60/40 split
    if (!offer.finalPriceMumbai && !offer.priceMumbai && !offer.finalPriceBengaluru && !offer.priceBengaluru) {
      return { mumbai: 0, bengaluru: 0, total: 0 };
    }
    
    // If only one location has pricing, estimate 60% Mumbai, 40% Bengaluru split
    if ((offer.finalPriceMumbai || offer.priceMumbai) && !(offer.finalPriceBengaluru || offer.priceBengaluru)) {
      const totalFromMumbai = mumbaiRevenue;
      return {
        mumbai: totalFromMumbai * 0.6,
        bengaluru: totalFromMumbai * 0.4,
        total: totalFromMumbai
      };
    }
    
    return {
      mumbai: mumbaiRevenue,
      bengaluru: bengaluruRevenue,
      total: mumbaiRevenue + bengaluruRevenue
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

  // Categorize marketing collateral and CRM timeline
  const marketingCollateral: Array<{ 
    offer: string;
    collateralNeeded: string;
    type: string;
    medium: string;
    messaging: string;
    dueDate: string;
    notes: string;
  }> = [];
  const crmTimeline: Array<{
    offer: string;
    content: string;
    sendDate?: string;
    adsStartDate?: string;
    adsEndDate?: string;
  }> = [];
  
  // Process offers for marketing collateral
  activeOffers.forEach(offer => {
    if (offer.marketingCollateral) {
      const content = offer.marketingCollateral;
      const lowerContent = content.toLowerCase();
      
      // Determine collateral type
      let type = '';
      if (lowerContent.includes('email')) type = 'Email Campaign';
      else if (lowerContent.includes('whatsapp')) type = 'WhatsApp Blast';
      else if (lowerContent.includes('poster') || lowerContent.includes('easel') || lowerContent.includes('tent card')) type = 'In-Studio Materials';
      else if (lowerContent.includes('landing page')) type = 'Website';
      else if (lowerContent.includes('meta ads') || lowerContent.includes('instagram') || lowerContent.includes('facebook')) type = 'Social Media Ads';
      else type = 'Mixed Media';
      
      // Determine medium
      let medium = '';
      if (lowerContent.includes('email')) medium = 'Email Marketing';
      else if (lowerContent.includes('whatsapp')) medium = 'WhatsApp Broadcast';
      else if (lowerContent.includes('poster')) medium = 'Physical Posters';
      else if (lowerContent.includes('meta ads')) medium = 'Meta Ads Platform';
      else if (lowerContent.includes('instagram')) medium = 'Instagram';
      else medium = 'Multi-channel';
      
      marketingCollateral.push({
        offer: offer.title,
        collateralNeeded: content.split(',')[0] || content.substring(0, 50),
        type,
        medium,
        messaging: content,
        dueDate: 'Before launch',
        notes: offer.whyItWorks || ''
      });
      
      // Add to CRM timeline if it's social media
      if (lowerContent.includes('meta ads') || lowerContent.includes('instagram') || lowerContent.includes('facebook') || lowerContent.includes('google ads')) {
        crmTimeline.push({
          offer: offer.title,
          content,
          sendDate: 'Launch week',
          adsStartDate: 'Day 1',
          adsEndDate: 'Throughout month'
        });
      } else {
        crmTimeline.push({
          offer: offer.title,
          content,
          sendDate: 'Pre-launch'
        });
      }
    }
  });

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
          <div className="text-2xl font-bold text-gray-900">₹{(targetRevenue / 100000).toFixed(2)}L</div>
          <div className="text-xs text-gray-500 mt-1">{month.revenueTargetTotal}</div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Projected Revenue</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">₹{(totalProjectedRevenue / 100000).toFixed(2)}L</div>
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
            ₹{(Math.abs(revenueGap) / 100000).toFixed(2)}L
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
                    <td className="px-5 py-4 text-right text-sm font-medium text-gray-700">₹{mumbaiPrice.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-4 text-right text-sm font-medium text-gray-700">₹{bengaluruPrice.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-4 text-right font-semibold text-gray-900 text-sm">₹{revenue.mumbai.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                    <td className="px-5 py-4 text-right font-semibold text-gray-900 text-sm">₹{revenue.bengaluru.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                    <td className="px-5 py-4 text-right font-bold text-gray-900 text-base">₹{revenue.total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
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
                <td className="px-5 py-5 text-right text-indigo-900 text-sm">₹{totalMumbaiRevenue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                <td className="px-5 py-5 text-right text-indigo-900 text-sm">₹{totalBengaluruRevenue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                <td className="px-5 py-5 text-right text-indigo-900 text-lg font-black">₹{totalProjectedRevenue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Marketing Collateral Requirements */}
      {marketingCollateral.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Megaphone className="w-5 h-5" />
              Marketing Collateral Requirements
            </h4>
            <p className="text-xs text-indigo-50 mt-1">Required materials, messaging, and deadlines per offer</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {marketingCollateral.map((item, index) => (
                <div key={index} className="border border-indigo-100 rounded-lg p-4 hover:bg-indigo-50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded">
                      {item.offer}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      {item.type}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Collateral Needed</div>
                      <div className="text-gray-800">{item.collateralNeeded}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Medium</div>
                      <div className="text-gray-800">{item.medium}</div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Messaging</div>
                      <div className="text-gray-700 text-xs">{item.messaging}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Due Date</div>
                      <div className="text-indigo-600 font-medium text-xs">{item.dueDate}</div>
                    </div>
                    {item.notes && (
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Notes</div>
                        <div className="text-gray-600 text-xs italic">{item.notes}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CRM & Campaign Timeline */}
      {crmTimeline.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Megaphone className="w-5 h-5" />
              CRM & Campaign Timeline
            </h4>
            <p className="text-xs text-indigo-50 mt-1">Creative send dates, social media ads schedule & messaging</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {crmTimeline.map((item, index) => (
                <div key={index} className="border border-indigo-100 rounded-lg p-4 hover:bg-indigo-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Megaphone className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded">
                          {item.offer}
                        </span>
                        {item.sendDate && (
                          <span className="text-xs text-gray-600">
                            Send: <span className="font-semibold text-indigo-700">{item.sendDate}</span>
                          </span>
                        )}
                      </div>
                      
                      {(item.adsStartDate || item.adsEndDate) && (
                        <div className="flex items-center gap-3 mb-2 text-xs">
                          {item.adsStartDate && (
                            <div className="flex items-center gap-1">
                              <span className="text-gray-500">Ads Start:</span>
                              <span className="font-semibold text-green-700">{item.adsStartDate}</span>
                            </div>
                          )}
                          {item.adsEndDate && (
                            <div className="flex items-center gap-1">
                              <span className="text-gray-500">Ads End:</span>
                              <span className="font-semibold text-red-700">{item.adsEndDate}</span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <p className="text-sm text-gray-800 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
