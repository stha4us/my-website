import ProfileImage from '../components/ProfileImage';
import CategoryButton from '../components/CategoryButton';
import SocialLinks from '../components/SocialLinks';

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

export default HomePage;