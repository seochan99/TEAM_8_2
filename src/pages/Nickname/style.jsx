import { styled } from "styled-components";
import Bg from "../../assets/img/background.png";
import Lbox from "../../assets/img/letterbox-1.png";
import btnStart from "../../assets/img/btnStart.png";
import btnYellow from "../../assets/img/btnYellow.png";
import btnWhite from "../../assets/img/btnWhite.png";

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

export const Header = styled.div`
  margin-top: 60px;
	display: flex;
	flex-direction: column;
  align-items: center;
  font-family: 'Esamanru';
  color: white;
  :nth-child(1){
    font-weight: 500;
    font-size: 1.25rem;
  }
  :nth-child(2){
    font-size: 1.375rem;
    font-weight: 300;
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
  background-color: red;
`;

export const NickName = styled.div`
	width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
  hr {
    width: 100%;
    height: 0.0625rem;
  }
`;

export const Input = styled.input`
	width: 62%;
  color: white;
  font-size: 1rem;
  ::placeholder {
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-size: 1.375rem;
    font-weight: 300;
  }
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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const Button = styled.button`
  width: 306px;
  height: 51px;
  border: none;
  border-radius: 100px;
  background-image: url(${(props) => props.white ? btnWhite : btnYellow});
  background-size: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Esamanru';
  font-weight: 300;
  font-size: 1.125rem;
  color: black;
  margin-bottom: 13px;
`;
