import "./Built.css";

const Built = () => {
  return (
    <div>
      <div className="projects">
        <div className="whoamI">
          <span className="green">0.3 &nbsp;</span>Some things built by me.{" "}
          <div className="hrLine"></div>
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectImage"></div>
        <div className="aboutProject">
          <div className="subheading"> Featured Project</div>
          <div className="heading"> Spotify Clone</div>
          <div className="projectDesp">
            Temporary navigation drawers can toggle open or closed. Closed by
            default, the drawer opens temporarily above all other content until
            a section is selected. The Drawer can be cancelled by clicking the
            overlay or pressing the Esc key. It closes when an item is selected,
            handled by controlling the open prop.
          </div>
        </div>
      </div>

      {/* <div className="projectContainerRight">
        <div className="aboutProject">
          <div className="subheadingRight"> Featured Project</div>
          <div className="heading"> Spotify Clone</div>
          <div className="projectDespRight">
            Temporary navigation drawers can toggle open or closed. Closed by
            default, the drawer opens temporarily above all other content until
            a section is selected. The Drawer can be cancelled by clicking the
            overlay or pressing the Esc key. It closes when an item is selected,
            handled by controlling the open prop.
          </div>
        </div>
        <div className="projectImage"></div>
      </div>

      <div className="projectContainer">
        <div className="projectImage"></div>
        <div className="aboutProject">
          <div className="subheading"> Featured Project</div>
          <div className="heading"> Spotify Clone</div>
          <div className="projectDesp">
            Temporary navigation drawers can toggle open or closed. Closed by
            default, the drawer opens temporarily above all other content until
            a section is selected. The Drawer can be cancelled by clicking the
            overlay or pressing the Esc key. It closes when an item is selected,
            handled by controlling the open prop.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Built;
