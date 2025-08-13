import './index.css'

export default function App() {
  return (
    <div className="lm-page">
      <header className="lm-header">
        <div className="lm-container">
          <div className="lm-brand">Los Monstruos</div>
          <nav className="lm-nav">
            <a href="#features">Features</a>
            <a href="#gallery">Gallery</a>
            <a href="#download" className="lm-cta disabled" aria-disabled="true" title="Coming soon">App Store (TBD)</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="lm-hero" id="home">
          <div className="lm-container lm-hero-grid">
            <div className="lm-hero-copy">
              <span className="lm-beta">Beta v1 • Testing phase</span>
              <h1>Wolfenstein‑style 2.5D on iPhone & iPad</h1>
              <p>
                Custom ray‑casting engine in Swift 5 and SpriteKit. Sliding doors, secret walls, A* AI, hitscan & projectiles, power‑ups, and 3D audio.
              </p>
              <div className="lm-actions" id="download">
                <a className="lm-btn disabled" aria-disabled="true" title="App Store link TBD">Download on the App Store</a>
                <a className="lm-btn secondary" href="#" title="Join when available">Join Beta v1</a>
              </div>
            </div>
            <div className="lm-hero-media">
              <div className="lm-video-frame">
                <video className="lm-video" autoPlay muted loop playsInline poster="/videos/poster.jpg">
                  <source src="/videos/demo1.mp4" type="video/mp4" />
                </video>
                <div className="lm-video-caption">Gameplay preview</div>
              </div>
            </div>
          </div>
        </section>

        <section className="lm-section" id="features">
          <div className="lm-container">
            <h2>Engine & Gameplay</h2>
            <ul className="lm-features">
              <li><strong>2.5D Ray‑caster</strong>: DDA, fish‑eye correction, depth buffer.</li>
              <li><strong>Sprite rendering</strong>: Billboarded entities, correct depth sorting.</li>
              <li><strong>AI pathfinding</strong>: Grid A*, low‑frequency replanning.</li>
              <li><strong>Combat</strong>: Hitscan and projectile shooting.</li>
              <li><strong>World</strong>: Sliding doors, secret walls, collision, power‑ups.</li>
              <li><strong>Audio</strong>: Positional 3D with streaming MP3 BGM.</li>
              <li><strong>HUD</strong>: Health, ammo, minimap, and indicators.</li>
              <li><strong>Performance</strong>: Node reuse, column downsampling, profiling.</li>
            </ul>
          </div>
        </section>

        <section className="lm-section alt" id="gallery">
          <div className="lm-container">
            <h2>Gallery</h2>
            <div className="lm-gallery">
              <div className="lm-video-card">
                <video className="lm-video" autoPlay muted loop playsInline poster="/videos/poster1.jpg">
                  <source src="/videos/demo1.mp4" type="video/mp4" />
                </video>
                <div className="lm-video-caption">Combat and doors</div>
              </div>
              <div className="lm-video-card">
                <video className="lm-video" autoPlay muted loop playsInline poster="/videos/poster2.jpg">
                  <source src="/videos/demo2.mp4" type="video/mp4" />
                </video>
                <div className="lm-video-caption">AI pathfinding</div>
              </div>
              <div className="lm-video-card">
                <video className="lm-video" autoPlay muted loop playsInline poster="/videos/poster3.jpg">
                  <source src="/videos/demo3.mp4" type="video/mp4" />
                </video>
                <div className="lm-video-caption">Secrets & power‑ups</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="lm-footer">
        <div className="lm-container">
          <div>© {new Date().getFullYear()} Los Monstruos</div>
          <div className="lm-footer-right">Release date: TBD • iPhone & iPad</div>
        </div>
      </footer>
    </div>
  )
}
