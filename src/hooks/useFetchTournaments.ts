import { useState, useEffect } from 'react';
import { fetchTournaments } from '../services/railwayService';

export interface Tournament {
  id: number;
  title: string;
  logo: string;
  info: string;
}

export const useFetchTournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTournaments = async () => {
      try {
        setLoading(true);
        const tournamentsData = await fetchTournaments();
        setTournaments(tournamentsData);
      } catch (err) {
        console.error("Error fetching tournaments:", err);
        setError("Failed to load tournaments");
      } finally {
        setLoading(false);
      }
    };
    loadTournaments();
  }, []);

  return { tournaments, loading, error };
};
