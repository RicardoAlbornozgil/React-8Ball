import React from "react";
import "../styles/Box.css";

/** Individual colored box.
 *
 * Props:
 * - color: color of box
 * - changed: boolean indicating whether this box was the last changed
 **/
function Box({ color, changed }) {
  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
    >
      {changed && <span className="changed-text">Changed!</span>}
    </div>
  );
}

export default Box;
