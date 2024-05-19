/* eslint-disable react/prop-types */
// import React from 'react'
import styled from "styled-components";

const Button = ({ buttonText, onClick, value, type }) => {
  return (
    <Div>
      <button className="about-me" onClick={onClick} value={value} type={type}>
        {buttonText}
      </button>
    </Div>
  );
};

export default Button;
const Div = styled.div`
  .about-me {
    margin-top: 5px;
    width: 200px;
    display: inline-block;
    border-radius: 5rem;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    font-size: 17px;
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    background: #444;
    color: #fff;
  }

  .about-me:hover {
    background-color: #2f27ce;
    box-shadow: 0px 15px 20px #2f27ce;
    color: #fff;
    transform: translateY(-7px);
  }

  .about-me:active {
    transform: translateY(-1px);
  }
`;
