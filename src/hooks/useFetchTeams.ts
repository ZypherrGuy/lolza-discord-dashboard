import { useState, useEffect } from 'react';
import { fetchTeams } from '../services/railwayService';

interface Column {
  key: string;
  label: string;
}

export const useFetchTeams = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        setLoading(true);
        const teams = await fetchTeams();
        setData(teams);

        if (teams.length > 0) {
          const generatedColumns = Object.keys(teams[0]).map((key) => ({
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

    loadTeams();
  }, []);

  return { columns, data, loading, error };
};
