
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PremiumChartProps {
  data: { name: string; amount: number }[];
}

const PremiumChart = ({ data }: PremiumChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false}
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Tooltip 
          formatter={(value) => [`${Number(value).toLocaleString()}`, 'Premium Amount']}
          labelFormatter={(value) => `Month: ${value}`}
        />
        <Bar 
          dataKey="amount" 
          fill="#8b5cf6" 
          radius={[4, 4, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PremiumChart;
