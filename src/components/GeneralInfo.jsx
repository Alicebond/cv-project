import React from "react";
class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="general">
        <p>General Information: </p>
        <label htmlFor="first-name">First Name: </label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          alt="user first name"
          onChange={this.props.handleChange}
        />
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          alt="user last name"
          onChange={this.props.handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          alt="user email"
          onChange={this.props.handleChange}
        />
        <label htmlFor="phone-number">Phone Number: </label>
        <input
          type="tel"
          id="phone-number"
          name="phone"
          alt="user phone number"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default GeneralInfo;
