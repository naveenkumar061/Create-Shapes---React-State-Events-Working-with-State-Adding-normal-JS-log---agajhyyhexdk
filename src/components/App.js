import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [selectShape, setselectShape] = useState("square");
  const [shapes, setShapes] = useState([]);
  const optionValue = (event) => {
    setselectShape(event.target.value);
  };
  const buttonClick = () => {
    const newShape = {
      id: shapes.length + 1,
      type: selectShape,
    };
    setShapes([...shapes, newShape]);
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectShape} onChange={optionValue}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={buttonClick}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape) => (
          <div className={shape.type}>{shape.id}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
