import { styled, css } from "styled-components";

export const Input = styled.input`
  border-radius: 45px;
  background: #383636;
  padding: 0.5rem 1rem;
  margin: 2rem 0 18rem 0;
  width: 80%;
  height: 2.4rem;
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;
export const QuestionStep = styled.div`
  margin-top: 7rem;
  font-family: "Esamanru";
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  font-style: normal;
  line-height: normal;
`;

export const Description = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Esamanru";
  margin-top: 1rem;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const MoodBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  margin-bottom: 1.2rem;
  padding: 0.2rem 1rem;
  margin: 2rem 0 18rem 0;
`;

export const MoodBtn = styled.button`
  color: #373737;
  background-color: ${props => (props.isSelected ? "#FF9466" : "#e8e8e8")};
  border-radius: 21px;
  width: 94px;
  height: 40px;
  outline: none;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
`;
