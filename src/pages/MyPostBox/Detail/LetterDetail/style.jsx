import { styled, keyframes, css } from "styled-components";
import Bg from "../../../../assets/img/background-1.png";
export const FlipAnimation = keyframes`
  from { transform: rotateY(0); }
  to { transform: rotateY(180deg); }
`;

export const Root = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 430px;
  min-height: 100vh;
  width: 100%;
  background: url(${Bg}) lightgray 50% / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const LetterContainer = styled.div`
  position: relative;
  display: flex;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;

  &.flipped {
    animation: ${FlipAnimation} 1s ease-in-out forwards;
  }
`;

export const LetterImg = styled.img`
  width: 70%;
  margin: 1rem auto;
  backface-visibility: hidden;
`;

export const ResetBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 0.75px solid #999;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 1.2rem;
  padding: 0.2rem 1rem;
`;

export const LetterText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LetterBox = styled.div`
  position: absolute;
  font-family: "Esamanru";
  top: 6%;
  left: 19%;
  width: 55%;
  min-height: 20rem;
  background: #fff;
  border-radius: 10px;
  border: none;
  padding: 1rem 1rem;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  resize: none;
  overflow: hidden;
  outline: none;
  z-index: 10;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 1rem;
  width: 80%;
  margin-bottom: 2rem;
`;
export const AnswerNumber = styled.div``;
export const AnswerQuestion = styled.div`
  color: #fff;
  font-family: esamanru;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const AnswerText = styled.div`
  margin-top: 1rem;
  width: 100%;
  border-radius: 45px;
  background: #383636;
  width: 100%;

  color: #fff;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
