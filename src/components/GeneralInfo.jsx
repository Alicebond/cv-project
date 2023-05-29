export default function GeneralInfo(props) {
  return (
    <div className="general">
      <p>General Information: </p>
      <label htmlFor="first-name">First Name: </label>
      <input
        type="text"
        id="first-name"
        name="firstName"
        alt="user first name"
        value={props.firstName || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="last-name">Last Name: </label>
      <input
        type="text"
        id="last-name"
        name="lastName"
        alt="user last name"
        value={props.lastName || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        alt="user email"
        value={props.email || ""}
        onChange={props.handleChange}
      />
      <label htmlFor="phone-number">Phone Number: </label>
      <input
        type="tel"
        id="phone-number"
        name="phone"
        alt="user phone number"
        value={props.phone || ""}
        onChange={props.handleChange}
      />
    </div>
  );
}
