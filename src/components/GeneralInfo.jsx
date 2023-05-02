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
        <input type="text" id="first-name" alt="user first name" />
        <lable htmlFor="last-name">Last Name: </lable>
        <input type="text" id="last-name" alt="user last name" />
        <lable htmlFor="email">Email: </lable>
        <input type="email" id="email" alt="user email" />
        <lable htmlFor="phone-number">Phone Number: </lable>
        <input type="tel" id="phone-number" alt="user phone number" />
      </div>
    );
  }
}
export default GeneralInfo;
