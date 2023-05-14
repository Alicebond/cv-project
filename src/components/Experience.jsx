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
        <label htmlFor="company-name">Company Name: </label>
        <input
          type="text"
          id="company-name"
          name="company"
          alt="user's company name"
          value={this.props.company}
          onChange={this.props.handleChange}
        />
        <label htmlFor="position">Position Title: </label>
        <input
          type="text"
          id="position"
          name="position"
          alt="position title"
          value={this.props.position}
          onChange={this.props.handleChange}
        />
        <label htmlFor="tasks">Main Tasks: </label>
        <input
          type="text"
          id="tasks"
          name="tasks"
          alt="main tasks"
          value={this.props.tasks}
          onChange={this.props.handleChange}
        />
        <label htmlFor="date">Date: </label>
        <input
          type="text"
          id="date"
          name="companyDate"
          alt="date"
          value={this.props.companyDate}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Experience;
