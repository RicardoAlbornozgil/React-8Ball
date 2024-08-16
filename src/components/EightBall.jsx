import React from "react";
import "../styles/EightBall.css";
import defaultAnswers from "../data/answers";
import { choice } from "./random";

/** EightBall: shows random answer and, on click, changes answer.
 *
 * Props:
 * - answers: array of {msg, color} objects (optional)
 * - answer: {msg, color} of current answer
 * - setAnswer: function to update the current answer state
 *
 * State:
 * - None (state is managed in the parent component and passed down as props)
 */
function EightBall({ answer, setAnswer, answers }) {
  function handleClick() {
    setAnswer(choice(answers));
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    >
      <b>{answer.msg}</b>
    </div>
  );
}

// Default props for EightBall
EightBall.defaultProps = {
  answers: defaultAnswers,
};

export default EightBall;
