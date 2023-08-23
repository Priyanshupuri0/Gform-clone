import React from "react";
import Button from "react-bootstrap/esm/Button";
import styles from "./Submit.css";
function Submit() {
  return (
    <div className="last-function">
      <Button className="custom-button" type="submit">
        Submit
      </Button>
      <div className="status">
        <div className="progress"></div>
        <div>Page 1 of 1</div>
      </div>
      <a href = "#">Clear form</a>
    </div>
  );
}

export default Submit;
