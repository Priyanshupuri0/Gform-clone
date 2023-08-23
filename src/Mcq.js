import React from "react";
import styles from './Mcq.css';

function Mcq() {
  return (
    <div className="container second">
      <p>MCQ <span className="text-danger">*</span></p>
      <div className="question">
        <div className="label-radio-container">
          <input type="radio" name="option" value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="label-radio-container">
          <input type="radio" name="option" value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
        <div className="label-radio-container">
          <input type="radio" name="option" value="option3" id="option3" />
          <label htmlFor="option3">Option 3</label>
        </div>
      </div>
    </div>
  );
}

export default Mcq;
