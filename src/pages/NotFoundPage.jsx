import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>
        
        <div className="not-found-actions">
          <Link to="/" className="home-link">
            ← Back to Home
          </Link>
        </div>

        <div className="suggested-links">
          <p>You might be interested in:</p>
          <div className="links-grid">
            <Link to="/data-ai">Data, AI & BI</Link>
            <Link to="/electronics">Electronics Automation</Link>
            <Link to="/interests">Shared Interests</Link>
            <Link to="/community">Community Engagement</Link>
            <Link to="/professional">Professional Summary</Link>
            <Link to="/tips-tricks">Tips & Tricks</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;