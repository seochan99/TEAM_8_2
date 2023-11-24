import React from "react";
import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import { Link } from "react-router-dom";

export default function Login() {
  const handleInput = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <S.Root>
        <S.Header>
          <p>마음을 전하는 우체통</p>
          <S.InputWrapper>
            <S.NickName>
              <S.Input
                onChange={handleInput}
                type="nickname"
                required
                placeholder="닉네임"
              ></S.Input>
              <hr />
            </S.NickName>
            <span>님</span>
          </S.InputWrapper>
        </S.Header>
        <S.LetterBox>
        </S.LetterBox>
        <S.ButtonWrapper>
          <S.Button>
            로그인
          </S.Button>
          <Link to="/join">
            <S.Button white>
              회원가입
            </S.Button>
          </Link>
        </S.ButtonWrapper>
      </S.Root>
    </>
  )
}
