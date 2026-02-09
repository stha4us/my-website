// ELECTRONICS AUTOMATION PAGE
const ElectronicsPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Electronics Automation</h1>
      
      <div className="page-section">
        <h2>Overview</h2>
        <p>
          Electronics automation incorporates designing intelligent automation systems for modern industrial, 
          commercial, and home applications implementing principles of electronics engineering. It helps to 
          bridge the gap between physical and digital worlds through innovative IoT solutions and smart systems.
        </p>
      </div>

      <div className="page-section">
        <h2>Major Domains</h2>
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
        <h2>Helpful Tools & Technologies</h2>
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

export default ElectronicsPage;