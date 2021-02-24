import React, { useState } from "react";
import Output from "../../components/Output";
import Button from "../../components/Button";

export default function Calculator() {
  const [previousDisplay, setPreviousDisplay] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operation, setOperation] = useState();
  const keyboard = [
    "AC",
    "DEL",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
  ];
  const buttons = [];

  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  // Handles
  const handleClear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setPreviousDisplay("");
    setOperation(undefined);
  };

  const handleDelete = () => {
    setCurrentOperand(currentOperand.toString().slice(0, -1));
  };

  const handleAppendNumber = (number) => {
    if (
      (number === "." && currentOperand.includes(".")) ||
      number === "=" ||
      number === "AC" ||
      number === "DEL"
    )
      return;
    setCurrentOperand(currentOperand.toString() + number.toString());
  };

  const handleChooseOperation = (operation) => {
    if (
      currentOperand === "" ||
      (operation === "=" && currentOperand.includes("=")) ||
      operation === "AC" ||
      operation === "DEL"
    )
      return;

    if (previousOperand !== "") {
      compute();
    } else {
      setOperation(operation);
      setPreviousOperand(currentOperand);
      setPreviousDisplay(`${currentOperand} ${operation} `);
      setCurrentOperand("");
    }
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        break;
    }

    setPreviousOperand("");
    setPreviousDisplay("");
    setCurrentOperand(computation);
    setOperation(undefined);
  };

  // Init keyboard
  for (const [i, value] of keyboard.entries()) {
    buttons.push(
      <Button
        key={i}
        handleClick={() => {
          if (value === "AC") {
            handleClear();
          } else if (value === "DEL") {
            handleDelete();
          } else if (value === "=") {
            compute();
          } else if (isOperator(value)) {
            handleAppendNumber(value);
          } else {
            handleChooseOperation(value);
          }
        }}
      >
        {value}
      </Button>
    );
  }

  return (
    <div className="calculator-grid">
      <Output
        currentOperand={currentOperand}
        previousDisplay={previousDisplay}
      />
      {buttons}
    </div>
  );
}
