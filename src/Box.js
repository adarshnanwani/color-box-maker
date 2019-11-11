import React from "react";

const Box = props => (
  <div
    style={{
      height: `${props.height}px`,
      width: `${props.width}px`,
      backgroundColor: props.color
    }}
  ></div>
);

export default Box;
