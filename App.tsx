import React, { useState } from 'react';
import { MonthDetail } from './components/MonthDetail';
import { SalesProvider, useSalesData } from './context/SalesContext';
import { 
  ChevronRight, 
  Download, 
  RefreshCcw, 
  FileJson, 
  FileSpreadsheet, 
  Clipboard, 
  X, 
  Check, 
  Filter,
  Layers,
  Settings
} from 'lucide-react';
import { MonthData } from './types';

// Advanced Export Modal Component
const ExportModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  data: MonthData[];
  selectedMonthId: string;
}> = ({ isOpen, onClose, data, selectedMonthId }) => {
  const [scope, setScope] = useState<'current' | 'all'>('all');
  const [includeCancelled, setIncludeCancelled] = useState(false);
  const [format, setFormat] = useState<'json' | 'csv' | 'clipboard'>('json');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const selectedMonth = data.find(m => m.id === selectedMonthId);

  const handleExport = () => {
    // 1. Filter Scope
    let exportData = scope === 'current' ? (selectedMonth ? [selectedMonth] : []) : data;

    // 2. Filter Cancelled
    if (!includeCancelled) {
      exportData = exportData.map(m => ({
        ...m,
        offers: m.offers.filter(o => !o.cancelled)
      }));
    }

    // 3. Handle Formats
    if (format === 'json') {
      const dataStr = JSON.stringify(exportData, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `sales_plan_${scope}_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    } else if (format === 'csv') {
       const headers = ['Month', 'Offer Title', 'Type', 'Pricing', 'Target Units', 'Status', 'Description', 'Strategy'];
       const rows = exportData.flatMap(month => 
        month.offers.map(offer => [
          month.name,
          `"${offer.title.replace(/"/g, '""')}"`,
          offer.type,
          `"${offer.pricing}"`,
          offer.targetUnits || '',
          offer.cancelled ? 'Cancelled' : 'Active',
          `"${offer.description.replace(/"/g, '""')}"`,
          `"${offer.whyItWorks.replace(/"/g, '""')}"`
        ])
      );
      const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `sales_offers_${scope}_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    } else if (format === 'clipboard') {
       const text = JSON.stringify(exportData, null, 2);
       navigator.clipboard.writeText(text).then(() => {
         setCopied(true);
         setTimeout(() => {
           setCopied(false);
           onClose();
         }, 1000);
       });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-lg font-serif font-bold text-gray-900 flex items-center gap-2">
            <Settings className="w-5 h-5 text-brand-600" /> Advanced Export
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Scope Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" /> Export Scope
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setScope('current')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  scope === 'current' 
                    ? 'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-200 shadow-sm' 
                    : 'border-gray-200 hover:bg-gray-50 text-gray-600'
                }`}
              >
                Current Month
              </button>
              <button
                onClick={() => setScope('all')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  scope === 'all' 
                    ? 'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-200 shadow-sm' 
                    : 'border-gray-200 hover:bg-gray-50 text-gray-600'
                }`}
              >
                All Data
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filters
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  checked={includeCancelled}
                  onChange={e => setIncludeCancelled(e.target.checked)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 transition-all checked:border-brand-500 checked:bg-brand-500"
                />
                <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">Include Cancelled Offers</span>
            </label>
          </div>

          {/* Format Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <FileJson className="w-4 h-4" /> Format
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['json', 'csv', 'clipboard'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f as any)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border text-xs font-medium transition-all gap-1.5 uppercase tracking-wide ${
                    format === f
                      ? 'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-200 shadow-sm'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  {f === 'json' && <FileJson className="w-5 h-5" />}
                  {f === 'csv' && <FileSpreadsheet className="w-5 h-5" />}
                  {f === 'clipboard' && <Clipboard className="w-5 h-5" />}
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3">
           <button 
             onClick={onClose}
             className="flex-1 px-4 py-2.5 text-gray-700 font-medium hover:bg-gray-200 rounded-lg transition-colors text-sm"
           >
             Cancel
           </button>
           <button 
             onClick={handleExport}
             className={`flex-1 px-4 py-2.5 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-sm ${
               copied ? 'bg-green-600 hover:bg-green-700' : 'bg-brand-600 hover:bg-brand-700'
             }`}
           >
             {copied ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
             {copied ? 'Copied to Clipboard!' : 'Export Now'}
           </button>
        </div>
      </div>
    </div>
  );
};

const DashboardContent: React.FC = () => {
  const { data, resetData } = useSalesData();
  const [selectedMonthId, setSelectedMonthId] = useState<string>('jan');
  const [showExportModal, setShowExportModal] = useState(false);
  
  const selectedMonth = data.find(m => m.id === selectedMonthId) || data[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-white border-r border-gray-200 md:h-screen md:sticky md:top-0 z-20 flex-shrink-0 flex flex-col shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
        <div className="p-6 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
              P
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-gray-900">Physique 57</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold pl-10">India • 2026 Masterplan</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {data.map((month) => (
            <button
              key={month.id}
              onClick={() => setSelectedMonthId(month.id)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                selectedMonthId === month.id
                  ? 'bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:pl-5'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full transition-colors ${
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

        <div className="p-4 border-t border-gray-100 space-y-3 bg-gray-50/50">
          <button 
            onClick={() => setShowExportModal(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            Advanced Export
          </button>

          <button 
            onClick={resetData}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <RefreshCcw className="w-3 h-3" />
            Reset Data
          </button>
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

      {/* Export Modal */}
      <ExportModal 
        isOpen={showExportModal} 
        onClose={() => setShowExportModal(false)} 
        data={data}
        selectedMonthId={selectedMonthId}
      />

    </div>
  );
};

const App: React.FC = () => {
  return (
    <SalesProvider>
      <DashboardContent />
    </SalesProvider>
  );
};

export default App;
