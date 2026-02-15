import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isHome = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleBackClick = () => {
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo/Brand */}

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={isHome ? 'active' : ''}>
            <i className="fa fa-home"></i> Home
          </Link>
          <Link to="/data-ai" className={location.pathname === '/data-ai' ? 'active' : ''}>
            Data & AI
          </Link>
          <Link to="/electronics" className={location.pathname === '/electronics' ? 'active' : ''}>
            Electronics
          </Link>
          <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>
            Community
          </Link>
          <Link to="/interests" className={location.pathname === '/interests' ? 'active' : ''}>
            Interests
          </Link>
          <Link to="/professional" className={location.pathname === '/professional' ? 'active' : ''}>
            Professional
          </Link>
          <Link to="/lifestyle-motivation" className={location.pathname === '/lifestyle-motivation' ? 'active' : ''}>
            Lifestyle & Motivation
          </Link>
        </nav>

        {/* Back Button (for non-home pages) */}
        {/* {!isHome && (
          <button 
            className="back-button desktop-only" 
            onClick={handleBackClick}
            aria-label="Back to home"
          >
            ← Back to Home
          </button>
        )} */}

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={isHome ? 'active' : ''}>
          Home
        </Link>
        <Link to="/data-ai" className={location.pathname === '/data-ai' ? 'active' : ''}>
          Data & AI
        </Link>
        <Link to="/electronics" className={location.pathname === '/electronics' ? 'active' : ''}>
          Electronics
        </Link>
        <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>
          Community
        </Link>
        <Link to="/interests" className={location.pathname === '/interests' ? 'active' : ''}>
          Interests
        </Link>
        <Link to="/professional" className={location.pathname === '/professional' ? 'active' : ''}>
          Professional
        </Link>
        <Link to="/lifestyle-motivation" className={location.pathname === '/lifestyle-motivation' ? 'active' : ''}>
          Lifestyle & Motivation
        </Link>
      </nav>
    </header>
  );
};

export default Header;