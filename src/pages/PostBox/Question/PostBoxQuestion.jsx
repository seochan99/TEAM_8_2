import React, { useState } from "react";
import * as PS from "../style";
import * as S from "./style";
import QuestionBtnComponent from "../../../components/common/QuestionBtn";
import CustomAlert from "../../../components/common/CustomAlert";
import { useNavigate } from "react-router-dom";

function PostBoxQuestion() {
  const [questionSetep, setQuestionStep] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedMood, setSelectedMood] = useState("");
  const [text, setText] = useState("");

  const handleMoodClick = mood => {
    setSelectedMood(mood);
    question[questionSetep].answer = mood;
    console.log(question[questionSetep].answer);
  };

  const [question, setQuestion] = useState([
    {
      question: "어떤 이름으로 엽서를 보낼까요?",
      answer: "",
      palceholderText: "나의 이름은.."
    },
    {
      question: "기억에 남는 장소는 어딘가요?",
      answer: "",
      palceholderText: "장소는..."
    },
    {
      question: "그 장소의 날씨는 어땠나요?",
      answer: "",
      palceholderText: "날씨는..."
    },
    {
      question: "그 날 거기서 무엇을 했나요?",
      answer: "",
      palceholderText: "저희는.."
    },
    {
      question: "받는이를 생각하면 떠오르는 게 있나요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    },
    {
      question: "원하는 엽서의 분위기가 있나요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    }
  ]);

  const navigate = useNavigate();

  // 다음 버튼 handler
  const nextBtnHandler = () => {
    // 입력 안했다면
    if (question[questionSetep].answer === "") {
      setShowAlert(true);
      return; // Return early to avoid proceeding further
    } else {
      // 입력창 비우기
      // setQuestion(questions =>
      //   questions.map((q, index) =>
      //     index === questionSetep ? { ...q, answer: "" } : q
      //   )
      // );
      setText("");
      // 그외에는 다음단계
      setQuestionStep(prev => prev + 1);

      // 마지막 단계에서는 결과 페이지 이동
      if (questionSetep === question.length - 1) {
        // 엽서 생성
        const promptingText = `
        ${question[1].answer}에서의 추억이 담긴 엽서. 날씨는 ${question[2].answer}이었고, ${question[3].answer} 하루를 보냈습니다. 
        받는 사람을 생각하면 ${question[4].answer}의 기억이 떠오릅니다. 
        엽서의 분위기는 ${question[5].answer}을 반영해야 합니다. 
        width: 287px, height: 444px; 로 세로형으로 엽서 만들어줘
        
      `;

        // This text can now be sent to the server or used as a prompt for image generation.
        const content = {
          nickname: question[0].answer,
          content: promptingText
        };
        console.log(content);

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
      {/* ------------- 질문 단계 -------------*/}
      <S.QuestionStep>
        {questionSetep}/{question.length - 1}
      </S.QuestionStep>
      {/* ------------- 내용물 -------------*/}
      <S.Description>{question[questionSetep].question}</S.Description>
      {/* ------------- 입력 -------------*/}
      {questionSetep === 5 ? (
        <S.MoodBtnContainer>
          {/* 선택 받기
        심플한, 귀여운, 사실적인 */}
          <S.MoodBtn
            onClick={() => handleMoodClick("심플한")}
            isSelected={selectedMood === "심플한"}
          >
            심플한
          </S.MoodBtn>
          <S.MoodBtn
            onClick={() => handleMoodClick("귀여운")}
            isSelected={selectedMood === "귀여운"}
          >
            귀여운
          </S.MoodBtn>
          <S.MoodBtn
            onClick={() => handleMoodClick("사실적인")}
            isSelected={selectedMood === "사실적인"}
          >
            사실적인
          </S.MoodBtn>
        </S.MoodBtnContainer>
      ) : (
        <>
          <S.Input
            value={text}
            placeholder={question[questionSetep].palceholderText}
            onChange={e => {
              setText(e.target.value);
              setQuestion(questions =>
                questions.map((q, index) =>
                  index === questionSetep ? { ...q, answer: e.target.value } : q
                )
              );
            }}
          />
        </>
      )}

      {/* ------------- 버튼 -------------*/}
      <QuestionBtnComponent
        colorCode={"#ffd84d"}
        text={questionSetep === question.length - 1 ? "엽서 만들기" : "다음"}
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
