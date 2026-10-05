export default function Hero({ applicationImg }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Junior Frontend Developer</h1>

        <div className="hero-line" />

        <h2 className="hero-name">Johannes Linnecke</h2>

        <p>
          Nach zwölf Jahren bei der Bundeswehr und meiner Ausbildung zum
          Fachinformatiker für Systemintegration habe ich mich beruflich neu in
          Richtung Webentwicklung orientiert. Seit 2023 bilde ich mich
          kontinuierlich weiter und habe meinen Schwerpunkt auf moderne
          Frontend-Entwicklung mit JavaScript und React gelegt. Mein Ziel ist
          der professionelle Einstieg in die Web- und Softwareentwicklung, bei
          dem ich meine bisherigen Kenntnisse einbringen und mich fachlich
          kontinuierlich weiterentwickeln kann.
        </p>

        <div className="hero-icons">
          <div className="hero-info-item">
            <img
              src="/imgs/icons/location.webp"
              alt="location Bad Bodenteich"
            />
            <span>Bad Bodenteich</span>
          </div>

          <div className="hero-info-item">
            <img src="/imgs/icons/work.webp" alt="work Remote / Hybrid" />
            <span>Remote / Hybrid</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a className="btn" href="#projects">
            Projects
          </a>

          <a className="btn" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img src={applicationImg} alt="J. Linnecke" className="profile-img" />

        <div className="hero-skills">
          <a href="#skills">
            <img src="/imgs/skills/javascript-plain.svg" alt="JavaScript" />
          </a>

          <a href="#skills">
            <img src="/imgs/skills/react-original.svg" alt="React" />
          </a>
        </div>
      </div>
    </section>
  );
}
