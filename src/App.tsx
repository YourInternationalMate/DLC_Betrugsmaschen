import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">DLC Betrugsmaschen</h1>
          <div className="nav-links">
            <a href="#about">Über uns</a>
            <a href="#services">Services</a>
            <a href="#contact">Kontakt</a>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero" id="hero">
          <div className="hero-content">
            <h1>Willkommen bei DLC Betrugsmaschen</h1>
            <p className="hero-subtitle">
              Professionelle Aufklärung und Schutz vor Betrugsmaschen
            </p>
            <button className="cta-button">Mehr erfahren</button>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <h2>Über uns</h2>
            <p>
              Wir sind spezialisiert auf die Aufklärung und den Schutz vor verschiedenen 
              Betrugsmaschen. Unser Ziel ist es, Menschen zu informieren und zu schützen.
            </p>
            <div className="features">
              <div className="feature">
                <h3>Beratung</h3>
                <p>Professionelle Beratung zu Betrugsversuchen</p>
              </div>
              <div className="feature">
                <h3>Aufklärung</h3>
                <p>Umfassende Information über aktuelle Betrugsmaschen</p>
              </div>
              <div className="feature">
                <h3>Schutz</h3>
                <p>Präventive Maßnahmen zum Schutz vor Betrug</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <h2>Unsere Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Online-Betrug</h3>
                <p>Schutz vor Phishing, gefälschten Websites und Online-Betrug</p>
              </div>
              <div className="service-card">
                <h3>Telefon-Betrug</h3>
                <p>Aufklärung über Enkeltrick, falsche Polizisten und andere Telefonbetrügereien</p>
              </div>
              <div className="service-card">
                <h3>Investment-Betrug</h3>
                <p>Warnung vor unseriösen Anlageangeboten und Schneeballsystemen</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2>Kontakt</h2>
            <p>Haben Sie Fragen oder benötigen Sie Hilfe? Kontaktieren Sie uns!</p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> info@dlc-betrugsmaschen.de
              </div>
              <div className="contact-item">
                <strong>Telefon:</strong> +49 123 456 789
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 DLC Betrugsmaschen. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  )
}

export default App