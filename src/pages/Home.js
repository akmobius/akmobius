import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import IconButton from '@material-ui/core/IconButton';
import "../styles/Home.css";

function Home() {

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Ariel</h2>
        <div className="prompt">
          <p>A mechanical engineering student at MIT interested in aerospace, climate/energy studies, and design.</p>
          <IconButton aria-label="delete"
          onClick={event =>  window.location='https://www.linkedin.com/in/ariel-mobius-6b66a11b8/'}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="delete"
          onClick={event =>  window.location='mailto:arielmobius@gmail.com'}>
            <EmailIcon />
          </IconButton>
          <IconButton aria-label="delete"
          onClick={event =>  window.location='https://github.com/akmobius'}>
            <GithubIcon />
          </IconButton>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> CAD and Simulation</h2>
            <span>
              SolidWorks, Fusion360, Ansys FLUENT
            </span>
          </li>
          <li className="item">
            <h2>Manufacturing</h2>
            <span>
              Injection molding, CNC mill, lathe, mill, 3D printing, composite layups, foam cutting, laser cutting, thermoforming, hand tools
            </span>
          </li>
          <li className="item">
            <h2>Project Management</h2>
            <span>Scrum, agile methodology, peer review/merge requests in git</span>
          </li>
          <li className="item">
            <h2> Programming</h2>
            <span>
              Matlab, Python, Javascript, ReactJS, HTML, CSS, NPM
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
