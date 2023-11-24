import React, { useState } from "react";
import * as PS from "../style";
import * as S from "./style";
import QuestionBtnComponent from "../../../components/common/QuestionBtn";
import CustomAlert from "../../../components/common/CustomAlert";

function PostBoxQuestion() {
  const [questionSetep, setQuestionStep] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [question, setQuestion] = useState([
    {
      questionNum: "Q1",
      question: "당신은 이 사람에게 어떤 존재인가요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    },
    {
      questionNum: "Q2",
      question: "당신은 이 사람에게 어떤 존재인가요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    },
    {
      questionNum: "Q3",
      question: "당신은 이 사람에게 어떤 존재인가요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    },
    {
      questionNum: "Q4",
      question: "당신은 이 사람에게 어떤 존재인가요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    },
    {
      questionNum: "Q5",
      question: "당신은 이 사람에게 어떤 존재인가요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    }
  ]);
  return (
    <PS.Root>
      {showAlert && (
        <CustomAlert
          message="답변을 입력해주세요"
          colorCode="#ffd84d"
          onClose={() => {
            setShowAlert(false);
          }}
        />
      )}

      <S.Description>
        {question[questionSetep].questionNum}.{" "}
        {question[questionSetep].question}
      </S.Description>
      <S.Input
        placeholder={question[questionSetep].palceholderText}
        onChange={e => {
          setQuestion({
            ...question,
            answer: e.target.value
          });
        }}
      />
      <QuestionBtnComponent
        colorCode={"#ffd84d"}
        text={"다음"}
        action={() => {
          // 입력안했다면
          if (question[questionSetep].answer === "") {
            // 알림창 활성화
            setShowAlert(true);
          } else {
            // 그외에는 다음단계
            setQuestionStep(prev => prev + 1);
          }
        }}
      />

      <QuestionBtnComponent
        colorCode={"#FFFCF5"}
        text={"이전"}
        action={() => {
          if (questionSetep === 0) return;
          else {
            setQuestionStep(prev => prev - 1);
          }
        }}
      />
    </PS.Root>
  );
}

export default PostBoxQuestion;
