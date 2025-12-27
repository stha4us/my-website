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

export default InterestsPage;