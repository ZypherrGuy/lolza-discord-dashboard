import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css';
import logo from '../../assets/logo/LOGO-DISCDASH-TITLE-WHITE-FULL.png';

import {
  FaUsers,
  FaRobot,
  FaCogs,
  FaHome,
  FaChevronDown,
  FaChevronUp,
  FaToolbox,
} from 'react-icons/fa';

const NavigationBar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  // Navigation items data
  const navItems = [
    { path: '/', label: 'Dashboard', icon: <FaHome />, children: false },
    { path: '/users', label: 'Users', icon: <FaUsers />, children: false },
    {
      path: '', // No path for Communities (parent)
      label: 'Communities',
      icon: <FaUsers />,
      children: true,
      subItems: [
        { path: '/communities/leagueoflegends', label: 'League of Legends' },
        { path: '/communities/rocketleague', label: 'Rocket League' },
      ],
    },
    { path: '/discord-bots', label: 'Discord Bots', icon: <FaRobot />, children: false },
    { path: '/tournaments', label: 'Tournaments', icon: <FaUsers />, children: false },
    { path: '/tools', label: 'Tools', icon: <FaToolbox />, children: false },
  ];

  const toggleDropdown = (path: string) => {
    // Toggle the dropdown menu visibility
    setDropdownOpen(dropdownOpen === path ? null : path);
  };

  // Determine if the navigation item is active
  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      return location.pathname === '/'; // Exact match for the root path (Dashboard)
    }
    return location.pathname.startsWith(itemPath); // For other items, check if the path starts with the item path
  };

  // Determine if a sub-item is active
  const isSubItemActive = (subItemPath: string) => {
    return location.pathname === subItemPath;
  };

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Main Navigation Links */}
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${
              item.children && dropdownOpen === item.path ? 'open' : ''
            }`}
          >
            {/* Parent Item (Communities) */}
            {item.children ? (
              <div>
                <span
                  className="dropdown-toggle"
                  onClick={() => toggleDropdown(item.path)}
                >
                  {item.icon} <span>{item.label}</span>
                  <span className="dropdown-icon">
                    {dropdownOpen === item.path ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </span>

                {/* Render dropdown if item has children and is open */}
                {dropdownOpen === item.path && (
                  <ul className="dropdown-menu">
                    {item.subItems?.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={isSubItemActive(subItem.path) ? 'active' : ''}
                      >
                        <Link to={subItem.path}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              // Regular Navigation Item
              <Link
                to={item.path}
                className={isActive(item.path) ? 'active' : ''}
              >
                {item.icon} <span>{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
