import React from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

class App extends React.Component {
  render() {
    return (
      <>
        <p>Hello class component</p>
        <GeneralInfo />
        <Education />
        <Experience />
      </>
    );
  }
}

export default App;
