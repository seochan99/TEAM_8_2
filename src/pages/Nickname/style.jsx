import { styled } from "styled-components";
import Bg from "../../assets/img/background-1.png";
import Lbox from "../../assets/img/letterbox-1.png";
import btnStart from "../../assets/img/btnStart.png";
import btnYellow from "../../assets/img/btnYellow.png";
import btnWhite from "../../assets/img/btnWhite.png";

export const Root = styled.div`
	margin: 0 auto;
	max-width: 430px;
	width: 100%;
	min-height: 100vh;
	background: url(${Bg});
  background-repeat: no-repeat;
  background-size: 100%;
	display: flex;
	flex-direction: column;
  align-items: center;
  color: black;
`;

export const Header = styled.div`
  margin-top: 83px;
	display: flex;
	flex-direction: column;
  align-items: center;
  font-family: 'Esamanru';
  color: white;
  p {
    margin-bottom: 40px;
  }
`;

export const InputWrapper = styled.div`
	height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.70);
  font-size: 1.375rem;
  font-weight: 300;
  margin-bottom: 10%;
`;

export const NickName = styled.div`
	width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  hr {
    width: 94%;
    height: 0.0625rem;
    margin-top: 0px;
  }
`;

export const Input = styled.input`
	width: 62%;
  color: white;
  font-family: 'Esamanru';
  font-size: 1.375rem;
  display: flex;
  align-items: center;
  text-align: center;
  ::placeholder {
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-weight: 300;
  }
`;

export const LetterBox = styled.div`
  width: 66%;
  height: 610px;
  background-image: url(${Lbox});
  background-size: 100%;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 280px;
  
`;

export const Button = styled.button`
  width: 306px;
  height: 51px;
  border: none;
  border-radius: 100px;
  background-image: url(${(props) => props.$white ? btnWhite : btnYellow});
  background-size: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Esamanru';
  font-weight: 300;
  font-size: 1.125rem;
  color: black;
  margin-bottom: 13px;
`;
