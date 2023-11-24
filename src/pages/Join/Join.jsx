import React, { useState, useEffect } from "react";
import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import { useNavigate } from "react-router-dom";
import { onSignUp } from "../../apis/onSignUp";
import { emailCheck } from "../../apis/emailCheck";


export default function Join() {
  const initialState = {
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const router = useNavigate();
  
  // 가입 작성 폼 초기화
  const [formData, setFormData] = useState(initialState);

  // 아이디 중복체크 유무 검사
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const join = async (e) => {
    e.preventDefault();

    // 아이디 중복 체크를 하지 않았으면 알림을 띄우고 함수 종료
    if (!isEmailAvailable) {
      alert("ID 중복을 확인하세요.");
      return;
    }
    // 아이디 또는 패스워드가 비어있을 경우 회원가입 막음
    if (!formData.email || !formData.password) {
      alert("ID와 P/W를 입력하세요.");
      return;
    }
    // 비밀번호 확인이 비어있을 경우 회원가입 막음
    if (!formData.passwordConfirm || formData.password !== formData.passwordConfirm) {
      alert("P/W를 올바르게 확인해 주세요. ");
      return;
    }
    onSignUp(formData, router);
  }

  return (
    <S.Root>
      <S.LogoImage src={Logo} alt="logo" />
      <S.Title>회원가입하기</S.Title>
      <S.SubTitle>
        아이디와 비밀번호는 나중에 찾을 수 없어요.
        <br /> 잘 기억해 주세요!
      </S.SubTitle>
      <S.InputWrapper>
        <S.LoginBox>
          <S.IDWrapper>
            <p>ID</p>
            <S.Input
              name="email"
              onChange={handleChange}
              type="email"
              required
              placeholder="아이디 입력"
            ></S.Input>
          </S.IDWrapper>
          <S.IDCheck
            onClick={() => {
              emailCheck(formData, setFormData, setIsEmailAvailable);
            }}
          >
            중복확인
          </S.IDCheck>
        </S.LoginBox>
        <S.LoginBox>
          <S.IDWrapper>
            <p>P/W</p>
            <S.Input
              name="password"
              onChange={handleChange}
              type="password"
              required
              placeholder="비밀번호 입력"
            ></S.Input>
          </S.IDWrapper>
        </S.LoginBox>
        <S.LoginBox>
          <S.IDWrapper>
            <p>P/W</p>
            <S.Input
              name="passwordConfirm"
              onChange={handleChange}
              type="password"
              required
              placeholder="비밀번호 확인"
            ></S.Input>
          </S.IDWrapper>
        </S.LoginBox>
      </S.InputWrapper>
      <S.Button onClick={(e) => join(e)}>
        완료
      </S.Button>
    </S.Root>
  )
}