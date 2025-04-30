
import React from 'react';
import { cn } from '../../lib/utils';

interface DataTableProps<T> {
  data: T[];
  columns: {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
    className?: string;
  }[];
  onRowClick?: (item: T) => void;
  className?: string;
}

function DataTable<T extends object>({ 
  data, 
  columns, 
  onRowClick,
  className 
}: DataTableProps<T>) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={column.className}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={cn(
                  "hover:bg-gray-50 transition-colors", 
                  onRowClick ? "cursor-pointer" : ""
                )}
                onClick={() => onRowClick && onRowClick(item)}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={column.className}>
                    {typeof column.accessor === 'function' 
                      ? column.accessor(item)
                      : item[column.accessor] as React.ReactNode
                    }
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-4 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
