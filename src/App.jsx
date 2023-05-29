import { useState } from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const toggleShowInfo = (e) => {
    e.preventDefault();
    setShowInfo((prevState) => !prevState);
  };

  return showInfo ? (
    <section>
      <div className="general">
        <div className="name">
          <p>First name: {info.firstName}</p>
          <p>Last name: {info.lastName}</p>
        </div>
        <div className="email">
          <p>Email: {info.email}</p>
        </div>
        <div className="phone">
          <p>Phone number: {info.phone}</p>
        </div>
      </div>
      <div className="education">
        <div className="school">
          <p>School: {info.school}</p>
        </div>
        <div className="major">
          <p>Major: {info.major}</p>
        </div>
        <div className="schoolDate">
          <p>Date of study: {info.email}</p>
        </div>
      </div>
      <div className="experience">
        <div className="company">
          <p>Company: {info.company}</p>
        </div>
        <div className="position">
          <p>Position Title: {info.position}</p>
        </div>
        <div className="tasks">
          <p>Main Tasks: {info.tasks}</p>
        </div>
        <div className="companyDate">
          <p>Date: {info.companyDate}</p>
        </div>
      </div>
      <button onClick={toggleShowInfo}>Edit</button>
    </section>
  ) : (
    <form>
      <GeneralInfo
        handleChange={handleInputChange}
        firstName={info.firstName}
        lastName={info.lastName}
        email={info.email}
        phone={info.phone}
      />
      <Education
        handleChange={handleInputChange}
        school={info.school}
        major={info.major}
        schoolDate={info.schoolDate}
      />
      <Experience
        handleChange={handleInputChange}
        company={info.company}
        position={info.position}
        tasks={info.tasks}
        companyDate={info.companyDate}
      />
      <button onClick={toggleShowInfo}>Submit</button>
    </form>
  );
}
