import React from "react";
import styles from "./MultipleGrid.css";
function MultipleGrid() {
  return (
    <div className="container ninth">
      <p>
        Multiple Choice Grid <span className="text-danger">*</span>
      </p>
      <div className="grid">
        <div className="heading">
            <span className="no-display">Column 000</span>
            <span>Column 1</span>
            <span>Column 2</span>
            <span>Column 3</span>
        </div>
        <div className="grid-row1">
            <span>Row 1</span>
            <input type="radio" name="row1" id="row1-option1" value="option1" />
            <input type="radio" name="row1" id="row1-option2" value="option2" />
            <input type="radio" name="row1" id="row1-option3" value="option3" />
        </div>
        <div className="grid-row2">
            <span>Row 2</span>
            <input type="radio" name="row2" id="row2-option1" value="option1" />
            <input type="radio" name="row2" id="row2-option2" value="option2" />
            <input type="radio" name="row2" id="row2-option3" value="option3" />
        </div>
        <div className="grid-row3">
            <span>Row 3</span>
            <input type="radio" name="row3" id="row3-option1" value="option1" />
            <input type="radio" name="row3" id="row3-option2" value="option2" />
            <input type="radio" name="row3" id="row3-option3" value="option3" />
        </div>
      </div>
    </div>
  );
}

export default MultipleGrid;
