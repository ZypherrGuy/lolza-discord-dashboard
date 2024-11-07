import { useState } from 'react';
import './TournamentsPage.css';
import TournamentTile from '../../components/pageTile/PageTile';
import OverlayModal from '../../components/overlayModal/OverlayModal';
import Button from '../../components/button/Button';
import DefaultLogo from '../../assets/CMS/Tournaments/Tiles/sal.png';

interface Tournament {
  id: number;
  name: string;
  logo: string;
  info: string;
}

const tournamentsData: Tournament[] = [
  { id: 1, name: 'SSA League', logo: DefaultLogo, info: 'Ongoing' },
  { id: 2, name: 'Winter Clash', logo: DefaultLogo, info: 'Upcoming' },
  { id: 2, name: 'Winter Clash', logo: DefaultLogo, info: 'Upcoming' },
  { id: 2, name: 'Winter Clash', logo: DefaultLogo, info: 'Upcoming' },
  { id: 2, name: 'Winter Clash', logo: DefaultLogo, info: 'Upcoming' },
  { id: 2, name: 'Winter Clash', logo: DefaultLogo, info: 'Upcoming' },
  { id: 2, name: 'Winter Clash', logo: DefaultLogo, info: 'Upcoming' },
  // Add more tournaments here
];

const TournamentsPage = () => {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (tournament: Tournament) => {
    setSelectedTournament(tournament);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTournament(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="content-container">
        <h3>Tournaments</h3>
        <p>List of tournaments and related information.</p>
        <Button onClick={() => console.log("Create Tournament")} label="Create Tournament" variant="primary" />
      </div>
      
      <div className="content-container tournaments-grid">
        {tournamentsData.map((tournament) => (
          <TournamentTile
            key={tournament.id}
            logo={tournament.logo}
            name={tournament.name}
            info={tournament.info}
            onClick={() => openModal(tournament)}
          />
        ))}
      </div>

      <OverlayModal isOpen={isModalOpen} onClose={closeModal} heading={selectedTournament?.name || ''} children={undefined}>
        {/* Modal content */}
      </OverlayModal>
    </>
  );
};

export default TournamentsPage;
