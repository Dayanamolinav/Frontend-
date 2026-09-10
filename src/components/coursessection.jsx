import CourseCard from "./coursecard";
import "./coursessection.css";

function CoursesSection() {
  const courses = [
    {
      id: 1,
      icon: "⚛️",
      title: "React Básico",
      description:
        "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
      level: "Principiante",
    },
    {
      id: 2,
      icon: "🔁",
      title: "React Hooks",
      description:
        "Profundiza en useState, useEffect y crea tus propios custom hooks.",
      level: "Intermedio",
    },
    {
      id: 3,
      icon: "🗂️",
      title: "Estado Global",
      description:
        "Gestiona el estado con Context API y aprende cuándo usarlo.",
      level: "Intermedio",
    },
    {
      id: 4,
      icon: "🚀",
      title: "React Avanzado",
      description:
        "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
      level: "Avanzado",
    },
  ];

  return (
    <section className="courses-section" id="cursos">
      <div className="courses-container">

        <div className="courses-heading">
          <h2>Nuestros Cursos</h2>
          <p>Elige el camino que mejor se adapte a ti</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              icon={course.icon}
              title={course.title}
              description={course.description}
              level={course.level}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CoursesSection;