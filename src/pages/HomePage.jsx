import ProfileImage from '../components/ProfileImage';
// import CategoryButton from '../components/CategoryButton';
import SocialLinks from '../components/SocialLinks';
// import { useState, useEffect } from 'react';
// import apiService from '../services/api';
// import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  // const [sections, setSections] = useState([]);

  // const navigate = useNavigate();

  // const categories = [
  //   'DATA, AI & BI',
  //   'ELECTRONICS AUTOMATION',
  //   'COMMUNITY ENGAGEMENT',
  //   'SHARED INTERESTS',
  //   'PROFESSIONAL SUMMARY',
  //   'LIFESTYLE & MOTIVATION'
  // ];
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
        
  //       // Fetch profile, sections, and featured projects
  //       const [sectionsData] = await Promise.all([
  //         apiService.getSections(),
  //       ]);
  //       setSections(sectionsData);
  //       setError(null);
  //     } catch (err) {
  //       console.error('Error fetching data:', err);
  //       setError('Failed to load content. Please try again later.');
  //       const [sectionsData] = [
  //         'DATA, AI & BI',
  //         'ELECTRONICS AUTOMATION',
  //         'COMMUNITY ENGAGEMENT',
  //         'SHARED INTERESTS',
  //         'PROFESSIONAL SUMMARY',
  //         'LIFESTYLE - TIPS & TRICKS'
  //       ];
  //       setSections(sectionsData);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="home-page loading">
  //       <div className="loader">Loading...</div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="home-page error">
  //       <p>{error}</p>
  //     </div>
  //   );
  // }

  // const handleCategorySelect = (category) => {
  //   const routeMap = {
  //     'DATA, AI & BI': '/data-ai-bi',
  //     'ELECTRONICS AUTOMATION': '/electronics',
  //     'COMMUNITY ENGAGEMENT': '/community',
  //     'SHARED INTERESTS': '/interests',
  //     'PROFESSIONAL SUMMARY': '/professional',
  //     'LIFESTYLE & MOTIVATION': '/lifestyle-motivation'
  //   };
  //   navigate(routeMap[category]);
  // };

  return (
  <div className="content-grid">
    <ProfileImage />
    <div className="text-section">
      <h1 className="greeting">
        Hello,<br />I am Utsab
      </h1>

      {/* <div className="button-group">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            title={category}
            onSelect={handleCategorySelect}
          />
        ))}
      </div> */}
      <div className="description-home">
          An introvert guy who likes meeting people, exploring communities and expanding the circle :). I listen, admire and sometimestake a moment before speaking; so please have 
          some patience and you won't regret it. I like good food, pets, tech talks and fitness alongside sustainable living.
          <br></br>
          <br></br>
          Prefessionally I am a data & analytics professional with over 8 years of experience in Data Engineering, Business Intelligence, Machine Learning, analytics and forecasting. Grounded in 10+ years 
          of professional experience in IT & tech innovation, I am passionate to explore endless opportunities in the data world, leveraging python, AI and 
          modern data stack. I specialize in translating complex data into actionable insights, supporting data governance and security practices,
          and building scalable, reliable data systems that enable informed data driven decision-making. 
        </div>
      <p className="tagline">
        Let's explore for endless opportunities awaiting us!
      </p>
      <SocialLinks />
    </div>
  </div>
  );
};

export default HomePage;