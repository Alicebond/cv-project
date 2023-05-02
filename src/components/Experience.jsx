import React from "react";
class Experience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="general">
        <p>Experience: </p>
        <lable htmlFor="company-name">Company Name: </lable>
        <input type="text" id="company-name" alt="user's company name" />
        <lable htmlFor="position">Position Title: </lable>
        <input type="text" id="position" alt="position title" />
        <lable htmlFor="tasks">Main tasks: </lable>
        <input type="text" id="tasks" alt="main tasks" />
        <lable htmlFor="date">Date: </lable>
        <input type="text" id="date" alt="date" />
      </div>
    );
  }
}
export default Experience;
