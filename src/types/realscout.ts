// RealScout Widget Types
export interface RealScoutWidgetConfig {
  agentEncodedId: string;
  widgetType: 'listings' | 'home-value' | 'simple-search' | 'advanced-search';
  loadingState: 'idle' | 'loading' | 'loaded' | 'error';
  errorMessage?: string;
}

export interface RealScoutListingsConfig extends RealScoutWidgetConfig {
  sortOrder?: 'STATUS_AND_SIGNIFICANT_CHANGE' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH' | 'NEWEST';
  listingStatus?: 'For Sale' | 'Sold' | 'Pending' | 'All';
  propertyTypes?: string; // e.g., "SFR,MF,LAL"
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  squareFeetMin?: number;
  squareFeetMax?: number;
}

export interface RealScoutHomeValueConfig extends RealScoutWidgetConfig {
  address?: string;
  showComparables?: boolean;
  showMarketTrends?: boolean;
}

export interface RealScoutSearchConfig extends RealScoutWidgetConfig {
  searchType: 'simple' | 'advanced';
  placeholder?: string;
  showFilters?: boolean;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyType: 'buyer' | 'seller' | 'both' | 'investor';
  budget: string;
  timeline: string;
}

export interface MortgageCalculatorData {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  downPayment: number;
  propertyTax: number;
  insurance: number;
  pmi: number;
}

export interface MortgageCalculationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  principalAndInterest: number;
  monthlyTax: number;
  monthlyInsurance: number;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

// Real Estate Types
export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize: number;
  propertyType: 'SFR' | 'MF' | 'LAL' | 'CONDO' | 'TOWNHOUSE';
  status: 'For Sale' | 'Sold' | 'Pending' | 'Off Market';
  listingDate: string;
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    email: string;
    phone: string;
    photo?: string;
  };
}

export interface Neighborhood {
  name: string;
  city: string;
  state: string;
  zipCode: string;
  medianPrice: number;
  averageDaysOnMarket: number;
  schools: School[];
  amenities: string[];
  description: string;
}

export interface School {
  name: string;
  type: 'Elementary' | 'Middle' | 'High';
  rating: number;
  distance: number; // in miles
}

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
