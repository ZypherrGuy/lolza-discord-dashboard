// src/hooks/useFetchUsers.ts

import { useState, useEffect } from 'react';
import { fetchUsersWithColumns } from '../services/railwayService';

interface Column {
  key: string;
  label: string;
}

export const useFetchUsers = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const userData = await fetchUsersWithColumns();
        setData(userData);

        if (userData.length > 0) {
          const generatedColumns = Object.keys(userData[0]).map((key) => ({
            key,
            label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize key for label
          }));
          setColumns(generatedColumns);
        }
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return { columns, data, loading, error };
};
