import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Calculator = () => {
  const [textField, setTextField] = useState({
    current: "0",
  });
  const [container, setContainer] = useState({
    store: [],
  });

  const reset = () => {
    setTextField({
      current: "0",
      isCurrent: false,
    });
    setContainer({
      store: [],
    });
  };

  const addValueToInput = (symbol) => {
    if (["/", "+", "-", "*"].indexOf(symbol) > -1) {
      let { store } = container;
      store.push(textField.current + " " + symbol);
      setTextField({
        ...textField,
        isCurrent: true,
        store,
      });
    } else {
      if (
        (textField.current === "0" && symbol !== ".") ||
        textField.isCurrent
      ) {
        setTextField({
          current: symbol,
          isCurrent: false,
        });
      } else {
        setTextField({
          current: textField.current + symbol,
        });
      }
    }
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
      {container.store.length > 0 ? (
        <div className="valueContainer">
          {container.store[container.store.length - 1]}
        </div>
      ) : null}
      <input type="text" value={textField.current} readOnly />
      <div className="buttons">
        {buttons.map((button, index) => (
          <Button
            symbol={button.symbol}
            key={index}
            col={button.col}
            action={(symbol) => button.action(symbol)}
          />
        ))}
      </div>
    </Main>
  );
};

const Main = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 1rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
  border-radius: 1rem;

  input {
    width: 100%;
    padding: 0.8rem 1.5rem;
    text-align: right;
    font-size: 3rem;
    font-weight: bold;
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.3rem;
    background: transparent;
    .column-3 {
      grid-column: span 3;
    }
  }
  .valueContainer {
    text-align: right;
    padding: 1rem 1.5rem 0rem 0rem;
    color: #686868;
  }
`;

export default Calculator;
