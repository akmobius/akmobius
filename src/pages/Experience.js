import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#41B3A3", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Pioneer High School, Ann Arbor, MI
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#41B3A3", color: "#fff" }}
          icon={<SchoolIcon className="icon"/>}
        >
          <h3 className="vertical-timeline-element-title">
            Massachusetts Institute of Technology, Cambridge, MA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Mechanical Engineering with a Concentration in Aerospace</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2020-May 2021"
          iconStyle={{ background: "#001524", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Climate Writer - MIT Environmental Solutions Initiative
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>
          Working with MIT faculty to answer the public’s questions about climate change via written articles for the <a href="https://climate.mit.edu/ask-mit/what-method-waste-disposal-best-climate">MIT Climate
Portal</a>.
          </p>
          <p>Researching and interviewing experts about circular economies in the hopes of writing a white paper on the state of waste
management around the world.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2021"
          iconStyle={{ background: "#001524", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Systems Engineering Intern - MITRE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>Worked to implement the System Architect’s Workbench - a tool that allows users to view multi-disciplinary information
              about an architectural model and track their comments and tasks in a singular digital engineering environment.</p>
          <p>Implemented the front end design using ReactJS/CSS and integrated back end services for the panels using Java and
              Python.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2022"
          iconStyle={{ background: "#001524", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research and Development Intern - IBIS Power
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Eindhoven, North Brabant, Netherlands
          </h4>
          <p>
          Researching ways to reduce noise of the PowerNEST system, focusing on mechanical noise from the turbine generator.
          </p>
          <p>Conducting CFD studies in Ansys Fluent and SimScale to determine how changes to the system affect acoustics and
              aerodynamics.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2022-Present"
          iconStyle={{ background: "#001524", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Undergraduate Research - Aerospace Plasma Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cambridge, MA
          </h4>
          <p>
          Conducting research and building a Particle Image Velocimetry systems with Professor Guerra-Garcia. </p>
          <p>System will visualize fluid streamlines and flow structure in the wind tunnels around campus. Tested in the presence of low energy electrical discharges to determine the applicability of the method
              in these conditions.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
