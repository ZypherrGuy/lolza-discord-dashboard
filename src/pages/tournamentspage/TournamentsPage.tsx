import { useState } from 'react';
import './TournamentsPage.css';
import { formatDate } from '../../utils/dateHandler'; 
import TournamentTile from '../../components/pageTile/PageTile';
import OverlayModal from '../../components/overlayModal/OverlayModal';
import Button from '../../components/button/Button';
import DefaultLogo from '../../assets/CMS/Tournaments/Tiles/sal.png';
import Loader from '../../components/loader/Loader';
import { useFetchTournaments, Tournament } from '../../hooks/useFetchTournaments';

import {
  FaUsers,
  FaMoneyBill
} from 'react-icons/fa';

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

  const renderStatusTag = (status: string) => {
    let statusClass = '';
    if (status === 'Coming Soon') {
      statusClass = 'status-coming-soon';
    }
    return <span className={`status-tag ${statusClass}`}>{status}</span>;
  };

  return (
    <>
      <div className="content-container">
        <h3>Tournaments</h3>
        <p>Browse through various tournaments and get detailed information on each event.</p>
        <Button onClick={() => console.log('Create Tournament')} label="Create Tournament" variant="primary" />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="content-container tournaments-grid">
          {tournaments.map((tournament) => (
            <TournamentTile
              key={tournament.id}
              logo={DefaultLogo}
              name={tournament.title}
              participants={tournament.participants}
              onClick={() => openModal(tournament)}
            />
          ))}
        </div>
      )}

      {error && <p className="error-message">Error: {error}</p>}

      {selectedTournament && (
        <OverlayModal
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <div className="tournament-content">
            <img src={selectedTournament.logo || DefaultLogo} alt={selectedTournament.title} className="overlay-logo" />
            <h2 className="overlay-heading">{selectedTournament.title}</h2>

            <div className="tournament-modal-info">
              {renderStatusTag(selectedTournament.status)}
            </div>

            <div className="tournament-modal-info">
              <div className="modal-info">
                <span><FaMoneyBill />{selectedTournament.prizePool}</span>
              </div>
              <div className="modal-info">
                <span><FaUsers /> {selectedTournament.participants}</span>
              </div>
            </div>

            <div className="modal-dates">
              <div className="date-column">
                <div className="modal-info">
                  <span className='date-span'><strong>Registrations Opens:</strong> {formatDate(selectedTournament.registrationOpenDate)}</span>
                </div>
                <div className="modal-info">
                  <span className='date-span'><strong>Registration Ends:</strong> {formatDate(selectedTournament.registrationCloseDate)}</span>
                </div>
              </div>
              <div className="date-column">
                <div className="modal-info">
                  <span className='date-span'><strong>Tournament Starts:</strong> {formatDate(selectedTournament.tournamentStartDate)}</span>
                </div>
                <div className="modal-info">
                  <span className='date-span'><strong>Tournament Ends:</strong> {formatDate(selectedTournament.tournamentEndDate)}</span>
                </div>
              </div>
            </div>

            <div className="tournament-modal-info">
              <p>{selectedTournament.description}</p>
            </div>
            
            

            {/* Date Columns: Registration and Tournament Dates */}
           

            <div className="button-container">
              <button className="confirm-button">Register Participant</button>
            </div>
          </div>
        </OverlayModal>
      )}
    </>
  );
};

export default TournamentsPage;
