import React from 'react';
import './Loader.css';
import loader from '../../assets/loading/loader.svg';

interface LoaderProps {
  size?: string;  // Custom size for the loader (e.g., '50px', '100px')
  message?: string; // Optional message to display below the loader
}

const Loader: React.FC<LoaderProps> = ({ size = '125px' }) => {
  return (
    <div className="loader-container">
      <img
        src={loader}
        alt="Loading..."
        className="loader-svg"
        style={{ width: size, height: size }}  // Dynamically setting size
      />
    </div>
  );
};

export default Loader;
