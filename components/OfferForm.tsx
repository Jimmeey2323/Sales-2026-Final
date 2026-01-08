import React, { useState, useEffect } from 'react';
import { Offer } from '../types';
import { X } from 'lucide-react';

interface OfferFormProps {
  initialData?: Offer;
  isOpen: boolean;
  onClose: () => void;
  onSave: (offer: Omit<Offer, 'id'>) => void;
  title: string;
}

const OFFER_TYPES = ['New', 'Hero', 'Retention', 'Flash', 'Event', 'Student', 'Corporate', 'Lapsed'];

export const OfferForm: React.FC<OfferFormProps> = ({ initialData, isOpen, onClose, onSave, title }) => {
  const [formData, setFormData] = useState<Partial<Offer>>({
    title: '',
    type: 'New',
    description: '',
    pricing: '',
    savings: '',
    whyItWorks: '',
    targetUnits: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        title: '',
        type: 'New',
        description: '',
        pricing: '',
        savings: '',
        whyItWorks: '',
        targetUnits: ''
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as Omit<Offer, 'id'>);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-xl font-serif font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Offer Title</label>
            <input
              required
              type="text"
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
              placeholder="e.g. Fresh Start, No Guilt"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value as any})}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
              >
                {OFFER_TYPES.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Target Units</label>
              <input
                type="text"
                value={formData.targetUnits}
                onChange={e => setFormData({...formData, targetUnits: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                placeholder="e.g. 50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="What is the offer?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pricing</label>
              <input
                required
                type="text"
                value={formData.pricing}
                onChange={e => setFormData({...formData, pricing: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                placeholder="e.g. ₹12,599"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Savings</label>
              <input
                type="text"
                value={formData.savings}
                onChange={e => setFormData({...formData, savings: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                placeholder="e.g. 20% Off"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Why It Works (Strategic Logic)</label>
            <textarea
              required
              rows={2}
              value={formData.whyItWorks}
              onChange={e => setFormData({...formData, whyItWorks: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="Explain the strategy..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white bg-brand-600 rounded-lg hover:bg-brand-700 font-medium transition-colors shadow-sm"
            >
              Save Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
