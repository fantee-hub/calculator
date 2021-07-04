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
    color: #252525;
    cursor: pointer;
    border: none;

    background: transparent;
    transition: all 0.3s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
      border-radius: 0.8rem;
    }
  }
`;
export default Button;
