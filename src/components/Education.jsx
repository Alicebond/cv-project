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
        <input type="text" id="school1" alt="school" />
        <lable htmlFor="major">Title of Study: </lable>
        <input type="text" id="major" alt="major" />
        <lable htmlFor="date1">Date of Study: </lable>
        <input type="text" id="date1" alt="date of study" />
      </div>
    );
  }
}
export default Education;
