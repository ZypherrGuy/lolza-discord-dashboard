const BASE_URL = "https://lolza-core-production.up.railway.app/api";

export const fetchUsersWithColumns = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

export const fetchTournaments = async () => {
  const response = await fetch(`${BASE_URL}/tournaments`);
  if (!response.ok) throw new Error('Failed to fetch tournaments');
  return response.json();
};

export const fetchPlayers = async () => {
  const response = await fetch(`${BASE_URL}/players`);
  if (!response.ok) throw new Error('Failed to fetch players');
  return response.json();
};

export const fetchTeams = async () => {
  const response = await fetch(`${BASE_URL}/teams`);
  if (!response.ok) throw new Error('Failed to fetch teams');
  return response.json();
};