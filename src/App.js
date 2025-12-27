import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import Header from './components/Header';

// Import pages
import HomePage from './pages/HomePage';
import DataAIPage from './pages/DataAIPage';
import ElectronicsPage from './pages/ElectronicsPage';
import CommunityPage from './pages/CommunityPage';
import InterestsPage from './pages/InterestsPage';
import ProfessionalPage from './pages/ProfessionalPage';

// Main App Component
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize state from sessionStorage, URL or default to 'home'
  const [currentPage, setCurrentPage] = useState(() => {
    // First check URL
    // Remove leading '/'
    const pathPage = location.pathname.slice(1);
    if (pathPage) {
      return decodeURIComponent(pathPage);
    }
    
    // Then check sessionStorage
    try {
      const savedPage = sessionStorage.getItem('currentPage');
      return savedPage || 'home';
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return 'home';
    }
  });

  // Save to sessionStorage whenever currentPage changes
  useEffect(() => {
    try {
      sessionStorage.setItem('currentPage', currentPage);
    } catch (error) {
      console.error('Error writing to sessionStorage:', error);
    }
  }, [currentPage]);


  // Sync state with URL changes (browser back/forward)
  useEffect(() => {
    const pathPage = location.pathname.slice(1);
    const decodedPage = pathPage ? decodeURIComponent(pathPage) : 'home';
    
    if (decodedPage !== currentPage) {
      setCurrentPage(decodedPage);
      window.scrollTo(0, 0);
    }
  }, [location.pathname, currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Push to browser history
    navigate(`/${encodeURIComponent(page)}`, { replace: false });
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    navigate('/', { replace: false });
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'DATA, AI & BI':
        return <DataAIPage />;
      case 'ELECTRONICS AUTOMATION':
        return <ElectronicsPage />;
      case 'COMMUNITY ENGAGEMENT':
        return <CommunityPage />;
      case 'SHARED INTERESTS':
        return <InterestsPage />;
      case 'PROFESSIONAL SUMMARY':
        return <ProfessionalPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      <div className="main-wrapper">
        <Header 
          onBackClick={handleBackToHome}
          showBack={currentPage !== 'home'}
        />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;