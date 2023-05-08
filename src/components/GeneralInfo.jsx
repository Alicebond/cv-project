import React from "react";
class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="general">
        <p>General Information: </p>
        <lable htmlFor="first-name">First Name: </lable>
        <input
          type="text"
          id="first-name"
          name="first-name"
          alt="user first name"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="last-name">Last Name: </lable>
        <input
          type="text"
          id="last-name"
          name="last-name"
          alt="user last name"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="email">Email: </lable>
        <input
          type="email"
          id="email"
          name="email"
          alt="user email"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="phone-number">Phone Number: </lable>
        <input
          type="tel"
          id="phone-number"
          name="phone-number"
          alt="user phone number"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default GeneralInfo;
