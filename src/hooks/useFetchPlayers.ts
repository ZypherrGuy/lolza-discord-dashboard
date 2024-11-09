import { useState, useEffect } from 'react';
import { fetchPlayers } from '../services/railwayService';

interface Column {
  key: string;
  label: string;
}

export const useFetchPlayers = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        setLoading(true);
        const players = await fetchPlayers();
        setData(players);

        if (players.length > 0) {
          const generatedColumns = Object.keys(players[0]).map((key) => ({
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

    loadPlayers();
  }, []);

  return { columns, data, loading, error };
};
