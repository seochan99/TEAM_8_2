import { styled } from "styled-components";
import Bg from "../../assets/img/background-1.png";
import Lbox from "../../assets/img/letterbox-1.png";
import btnYellow from "../../assets/img/btnYellow.png";
import btnWhite from "../../assets/img/btnWhite.png";
import btnIdpw from "../../assets/img/btnIDPW.png";

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
  color: black;
`;

export const LogoImage = styled.img`
	width: 16%;
  margin: 90px auto 48px auto;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  font-family: 'Esamanru';
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 66px;
`;

export const InputWrapper = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 291px;
  height: 60px;
	background: url(${btnIdpw});
  background-size: 100%;
  border-radius: 0.875rem;
  backdrop-filter: blur(2px);
  margin-bottom: 10px;
  color: white;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    width: 18%;
    text-align: left;
    margin-left: 1rem;
  }
`;

export const Input = styled.input`
	width: 62%;
  color: rgba(255, 255, 255, 0.40);
  font-size: 1rem;
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
