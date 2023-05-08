import React from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({
      [name]: value,
    });
  }

  showInfo(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form>
          <GeneralInfo handleChange={this.handleInputChange} />
          <Education handleChange={this.handleInputChange} />
          <Experience handleChange={this.handleInputChange} />
          <button onClick={this.showInfo}>Submit</button>
        </form>
      </>
    );
  }
}

export default App;
