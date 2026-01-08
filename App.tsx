import React, { useState } from 'react';
import { MONTHS_DATA } from './constants';
import { MonthDetail } from './components/MonthDetail';
import { LayoutGrid, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [selectedMonthId, setSelectedMonthId] = useState<string>(MONTHS_DATA[0].id);
  const selectedMonth = MONTHS_DATA.find(m => m.id === selectedMonthId) || MONTHS_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 md:h-screen md:sticky md:top-0 z-20 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg">
              P
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-gray-900">Physique 57</span>
          </div>
          <p className="text-xs text-gray-400 font-medium pl-10">INDIA • 2026 MASTERPLAN</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {MONTHS_DATA.map((month) => (
            <button
              key={month.id}
              onClick={() => setSelectedMonthId(month.id)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                selectedMonthId === month.id
                  ? 'bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  selectedMonthId === month.id ? 'bg-brand-500' : 'bg-gray-300 group-hover:bg-gray-400'
                }`} />
                {month.name}
              </div>
              {selectedMonthId === month.id && (
                <ChevronRight className="w-4 h-4 text-brand-400" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-slate-900 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2 mb-2 text-slate-300">
              <LayoutGrid className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Yearly Goal</span>
            </div>
            <div className="text-2xl font-bold font-serif mb-1">₹8.5 Cr+</div>
            <div className="text-xs text-slate-400">Total Revenue Projection</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen bg-slate-50/50">
        <MonthDetail data={selectedMonth} />
        
        <footer className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Physique 57 India Sales Strategy Confidential
          </p>
        </footer>
      </main>

    </div>
  );
};

export default App;
