import React from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showInfo: false,
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.showInfo = this.showInfo.bind(this);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  toggleShowInfo = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo,
    }));
  };

  render() {
    return this.state.showInfo ? (
      <section>
        <div className="general">
          <div className="name">
            <p>First name: {this.state.firstName}</p>
            <p>Last name: {this.state.lastName}</p>
          </div>
          <div className="email">
            <p>Email: {this.state.email}</p>
          </div>
          <div className="phone">
            <p>Phone number: {this.state.phone}</p>
          </div>
        </div>
        <div className="education">
          <div className="school">
            <p>School: {this.state.school}</p>
          </div>
          <div className="major">
            <p>Major: {this.state.major}</p>
          </div>
          <div className="schoolDate">
            <p>Date of study: {this.state.email}</p>
          </div>
        </div>
        <div className="experience">
          <div className="company">
            <p>Company: {this.state.company}</p>
          </div>
          <div className="position">
            <p>Position Title: {this.state.position}</p>
          </div>
          <div className="tasks">
            <p>Main Tasks: {this.state.tasks}</p>
          </div>
          <div className="companyDate">
            <p>Date: {this.state.companyDate}</p>
          </div>
        </div>
        <button onClick={this.toggleShowInfo}>Edit</button>
      </section>
    ) : (
      <form>
        <GeneralInfo handleChange={this.handleInputChange} />
        <Education handleChange={this.handleInputChange} />
        <Experience handleChange={this.handleInputChange} />
        <button onClick={this.toggleShowInfo}>Submit</button>
      </form>
    );
  }
}

export default App;
