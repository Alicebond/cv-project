import React from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: { text: "" },
      general: [],
      education: [],
      experience: [],
    };
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    e.preventDefault();
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <form>
          <GeneralInfo handleChange={this.handleInputChange} />
          <Education handleChange={this.handleInputChange} />
          <Experience handleChange={this.handleInputChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default App;
