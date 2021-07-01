import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Calculator = () => {
  const [textField, setTextField] = useState({
    current: 0,
    valueContainer: [],
  });

  const reset = () => {
    setTextField({
      current: 0,
    });
  };
  const lies = (symbol) => {
    setTextField({
      current: textField.current + symbol,
    });
  };
  const buttons = [
    { symbol: "C", col: 3, action: reset },
    { symbol: "/", col: 1, action: addValueToInput },
    { symbol: "7", col: 1, action: addValueToInput },
    { symbol: "8", col: 1, action: addValueToInput },
    { symbol: "9", col: 1, action: addValueToInput },
    { symbol: "*", col: 1, action: addValueToInput },
    { symbol: "4", col: 1, action: addValueToInput },
    { symbol: "5", col: 1, action: addValueToInput },
    { symbol: "6", col: 1, action: addValueToInput },
    { symbol: "-", col: 1, action: addValueToInput },
    { symbol: "1", col: 1, action: addValueToInput },
    { symbol: "2", col: 1, action: addValueToInput },
    { symbol: "3", col: 1, action: addValueToInput },
    { symbol: "+", col: 1, action: addValueToInput },
    { symbol: "+/-", col: 1, action: addValueToInput },
    { symbol: "0", col: 2, action: addValueToInput },
    { symbol: ".", col: 1, action: addValueToInput },
    { symbol: "=", col: 1, action: addValueToInput },
  ];

  return (
    <Main>
      <input type="text" value={textField.current} />
      <div className="buttons">
        {buttons.map((button, index) => (
          <Button
            symbol={button.symbol}
            key={index}
            textField={textField}
            setTextField={setTextField}
            col={button.col}
            action={(symbol) => button.action(symbol)}
          />
        ))}
      </div>
    </Main>
  );
};

const Main = styled.div`
  input {
    width: 100%;
    padding: 1.5rem;
    text-align: right;
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.3rem;
    background: #bbba;
    .column-3 {
      grid-column: span 3;
    }
  }
`;

export default Calculator;
