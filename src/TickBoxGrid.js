import React from "react";
import styles from "./TickBoxGrid.css";
function TickBoxGrid() {
  return (
    <div className="container ninth">
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
            <input type="checkbox" name="row1" id="row1-option1" value="option1" />
            <input type="checkbox" name="row1" id="row1-option2" value="option2" />
            <input type="checkbox" name="row1" id="row1-option3" value="option3" />
        </div>
        <div className="tick-row2">
            <span>Row 2</span>
            <input type="checkbox" name="row2" id="row2-option1" value="option1" />
            <input type="checkbox" name="row2" id="row2-option2" value="option2" />
            <input type="checkbox" name="row2" id="row2-option3" value="option3" />
        </div>
        <div className="tick-row3">
            <span>Row 3</span>
            <input type="checkbox" name="row3" id="row3-option1" value="option1" />
            <input type="checkbox" name="row3" id="row3-option2" value="option2" />
            <input type="checkbox" name="row3" id="row3-option3" value="option3" />
        </div>
      </div>
    </div>
  );
}

export default TickBoxGrid;
