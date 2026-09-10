import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>
          Aprende <span>React</span> desde cero
        </h1>

        <p>
          Domina la librería más popular del frontend con proyectos
          prácticos y reales.
        </p>

        <a href="#cursos" className="hero-button">
          Ver Cursos
        </a>
      </div>
    </section>
  );
}

export default Hero;