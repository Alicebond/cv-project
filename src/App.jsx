import React from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

class App extends React.Component {
  render() {
    return (
      <>
        <form>
          <GeneralInfo />
          <Education />
          <Experience />
        </form>
      </>
    );
  }
}

export default App;
