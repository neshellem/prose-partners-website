export type PageId =
  | 'home'
  | 'individuals'
  | 'attorneys'
  | 'probate'
  | 'guardianship'
  | 'packets'
  | 'resources'
  | 'about'
  | 'contact'
  | 'disclaimer'
  | 'privacy';

export interface PacketItem {
  id: string;
  category: 'probate' | 'family' | 'guardianship' | 'general';
  title: string;
  shortDescription: string;
  designedFor: string;
  includes: string[];
  price: number;
  format: string;
  badge?: string;
  checkoutUrlPlaceholder: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'individuals' | 'attorneys' | 'probate' | 'pricing';
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    url?: string;
    isOfficial?: boolean;
    tag?: string;
  }[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  matterType: string;
  description: string;
  deadlineDate: string;
  requestedDeadline: string;
  approximateScope: string;
  estimatedVolume: string;
}
