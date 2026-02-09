// COMMUNITY ENGAGEMENT PAGE
const CommunityPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Community Engagement</h1>
      
      <div className="page-section">
        <h2>Overview</h2>
        <p>
          Building connections and fostering collaborative environments for growth and innovation is 
          the demand of modern era. I believe in the power of community to drive learning, innovation, 
          and positive change.
        </p>
      </div>

      <div className="page-section">
        <h2>Activities</h2>
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
          Interested in collaborating or joining community events? 
          Reach out through social media or email to stay connected!
        </p>
      </div>
    </div>
  );
};

export default CommunityPage;