import React from 'react';
import { MonthData } from '../types';
import { OfferCard } from './OfferCard';
import { FinancialTable } from './FinancialTable';
import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle2, ListTodo } from 'lucide-react';

interface MonthDetailProps {
  data: MonthData;
}

export const MonthDetail: React.FC<MonthDetailProps> = ({ data }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12"
      variants={container}
      initial="hidden"
      animate="show"
      key={data.id} // Forces re-render on month change for animation
    >
      {/* Header Section */}
      <motion.div variants={item} className="space-y-4">
        <div className="flex items-center gap-3 text-brand-600">
          <CalendarDays className="w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-widest">2026 Sales Masterplan</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
          {data.name}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">{data.theme}</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          {data.summary}
        </p>
      </motion.div>

      {/* Strategic Offers Grid */}
      <motion.section variants={item}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Strategic Offers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.offers.map((offer, idx) => (
            <OfferCard key={idx} offer={offer} />
          ))}
        </div>
      </motion.section>

      {/* Two Column Layout: Financials & Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Financials (Spans 2 cols) */}
        <motion.div variants={item} className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Financial Targets</h2>
          <FinancialTable targets={data.financialTargets} totalRevenue={data.revenueTargetTotal} />
        </motion.div>

        {/* Operations (Spans 1 col) */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Execution Plan</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full">
            <div className="space-y-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gray-100" />
              
              {data.operations.map((op, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-7 h-7 bg-brand-50 rounded-full flex items-center justify-center border border-brand-100 z-10">
                    <ListTodo className="w-3.5 h-3.5 text-brand-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wide block mb-1">
                      {op.week}
                    </span>
                    <h4 className="font-semibold text-gray-900 mb-1">{op.focus}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {op.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
