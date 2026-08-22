import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { warmBackend } from './utils/warmBackend';
import './App.css';

// Import components
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const DataAIPage = lazy(() => import('./pages/DataAIPage'));
const ElectronicsPage = lazy(() => import('./pages/ElectronicsPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const InterestsPage = lazy(() => import('./pages/InterestsPage'));
const ProfessionalPage = lazy(() => import('./pages/ProfessionalPage'));
const LifestyleMotivationPage = lazy(() => import('./pages/Lifestyle&MotivationPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Main App Component
function App() {
  useEffect(() => {
      warmBackend(); // fires once on app load, silently in background
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <div className="main-wrapper">
          <Header />
          
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<HomePage />} />
              
              {/* Section Routes */}
              <Route path="/data-ai-bi" element={<DataAIPage />} />
              <Route path="/electronics-automation" element={<ElectronicsPage />} />
              <Route path="/community-engagement" element={<CommunityPage />} />
              <Route path="/shared-interests" element={<InterestsPage />} />
              <Route path="/professional-summary" element={<ProfessionalPage />} />
              <Route path="/lifestyle-motivation" element={<LifestyleMotivationPage />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;