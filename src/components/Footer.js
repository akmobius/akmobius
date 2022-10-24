import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contactMe">
      <IconButton aria-label="delete"
          onClick={event =>  window.location='https://www.linkedin.com/in/ariel-mobius-6b66a11b8/'}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="delete"
          onClick={event =>  window.location='mailto:arielmobius@gmail.com'}>
            <EmailIcon />
          </IconButton>
      </div>
      <p> &copy; 2022 Ariel Mobius</p>
    </div>
  );
}

export default Footer;
