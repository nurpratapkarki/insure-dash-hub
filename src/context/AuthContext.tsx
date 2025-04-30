
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserType } from '../types/insurance';
import { toast } from "sonner";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock user data based on the provided JSON
const mockUsers = [
  {
    id: 3,
    username: "admin",
    first_name: "admin",
    last_name: "admin",
    email: "admin@admin.com",
    gender: "Male",
    phone: null,
    address: null,
    user_type: "superadmin" as UserType,
    is_active: true,
    is_staff: true,
    branch: null,
    agent: null,
  },
  {
    id: 5,
    username: "kohalpurBranch",
    first_name: "Kohalpur",
    last_name: "Branch",
    email: "kohalpurbranch@gmail.com",
    gender: "",
    phone: null,
    address: "",
    user_type: "branch" as UserType,
    is_active: true,
    is_staff: true,
    branch: 1,
    agent: null,
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(u => u.username.toLowerCase() === username.toLowerCase());
      
      if (!foundUser) {
        throw new Error('Invalid username or password');
      }
      
      // For demo, we just check if the user exists and don't validate password
      // In a real app, this would validate the password properly
      setUser(foundUser);
      setIsAuthenticated(true);
      toast.success(`Welcome back, ${foundUser.first_name}!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
      toast.error('Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    toast.info('You have been logged out successfully.');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
