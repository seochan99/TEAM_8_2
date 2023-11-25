import React, { useState, useEffect } from "react";
import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";
import axios from "axios";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();
  const [act, setAct] = useAtom(accessTokenAtom);

  useEffect(() => {
    // act 상태가 업데이트될 때마다 콘솔에 출력
    console.log("Access Token from Jotai:", act);
    if (act) {
      router("/nickname"); // act가 업데이트 되면 라우팅
    }
  }, [act]); // act가 변경될 때마다 useEffect 실행

  const handleInput = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPw = (event) => {
    setPassword(event.target.value);
  };

  const login = async (e) => {
    e.preventDefault();
    
    // 이메일 또는 패스워드가 비어있을 경우 로그인 막음
    if (!email || !password) {
      alert("id와 pw를 입력하세요.");
      return;
    }
    
    const data = {
      email,
      password,
    };

    axios
      .post("/user/login", data)
      .then((res) => {
        const accessToken = res.data;
        setAct(accessToken); // 액세스 토큰을 Jotai 상태에 업데이트
				localStorage.setItem("accessToken", `${accessToken}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <S.Root>
      <S.LogoImage src={Logo} alt="logo" />
      <S.Title>로그인하기</S.Title>
      <S.InputWrapper>
        <S.LoginBox>
          <p>ID</p>
          <S.Input
            onChange={handleInput}
            type="email"
            required
            placeholder="aaa1234"
          ></S.Input>
        </S.LoginBox>
        <S.LoginBox>
          <p>P/W</p>
          <S.Input
            onChange={handleInputPw}
            type="password"
            required
            placeholder="****"
          ></S.Input>
        </S.LoginBox>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={(e) => login(e)}>
          로그인
        </S.Button>
        <Link to="/join">
          <S.Button $white="true">
            회원가입
          </S.Button>
        </Link>
      </S.ButtonWrapper>
    </S.Root>
  )
}
