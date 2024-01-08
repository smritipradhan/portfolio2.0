import "./App.css";

import Typewriter from "typewriter-effect";
// import AnimatedCursor from "react-animated-cursor";
// import Github from "./githubdark.svg";
// import ReactIcon from "./react.svg";
// import Redux from "./redux.svg";
// import { BootStrap } from "./Bootstrap";
// import CSS from "./css.svg";
import Profile from "./assets/images/Profile.png";

import WorkExperience from "./components/WorkExperience/Workexperience";
import Built from "./components/Built/Built";
import ReactOut from "./components/ReachOut/ReactOut";

const App = () => {
  return (
    <div className="App">
      {/* <Menus /> */}

      {/* 
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={0}
        outerScale={0}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid white",
        }}
      /> */}
      <div className="hello">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(`HELLO !`).pauseFor(500).deleteAll().start();
          }}
          className="hello"
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="description">
        I am <span style={{ color: "#66fcf1" }}>Smriti</span>. Welcome to my
        digital space, where pixels and algorithms converge to create something
        extraordinary. Explore my portfolio to discover a collection of projects
        that showcase my skills and passion. Each project is a testament to my
        commitment to quality, functionality, and user experience. Feel free to
        reach out if you have questions or collaboration ideas.
        <div className="lineContainer">
          <span className="email">smritipradhan545@gmail.com</span>
          <span className="line"></span>
        </div>
      </div>

      <div className="aboutme">
        <div>
          <div className="whoamI">
            <span style={{ color: "#66fcf1" }}>0.1 &nbsp;</span> Who Am I ?{" "}
            <div className="hrLine"></div>
          </div>
          <div className="whoamIdesc">
            <div className="aboutmedescp">
              I am a skilled Software Engineer with expertise in React,
              JavaScript, TypeScript, Flutter , Redux , Redux Toolkit and Unit
              Testing using JEST and RTL.
              <br></br>
              <br></br>
              With almost two years of professional experience, I have
              successfully worked on several projects including{" "}
              <span style={{ color: "#66fcf1" }}>
                Google CDAP, TATA, CBP - Blue Yonder, AI Educator
              </span>{" "}
              honing my abilities in creating robust and interactive user
              interfaces.My proficiency in React allows me to develop dynamic
              and visually appealing web applications.
            </div>
          </div>
        </div>

        <div className="imageContainer">
          <img src={Profile} />
        </div>
      </div>

      {/* <div className="workExperience">
        <div className="whoamI">Technology </div>
        <div className="techstack">
          <img src={Github} />
          <img src={CSS} />
          <img src={ReactIcon} />
          <img src={Redux} />

          <BootStrap />
        </div>
      </div> */}
      <WorkExperience />
      <Built />
      <ReactOut />
    </div>
  );
};

export default App;
