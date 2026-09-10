import "./coursecard.css";

function CourseCard({ icon, title, description, level }) {
  return (
    <article className="course-card">
      <div className="course-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="course-level">{level}</span>
    </article>
  );
}

export default CourseCard;