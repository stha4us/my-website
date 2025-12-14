// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';

// Child Component: Header
const Header = () => {
  return (
    <div className="header text-lg italic text-gray-600 mb-10">
      Updates coming soon...
    </div>
  );
};

// Child Component: Profile Image Section
const ProfileImage = () => {
  return (
    <div className="profile-section relative">
      <img 
        src="https://raw.githubusercontent.com/stha4us/my-website/main/assets/file_00000000074861fba133676790d08862.png" 
        alt="Profile" 
        className="profile-image w-full max-w-[500px] h-auto grayscale rounded"
      />
    </div>
  );
};

// Child Component: Category Button
const CategoryButton = ({ title, onSelect, isActive }) => {
  return (
    <button
      onClick={() => onSelect(title)}
      className={`category-button w-full py-5 px-10 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
        isActive 
          ? 'bg-gray-700 text-white shadow-lg' 
          : 'bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-1 hover:shadow-md'
      }`}
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
    <div className="social-links flex gap-8 mt-16">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-800 text-2xl transition-colors duration-300 hover:text-gray-600"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

// Child Component: Content Detail Pages
const ContentDetail = ({ category }) => {
  const content = {
    'DATA, AI & BI': {
      title: 'Data, AI & Business Intelligence',
      description: 'Transforming raw data into actionable insights using cutting-edge AI and BI tools.',
      points: [
        'Machine Learning & Deep Learning',
        'Data Visualization & Dashboards',
        'Predictive Analytics',
        'Business Intelligence Solutions'
      ]
    },
    'ELECTRONICS AUTOMATION': {
      title: 'Electronics Automation',
      description: 'Designing intelligent automation systems for modern industrial and home applications.',
      points: [
        'IoT Device Integration',
        'Smart Home Systems',
        'Industrial Automation',
        'Embedded Systems Development'
      ]
    },
    'COMMUNITY ENGAGEMENT': {
      title: 'Community Engagement',
      description: 'Building connections and fostering collaborative environments for growth and innovation.',
      points: [
        'Tech Meetups & Workshops',
        'Mentorship Programs',
        'Open Source Contributions',
        'Knowledge Sharing Sessions'
      ]
    },
    'SHARED INTERESTS': {
      title: 'Shared Interests',
      description: 'Exploring diverse passions and connecting with like-minded individuals.',
      points: [
        'Technology Innovation',
        'Creative Problem Solving',
        'Continuous Learning',
        'Collaborative Projects'
      ]
    }
  };

  const currentContent = content[category];

  return (
    <div className="content-detail mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
      <p className="text-lg text-gray-600 mb-6">{currentContent.description}</p>
      <ul className="space-y-3">
        {currentContent.points.map((point, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Child Component: Text Section with Greeting
const TextSection = ({ selectedCategory, onCategorySelect }) => {
  const categories = [
    'DATA, AI & BI',
    'ELECTRONICS AUTOMATION',
    'COMMUNITY ENGAGEMENT',
    'SHARED INTERESTS'
  ];

  return (
    <div className="text-section p-5">
      <h1 className="greeting text-6xl md:text-7xl font-bold leading-tight mb-8">
        Hello,<br />I am Utsab
      </h1>

      <p className="tagline text-xl text-gray-600 mb-10">
        Let's explore for endless opportunities awaiting us!
      </p>

      <div className="button-group flex flex-col gap-5 mb-16">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            title={category}
            onSelect={onCategorySelect}
            isActive={selectedCategory === category}
          />
        ))}
      </div>

      {selectedCategory && <ContentDetail category={selectedCategory} />}

      <SocialLinks />
    </div>
  );
};

// Main App Component (Base Template)
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (      
      <div className="app-container min-h-screen bg-gray-100 font-serif">
        <div className="main-wrapper max-w-7xl mx-auto px-5 py-10">
          <Header />

          <div className="content-grid grid md:grid-cols-2 gap-16 items-start">
            <div className="order-2 md:order-1">
              <ProfileImage />
            </div>

            <div className="order-1 md:order-2">
              <TextSection 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
  );
}