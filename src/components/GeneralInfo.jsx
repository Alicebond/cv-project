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
          value={this.props.firstName}
          onChange={this.props.handleChange}
        />
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          alt="user last name"
          value={this.props.lastName}
          onChange={this.props.handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          alt="user email"
          value={this.props.email}
          onChange={this.props.handleChange}
        />
        <label htmlFor="phone-number">Phone Number: </label>
        <input
          type="tel"
          id="phone-number"
          name="phone"
          alt="user phone number"
          value={this.props.phone}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default GeneralInfo;
