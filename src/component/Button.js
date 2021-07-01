import React from "react";
import styled from "styled-components";

const Button = ({ symbol, action, col }) => {
  return (
    <ButtonStyle className={`column-${col}`}>
      <button onClick={() => action(symbol)}>{symbol}</button>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  button {
    padding: 1rem;
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    color: #4e4e4e;
    cursor: pointer;
  }
`;
export default Button;
