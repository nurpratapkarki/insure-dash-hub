
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change?: string;
  trending?: 'up' | 'down' | 'neutral';
  className?: string;
  iconColor?: string;
}

const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  change, 
  trending = 'neutral', 
  className,
  iconColor = 'text-insurance-blue'
}: StatCardProps) => {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between">
        <div className={cn("p-2 rounded-full", iconColor.replace('text-', 'bg-') + '/10')}>
          <Icon size={20} className={iconColor} />
        </div>
        
        {trending && (
          <div className={cn(
            "text-xs font-medium px-2 py-1 rounded",
            trending === 'up' ? 'text-green-700 bg-green-100' :
            trending === 'down' ? 'text-red-700 bg-red-100' :
            'text-gray-700 bg-gray-100'
          )}>
            {change}
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
