export interface FinancialTarget {
  location: string;
  category: string;
  targetUnits: number;
  estTicketSize: string;
  revenueTarget: string;
  logic: string;
}

export interface Offer {
  title: string;
  type: 'New' | 'Hero' | 'Retention' | 'Flash' | 'Event' | 'Student' | 'Corporate' | 'Lapsed';
  description: string;
  pricing: string;
  savings?: string;
  whyItWorks: string;
  targetUnits?: number | string;
}

export interface OperationalTask {
  week: string;
  focus: string;
  details: string;
}

export interface MonthData {
  id: string;
  name: string;
  theme: string;
  summary: string;
  revenueTargetTotal: string;
  financialTargets: FinancialTarget[];
  offers: Offer[];
  operations: OperationalTask[];
  engagement?: { name: string; type: string; description: string }[];
}
