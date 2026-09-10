import "./header.css";

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="logo">
        ReactAcademy
      </a>

      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#cursos">Cursos</a>
        <a href="#nosotros">Nosotros</a>
      </nav>
    </header>
  );
}

export default Header;