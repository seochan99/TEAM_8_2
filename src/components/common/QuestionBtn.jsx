import React from "react";
import styled from "styled-components";
import { MindLetterBtn } from "./MindLetterBtn";

const QuestionBtn = styled(MindLetterBtn)`
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  margin-top: 1rem;
  color: #000;
  text-align: center;
  font-family: esamanru;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

function QuestionBtnComponent({ text, colorCode, action }) {
  return (
    <QuestionBtn onClick={action} colorCode={colorCode}>
      {text}
    </QuestionBtn>
  );
}

export default QuestionBtnComponent;
