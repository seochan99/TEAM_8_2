import React, { useEffect, useState } from "react";
import * as PS from "../../style";
import * as MOBDS from "../style";
import * as S from "./style";
import DummyImg from "../../../../assets/img/dummy_postcard.png";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/common/Loading";

function LetterDetail() {
  const { id } = useParams();
  const [letter, setLetter] = useState({});
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //   const fetchData = async () => {
  //     const response = await fetch(`http://localhost:3000/letter/${id}`);
  //     const data = await response.json();
  //     setLetter(data);
  //   };
  const flipClass = isFlipped ? "flipped" : "";

  useEffect(() => {
    // data fect
    const data = {
      id: 1,
      content:
        "새해복 많이 받아 고생많았어 !고생많았어 !고생많았어 !고생많았어 !",
      sender: "희찬",
      letterImage: DummyImg,
      answer: [
        {
          question: "기억에 남는 장소는 어딘가요? ",
          answer: "숭실대학교 어흥올림픽"
        },
        {
          question: "그 장소의 날씨는 어땠나요?",
          answer: "추웠어요"
        },
        {
          question: "그 날 거기서 무엇을 했나요?",
          answer: "해커톤!"
        },
        {
          question: "받는이를 생각하면 떠오르는 게 있나요?",
          answer: "개발자?"
        },
        {
          question: "원하는 엽서의 분위기가 있나요?",
          answer: "귀여운"
        }
      ]
    };
    setLetter(data);
    setIsLoading(false);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <S.Root>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MOBDS.Title>{letter.sender}님의 편지</MOBDS.Title>

          {isFlipped ? (
            <S.LetterImg src={letter.letterImage} onClick={handleFlip} />
          ) : (
            <S.LetterContainer onClick={handleFlip} className={flipClass}>
              <S.LetterImg src={letter.letterImage} />
              <S.LetterBox>{letter.content}</S.LetterBox>
            </S.LetterContainer>
          )}
          <S.LetterText>편지를 누르면 뒷면을 볼 수 있어요.</S.LetterText>
          {/* // 답장 */}
          <MOBDS.Title>{letter.sender}님의 답변</MOBDS.Title>
          {letter.answer.map((letter, index) => (
            <S.AnswerContainer key={index}>
              <S.AnswerQuestion>
                {letter.number}
                {letter.question}
              </S.AnswerQuestion>
              <S.AnswerText>
                <p
                  style={{
                    padding: "1rem 1rem"
                  }}
                >
                  {letter.answer}
                </p>
              </S.AnswerText>
            </S.AnswerContainer>
          ))}
        </>
      )}
    </S.Root>
  );
}

export default LetterDetail;
