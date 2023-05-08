import React from "react";
class Experience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="general">
        <p>Experience: </p>
        <lable htmlFor="company-name">Company Name: </lable>
        <input
          type="text"
          id="company-name"
          name="company"
          alt="user's company name"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="position">Position Title: </lable>
        <input
          type="text"
          id="position"
          name="position"
          alt="position title"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="tasks">Main tasks: </lable>
        <input
          type="text"
          id="tasks"
          name="tasks"
          alt="main tasks"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="date">Date: </lable>
        <input
          type="text"
          id="date"
          name="company-date"
          alt="date"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Experience;
