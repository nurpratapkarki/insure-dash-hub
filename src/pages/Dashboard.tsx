
import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import ChartCard from '../components/dashboard/ChartCard';
import PremiumChart from '../components/dashboard/PremiumChart';
import PieChartComponent from '../components/dashboard/PieChartComponent';
import DataTable from '../components/shared/DataTable';
import StatusBadge from '../components/shared/StatusBadge';
import { 
  Users, 
  FileText, 
  User, 
  DollarSign, 
  AlertTriangle, 
  Shield 
} from 'lucide-react';
import { 
  mockDashboardStats, 
  getMonthlyPremiumData, 
  getPolicyDistribution, 
  getClaimStatusDistribution, 
  getRiskCategoryDistribution,
  mockPolicyHolders,
  mockClaimRequests 
} from '../services/mockDataService';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const isSuperAdmin = user?.user_type === 'superadmin';

  const policyDistribution = getPolicyDistribution();
  const policyDistColors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#14b8a6'];
  
  const claimDistribution = getClaimStatusDistribution();
  const claimDistColors = ['#22c55e', '#eab308', '#ef4444', '#64748b'];
  
  const riskDistribution = getRiskCategoryDistribution();
  const riskDistColors = ['#22c55e', '#eab308', '#ef4444'];
  
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatCard
            icon={FileText}
            title="Total Policies"
            value={mockDashboardStats.totalPolicies}
            change="+5% from last month"
            trending="up"
            iconColor="text-insurance-blue"
          />
          
          <StatCard
            icon={Users}
            title="Total Customers"
            value={mockDashboardStats.totalCustomers}
            change="+2% from last month"
            trending="up"
            iconColor="text-insurance-purple"
          />
          
          <StatCard
            icon={User}
            title="Total Agents"
            value={mockDashboardStats.totalAgents}
            change="Same as last month"
            trending="neutral"
            iconColor="text-insurance-darkBlue"
          />
          
          <StatCard
            icon={DollarSign}
            title="Total Premium Collected"
            value={`₹${parseFloat(mockDashboardStats.totalPremiumCollected).toLocaleString()}`}
            change="+15% from last month"
            trending="up"
            iconColor="text-green-600"
          />
          
          <StatCard
            icon={AlertTriangle}
            title="Pending Claims"
            value={mockDashboardStats.pendingClaims}
            change="-5% from last month"
            trending="down"
            iconColor="text-yellow-600"
          />
          
          <StatCard
            icon={Shield}
            title="Active Policies"
            value={mockDashboardStats.activePolicies}
            change="+5% from last month"
            trending="up"
            iconColor="text-teal-600"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <ChartCard title="Premium Collection Trend" className="lg:col-span-2">
            <PremiumChart data={getMonthlyPremiumData()} />
          </ChartCard>
          
          <ChartCard title="Policy Distribution">
            <PieChartComponent 
              data={policyDistribution} 
              colors={policyDistColors}
            />
          </ChartCard>
        </div>
        
        {isSuperAdmin && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <ChartCard title="Claim Status Distribution">
              <PieChartComponent 
                data={claimDistribution}
                colors={claimDistColors}
              />
            </ChartCard>
            
            <ChartCard title="Risk Category Distribution">
              <PieChartComponent 
                data={riskDistribution}
                colors={riskDistColors}
              />
            </ChartCard>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-6 mt-6">
          <ChartCard title="Recent Policies">
            <DataTable
              data={mockPolicyHolders.slice(0, 5)}
              columns={[
                { header: 'Policy #', accessor: 'policy_number' },
                { header: 'Customer', accessor: 'customer_name' },
                { header: 'Policy', accessor: 'policy_name' },
                { header: 'Sum Assured', accessor: (item) => `₹${parseFloat(item.sum_assured).toLocaleString()}` },
                { header: 'Status', accessor: (item) => <StatusBadge status={item.status} /> },
                { header: 'Payment Status', accessor: (item) => <StatusBadge status={item.payment_status} /> }
              ]}
              onRowClick={(item) => console.log('Clicked policy:', item)}
            />
          </ChartCard>
          
          <ChartCard title="Recent Claims">
            <DataTable
              data={mockClaimRequests}
              columns={[
                { header: 'Claim ID', accessor: 'id' },
                { header: 'Policy #', accessor: 'policy_holder_number' },
                { header: 'Customer', accessor: 'customer_name' },
                { header: 'Branch', accessor: 'branch_name' },
                { header: 'Reason', accessor: 'reason' },
                { header: 'Amount', accessor: (item) => `₹${parseFloat(item.claim_amount).toLocaleString()}` },
                { header: 'Status', accessor: (item) => <StatusBadge status={item.status} /> }
              ]}
              onRowClick={(item) => console.log('Clicked claim:', item)}
            />
          </ChartCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
