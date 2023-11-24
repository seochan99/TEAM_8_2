import React, { useState } from "react";
import * as PS from "../style";
import * as S from "./style";
import QuestionBtnComponent from "../../../components/common/QuestionBtn";
import CustomAlert from "../../../components/common/CustomAlert";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  // 다음 버튼 handler
  const nextBtnHandler = () => {
    // 입력 안했다면
    if (question[questionSetep].answer === "") {
      // 알림창 활성화
      setShowAlert(true);
      // answer 비우기
    } else {
      // 입력창 비우기
      setQuestion(questions =>
        questions.map((q, index) =>
          index === questionSetep ? { ...q, answer: "" } : q
        )
      );
      // 그외에는 다음단계
      setQuestionStep(prev => prev + 1);

      // 마지막 단계에서는 결과 페이지 이동
      if (questionSetep === question.length - 1) {
        // 결과물 이미지 생성하기

        // 생성된 이미지와 함께 result page에 이동

        navigate("/postbox/result");
        // 결과 페이지로 이동
      }
    }
  };
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

      {/* ------------- 내용물 -------------*/}
      <S.Description>
        {question[questionSetep].questionNum}.{" "}
        {question[questionSetep].question}
      </S.Description>
      {/* ------------- 입력 -------------*/}
      <S.Input
        value={question[questionSetep].answer}
        placeholder={question[questionSetep].palceholderText}
        onChange={e => {
          setQuestion(questions =>
            questions.map((q, index) =>
              index === questionSetep ? { ...q, answer: e.target.value } : q
            )
          );
        }}
      />
      {/* ------------- 버튼 -------------*/}
      <QuestionBtnComponent
        colorCode={"#ffd84d"}
        text={"다음"}
        action={nextBtnHandler}
      />

      {
        // Q1번 외에는 이전 버튼 활성화
        questionSetep !== 0 && (
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
        )
      }
    </PS.Root>
  );
}

export default PostBoxQuestion;
