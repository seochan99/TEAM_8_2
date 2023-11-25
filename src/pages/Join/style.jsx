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
	background: url(${Bg});
  background-repeat: no-repeat;
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
  margin-bottom: 8.6px;
`;

export const SubTitle = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: white;
  text-align: center;
  line-height: normal;
  margin-bottom: 20px;
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
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p {
    color: white;
    width: 18%;
    text-align: left;
    margin-left: 1rem;
  }
`;

export const IDWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
	width: 72%;
  color: rgba(255, 255, 255, 0.40);
  font-size: 1rem;
`;

export const Input = styled.input`
	width: 66%;
  color: rgba(255, 255, 255, 0.40);
  font-size: 1rem;
`;

export const IDCheck = styled.div`
	width: 58px;
  height: 27px;
  font-size: 0.625rem;
  color: white;
  border-radius: 0.375rem;
  border: 0.5px solid #B4B4B4;
  background: #858585;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 80px;
  margin-bottom: 13px;
`;
