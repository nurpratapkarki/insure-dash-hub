
import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ChartCard = ({ title, children, className }: ChartCardProps) => {
  return (
    <div className={cn("dashboard-card", className)}>
      <h3 className="font-medium text-gray-700 mb-4">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default ChartCard;
