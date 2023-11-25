import { styled, keyframes } from "styled-components";
import Bg from "../../assets/img/background-1.png";
import btnStart from "../../assets/img/btnStart.png";
import btnYellow from "../../assets/img/btnYellow.png";
import btnWhite from "../../assets/img/btnWhite.png";

const slideIn = keyframes`
  from {
    transform: translateY(100%); /* 시작 위치 (아래로 숨김) */
  }
  to {
    transform: translateY(0); /* 끝나는 위치 (위로 올라오는 위치) */
  }
`;

export const Root = styled.div`
	margin: 0 auto;
	max-width: 430px;
	width: 100%;
	min-height: 100vh;
	background: url(${Bg});
  background-size: 100%;
  background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

export const Header = styled.div`
  margin-top: 83px;
	display: flex;
	flex-direction: column;
  align-items: center;
  font-family: 'Esamanru';
  color: white;
  font-size: 1.25rem;
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

export const LetterBox = styled.img`
  height: 660px;
  width: auto;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Ornaments = styled.img`
  position: absolute;
  z-index: 2;
  width: 120px;
  height: auto;
  top: 42vh;
  margin-left: 160px;
  /* transform: rotate(20deg); */
`;

export const StyleBox = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  width: 100%;
  background-color: white;
  animation: ${slideIn} 0.5s ease-in-out;
	max-width: 430px;
  height: 310px;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1.5rem 1.5rem 0rem 0rem;
  hr {
    width: 22.125rem;
    height: 1px;
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const MenuWrapper = styled.div`
  width: 72%;
  height: 48px;
  background-color: transparent;
	display: flex;
	flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px auto;
`;

export const LineVertical = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.25);
  height: 43px;
`;

export const LineHorizontal = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  width: 90%;
`;

export const MenuBtn = styled.button`
  width: 48px;
  height: 48px;
  img {
    width: 48px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ShapeContainer = styled.div`
  width: 84%;
  height: 318px;
	display: grid;
  grid-template-columns: repeat(3, 103px);
  grid-template-rows: 103px 103px;
  column-gap: 16px;
  row-gap: 12px;
  margin-top: 12px;
  place-items: center;
  :active {
    border: 3px solid #FF9466;
    border-radius: 1rem;
  }
`;

export const IconWrapper = styled.button`
  width: 103px;
  height: 103px;
  background-color: #FFEBAD;
	display: flex;
  border-radius: 1rem;
	flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  :active {
    border: none;
    border-radius: 0;
  }
`;

export const ShapeIcon = styled.img`
  width: 64px;
  height: auto;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ColorContainer = styled.div`
  width: 84%;
  height: 318px;
	display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 56px);
  row-gap: 20px;
  margin-top: 12px;
  align-items: center;
  justify-items: center;
`;

export const OrnaContainer = styled(ShapeContainer)`
  place-items: center;
`;

export const ColorBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  border: ${(props => props.border || '0.539px solid rgba(0, 0, 0, 0.33)')};
  /* :active {
    width: 50px;
    height: 50px;
    border: 3px solid #FF9466;
    border-radius: 1rem;
  } */
`;

export const OrnaIcon = styled(ShapeIcon)`
  width: 100px;
  height: 100px;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
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
  position: absolute;
  margin-top: 630px;
  z-index: 1;
`;
