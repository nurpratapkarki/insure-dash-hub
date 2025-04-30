
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Bell, Search, LogOut } from 'lucide-react';

const TopBar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 h-16 bg-white shadow-sm">
      <div className="flex-1 flex items-center">
        <div className="relative mr-4 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 text-sm border rounded-lg pl-9 focus:outline-none focus:ring-2 focus:ring-insurance-blue/30"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell size={20} className="cursor-pointer text-gray-500 hover:text-insurance-blue" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <div className="text-sm font-medium">{user?.first_name} {user?.last_name}</div>
            <div className="text-xs text-gray-500 capitalize">{user?.user_type}</div>
          </div>
          
          <div className="h-10 w-10 rounded-full bg-insurance-blue text-white flex items-center justify-center font-medium">
            {user?.first_name?.charAt(0)}{user?.last_name?.charAt(0)}
          </div>

          <button 
            onClick={handleLogout}
            className="p-1.5 rounded hover:bg-gray-100"
            title="Logout"
          >
            <LogOut size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
