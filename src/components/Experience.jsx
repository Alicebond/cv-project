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
          onChange={this.props.handleChange}
        />
        <label htmlFor="position">Position Title: </label>
        <input
          type="text"
          id="position"
          name="position"
          alt="position title"
          onChange={this.props.handleChange}
        />
        <label htmlFor="tasks">Main tasks: </label>
        <input
          type="text"
          id="tasks"
          name="tasks"
          alt="main tasks"
          onChange={this.props.handleChange}
        />
        <label htmlFor="date">Date: </label>
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
