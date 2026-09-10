import { useState } from "react";
import "./counter.css";

function Counter() {
  const [students, setStudents] = useState(0);

  const increaseStudents = () => {
    setStudents(students + 1);
  };

  const decreaseStudents = () => {
    if (students > 0) {
      setStudents(students - 1);
    }
  };

  return (
    <section className="counter-section" id="nosotros">
      <h2>¿Cuántos estudiantes van a inscribirse?</h2>

      <p className="counter-subtitle">
        Usa los botones para ajustar el número
      </p>

      <div className="counter-box">
        <button
          type="button"
          onClick={decreaseStudents}
        >
          −
        </button>

        <span className="counter-number">
          {students}
        </span>

        <button
          type="button"
          onClick={increaseStudents}
        >
          +
        </button>
      </div>

      <p className="counter-label">
        estudiantes inscritos
      </p>
    </section>
  );
}

export default Counter;