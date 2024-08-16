import React, { useState } from "react";
import Box from "./Box";
import { choice, randInt } from "./random";
import "../styles/BoxesContainer.css";

const defaultColors = [
  "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
  "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
  "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
];

/** Container for a set of colored boxes.
 *
 * Props:
 * - numBoxes: number of boxes to manage
 * - allColors: array of random colors to choose from
 *
 * State:
 * - boxes: array of box color strings
 * - lastChanged: index of the last changed box
 */
function BoxesContainer({ allColors, numBoxes }) {
  const [boxes, setBoxes] = useState(getInitialRandomColors);
  const [lastChanged, setLastChanged] = useState(null);

  /** Return array of random colors for initial state. */
  function getInitialRandomColors() {
    return Array.from(
      { length: numBoxes },
      () => choice(allColors)
    );
  }

  /** On button click: pick random box, change to random color. */
  function handleClick() {
    setBoxes(boxes => {
      const idx = randInt(numBoxes);
      const boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      setLastChanged(idx); // Track the index of the changed box
      return boxCopy;
    });
  }

  const boxComponents = boxes.map((color, idx) => (
    <Box key={idx} color={color} changed={idx === lastChanged} />
  ));

  return (
    <div>
      <section className="BoxesContainer">{boxComponents}</section>
      <button onClick={handleClick} className="ChangeButton">Change a Box</button>
    </div>
  );
}

// Default props for BoxesContainer
BoxesContainer.defaultProps = {
  allColors: defaultColors,
  numBoxes: 16,
};

export default BoxesContainer;
