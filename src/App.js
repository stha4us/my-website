// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';

// Child Component: Header
const Header = ({ onBackClick, showBack }) => {
  return (
    <div className="header">
      {showBack && (
        <button onClick={onBackClick} className="back-button">
          ← Back to Home
        </button>
      )}
      {!showBack && "Updates coming soon..."}
    </div>
  );
};

// Child Component: Profile Image Section
const ProfileImage = () => {
  return (
    <div className="profile-section">
      <img 
        src="https://raw.githubusercontent.com/stha4us/my-website/main/assets/file_00000000074861fba133676790d08862.png" 
        alt="Profile" 
        className="profile-image"
      />
    </div>
  );
};

// Child Component: Category Button
const CategoryButton = ({ title, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(title)}
      className="category-button"
    >
      {title}
    </button>
  );
};

// Child Component: Social Links
const SocialLinks = () => {
  const socialLinks = [
    { icon: 'fab fa-instagram', url: 'https://instagram.com/utsab199', label: 'Instagram' },
    { icon: 'fab fa-x-twitter', url: 'https://x.com/stha4us', label: 'X' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com/stha4us', label: 'Facebook' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/utsab-stha4us', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:utsab199@gmail.com', label: 'Email' }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

// HOME PAGE
const HomePage = ({ onNavigate }) => {
  const categories = [
    'DATA, AI & BI',
    'ELECTRONICS AUTOMATION',
    'COMMUNITY ENGAGEMENT',
    'SHARED INTERESTS'
  ];

  return (
    <div className="content-grid">
      <ProfileImage />
      
      <div className="text-section">
        <h1 className="greeting">
          Hello,<br />I am Utsab
        </h1>

        <p className="tagline">
          Let's explore for endless opportunities awaiting us!
        </p>

        <div className="button-group">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              title={category}
              onSelect={onNavigate}
            />
          ))}
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

// DATA, AI & BI PAGE
const DataAIPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Data, AI & Business Intelligence</h1>
      
      <div className="page-section">
        <h2>About This Domain</h2>
        <p>
          Transforming raw data into actionable insights using cutting-edge AI and BI tools.
          I specialize in building intelligent systems that drive business decisions and unlock
          the power of data-driven strategies.
        </p>
      </div>

      <div className="page-section">
        <h2>Core Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Machine Learning & Deep Learning</h3>
            <p>Building predictive models and neural networks for complex problem-solving.</p>
          </div>
          <div className="expertise-card">
            <h3>Data Visualization & Dashboards</h3>
            <p>Creating interactive dashboards that tell compelling data stories.</p>
          </div>
          <div className="expertise-card">
            <h3>Predictive Analytics</h3>
            <p>Forecasting trends and patterns to enable proactive decision-making.</p>
          </div>
          <div className="expertise-card">
            <h3>Business Intelligence Solutions</h3>
            <p>Implementing BI tools and strategies for organizational growth.</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Technologies</h2>
        <div className="tech-tags">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">TensorFlow</span>
          <span className="tech-tag">PyTorch</span>
          <span className="tech-tag">Tableau</span>
          <span className="tech-tag">Power BI</span>
          <span className="tech-tag">SQL</span>
          <span className="tech-tag">Pandas</span>
          <span className="tech-tag">Scikit-learn</span>
        </div>
      </div>
    </div>
  );
};

// ELECTRONICS AUTOMATION PAGE
const ElectronicsPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Electronics Automation</h1>
      
      <div className="page-section">
        <h2>About This Domain</h2>
        <p>
          Designing intelligent automation systems for modern industrial and home applications.
          Bridging the physical and digital worlds through innovative IoT solutions and smart systems.
        </p>
      </div>

      <div className="page-section">
        <h2>Core Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>IoT Device Integration</h3>
            <p>Connecting devices and sensors to create seamless smart ecosystems.</p>
          </div>
          <div className="expertise-card">
            <h3>Smart Home Systems</h3>
            <p>Building intelligent home automation solutions for enhanced living.</p>
          </div>
          <div className="expertise-card">
            <h3>Industrial Automation</h3>
            <p>Implementing PLCs and SCADA systems for manufacturing efficiency.</p>
          </div>
          <div className="expertise-card">
            <h3>Embedded Systems Development</h3>
            <p>Creating firmware and hardware solutions for specialized applications.</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Technologies</h2>
        <div className="tech-tags">
          <span className="tech-tag">Arduino</span>
          <span className="tech-tag">Raspberry Pi</span>
          <span className="tech-tag">ESP32</span>
          <span className="tech-tag">MQTT</span>
          <span className="tech-tag">Node-RED</span>
          <span className="tech-tag">C/C++</span>
          <span className="tech-tag">PCB Design</span>
        </div>
      </div>
    </div>
  );
};

// COMMUNITY ENGAGEMENT PAGE
const CommunityPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Community Engagement</h1>
      
      <div className="page-section">
        <h2>About This Domain</h2>
        <p>
          Building connections and fostering collaborative environments for growth and innovation.
          I believe in the power of community to drive learning, innovation, and positive change.
        </p>
      </div>

      <div className="page-section">
        <h2>Core Activities</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Tech Meetups & Workshops</h3>
            <p>Organizing and hosting events to share knowledge and connect people.</p>
          </div>
          <div className="expertise-card">
            <h3>Mentorship Programs</h3>
            <p>Guiding aspiring developers and tech enthusiasts in their journey.</p>
          </div>
          <div className="expertise-card">
            <h3>Open Source Contributions</h3>
            <p>Contributing to projects that benefit the wider tech community.</p>
          </div>
          <div className="expertise-card">
            <h3>Knowledge Sharing Sessions</h3>
            <p>Speaking at conferences and creating educational content.</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Get Involved</h2>
        <p>
          Interested in collaborating or joining our community events? 
          Reach out through social media or email to stay connected!
        </p>
      </div>
    </div>
  );
};

// SHARED INTERESTS PAGE
const InterestsPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Shared Interests</h1>
      
      <div className="page-section">
        <h2>About This Domain</h2>
        <p>
          Exploring diverse passions and connecting with like-minded individuals.
          Life is about continuous learning, creativity, and building meaningful connections.
        </p>
      </div>

      <div className="page-section">
        <h2>Core Interests</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Technology Innovation</h3>
            <p>Exploring cutting-edge technologies and emerging trends.</p>
          </div>
          <div className="expertise-card">
            <h3>Creative Problem Solving</h3>
            <p>Approaching challenges with innovative and out-of-the-box thinking.</p>
          </div>
          <div className="expertise-card">
            <h3>Continuous Learning</h3>
            <p>Always curious, always growing, always exploring new domains.</p>
          </div>
          <div className="expertise-card">
            <h3>Collaborative Projects</h3>
            <p>Working together to create something greater than the sum of its parts.</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Beyond Technology</h2>
        <p>
          When not coding or building circuits, I enjoy photography, reading about philosophy,
          and exploring nature. Always open to conversations about life, universe, and everything!
        </p>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
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