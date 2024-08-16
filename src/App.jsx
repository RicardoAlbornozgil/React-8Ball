import React, { useState } from 'react';
import EightBall from './components/EightBall';
import ResetButton from './components/ResetButton';
import BoxesContainer from './components/BoxesContainer';
import answers from './data/answers';
import './styles/App.css';

function App() {
  // State for the EightBall
  const [answer, setAnswer] = useState({
    msg: "Think of a Question.",
    color: "black",
  });

  const [colorCounts, setColorCounts] = useState({
    green: 0,
    goldenrod: 0,
    red: 0,
  });

  // Reset function for the EightBall
  function resetEightBall() {
    setAnswer({
      msg: "Think of a Question.",
      color: "black",
    });
    setColorCounts({
      green: 0,
      goldenrod: 0,
      red: 0,
    });
  }

  // Update the answer and color counts
  function updateAnswer(newAnswer) {
    setAnswer(newAnswer);
    setColorCounts(prevCounts => ({
      ...prevCounts,
      [newAnswer.color]: prevCounts[newAnswer.color] + 1,
    }));
  }

  return (
    <div className="App">
      {/* Magic Eight Ball Section */}
      <section className="EightBallSection">
        <h1>Magic Eight Ball</h1>
        <EightBall answer={answer} setAnswer={updateAnswer} answers={answers} />
        <ResetButton onReset={resetEightBall} />
        <div className="color-counts">
          <h2>Color Counts:</h2>
          <p>Green: {colorCounts.green}</p>
          <p>Goldenrod: {colorCounts.goldenrod}</p>
          <p>Red: {colorCounts.red}</p>
        </div>
      </section>

      <hr /> {/* Divider to visually separate sections */}

      {/* Color Boxes Section */}
      <section className="ColorBoxesSection">
        <h1>Color Boxes</h1>
        <BoxesContainer />
      </section>
    </div>
  );
}

export default App;
