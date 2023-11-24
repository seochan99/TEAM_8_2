import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function PostBox() {
  // location username=uuid 값을 가지고와서 변수에 저장
  //   const location = useLocation();
  //   const { username } = useParams();
  const [userName, setUserName] = useState("chan");

  // 나중에 query로 유저 정보 가져와서 저장
  //   useEffect(() => {
  //     first;

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  const [post, setPost] = useState({
    title: "",
    content: "",
    receiver: "",
    sender: "",
    letterImage: ""
  });

  return (
    <S.Root>
      <S.LogoImage src={Logo} alt="logo" />
      <S.Title>
        {userName}님의 우체통에 방문했어요.
        <br />
        편지 한 장 놓고 가실래요?
        <S.LetterBox></S.LetterBox>
      </S.Title>
    </S.Root>
  );
}

export default PostBox;
