import React from "react";
import { styled, css } from "styled-components";

export const MindLetterBtn = styled.div`
  border-radius: 78px;
  padding: 0.5rem 1rem;
  text-align: center;
  border: 1px solid #373737;
  // ColorCode Props
  ${({ colorCode }) => css`
    background-color: ${colorCode}; // Use ${colorCode} to set the background color
  `}

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 1rem;
  padding-bottom: 1rem;

  width: 20rem;
  color: #000;
  text-align: center;
  font-family: "Esamanru";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  cursor: pointer;
`;

function MindLetterBtnComponent({ text, colorCode, action }) {
  return (
    <MindLetterBtn onClick={action} colorCode={colorCode}>
      {text}
    </MindLetterBtn>
  );
}

export default MindLetterBtnComponent;
