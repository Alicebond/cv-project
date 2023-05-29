export default function Experience(props) {
  return (
    <div className="general">
      <p>Experience: </p>
      <label htmlFor="company-name">Company Name: </label>
      <input
        type="text"
        id="company-name"
        name="company"
        alt="user's company name"
        value={props.company || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="position">Position Title: </label>
      <input
        type="text"
        id="position"
        name="position"
        alt="position title"
        value={props.position || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="tasks">Main Tasks: </label>
      <input
        type="text"
        id="tasks"
        name="tasks"
        alt="main tasks"
        value={props.tasks || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="date">Date: </label>
      <input
        type="text"
        id="date"
        name="companyDate"
        alt="date"
        value={props.companyDate || ""}
        onChange={props.handleChange}
      />
    </div>
  );
}
