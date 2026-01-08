import React, { useState } from 'react';
import { Offer } from '../types';
import { Tag, TrendingUp, Users, Zap, Award, Briefcase, GraduationCap, History, MoreVertical, Edit2, Trash2, Ban } from 'lucide-react';
import { useSalesData } from '../context/SalesContext';
import { OfferForm } from './OfferForm';

interface OfferCardProps {
  offer: Offer;
  monthId: string;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer, monthId }) => {
  const { updateOffer, deleteOffer, toggleCancelled } = useSalesData();
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
    if (offer.cancelled) return 'bg-gray-100 border-gray-200 text-gray-500';
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

  const handleUpdate = (updatedData: Omit<Offer, 'id'>) => {
    if (offer.id) {
      updateOffer(monthId, offer.id, updatedData);
    }
  };

  return (
    <>
      <div className={`bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 flex flex-col h-full relative group
        ${offer.cancelled ? 'border-gray-200 bg-gray-50' : 'border-gray-100 hover:shadow-md'}`}
      >
        {/* Actions Menu */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="flex bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
             <button 
               onClick={() => setIsEditing(true)}
               className="p-2 hover:bg-gray-50 text-gray-600 border-r border-gray-100" 
               title="Edit"
             >
               <Edit2 className="w-4 h-4" />
             </button>
             <button 
               onClick={() => offer.id && toggleCancelled(monthId, offer.id)}
               className={`p-2 hover:bg-gray-50 border-r border-gray-100 ${offer.cancelled ? 'text-green-600' : 'text-orange-600'}`}
               title={offer.cancelled ? "Activate" : "Cancel"}
             >
               <Ban className="w-4 h-4" />
             </button>
             <button 
               onClick={() => offer.id && deleteOffer(monthId, offer.id)}
               className="p-2 hover:bg-red-50 text-red-600" 
               title="Delete"
             >
               <Trash2 className="w-4 h-4" />
             </button>
           </div>
        </div>

        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border flex items-center gap-2 ${getTypeStyles()}`}>
            {!offer.cancelled && getIcon()}
            {offer.cancelled ? 'Cancelled' : `${offer.type} Offer`}
          </span>
          {offer.targetUnits && (
            <span className={`text-xs font-medium ${offer.cancelled ? 'text-gray-300' : 'text-gray-400'}`}>
              Goal: {offer.targetUnits} units
            </span>
          )}
        </div>

        <h3 className={`text-xl font-serif font-semibold mb-2 leading-tight ${offer.cancelled ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
          {offer.title}
        </h3>
        
        <p className={`text-sm mb-4 flex-grow ${offer.cancelled ? 'text-gray-400' : 'text-gray-600'}`}>
          {offer.description}
        </p>

        <div className={`mt-auto space-y-3 ${offer.cancelled ? 'opacity-50' : ''}`}>
          <div className="flex items-baseline justify-between pt-4 border-t border-gray-50">
            <div className="text-sm text-gray-500">Price</div>
            <div className={`font-semibold ${offer.cancelled ? 'text-gray-500' : 'text-gray-900'}`}>{offer.pricing}</div>
          </div>
          
          {offer.savings && (
            <div className="flex items-baseline justify-between">
              <div className="text-sm text-gray-500">Savings</div>
              <div className={`font-semibold ${offer.cancelled ? 'text-gray-500' : 'text-green-600'}`}>{offer.savings}</div>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-3 mt-3">
            <div className="flex items-start gap-2">
              <TrendingUp className={`w-4 h-4 mt-0.5 ${offer.cancelled ? 'text-gray-300' : 'text-gray-400'}`} />
              <p className={`text-xs italic leading-relaxed ${offer.cancelled ? 'text-gray-400' : 'text-gray-500'}`}>
                "{offer.whyItWorks}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <OfferForm 
        isOpen={isEditing} 
        onClose={() => setIsEditing(false)} 
        onSave={handleUpdate}
        title="Edit Offer"
        initialData={offer}
      />
    </>
  );
};
