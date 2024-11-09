import { useState } from 'react';
import { useFetchPlayers } from '../../../hooks/useFetchPlayers';
import { useFetchTeams } from '../../../hooks/useFetchTeams';
import Table from '../../../components/table/Table';
import Loader from '../../../components/loader/Loader';
import './leagueoflegendsPage.css'; // Import the CSS for styling

const LeagueOfLegendsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'players' | 'teams'>('players');
  const { columns, data, loading } = useFetchPlayers(); // Fetch players data
  const { columns: teamColumns, data: teamData, loading: teamsLoading } = useFetchTeams(); 

  // Function to handle filter change
  const handleFilterChange = (filter: 'players' | 'teams') => setSelectedFilter(filter);

  return (
    <>
      <div className="content-container">
        <div className="user-header">
          <h3>League of Legends</h3>
          <p>List of users and related information goes here.</p>
        </div>

        {/* Filter Bar */}
        
      </div>

      <div className="filter-bar">
          <button
            className={`filter-option filter-left ${selectedFilter === 'players' ? 'active' : ''}`}
            onClick={() => handleFilterChange('players')}
          >
            Players
          </button>
          <button
            className={`filter-option filter-right ${selectedFilter === 'teams' ? 'active' : ''}`}
            onClick={() => handleFilterChange('teams')}
          >
            Teams
          </button>
        </div>

      {/* Content Table */}
      {loading || teamsLoading ? (
        <Loader message="Loading..." />
      ) : (
        <div>
          {selectedFilter === 'players' ? (
            <Table columns={columns} data={data} borderRadius={{ topLeft: 0, topRight: 0, bottomRight: 8, bottomLeft: 8 }}/>
          ) : (
            <Table columns={teamColumns} data={teamData} borderRadius={{ topLeft: 0, topRight: 0, bottomRight: 8, bottomLeft: 8 }}/>
          )}
        </div>
      )}
    </>
  );
};

export default LeagueOfLegendsPage;