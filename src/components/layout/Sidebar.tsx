
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Users, 
  FileText, 
  Shield, 
  PieChart, 
  Settings, 
  CreditCard,
  User,
  BarChart
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const isSuperAdmin = user?.user_type === 'superadmin';

  return (
    <aside 
      className={`bg-sidebar text-sidebar-foreground transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      } overflow-y-auto`}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <h2 className="text-xl font-bold truncate">Easy Life Insurance</h2>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded-full hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="p-2">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
          }
        >
          <Home size={20} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>
        
        <NavLink 
          to="/policies" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
          }
        >
          <FileText size={20} />
          {!collapsed && <span>Policies</span>}
        </NavLink>
        
        <NavLink 
          to="/customers" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
          }
        >
          <Users size={20} />
          {!collapsed && <span>Customers</span>}
        </NavLink>
        
        <NavLink 
          to="/agents" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
          }
        >
          <User size={20} />
          {!collapsed && <span>Agents</span>}
        </NavLink>
        
        <NavLink 
          to="/claims" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
          }
        >
          <Shield size={20} />
          {!collapsed && <span>Claims</span>}
        </NavLink>
        
        <NavLink 
          to="/payments" 
          className={({ isActive }) => 
            `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
          }
        >
          <CreditCard size={20} />
          {!collapsed && <span>Payments</span>}
        </NavLink>
        
        {isSuperAdmin && (
          <>
            <div className={`mt-4 mb-2 ${collapsed ? 'border-t border-sidebar-border pt-2' : ''}`}>
              {!collapsed && <p className="px-3 text-xs uppercase text-sidebar-foreground/70">Administration</p>}
            </div>
            
            <NavLink 
              to="/reports" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
              }
            >
              <BarChart size={20} />
              {!collapsed && <span>Reports</span>}
            </NavLink>
            
            <NavLink 
              to="/analytics" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
              }
            >
              <PieChart size={20} />
              {!collapsed && <span>Analytics</span>}
            </NavLink>
            
            <NavLink 
              to="/settings" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent/70'}`
              }
            >
              <Settings size={20} />
              {!collapsed && <span>Settings</span>}
            </NavLink>
          </>
        )}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {!collapsed && (
          <div className="text-xs text-sidebar-foreground/80">
            <p className="font-medium">{user?.user_type === 'superadmin' ? 'Super Admin' : 'Branch Manager'}</p>
            <p>{user?.first_name} {user?.last_name}</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
