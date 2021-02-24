import React from "react";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

const isSpanTwo = (val) => {
  return val === "AC" || val === "=";
};
const Button = (props) => {
  return (
    <button
      key={props.children}
      className={`${isOperator(props.children) ? null : "operator"}
          ${isSpanTwo(props.children) ? "span-two" : null}`}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
