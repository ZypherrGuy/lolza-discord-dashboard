import React from 'react';
import './PageTile.css';

import { FaUsers } from 'react-icons/fa';

interface TournamentTileProps {
  logo: string;
  name: string;
  participants: number;
  onClick: () => void;
}

const TournamentTile: React.FC<TournamentTileProps> = ({ logo, name, participants, onClick }) => {
  return (
    <div className="tournament-tile" onClick={onClick}>
      <img src={logo} alt={name} className="tournament-logo" />
      <h4 className="tournament-name">{name}</h4>
      <div className="tile-info">
        <span><FaUsers /> {participants}</span>
      </div>
    </div>
  );
};

export default TournamentTile;
