import React from "react";
import { useState } from "react";
import styles from "./Paragraph.css";
function ShortAnswer() {
  const [isFocused, setIsfocused] = useState(false);
  const [answer, setAnswer] = useState("");
  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleFocus = (e) => {
    setIsfocused(true);
  };
  return (
    <div className="container fifth" onFocus={handleFocus}>
      <p>
        ParaGraph<span className="text-danger">*</span>
      </p>
      <div className="question">
        <input
          type="text"
          name="short-answer"
          id="short-answer"
          placeholder="Your answer"
          value={answer}
          onChange={handleAnswerChange}
        />
      </div>
      {isFocused && answer === "" ? (
          <div className="warning"><i class="fa-solid fa-circle-exclamation fa-lg mx-2"></i>This field is required</div>
        ) : null}
    </div>
  );
}

export default ShortAnswer;
