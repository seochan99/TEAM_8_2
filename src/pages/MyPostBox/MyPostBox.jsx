import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MindLetterBtnComponent from "../../components/common/MindLetterBtn";
import CustomAlert from "../../components/common/CustomAlert";

function MyPostBox() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  // location username=uuid 값을 가지고와서 변수에 저장
  //   const location = useLocation();
  //   const { username } = useParams();
  const [userName, setUserName] = useState("chan");

  // const [isLoading, setIsLoading] = useState(true);
  // // 나중에 query로 유저 정보 가져와서 저장
  //   useEffect(() => {

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
      {showAlert && (
        <CustomAlert
          message="링크가 복사되었습니다!"
          colorCode="#ffd84d"
          onClose={() => {
            setShowAlert(false);
          }}
        />
      )}
      <S.Title>
        {userName}님의 우체통
        <S.LetterBox></S.LetterBox>
        {/* yellow button  */}
        <S.BtnContainer>
          <MindLetterBtnComponent
            colorCode={"#ffd84d"}
            action={() => {
              navigate("/mypostbox/detail");
            }}
            text={"받은 편지 보러가기"}
          ></MindLetterBtnComponent>
          <MindLetterBtnComponent
            colorCode={"#FFFCF5"}
            action={() => {
              navigator.clipboard.writeText(window.location.href);
              setShowAlert(true);
            }}
            text={"내 우체통 공유하기"}
          ></MindLetterBtnComponent>
        </S.BtnContainer>
        {/* white button  */}
      </S.Title>
    </S.Root>
  );
}

export default MyPostBox;
