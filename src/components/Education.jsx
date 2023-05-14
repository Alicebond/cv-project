import React from "react";
class Education extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="general">
        <p>Educattion: </p>
        <label htmlFor="school1">School: </label>
        <input
          type="text"
          id="school1"
          name="school"
          alt="school"
          value={this.props.school}
          onChange={this.props.handleChange}
        />
        <label htmlFor="major">Title of Study: </label>
        <input
          type="text"
          id="major"
          name="major"
          alt="major"
          value={this.props.major}
          onChange={this.props.handleChange}
        />
        <label htmlFor="date1">Date of Study: </label>
        <input
          type="text"
          id="date1"
          name="schoolDate"
          alt="date of study"
          value={this.props.schoolDate}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Education;
