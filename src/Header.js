import React from "react";
import styles from './Header.css';
function Header() {
  return (
    <div className="container first">
      <h2>Assignment Task</h2>
      <hr />
      **email-id** <a href="#">Switch Account</a>
      <br /><br />
      <p>
        The name and photo associated with your Google account will be recorded
        when you upload files and submit this form. Your email is not part of
        your response.
      </p>
      <hr />
      <p className="text-danger">*Indicates required question</p>

    </div>
  );
}

export default Header;
