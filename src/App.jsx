import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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
              <Route path="/data-ai" element={<DataAIPage />} />
              <Route path="/electronics" element={<ElectronicsPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/interests" element={<InterestsPage />} />
              <Route path="/professional" element={<ProfessionalPage />} />
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