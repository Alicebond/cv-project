export default function Education(props) {
  return (
    <div className="general">
      <p>Educattion: </p>
      <label htmlFor="school1">School: </label>
      <input
        type="text"
        id="school1"
        name="school"
        alt="school"
        value={props.school || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="major">Title of Study: </label>
      <input
        type="text"
        id="major"
        name="major"
        alt="major"
        value={props.major || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="date1">Date of Study: </label>
      <input
        type="text"
        id="date1"
        name="schoolDate"
        alt="date of study"
        value={props.schoolDate || ""}
        onChange={props.handleChange}
      />
    </div>
  );
}
