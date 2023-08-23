import React from "react";
import { useState } from "react";
import styles from "./Checkbox.css";
function Checkbox() {
  const [isFocused, setIsfocused] = useState(false);
  const [atLeastOneChecked, setAtLeastOneChecked] = useState(false);
  const handleFocus = (e) => {
    setIsfocused(true);
  };
  const handleCheckboxChange = () => {
    const checkboxes = document.getElementsByName("checkbox-option");
    const isChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
    setAtLeastOneChecked(isChecked);
  };

  return (
    <div className="container third" onFocus={handleFocus}>
      <p>
        Checkbox<span className="text-danger">*</span>
      </p>
      <div className="question">
        <div className="label-checkbox-container">
          <input
            type="checkbox"
            name="checkbox-option"
            value="option1"
            id="checkbox-option1"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox-option1">Option 1</label>
        </div>
        <div className="label-checkbox-container">
          <input
            type="checkbox"
            name="checkbox-option"
            value="option2"
            id="checkbox-option2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox-option2">Option 2</label>
        </div>
        <div className="label-checkbox-container">
          <input
            type="checkbox"
            name="checkbox-option"
            value="option3"
            id="checkbox-option3"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox-option3">Option 3</label>
        </div>
        {isFocused && !atLeastOneChecked ? (
          <div className="warning"><i class="fa-solid fa-circle-exclamation fa-lg mx-2"></i>This field is required</div>
        ) : null}
      </div>
    </div>
  );
}

export default Checkbox;
