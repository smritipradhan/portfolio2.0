import Chip from "@mui/material/Chip";

const WorkExperience = () => {
  return (
    <div className="workExperience">
      <div className="whoamI">
        <span style={{ color: "#66fcf1" }}>0.2 &nbsp;</span>Work Experience{" "}
        <div className="hrLine"></div>
      </div>
      <div className="softwareEngineer">
        Software Engineer - Divami Design Labs Pvt Ltd. Hyderabad
      </div>
      <div className="project">
        <div className="google">- Google Wrangler</div>
        <div className="aboutmedescp2">
          Developed and maintained user-friendly websites for clients using
          SCSS, TypeScript, and React Collaborated with designers and back-end
          developers to ensure seamless integration of front-end and back-end
          functionality. Utilized React to create interactive web applications.
          Conducted code reviews and worked on constructive feedback to ensure
          code quality and consistency. Conducted unit testing and integration
          testing to ensure the quality of the software product. Actively
          participated in team meetings to provide input on project scope and
          timelines.
        </div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {" "}
          <Chip
            label="React"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="Redux"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="SCSS"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="Material UI"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="TypeScript"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
        </div>
      </div>

      <div className="project">
        <div className="google">- Blue Yonder (Current)</div>
        <div className="aboutmedescp2">
          Working on RESTful APIs to fetch and manipulate data, enhancing the
          interactivity of web applications. Working on development web
          application that required efficient state management using Redux
          Toolkit. Working on React Query, a powerful data-fetching library, to
          streamline and enhance the data retrieval process in a React web
          application. Conducted Unit testing to ensure the quality of the
          software product using JEST and React Testing Library. Working on
          Material UI Components and tracked software development projects using
          Jira, overseeing project progress, task assignments, and issue
          tracking.
        </div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {" "}
          <Chip
            label="React"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="Redux"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="Material UI"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="TypeScript"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
        </div>
      </div>

      <div className="project">
        <div className="google">- AI Educator</div>
        <div className="aboutmedescp2">
          Created and implemented responsive design principles to ensure optimal
          user experience across various devices. Developed website using React
          TS, and SCSS. Created Common Reusable components for the project and
          worked with API Integration. Collaborated with cross-functional teams
          to deliver high-quality software products on time.
        </div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {" "}
          <Chip
            label="React"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="Context API"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
          <Chip
            label="TypeScript"
            style={{
              marginTop: "10px",
              color: "#66fcf1",
              backgroundColor: "rgba(83, 95, 113, 0.252)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
