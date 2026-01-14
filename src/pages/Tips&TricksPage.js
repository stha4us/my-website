// TIPS & TRICKS PAGE
const TipsnTricksPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Tips & Tricks</h1>
      
      <div className="page-section">
        <p>
          Here are some possibly useful information, that could be useful at some point in the future.
        </p>
      </div>

      <div className="page-section">
        <h2>Tricks</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Folding T-shirts</h3>
            <p>Pinch left shoulder with right hand then come straight down halfway & pinch with left hand on this point.
                Bring your right hand over left hand while still holding the T-shirt in both hands. Now flick it and see the magic!
                Fold once more to complete the T-shirt folding.
            </p>
          </div>
          <div className="expertise-card">
            <h3>Dealing with Hiccups</h3>
            <p>Take multiple sips of water (about 6-10 sips) in quick succession. 
                Now take a long deep breath and hold it for as long as you can (Don't overdo else you might pass out). 
                Close your nose with your fingers to make sure no air escapes. Now slowly release the breath. 
                This should help in getting rid of hiccups.
            </p>
          </div>
          <div className="expertise-card">
            <h3>More coming soon</h3>
            <p>...</p>
          </div>
        </div>
      </div>
      
      <div className="page-section">
        <h2>Tips</h2>
        <div className="tech-tags">
          <span className="tech-tag">To overcome procrastination beat your future self & do it now. </span>
          <span className="tech-tag">If you can do anything within next 5 min, do it now.</span>
          <span className="tech-tag">Schedule a calendar and routine, not a to do list.</span>
          <span className="tech-tag">Understanding problem is winning 1/2 of the battle.</span>
          <span className="tech-tag">Live in present before you treasure the moment in future.</span>
        </div>
      </div>
    </div>
  );
};

export default TipsnTricksPage;