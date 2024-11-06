import React, { useState } from 'react';
import './TournamentsPage.css';
import Button from '../../components/button/Button';
import TournamentTile from '../../components/pageTile/PageTile';
import TileLogo from '../../assets/CMS/Tournaments/Tiles/sal.png';

const TournamentsPage: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState<any>(null);

  // Sample data for tournaments (replace with actual data fetching)
  const tournaments = [
    { logo: TileLogo, name: 'Tournament 1', info: 'Ongoing' },
    { logo: TileLogo, name: 'Tournament 2', info: 'Completed' },
    { logo: TileLogo, name: 'Tournament 3', info: 'Upcoming' },
    { logo: TileLogo, name: 'Tournament 4', info: 'Ongoing' },
    { logo: TileLogo, name: 'Tournament 5', info: 'Upcoming' },
    { logo: TileLogo, name: 'Tournament 6', info: 'Upcoming' },
  ];

  const handleTileClick = (tournament: any) => {
    setSelectedTournament(tournament);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setSelectedTournament(null);
  };

  return (
    <>
      <div className="content-container">
        <h3>Tournaments</h3>
        <p>List of tournaments and related information goes here.</p>
        <Button label="Create Tournament" variant="primary" onClick={() => { /* Open create tournament modal */ }} />
      </div>

      <div className="content-container tournament-tiles-container">
        {tournaments.map((tournament, index) => (
          <TournamentTile
            key={index}
            logo={tournament.logo}
            name={tournament.name}
            info={tournament.info}
            onClick={() => handleTileClick(tournament)}
          />
        ))}
      </div>

      {showOverlay && selectedTournament && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedTournament.name}</h2>
            <img src={selectedTournament.logo} alt={selectedTournament.name} className="overlay-logo" />
            <p>{selectedTournament.info}</p>
            <Button label="Close" variant="secondary" onClick={closeOverlay} />
          </div>
        </div>
      )}
    </>
  );
};

export default TournamentsPage;
