import React from "react";
import { useState } from "react";
import styles from "./Mcq.css";

function Mcq() {
  const [isFocused, setIsfocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleFocus = (e) => {
    setIsfocused(true);
  };
  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="container second" onFocus={handleFocus}>
      <p>
        MCQ <span className="text-danger">*</span>
      </p>
      <div className="question">
        <div className="label-radio-container">
          <input
            type="radio"
            name="mcq-option"
            value="option1"
            id="option1"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="label-radio-container">
          <input
            type="radio"
            name="mcq-option"
            value="option2"
            id="option2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="option2">Option 2</label>
        </div>
        <div className="label-radio-container">
          <input
            type="radio"
            name="mcq-option"
            value="option3"
            id="option3"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="option3">Option 3</label>
        </div>
      </div>
      {isFocused && selectedOption === null ? (
          <div className="warning"><i class="fa-solid fa-circle-exclamation fa-lg mx-2"></i>This field is required</div>
        ) : null}
    </div>
  );
}

export default Mcq;
