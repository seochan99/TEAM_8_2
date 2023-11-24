import React from "react";
import styled from "styled-components";
import { MindLetterBtn } from "./MindLetterBtn";

const QuestionBtn = styled(MindLetterBtn)`
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
`;

function QuestionBtnComponent({ text, colorCode, action }) {
  return (
    <QuestionBtn onClick={action} colorCode={colorCode}>
      {text}
    </QuestionBtn>
  );
}

export default QuestionBtnComponent;
