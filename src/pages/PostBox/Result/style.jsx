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
  margin-top: 12rem;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
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
