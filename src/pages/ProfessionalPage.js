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
            <h3>Business Intelligence Solutions</h3>
            <p>Implementing BI tools, interactive dashboards and strategies for organizational growth.
              Transforming raw data into actionable insights using cutting-edge AI and BI tools. 
              I specialize in building intelligent systems that drive business decisions 
              and unlock the power of data-driven strategies.
            </p>
          </div>
          <div className="expertise-card">
            <h3>Machine Learning & Deep Learning</h3>
            <p>Building predictive models and neural networks for complex problem-solving. I specialize in 
              building solutions for forecasting trends and patterns to enable proactive decision-making.</p>
          </div>
          <div className="expertise-card">
            <h3>Data Engineering</h3>
            <p>Managing the data stores, maintaining and orchestrating end-to-end data pipeline.</p>
          </div>
          <div className="expertise-card">
            <h3>Robotics and automation</h3>
            <p>Bridging the physical and digital world through robotics, automation and IOT.
              I implement robotics domain for manufacturing efficiency. Side by side, 
              building intelligent automation solutions for enhanced living.
            </p>
          </div>
          <div className="expertise-card">
            <h3>IOT Integration & Embedded Systems</h3>
            <p>Connecting devices and sensors to create seamless smart ecosystems.
              Creating firmware and hardware solutions for specialized applications.
            </p>
          </div>
          <div className="expertise-card">
            <h3>Tech Meetups, Workshops & KSS</h3>
            <p>Organizing and hosting events to share knowledge and connect people.
               Creating and delivering educational content.
            </p>
          </div>
          <div className="expertise-card">
            <h3>Open Source Contributions</h3>
            <p>Contributing to projects that benefit the wider tech community.
              Guiding aspiring developers and tech enthusiasts in their journey
              through mentorship.
            </p>
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

export default ProfessionalPage;