import './index.css'
import { useState } from 'react'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="lm-page">
      <header className="lm-header">
        <div className="lm-container">
          <div className="lm-brand">Feliz Software</div>
          <nav className={`lm-nav ${isMenuOpen ? 'open' : ''}`}>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
            <a 
              href="#features" 
              className={activeSection === 'features' ? 'active' : ''}
              onClick={() => scrollToSection('features')}
            >
              Features
            </a>
            <a 
              href="#gallery" 
              className={activeSection === 'gallery' ? 'active' : ''}
              onClick={() => scrollToSection('gallery')}
            >
              Gallery
            </a>
            <a 
              href="#download" 
              className="lm-cta disabled" 
              aria-disabled="true" 
              title="Coming soon"
            >
              App Store (TBD)
            </a>
            <button 
              className="lm-mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="lm-hero" id="home">
          <div className="lm-container lm-hero-grid">
            <div className="lm-hero-copy">
              <span className="lm-beta">Beta v1 • Testing phase</span>
              <h1>Los Monstruos - Wolfenstein‑style 2.5D on iPhone & iPad</h1>
              <p>
                Experience the thrill of classic first-person shooting with our custom ray‑casting engine built in Swift 5 and SpriteKit. 
                Features sliding doors, secret walls, intelligent AI enemies, multiple weapon types, and immersive 3D audio.
              </p>
              <div className="lm-actions" id="download">
                <a className="lm-btn disabled" aria-disabled="true" title="App Store link TBD">
                  Download on the App Store
                </a>
                <a className="lm-btn secondary" href="#beta-signup" title="Join when available">
                  Join Beta v1
                </a>
              </div>
              <div className="lm-stats">
                <div className="lm-stat">
                  <span className="lm-stat-number">60</span>
                  <span className="lm-stat-label">FPS Target</span>
                </div>
                <div className="lm-stat">
                  <span className="lm-stat-number">3</span>
                  <span className="lm-stat-label">Weapon Types</span>
                </div>
                <div className="lm-stat">
                  <span className="lm-stat-number">A*</span>
                  <span className="lm-stat-label">AI Pathfinding</span>
                </div>
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
            <h2>Engine & Gameplay Features</h2>
            <div className="lm-features-grid">
              <div className="lm-feature-card">
                <div className="lm-feature-icon">🎯</div>
                <h3>Custom Ray-caster</h3>
                <p>DDA algorithm with fish‑eye correction, depth buffer, and optimized rendering for smooth 60fps gameplay.</p>
              </div>
              <div className="lm-feature-card">
                <div className="lm-feature-icon">👻</div>
                <h3>Sprite Rendering</h3>
                <p>Billboarded entities with correct depth sorting, occlusion culling, and perspective projection.</p>
              </div>
              <div className="lm-feature-card">
                <div className="lm-feature-icon">🧠</div>
                <h3>AI Pathfinding</h3>
                <p>Grid-based A* algorithm with low‑frequency replanning and intelligent enemy behavior.</p>
              </div>
              <div className="lm-feature-card">
                <div className="lm-feature-icon">🔫</div>
                <h3>Combat System</h3>
                <p>Hitscan and projectile shooting with multiple weapon types and damage calculations.</p>
              </div>
              <div className="lm-feature-card">
                <div className="lm-feature-icon">🚪</div>
                <h3>Interactive World</h3>
                <p>Sliding doors, secret walls, collision detection, and collectible power‑ups.</p>
              </div>
              <div className="lm-feature-card">
                <div className="lm-feature-icon">🎵</div>
                <h3>3D Audio</h3>
                <p>Positional audio with distance attenuation and streaming MP3 background music.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lm-section alt" id="gallery">
          <div className="lm-container">
            <h2>Gameplay Gallery</h2>
            <div className="lm-gallery">
              <div className="lm-video-card">
                <video className="lm-video" autoPlay muted loop playsInline poster="/videos/poster1.jpg">
                  <source src="/videos/demo1.mp4" type="video/mp4" />
                </video>
                <div className="lm-video-caption">Combat and Interactive Doors</div>
                <p>Experience smooth combat mechanics and discover hidden passages through interactive doors.</p>
              </div>
              <div className="lm-video-card">
                <video className="lm-video" autoPlay muted loop playsInline poster="/videos/poster2.jpg">
                  <source src="/videos/demo2.mp4" type="video/mp4" />
                </video>
                <div className="lm-video-caption">AI Pathfinding & Enemies</div>
                <p>Watch intelligent enemies navigate the environment using advanced A* pathfinding algorithms.</p>
              </div>
              <div className="lm-video-card">
                <video className="lm-video" autoPlay muted loop playsInline poster="/videos/poster3.mp4">
                  <source src="/videos/demo3.mp4" type="video/mp4" />
                </video>
                <div className="lm-video-caption">Secrets & Power‑ups</div>
                <p>Explore hidden areas and collect power-ups to enhance your combat capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lm-section" id="tech-specs">
          <div className="lm-container">
            <h2>Technical Specifications</h2>
            <div className="lm-specs">
              <div className="lm-spec-group">
                <h3>Performance</h3>
                <ul>
                  <li><strong>Target FPS:</strong> 60 FPS on modern devices</li>
                  <li><strong>Render Resolution:</strong> Configurable column downsampling</li>
                  <li><strong>Memory Management:</strong> Efficient node reuse and pooling</li>
                  <li><strong>Optimization:</strong> Frustum culling and depth testing</li>
                </ul>
              </div>
              <div className="lm-spec-group">
                <h3>Graphics</h3>
                <ul>
                  <li><strong>Engine:</strong> Custom ray-casting with SpriteKit</li>
                  <li><strong>Rendering:</strong> 2.5D perspective projection</li>
                  <li><strong>Effects:</strong> Dynamic lighting and shading</li>
                  <li><strong>Platform:</strong> iOS 16.0+ (iPhone & iPad)</li>
                </ul>
              </div>
              <div className="lm-spec-group">
                <h3>Audio</h3>
                <ul>
                  <li><strong>3D Audio:</strong> Positional sound with distance</li>
                  <li><strong>Format:</strong> MP3 streaming for background music</li>
                  <li><strong>Effects:</strong> Spatial audio for immersive gameplay</li>
                  <li><strong>Framework:</strong> AVFoundation integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="lm-section alt" id="beta-signup">
          <div className="lm-container">
            <h2>Join the Beta</h2>
            <p className="lm-beta-desc">
              Be among the first to experience Los Monstruos. Sign up for early access and help shape the future of mobile gaming.
            </p>
            <div className="lm-signup-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="lm-email-input"
              />
              <button className="lm-btn">Notify Me</button>
            </div>
            <div className="lm-beta-benefits">
              <div className="lm-benefit">
                <span className="lm-benefit-icon">🎮</span>
                <span>Early access to new features</span>
              </div>
              <div className="lm-benefit">
                <span className="lm-benefit-icon">💬</span>
                <span>Direct feedback to developers</span>
              </div>
              <div className="lm-benefit">
                <span className="lm-benefit-icon">🏆</span>
                <span>Exclusive beta tester badge</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="lm-footer">
        <div className="lm-container">
          <div className="lm-footer-content">
            <div className="lm-footer-left">
              <div className="lm-footer-brand">Feliz Software</div>
              <div className="lm-footer-tagline">Los Monstruos - Classic FPS gaming reimagined for mobile</div>
            </div>
            <div className="lm-footer-right">
              <div className="lm-footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#support">Support</a>
              </div>
              <div className="lm-footer-release">Release date: Q1 2025 • iPhone & iPad</div>
            </div>
          </div>
          <div className="lm-footer-bottom">
            <div>© {new Date().getFullYear()} Feliz Software. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
