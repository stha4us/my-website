// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';

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
        src="https://raw.githubusercontent.com/stha4us/my-website/main/assets/file_homepage_self_image.jpg" 
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
    'SHARED INTERESTS',
    'PROFESSIONAL SUMMARY'
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
        <h2>About: </h2>
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
            <div className="expertise-card">
            <h3>Data Engineering</h3>
            <p>Managing the data stores, maintaining and orchestrating end-to-end data pipeline.</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Technologies</h2>
        <div className="tech-tags">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">TensorFlow</span>
          <span className="tech-tag">Power BI</span>
          <span className="tech-tag">Tableau</span>
          <span className="tech-tag">DBT</span>
          <span className="tech-tag">SQL</span>
          <span className="tech-tag">Databricks</span>
          <span className="tech-tag">Sparks</span>
          <span className="tech-tag">Kafka</span>
          <span className="tech-tag">Docker</span>
          <span className="tech-tag">Snowflake</span>
          <span className="tech-tag">BigQuery</span>
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
        <h2>About: </h2>
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
            <p>Implementing robotics domain for manufacturing efficiency.</p>
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
          <span className="tech-tag">Raspberry Pi</span>
          <span className="tech-tag">Arduino</span>
          <span className="tech-tag">AVR</span>
          <span className="tech-tag">ESP32/NodeMCU</span>
          <span className="tech-tag">MQTT</span>
          <span className="tech-tag">Node-RED</span>
          <span className="tech-tag">C/C++</span>
          <span className="tech-tag">3D Printing</span>
          <span className="tech-tag">Drone Technology</span>
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
        <h2>About: </h2>
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
            <h3>Mentorship</h3>
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
    <div className="page-with-image">
      <div className="page-image-section">
        <img 
        src="https://raw.githubusercontent.com/stha4us/my-website/main/assets/file_team_posture.png" 
        alt="Profile" 
        className="page-profile-image"
        />
      </div>
      
      <div className="page-text-section">
      <h1 className="page-title">Shared Interests</h1>
      
      <div className="page-section">
        <h2>About: </h2>
        <p>
          Exploring diverse passions and connecting with like-minded individuals.
          Life is about continuous learning, creativity, enjoying the interests and building meaningful connections.
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
            <h3>Pets, Wildlifes & Nature</h3>
            <p>Explore the vast wilderness of nature and yes I love dogs and any pets that are not too aggresive! .</p>
          </div>
          <div className="expertise-card">
            <h3>Continuous Learning</h3>
            <p>Always curious, always growing, always exploring new domains.</p>
          </div>
          <div className="expertise-card">
            <h3>Gaming and Sports</h3>
            <p>Enjoying creativity and enhusiasm of people. Pokemon, COC, Marvels COC, Cricket, Fifa, Super Mario </p>
          </div>
          <div className="expertise-card">
            <h3>Self care</h3>
            <p> I enjoy pushing my body to get better in shape. I enjoy doing light workouts, cardios, running, walking, meditation, yoga and bit of stretching.</p>
          </div>
          <div className="expertise-card">
            <h3>Animie(s) and Sci-Fi</h3>
            <p> Follower of Marvel, DC, DBZ, Pokemon, Digimon, One punch man.</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Beyond </h2>
        <p>
          When not working, I enjoy gaming, self care(as above) reading about philosophy, and exploring nature. 
          Always open to conversations about life, universe, and everything!
        </p>
      </div>
    </div>
  </div>
  );
};

// PROFESSIONAL SUMMARY PAGE
const ProfessionalPage = () => {
  const resumeLink = [
      { icon: 'fab fa-google-drive', url: 'https://docs.google.com/document/d/1hVlw-LCBRRiyOPoszCMa_kKiUOD12ScC-CvNVR-jkAs/edit?tab=t.0', label: 'Instagram' }
      ];
  return (
    <div className="page-content">
      <h1 className="page-title">Professional Summary</h1>
      
      <div className="page-section">
        <p>
          A tech enthusiasts with more than 7 years of experience in Data, BI and ML domain grounded in 10+ years 
          of professional experience in IT & Tech world. Passionate to explore endless opportunities in the data world,
          I specialize in transforming raw data into analytical and predictive solutions leveraging python, AI and 
          data tools to make better data-driven decisions.
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
            <h3>Business Intelligence Solutions</h3>
            <p>Implementing BI tools, reporting and strategies for organizational growth.</p>
          </div>
          <div className="expertise-card">
            <h3>Data Engineering</h3>
            <p>Managing the data stores, maintaining and orchestrating end-to-end data pipeline.</p>
          </div>
          <div className="expertise-card">
            <h3>Robotics and automation</h3>
            <p>Bridging the physical and digital world through robotics, automation and IOT.</p>
          </div>
          
        </div>
      </div>

      <div className="social-links">
        {resumeLink.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <i className={link.icon}></i> Request Resume
          </a>
        ))}
      </div>
      
      <div className="page-section">
        <h2>Key Domains</h2>
        <div className="tech-tags">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">TensorFlow</span>
          <span className="tech-tag">Power BI</span>
          <span className="tech-tag">Tableau</span>
          <span className="tech-tag">DBT</span>
          <span className="tech-tag">SQL</span>
          <span className="tech-tag">Databricks</span>
          <span className="tech-tag">Sparks</span>
          <span className="tech-tag">Kafka</span>
          <span className="tech-tag">Docker</span>
          <span className="tech-tag">Snowflake</span>
          <span className="tech-tag">BigQuery</span>
          <span className="tech-tag">3D-Printing</span>
          <span className="tech-tag">Arduino</span>
          <span className="tech-tag">Raspberry-Pi</span>
          <span className="tech-tag">Power-Apps</span>
          <span className="tech-tag">AWS Cloud</span>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize state from sessionStorage, URL or default to 'home'
  const [currentPage, setCurrentPage] = useState(() => {
  // const [currentPage, setCurrentPage] = useState('home');
  // First check URL
  const pathPage = location.pathname.slice(1); // Remove leading '/'
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