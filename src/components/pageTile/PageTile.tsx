import React from 'react';
import './PageTile.css';

interface TournamentTileProps {
  logo: string;
  name: string;
  onClick: () => void;
}

const TournamentTile: React.FC<TournamentTileProps> = ({ logo, name, onClick }) => {
  return (
    <div className="tournament-tile" onClick={onClick}>
      <img src={logo} alt={name} className="tournament-logo" />
      <h4 className="tournament-name">{name}</h4>
    </div>
  );
};

export default TournamentTile;
