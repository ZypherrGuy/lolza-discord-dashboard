import { useState } from 'react';
import './TournamentsPage.css';
import TournamentTile from '../../components/pageTile/PageTile';
import OverlayModal from '../../components/overlayModal/OverlayModal';
import Button from '../../components/button/Button';
import DefaultLogo from '../../assets/CMS/Tournaments/Tiles/sal.png';
import Loader from '../../components/loader/Loader';
import { useFetchTournaments, Tournament } from '../../hooks/useFetchTournaments';


const TournamentsPage = () => {
  const { tournaments, loading, error } = useFetchTournaments();
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
      
      {loading ? (
        <Loader />
      ) : (
        <div className="content-container tournaments-grid">
          {tournaments.map((tournament) => {
            return (
              <TournamentTile
                key={tournament.id}
                logo={DefaultLogo}
                name={tournament.title}
                info={tournament.info}
                onClick={() => openModal(tournament)}
              />
            );
          })}
        </div>
      )}

      {error && <p className="error-message">Error: {error}</p>}

      <OverlayModal isOpen={isModalOpen} onClose={closeModal} heading={selectedTournament?.title || ''} children={undefined}>
        {/* Modal content */}
      </OverlayModal>
    </>
  );
};

export default TournamentsPage;
