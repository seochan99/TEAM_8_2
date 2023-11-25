import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MindLetterBtnComponent from "../../components/common/MindLetterBtn";

function PostBox() {
  const navigate = useNavigate();
  // location username=uuid 값을 가지고와서 변수에 저장
  const location = useLocation();
  const { username } = useParams();
  const [userInf, setUserInf] = useState({
    userName: "",
    letterBox: "String" // image....
  });

  // 나중에 query로 유저 정보 가져와서 저장
  // 유저 이름이랑 posterbodx setting
  useEffect(() => {
    const data = {
      userName: "chan",
      letterBox: "String" // image....
    };
    return () => {
      second;
    };
  }, [third]);

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
        {/* yellow button  */}
        <S.BtnContainer>
          <MindLetterBtnComponent
            colorCode={"#ffd84d"}
            action={() => {
              navigate("/postbox/create");
            }}
            text={"편지 쓰러가기"}
          ></MindLetterBtnComponent>
          <MindLetterBtnComponent
            colorCode={"#FFFCF5"}
            action={() => {
              // 로그인 된 상태라면 로그인 말고 우체통 홈 페이지 이동
              navigate("/login");
            }}
            text={"내 우체통 만들기"}
          ></MindLetterBtnComponent>
        </S.BtnContainer>
        {/* white button  */}
      </S.Title>
    </S.Root>
  );
}

export default PostBox;
