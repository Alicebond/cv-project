import React from "react";
class Education extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="general">
        <p>Educattion: </p>
        <lable htmlFor="school1">School: </lable>
        <input
          type="text"
          id="school1"
          name="school"
          alt="school"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="major">Title of Study: </lable>
        <input
          type="text"
          id="major"
          name="major"
          alt="major"
          onChange={this.props.handleChange}
        />
        <lable htmlFor="date1">Date of Study: </lable>
        <input
          type="text"
          id="date1"
          name="school-date"
          alt="date of study"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default Education;
