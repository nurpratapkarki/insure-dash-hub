
export type UserType = 'superadmin' | 'branch' | 'customer' | 'agent';

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string | null;
  address: string | null;
  user_type: UserType;
  is_active: boolean;
  is_staff: boolean;
  branch: number | null;
  agent: number | null;
}

export interface Branch {
  id: number;
  name: string;
  branch_code: number;
  location: string;
  company: number;
  company_name: string;
  user: number;
}

export interface Company {
  id: number;
  name: string;
  company_code: number;
  address: string;
  logo: string | null;
  email: string;
  is_active: boolean;
  phone_number: string;
}

export interface PolicyHolder {
  id: number;
  customer_name: string;
  policy_name: string;
  agent_name: string;
  policy_number: string;
  duration_years: number;
  sum_assured: string;
  status: string;
  payment_status: string;
  start_date: string;
  maturity_date: string;
}

export interface Customer {
  id: number;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  email: string;
  phone_number: string | null;
  address: string;
  gender: string;
}

export interface Agent {
  id: number;
  agent_code: string;
  is_active: boolean;
  joining_date: string;
  commission_rate: string;
  total_policies_sold: number;
  total_premium_collected: string;
  last_policy_date: string;
  status: string;
}

export interface ClaimRequest {
  id: number;
  policy_holder_number: string;
  customer_name: string;
  branch_name: string;
  claim_date: string;
  status: string;
  reason: string;
  claim_amount: string;
}

export interface PremiumPayment {
  id: number;
  policy_holder_number: string;
  customer_name: string;
  annual_premium: string;
  total_paid: string;
  next_payment_date: string;
  total_premium: string;
  remaining_premium: string;
  payment_status: string;
}

export interface Policy {
  id: number;
  name: string;
  policy_code: string;
  policy_type: string;
  base_multiplier: string;
  min_sum_assured: string;
  max_sum_assured: string;
  include_adb: boolean;
  include_ptd: boolean;
}

export interface DashboardStats {
  totalPolicies: number;
  totalCustomers: number;
  totalAgents: number;
  totalPremiumCollected: string;
  pendingClaims: number;
  activePolicies: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}
