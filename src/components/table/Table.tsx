import React, { useState, useMemo } from 'react';
import './Table.css';

interface Column {
  key: string;
  label: string;
}

interface BorderRadius {
  topLeft?: number;
  topRight?: number;
  bottomRight?: number;
  bottomLeft?: number;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  borderRadius?: number | BorderRadius;
}

const Table: React.FC<TableProps> = ({ columns, data, borderRadius  }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

   // Compute border radius style
   const borderRadiusStyle = useMemo(() => {
    if (typeof borderRadius === 'number') {
      return `${borderRadius}px`;
    } else if (borderRadius) {
      return `${borderRadius.topLeft ?? 8}px ${borderRadius.topRight ?? 8}px ${borderRadius.bottomRight ?? 8}px ${borderRadius.bottomLeft ?? 8}px`;
    }
    return '0px';
  }, [borderRadius]);

  // Memoize the sorted data and apply search filtering
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return columns.some((column) => {
        // Check if the column value matches the search term (case-insensitive)
        return row[column.key]?.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }, [data, searchTerm, columns]);

  // Sort the filtered data
  const sortedData = useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return filteredData;
  }, [filteredData, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container" style={{ borderRadius: borderRadiusStyle }}>
      <div className="table-ribbon">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="table-search-input"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => requestSort(column.key)}>
                {column.label}{' '}
                {sortConfig?.key === column.key ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="no-data">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
