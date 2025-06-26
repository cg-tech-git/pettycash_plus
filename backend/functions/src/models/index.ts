// Company model
export interface Company {
  id: string;
  name: string;
  domain: string;
  createdAt: Date;
  settings: {
    currency: string;
    approvalLevels: {
      managerLimit: number;
      adminRequired: number;
    };
  };
}

// User model
export interface User {
  id: string;
  email: string;
  name: string;
  companyId: string;
  role: 'employee' | 'manager' | 'admin';
  createdAt: Date;
  isActive: boolean;
}

// Claim model
export interface Claim {
  id: string;
  userId: string;
  companyId: string;
  amount: number;
  currency: string;
  category: string;
  description: string;
  projectCode?: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'paid';
  submittedAt?: Date;
  approvedBy?: string;
  approvedAt?: Date;
  rejectedBy?: string;
  rejectedAt?: Date;
  rejectionReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Receipt model
export interface Receipt {
  id: string;
  claimId: string;
  imageUrl: string;
  thumbnailUrl?: string;
  ocrData?: {
    vendor?: string;
    date?: string;
    amount?: number;
    items?: Array<{
      description: string;
      amount: number;
    }>;
    confidence: number;
  };
  aiSuggestions?: {
    category?: string;
    anomalyScore?: number;
    flags?: string[];
  };
  uploadedAt: Date;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// Request context
export interface RequestContext {
  user: User;
  company: Company;
} 