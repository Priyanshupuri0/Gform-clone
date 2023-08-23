import React from "react";
import styles from "./LinearScale.css";
function LinearScale() {
  return (
    <div className="container eighth">
      <p>
        Linear Scale <span className="text-danger">*</span>
      </p>
      <div className="scale">
        <span>Worst</span>
        <div className="rating">
          <div className="label-container">
            <label htmlFor="scale-option1">1</label>
            <input type="radio" name="rating" id="scale-option1" value="option1" />
          </div>
          <div className="label-container">
            <label htmlFor="scale-option2">2</label>
            <input type="radio" name="rating" id="scale-option2" value="option2" />
          </div>
          <div className="label-container">
            <label htmlFor="scale-option3">3</label>
            <input type="radio" name="rating" id="scale-option3" value="option3" />
          </div>
          <div className="label-container">
            <label htmlFor="scale-option4">4</label>
            <input type="radio" name="rating" id="scale-option4" value="option4" />
          </div>
          <div className="label-container">
            <label htmlFor="scale-option5">5</label>
            <input type="radio" name="rating" id="scale-option5" value="option5" />
          </div>
        </div>
        <span>Best</span>
      </div>
    </div>
  );
}

export default LinearScale;
