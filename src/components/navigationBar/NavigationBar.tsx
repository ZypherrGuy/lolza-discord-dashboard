import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../../assets/logo/LOGO-DISCDASH-TITLE-WHITE-FULL.png'; 

import { FaUsers, FaRobot, FaCogs, FaHome } from 'react-icons/fa';  // Import icons

const NavigationBar = () => {
  const location = useLocation();  // Use React Router to track active route

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      <h2 className="sidebar-title">Dashboard</h2>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <FaHome /> Homepage
          </Link>
        </li>
        <li>
          <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>
            <FaUsers /> Users
          </Link>
        </li>
        <li>
          <Link to="/discord-bots" className={location.pathname === '/discord-bots' ? 'active' : ''}>
            <FaRobot /> Discord Bots
          </Link>
        </li>
        <li>
          <Link to="/tournaments" className={location.pathname === '/tournaments' ? 'active' : ''}>
            <FaUsers /> Tournaments
          </Link>
        </li>
        <li>
          <Link to="/tools" className={location.pathname === '/tools' ? 'active' : ''}>
            <FaCogs /> Tools
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
