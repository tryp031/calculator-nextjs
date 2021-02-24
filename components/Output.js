import React, { useState } from "react";

const Output = (props) => {
  return (
    <div className="output">
      <div className="previous-operand">{props.previousDisplay}</div>
      <div className="current-operand">{props.currentOperand}</div>
    </div>
  );
};

export default Output;
