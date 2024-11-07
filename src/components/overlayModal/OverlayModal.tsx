import React from 'react';
import './OverlayModal.css';
import closeIcon from '../../assets/operators/close.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading?: string;
  children: React.ReactNode;
}

const OverlayModal: React.FC<ModalProps> = ({ isOpen, onClose, heading, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <img src={closeIcon} alt="Close" className="close-icon" />
        </button>
        {heading && <h2 className="modal-heading">{heading}</h2>}
        {children}
      </div>
    </div>
  );
};

export default OverlayModal;