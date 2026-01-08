import React from 'react';
import { Offer } from '../types';
import { Tag, TrendingUp, Users, Zap, Award, Briefcase, GraduationCap, History } from 'lucide-react';

interface OfferCardProps {
  offer: Offer;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const getIcon = () => {
    switch (offer.type) {
      case 'Hero': return <Award className="w-5 h-5 text-purple-600" />;
      case 'New': return <Users className="w-5 h-5 text-blue-600" />;
      case 'Flash': return <Zap className="w-5 h-5 text-yellow-600" />;
      case 'Retention': return <History className="w-5 h-5 text-green-600" />;
      case 'Corporate': return <Briefcase className="w-5 h-5 text-slate-600" />;
      case 'Student': return <GraduationCap className="w-5 h-5 text-pink-600" />;
      default: return <Tag className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTypeStyles = () => {
    switch (offer.type) {
      case 'Hero': return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'New': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'Flash': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'Retention': return 'bg-green-50 border-green-200 text-green-800';
      case 'Student': return 'bg-pink-50 border-pink-200 text-pink-800';
      case 'Corporate': return 'bg-slate-50 border-slate-200 text-slate-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border flex items-center gap-2 ${getTypeStyles()}`}>
          {getIcon()}
          {offer.type} Offer
        </span>
        {offer.targetUnits && (
          <span className="text-xs font-medium text-gray-400">
            Goal: {offer.targetUnits} units
          </span>
        )}
      </div>

      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 leading-tight">
        {offer.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 flex-grow">
        {offer.description}
      </p>

      <div className="mt-auto space-y-3">
        <div className="flex items-baseline justify-between pt-4 border-t border-gray-50">
          <div className="text-sm text-gray-500">Price</div>
          <div className="font-semibold text-gray-900">{offer.pricing}</div>
        </div>
        
        {offer.savings && (
          <div className="flex items-baseline justify-between">
            <div className="text-sm text-gray-500">Savings</div>
            <div className="font-semibold text-green-600">{offer.savings}</div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-3 mt-3">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-gray-400 mt-0.5" />
            <p className="text-xs text-gray-500 italic leading-relaxed">
              "{offer.whyItWorks}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
