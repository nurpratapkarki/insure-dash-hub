
import { 
  PolicyHolder, 
  Customer, 
  Agent, 
  ClaimRequest, 
  PremiumPayment,
  Policy,
  Branch,
  Company,
  DashboardStats
} from '../types/insurance';

// Simulating data from the JSON provided
export const mockPolicyHolders: PolicyHolder[] = [
  {
    id: 1,
    customer_name: "Nur Pratap Karki",
    policy_name: "Saral Jiwan Beema",
    agent_name: "Nur Pratap Karki",
    policy_number: "1751451440001",
    duration_years: 10,
    sum_assured: "5000000.00",
    status: "Active",
    payment_status: "Partially Paid",
    start_date: "2025-04-29",
    maturity_date: "2035-04-29",
  },
  {
    id: 2,
    customer_name: "Sumitra Bam",
    policy_name: "Saral Jiwan Beema",
    agent_name: "Nur Pratap Karki",
    policy_number: "1751451440002",
    duration_years: 10,
    sum_assured: "1000000.00",
    status: "Active",
    payment_status: "Paid",
    start_date: "2020-04-30",
    maturity_date: "2035-04-30",
  }
];

export const mockCustomers: Customer[] = [
  {
    id: 1,
    first_name: "Nur Pratap",
    middle_name: null,
    last_name: "Karki",
    email: "nurprtapkarki@gmail.com",
    phone_number: "9840693765",
    address: "Kohalpur, 11 Banke",
    gender: "M",
  },
  {
    id: 2,
    first_name: "Sumitra",
    middle_name: null,
    last_name: "Bam",
    email: "sumeetrabamthakuri@gmai.com",
    phone_number: null,
    address: "Kohalpur, 11 Banke",
    gender: "M",
  },
  {
    id: 3,
    first_name: "Sankalp",
    middle_name: null,
    last_name: "Tharu",
    email: "s4kanlptharu@gmail.com",
    phone_number: null,
    address: "Raptisonari - 8 Banke",
    gender: "M",
  }
];

export const mockAgents: Agent[] = [
  {
    id: 1,
    agent_code: "A-1-0006",
    is_active: true,
    joining_date: "2025-04-29",
    commission_rate: "25.00",
    total_policies_sold: 2,
    total_premium_collected: "855625.00",
    last_policy_date: "2025-04-30",
    status: "ACTIVE",
  }
];

export const mockClaimRequests: ClaimRequest[] = [
  {
    id: 2,
    policy_holder_number: "1751451440001",
    customer_name: "Nur Pratap Karki",
    branch_name: "Kohalpur Branch",
    claim_date: "2025-04-30",
    status: "Pending",
    reason: "Death",
    claim_amount: "5000000.00",
  }
];

export const mockPremiumPayments: PremiumPayment[] = [
  {
    id: 3,
    policy_holder_number: "1751451440001",
    customer_name: "Nur Pratap Karki",
    annual_premium: "115625.00",
    total_paid: "115625.00",
    next_payment_date: "2027-04-29",
    total_premium: "1156250.00",
    remaining_premium: "1040625.00",
    payment_status: "Partially Paid",
  },
  {
    id: 4,
    policy_holder_number: "1751451440002",
    customer_name: "Sumitra Bam",
    annual_premium: "23125.00",
    total_paid: "115625.00",
    next_payment_date: "2026-04-30",
    total_premium: "231250.00",
    remaining_premium: "115625.00",
    payment_status: "Partially Paid",
  }
];

export const mockPolicies: Policy[] = [
  {
    id: 1,
    name: "Saral Jiwan Beema",
    policy_code: "144",
    policy_type: "Endownment",
    base_multiplier: "1.00",
    min_sum_assured: "25000.00",
    max_sum_assured: "5000000.00",
    include_adb: true,
    include_ptd: true,
  }
];

export const mockBranches: Branch[] = [
  {
    id: 1,
    name: "Kohalpur Branch",
    branch_code: 145,
    location: "Kohalpur 10- Banke",
    company: 1,
    company_name: "Easy Life Insurance LTD.",
    user: 5,
  }
];

export const mockCompanies: Company[] = [
  {
    id: 1,
    name: "Easy Life Insurance LTD.",
    company_code: 175,
    address: "Kohalpur, 11 Banke",
    logo: null,
    email: "nurprtapkarki@gmail.com",
    is_active: true,
    phone_number: "9840693765"
  }
];

export const mockDashboardStats: DashboardStats = {
  totalPolicies: mockPolicyHolders.length,
  totalCustomers: mockCustomers.length,
  totalAgents: mockAgents.length,
  totalPremiumCollected: mockPremiumPayments.reduce(
    (sum, payment) => sum + parseFloat(payment.total_paid), 0
  ).toFixed(2),
  pendingClaims: mockClaimRequests.filter(claim => claim.status === "Pending").length,
  activePolicies: mockPolicyHolders.filter(policy => policy.status === "Active").length,
};

export const getMonthlyPremiumData = () => {
  return [
    { name: "Jan", amount: 50000 },
    { name: "Feb", amount: 60000 },
    { name: "Mar", amount: 45000 },
    { name: "Apr", amount: 70000 },
    { name: "May", amount: 65000 },
    { name: "Jun", amount: 80000 },
    { name: "Jul", amount: 75000 },
    { name: "Aug", amount: 90000 },
    { name: "Sep", amount: 85000 },
    { name: "Oct", amount: 95000 },
    { name: "Nov", amount: 100000 },
    { name: "Dec", amount: 110000 },
  ];
};

export const getPolicyDistribution = () => {
  return [
    { name: "Endownment", value: 65 },
    { name: "Term", value: 20 },
    { name: "ULIP", value: 10 },
    { name: "Pension", value: 5 },
  ];
};

export const getClaimStatusDistribution = () => {
  return [
    { name: "Approved", value: 60 },
    { name: "Pending", value: 25 },
    { name: "Rejected", value: 10 },
    { name: "Processing", value: 5 },
  ];
};

export const getRiskCategoryDistribution = () => {
  return [
    { name: "Low", value: 50 },
    { name: "Moderate", value: 30 },
    { name: "High", value: 20 },
  ];
};
