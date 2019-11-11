import React from "react";

const Box = props => (
  <div>
    <div
      style={{
        height: `${props.height}px`,
        width: `${props.width}px`,
        backgroundColor: props.color
      }}
    ></div>
    <button onClick={() => props.removeBox(props.id)}>x</button>
  </div>
);

export default Box;
