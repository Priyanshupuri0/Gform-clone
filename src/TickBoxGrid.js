import React from "react";
import { useState } from "react";
import styles from "./TickBoxGrid.css";
function TickBoxGrid() {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    row1: [],
    row2: [],
    row3: [],
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleCheckboxChange = (row, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [row]: option,
    }));
  };
  return (
    <div className="container ninth" onFocus={handleFocus}>
      <p>
        Tick Box Grid <span className="text-danger">*</span>
      </p>
      <div className="grid">
        <div className="heading">
          <span className="no-display">Column 000</span>
          <span>Column 1</span>
          <span>Column 2</span>
          <span>Column 3</span>
        </div>
        <div className="tick-row1">
          <span>Row 1</span>
          <input
            type="checkbox"
            name="row1"
            id="row1-option1"
            value="option1"
            onChange={() => handleCheckboxChange("row1", "option1")}
          />
          <input
            type="checkbox"
            name="row1"
            id="row1-option2"
            value="option2"
            onChange={() => handleCheckboxChange("row1", "option2")}
          />
          <input
            type="checkbox"
            name="row1"
            id="row1-option3"
            value="option3"
            onChange={() => handleCheckboxChange("row1", "option3")}
          />
        </div>
        <div className="tick-row2">
          <span>Row 2</span>
          <input
            type="checkbox"
            name="row2"
            id="row2-option1"
            value="option1"
            onChange={() => handleCheckboxChange("row2", "option1")}
          />
          <input
            type="checkbox"
            name="row2"
            id="row2-option2"
            value="option2"
            onChange={() => handleCheckboxChange("row2", "option2")}
          />
          <input
            type="checkbox"
            name="row2"
            id="row2-option3"
            value="option3"
            onChange={() => handleCheckboxChange("row2", "option3")}
          />
        </div>
        <div className="tick-row3">
          <span>Row 3</span>
          <input
            type="checkbox"
            name="row3"
            id="row3-option1"
            value="option1"
            onChange={() => handleCheckboxChange("row3", "option1")}
          />
          <input
            type="checkbox"
            name="row3"
            id="row3-option2"
            value="option2"
            onChange={() => handleCheckboxChange("row3", "option2")}
          />
          <input
            type="checkbox"
            name="row3"
            id="row3-option3"
            value="option3"
            onChange={() => handleCheckboxChange("row3", "option3")}
          />
        </div>
      </div>
      {isFocused &&
        Object.values(selectedOptions).some(
          (options) => options.length === 0
        ) && (
          <div className="warning"><i class="fa-solid fa-circle-exclamation fa-lg mx-2"></i>Please select atleast one option in each row.</div>
        )}
    </div>
  );
}

export default TickBoxGrid;
