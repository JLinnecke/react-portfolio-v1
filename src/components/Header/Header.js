export default function Header({ logo }) {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />

      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
