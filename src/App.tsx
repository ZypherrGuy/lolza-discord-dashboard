import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import pages (we'll create these components in the next steps)
import Homepage from './pages/homepage/Homepage';
import UsersPage from './pages/userspage/UsersPage';
import DiscordBotsPage from './pages/discordbotspage/DiscordBotsPage';
import TournamentsPage from './pages/tournamentspage/TournamentsPage';
import ToolsPage from './pages/toolsPage/ToolsPage';

// Layout components
import NavigationBar from './components/navigationBar/NavigationBar';

const App = () => {
  return (
    <Router>
      <div className="dashboard-container">
        {/* Sidebar for navigation */}
        <NavigationBar />
        <div className="main-content">
          {/* Routing setup */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/discord-bots" element={<DiscordBotsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
