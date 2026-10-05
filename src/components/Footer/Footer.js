export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-legal">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <span>© 2026 Johannes Linnecke</span>
      </div>

      <div className="footer-icons">
        <a href="https://github.com/JLinnecke" target="_blank" rel="noreferrer">
          <img src="/imgs/skills/github-original.svg" alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/johannes-linnecke/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/imgs/skills/linkedin-plain.svg" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
