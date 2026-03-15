// PROFESSIONAL SUMMARY PAGE
const ProfessionalPage = () => {
  const resumeLink = [
      { icon: 'fab fa-google-drive', url: 'https://docs.google.com/document/d/1hVlw-LCBRRiyOPoszCMa_kKiUOD12ScC-CvNVR-jkAs/edit?tab=t.0', label: 'Google' }
      ];
  return (
    <div className="page-content">
      <h1 className="page-title">Professional Summary</h1>
      
      <div className="page-section">
        <p>
          A strategic data professional with 10+ years of experience in tech and innovation, including
          over 8 years delivering scalable data platforms, cloud-native pipelines and advanced analytics
          solutions across insurance, auto club, retail & digital distribution, healthcare and public
          sector. Strong expertise in dimensional modelling, ELT/ETL frameworks, data warehousing,
          data governance and MLOPs pipeline. I specialize in building and optimising modern data
          architectures using python, AI and modern data stack to deliver secure, high performance
          and scalable data solutions that drive business value and enable impactful data-driven
          business decisions. 
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
            <p>Managing the data stores, maintaining and orchestrating end-to-end data pipeline. I specialize in building 
              robust data infrastructure that supports scalable operational, analytics and machine learning workloads.</p>
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
        </div>
      </div>

      <div className="page-section">
        <h2>Key Tech Domains</h2>
        <div className="tech-tags">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Snowflake</span>
          <span className="tech-tag">Power BI</span>
          <span className="tech-tag">Azure Cloud</span>
          <span className="tech-tag">DBT</span>
          <span className="tech-tag">SQL</span>
          <span className="tech-tag">Databricks</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">Neo4j</span>
          <span className="tech-tag">Databricks</span>
          <span className="tech-tag">Sparks</span>
          <span className="tech-tag">Airflow</span>
          <span className="tech-tag">Kafka</span>
          <span className="tech-tag">Docker</span>
          <span className="tech-tag">Tensorflow</span>
          <span className="tech-tag">BigQuery</span>
          <span className="tech-tag">Git</span>
          <span className="tech-tag">Azure DevOps</span>
          <span className="tech-tag">Github Actions</span>
          <span className="tech-tag">Power Apps</span>
          <span className="tech-tag">AWS Cloud</span>
          <span className="tech-tag">Synapse Analytics</span>
          <span className="tech-tag">3D Printing</span>
          <span className="tech-tag">Arduino</span>
          <span className="tech-tag">Raspberry Pi</span>
          <span className="tech-tag">ESP32</span>
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
    </div>
  );
};

export default ProfessionalPage;