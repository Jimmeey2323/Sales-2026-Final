import React, { useState } from 'react';
import { MonthDetail } from './components/MonthDetail';
import { YearOverview } from './components/YearOverview';
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
  Settings,
  CalendarDays,
  FileText,
  Image,
  Mail
} from 'lucide-react';
import { MonthData } from './types';
import { exportToPDF, exportToWord, exportToImage, copyEmailToClipboard } from './lib/exports';
import { clearSalesData } from './lib/neon';

// Advanced Export Modal Component
const ExportModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  data: MonthData[];
  selectedMonthId: string;
}> = ({ isOpen, onClose, data, selectedMonthId }) => {
  const [scope, setScope] = useState<'current' | 'all'>('all');
  const [includeCancelled, setIncludeCancelled] = useState(false);
  const [format, setFormat] = useState<'json' | 'csv' | 'clipboard' | 'pdf' | 'word' | 'image' | 'email'>('pdf');
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const selectedMonth = data.find(m => m.id === selectedMonthId);

  const handleExport = async () => {
    setIsExporting(true);
    
    try {
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
      if (format === 'pdf') {
        await exportToPDF(exportData, scope, selectedMonth);
        setTimeout(() => onClose(), 500);
      } else if (format === 'word') {
        await exportToWord(exportData, scope, selectedMonth);
        setTimeout(() => onClose(), 500);
      } else if (format === 'image') {
        await exportToImage(exportData, scope, selectedMonth);
        setTimeout(() => onClose(), 500);
      } else if (format === 'email') {
        await copyEmailToClipboard(exportData, scope, selectedMonth);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1500);
      } else if (format === 'json') {
      } else if (format === 'json') {
        const dataStr = JSON.stringify(exportData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `sales_plan_${scope}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => onClose(), 500);
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
        setTimeout(() => onClose(), 500);
      } else if (format === 'clipboard') {
         const text = JSON.stringify(exportData, null, 2);
         await navigator.clipboard.writeText(text);
         setCopied(true);
         setTimeout(() => {
           setCopied(false);
           onClose();
         }, 1000);
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
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
              <FileJson className="w-4 h-4" /> Export Format
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'pdf', label: 'PDF', icon: FileText },
                { value: 'word', label: 'Word', icon: FileText },
                { value: 'image', label: 'Image', icon: Image },
                { value: 'email', label: 'Email', icon: Mail },
                { value: 'json', label: 'JSON', icon: FileJson },
                { value: 'csv', label: 'CSV', icon: FileSpreadsheet },
                { value: 'clipboard', label: 'Copy', icon: Clipboard }
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <button
                    key={f.value}
                    onClick={() => setFormat(f.value as any)}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border text-xs font-medium transition-all gap-1.5 uppercase tracking-wide ${
                      format === f.value
                        ? 'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-200 shadow-sm'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3">
           <button 
             onClick={onClose}
             disabled={isExporting}
             className="flex-1 px-4 py-2.5 text-gray-700 font-medium hover:bg-gray-200 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
           >
             Cancel
           </button>
           <button 
             onClick={handleExport}
             disabled={isExporting}
             className={`flex-1 px-4 py-2.5 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
               copied ? 'bg-green-600 hover:bg-green-700' : 'bg-brand-600 hover:bg-brand-700'
             }`}
           >
             {isExporting ? (
               <>
                 <RefreshCcw className="w-4 h-4 animate-spin" />
                 Exporting...
               </>
             ) : copied ? (
               <>
                 <Check className="w-4 h-4" />
                 Copied!
               </>
             ) : (
               <>
                 <Download className="w-4 h-4" />
                 Export Now
               </>
             )}
           </button>
        </div>
      </div>
    </div>
  );
};

const DashboardContent: React.FC = () => {
  const { data, resetData, isLoading } = useSalesData();
  const [selectedMonthId, setSelectedMonthId] = useState<string>('jan');
  const [showExportModal, setShowExportModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  const [hideCancelled, setHideCancelled] = useState(false);
  
  const selectedMonth = data.find(m => m.id === selectedMonthId) || data[0];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCcw className="w-12 h-12 text-brand-600 animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-600 font-medium">Loading Sales Data...</p>
          <p className="text-sm text-gray-400 mt-2">Syncing with Neon Database</p>
        </div>
      </div>
    );
  }

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

        {/* Tab Navigation */}
        <div className="px-3 pt-4 pb-2">
          <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                activeTab === 'monthly'
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                setActiveTab('yearly');
              }}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-1 ${
                activeTab === 'yearly'
                  ? 'bg-white text-brand-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <CalendarDays className="w-3 h-3" />
              Year View
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {activeTab === 'monthly' && data.map((month) => (
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
          
          {activeTab === 'yearly' && (
            <div className="text-center py-8 text-sm text-gray-500">
              <CalendarDays className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p className="font-medium">Viewing Full Year</p>
              <p className="text-xs mt-1">All 12 months overview</p>
            </div>
          )}
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-3 bg-gray-50/50">
          <button 
            onClick={() => setHideCancelled(!hideCancelled)}
            className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium transition-all shadow-sm ${
              hideCancelled 
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100' 
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Hide Cancelled
            </div>
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              hideCancelled 
                ? 'bg-indigo-600 border-indigo-600' 
                : 'border-gray-300'
            }`}>
              {hideCancelled && <Check className="w-3 h-3 text-white" />}
            </div>
          </button>
          
          <button 
            onClick={() => setShowExportModal(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            Advanced Export
          </button>

          <button 
            onClick={async () => {
              if (confirm('⚠️ This will clear ALL cached data (localStorage + database) and reload from constants.ts with updated pricing. Continue?')) {
                try {
                  // Clear localStorage
                  localStorage.clear();
                  // Clear Neon database
                  await clearSalesData();
                  // Force reload
                  window.location.reload();
                } catch (error) {
                  console.error('Error clearing data:', error);
                  // Still reload even if database clear fails
                  window.location.reload();
                }
              }
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-50 border border-orange-200 rounded-lg text-sm font-semibold text-orange-700 hover:bg-orange-100 hover:border-orange-300 transition-all shadow-sm"
          >
            <RefreshCcw className="w-4 h-4" />
            Clear Cache & Reload
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen bg-slate-50/50">
        {activeTab === 'monthly' ? (
          <MonthDetail data={selectedMonth} hideCancelled={hideCancelled} />
        ) : (
          <YearOverview data={data} hideCancelled={hideCancelled} />
        )}
        
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
