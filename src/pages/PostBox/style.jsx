import { styled, css } from "styled-components";
import Bg from "../../assets/img/background-1.png";
import Lbox from "../../assets/img/letterbox-full.png";
import btnYellow from "../../assets/img/btnYellow.png";
import btnWhite from "../../assets/img/btnWhite.png";
import btnIdpw from "../../assets/img/btnIDPW.png";

export const Root = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 430px;
  min-height: 100vh;
  width: 100%;
  background: url(${Bg}), lightgray 50% / cover no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const LogoImage = styled.img`
  width: 16%;
  margin: 5rem auto 48px auto;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Esamanru";
  font-weight: 500; // semi-boldr가 있어야할거같음
  font-size: 1.5rem;
  color: white;
  margin-bottom: 66px;
  white-space: pre-wrap;
  line-height: normal;
  text-align: center;
`;

export const LetterBox = styled.div`
  position: absolute;

  margin-top: 1.5rem;
  transform: translateY(4rem);
  width: 70%;
  min-height: 40rem;

  background-image: url(${Lbox});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MindLetterBtn = styled.div`
  border-radius: 78px;
  padding: 0.5rem 1rem;
  text-align: center;
  border: 1px solid #373737;
  // ColorCode Props
  ${({ colorCode }) => css`
    background-color: ${colorCode}; // Use ${colorCode} to set the background color
  `}

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 1rem;
  padding-bottom: 1rem;

  width: 20rem;
  color: #000;
  text-align: center;
  font-family: "Esamanru";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24rem;
  z-index: 1;
  gap: 1rem;
`;
