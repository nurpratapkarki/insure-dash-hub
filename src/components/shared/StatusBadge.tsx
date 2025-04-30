
import React from 'react';
import { cn } from '../../lib/utils';

type StatusType = 'active' | 'inactive' | 'pending' | 'paid' | 'partially_paid' | 'approved' | 'rejected';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const normalizedStatus = status.toLowerCase().replace(' ', '_') as StatusType;
  
  const getStatusStyles = () => {
    switch (normalizedStatus) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'paid':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'partially_paid':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span 
      className={cn(
        'px-2 py-1 text-xs font-medium rounded-full border',
        getStatusStyles(),
        className
      )}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
