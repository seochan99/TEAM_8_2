import { styled } from "styled-components";
import Bg from "../../assets/img/background.png";
import Lbox from "../../assets/img/letterbox-1.png";
import btnStart from "../../assets/img/btnStart.png";

export const Root = styled.div`
	margin: 0 auto;
	max-width: 430px;
	width: 100%;
	min-height: 100vh;
	background: url(${Bg}), lightgray 50% / cover no-repeat;
  background-size: 100%;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  margin-top: 60px;
	display: flex;
	flex-direction: column;
  align-items: center;
  :nth-child(1){
    font-family: 'Esamanru';
    font-weight: 300;
    font-size: 1rem;
    color: white;
  }
  :nth-child(3){
    font-family: 'EsaManru';
    font-size: 1.25rem;
    color: #FFD84D;
  }
`;

export const LogoImage = styled.img`
	width: 55%;
  margin: 2px 0 -12px 0;
`;

export const LetterBox = styled.div`
  width: 66%;
  height: 380px;
  background-image: url(${Lbox});
  background-size: 100%;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
  :nth-child(1){
    font-size: 0.875rem;
    font-weight: 400;
    color: white;
    margin-top: 30px;
    margin-bottom: 4px;
  }
  :nth-child(2){
    font-size: 1.625rem;
    font-weight: 600;
    color: #FFD84D;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.70);
    text-align: center;
    margin-top: 1.63rem;
  }
`;

export const StartButton = styled.button`
  width: 306px;
  height: 64px;
  border: none;
  border-radius: 100px;
  background-image: url(${btnStart});
  background-size: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Esamanru';
  font-weight: 300;
  font-size: 1.5rem;
  color: black;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  font-size: 0.75rem;
  color: white;
  margin-bottom: 0.63rem;
`;
