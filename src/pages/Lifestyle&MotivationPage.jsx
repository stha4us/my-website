import { useApiCache } from '../hooks/useApiCache';

export default function LifestyleMotivationPage() {
// LIFESTYLE & MOTIVATION PAGE
  const { data: lifestyleOverviews, loading, error, refresh, isSlowLoad } = useApiCache('/api/section-key-values/');
  
  // Filter for only enabled home page content
  const lifestyleContent = lifestyleOverviews
    ?.filter(item => 
      item.page_overview.page === "lifestyle & motivation" && 
      item.page_overview.section === "journey learnings" && 
      item.enabled)
    ?? [];

  const lifestyleTricks = lifestyleOverviews
    ?.filter(item => 
      item.page_overview.page === "lifestyle & motivation" && 
      item.page_overview.section === "lifestyle tricks" && 
      item.enabled)
    ?? [];

  // ── Loading state ─────────────────────────────────────────────
  if (loading) {
  return (
    <div className="home-page">
      {isSlowLoad && (
        <p className="slow-load-notice">
          ⏳ Backend is waking up, this may take up to 60 seconds on first load…
        </p>
      )}
      <div className="loading-skeleton">Loading...</div>
    </div>
  );
}

  // ── Error state ───────────────────────────────────────────────
  if (error) {
    return (
      <div className="home-page">
        <div className="error-state">
          <p>Could not load page content.</p>
          <button onClick={refresh}>Try again</button>
        </div>
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────
  return (
    <div className="page-content">
      <h1 className="page-title">Lifestyle & Motivation</h1>
      
      <div className="page-section">
        <p>
          Here are possibly useful information, that could be useful at some point in life. All the findings are based on my personal
          experience and research. I am not a certified expert in any of these domains, but I am sharing what I have found useful in my life.
        </p>
      </div>

      <div className="page-section">
        <h2>Lifestyle Tricks</h2>

        <div className="expertise-grid">
          {lifestyleTricks.flatMap(item =>
            (item.data?.["tips&tricks"] ?? []).map((trick, index) => {
              const [title, description] = Object.entries(trick)[0] || [];

              return (
                <div className="expertise-card" key={`${item.id}-${index}`}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              );
            })
          )}
        </div>


        {/* I want a script here taking data from API*/}

          {/* Replace this block  */}
        {/* <h2>Lifestyle Tricks</h2>
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
            <h3>Removing price tags</h3>
            <p>Simply head the price tag under a low flame. A candle or lighter will do the trick (but be careful with lighter).
              The heat will loosen the adhesive, allowing you to peel off the tag easily without leaving residue behind.
            </p>
          </div>
          <div className="expertise-card">
            <h3>Whitening teeth instantly</h3>
            <p>Take a pinch of salt and mix it with pinch of turmeric powder. Now add few drops of edible oil (mustard oil preffered) to make a paste.
                Brush you teeth with this paste quickly all over. Now rinse your mouth with water and see the results.
                Please make sure you use an old used toothbrush for this as turmeric can stain the toothbrush.
            </p>
          </div>
          <div className="expertise-card">
            <h3>Getting rid of stubborn stains</h3>
            <p>Apply toothpaste on the stain and brush it with an old toothbrush gently for about a minute. Rub it with small lemon piece to apply lemon juice on the stain. 
              Now wash it with water and see the results.
            </p>
          </div>
        </div>
       */}
      {/* Until here Replace this block  */}
      </div>
      
      <div className="page-section">
        <h2>My Journey Learnings</h2>

        <div className="tech-tags">
          {
          // lifestyleContent.map(item => 
          // (
          //   <section key={item.id}> {/*className={`home-section home-section--${item.page_overview.section}`} */}
          //     {/* <p>{item.data.motivation}</p> */}
          //     {
          //       <div className="extra-fields">
          //         {Object.entries(item.data).map(([key, value]) => (
          //           <div key={key} className="extra-field">
          //             {/* <span className="extra-field__key">{key}:</span> */}
          //             {/* <span className="extra-field__value">{String(value)}</span> */}
          //             <ul>
          //               {value.map((motivation, index) => (
          //                 <span className="tech-tag">{motivation}<br/></span>
          //                 // <li key={index}>{motivation}</li> 
          //               ))}
          //             </ul>
          //           </div>
          //         ))}
          //       {/* </div> */}
          //     }
          //   </section>
          //   ))
          lifestyleContent.map(item =>
            item.data.motivation.map((motivation, index) => (
              <span key={`${item.id}-${index}`} className="tech-tag">
                {motivation}
              </span>
            ))
          )
            }
        </div>
      </div> 
    </div>
  );
}