import React from "react";
import styles from './Footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="wrn1">
        <p>Never submit passwords through Google Forms.</p>
      </div>
      <div className="wrn2">
        <p>
          This content is neither created nor endorsed by Google.{" "}
          <a href="#">Report abuse</a> - 
          <a href="#"> Terms of Service</a> - 
          <a href="#"> Privacy Policy</a>
        </p>
      </div>
      <div className="logo">
       <strong>Google </strong> Forms
      </div>
    </div>
  );
}

export default Footer;
