import { styled, css } from "styled-components";

export const Input = styled.input`
  border-radius: 45px;
  background: #383636;
  padding: 0.5rem 1rem;
  margin: 2rem 0 20rem 0;
  width: 80%;
  height: 2.4rem;
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

export const Description = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;

  font-weight: 400;
  transform: translateY(-1rem);
`;

export const Text = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Esamanru";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LoadingGif = styled.img`
  width: 30%;
  margin: 10rem auto 1rem auto;
`;
export const LetterImg = styled.img`
  width: 70%;
  margin: 1rem auto 1rem auto;
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

export const RefreshIcon = styled.img`
  width: 2rem;
`;

export const RefreshText = styled.span`
  color: #4c4c4c;
  text-align: center;
  font-family: "Esamanru";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const LetterContainer = styled.div`
  position: relative;
  display: flex;
`;

export const LetterBox = styled.textarea`
  position: absolute;
  font-family: "Esamanru";
  top: 6%;
  left: 19%;
  width: 55%;
  min-height: 25rem;
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

export const LetterDoneImg = styled.img`
  height: 15rem;
  margin-top: 1rem;
  margin-bottom: 7rem;
  flex-shrink: 0;
  object-fit: cover;
`;
