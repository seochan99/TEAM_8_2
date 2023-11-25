import React, { useEffect, useState } from "react";
import * as PS from "../style";
import * as CS from "../Create/style";
import * as S from "./style";

import LetterImg from "../../../assets/img/dummy_postcard.png";
import RefreshIcon from "../../../assets/icons/icon_refresh.png";
import MindLetterBtnComponent, {
  MindLetterBtn
} from "../../../components/common/MindLetterBtn";
import QuestionBtnComponent from "../../../components/common/QuestionBtn";
import { useLocation, useNavigate } from "react-router-dom";
import CustomAlert from "../../../components/common/CustomAlert";
import Loading from "../../../components/common/Loading";
import axios from "axios";
function PostBoxResut() {
  // 결과물을 받아서 이미지 생성을 여기서 해야할듯함
  // isLoading
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [letterOn, setLetterOn] = useState(false);
  const [userName] = useState("chan");

  // alert
  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation();
  const { nickname, answerList, promptingText, imgUrl } = location.state;
  // navigate
  const navigate = useNavigate();

  // navigate stete받아쓰기

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  // loading 2초 후에 false로 변경

  const SubmitHandler = async () => {
    if (letterOn) {
      // text가 비었으면 alert하고 반려
      if (text === "") {
        setShowAlert(true);
        return;
      }

      // 내용물 생성
      const content = {
        letterRequestDto: {
          answer: promptingText,
          content: text,
          writer: nickname,
          image: imgUrl
        }
      };
      const UUID = "13eaafc6-bba1-4382-8021-109f58d8e167";
      const response = await axios.post(`/letter/${UUID}`, content);
      console.log(response);

      // 글도 채워져있다면
      navigate("/postbox/result/done");
    } else {
      setLetterOn(true);
    }
  };

  return (
    <PS.Root>
      {showAlert && (
        <CustomAlert
          message="편지를 입력해주세요"
          colorCode="#ffd84d"
          onClose={() => {
            setShowAlert(false);
          }}
        />
      )}
      {/* --------- 로딩창 --------- */}
      {isLoading ? (
        <>
          {/* 동영상 */}
          <Loading text={"엽서가 만들어지고 있어요..."} />
          {/* <S.LoadingGif src={Spinner} alt="loading" />;
          {/* 엽서가 만들어지고 있어요... */}
          {/* <S.Text>엽서가 만들어지고 있어요...</S.Text> */}
        </>
      ) : (
        <>
          {!letterOn ? (
            <>
              <CS.Title>엽서가 만들어졌어요!</CS.Title>
              <S.Description>엽서 뒷편에 편지를 작성해보아요!</S.Description>
            </>
          ) : (
            <>
              <CS.Title>{userName}님에게 편지쓰기</CS.Title>
            </>
          )}

          <S.LetterContainer>
            <S.LetterImg src={imgUrl ?? LetterImg} />
            {letterOn && (
              <S.LetterBox
                onChange={e => {
                  setText(e.target.value);
                }}
                placeholder="편지를 적어주세요"
              ></S.LetterBox>
            )}
          </S.LetterContainer>

          {!letterOn ? (
            <>
              {/* <S.ResetBtnContainer>
                <S.RefreshIcon src={RefreshIcon}></S.RefreshIcon>
                <S.RefreshText
                  onClick={() => {
                    // 새로고침
                    // 1. 이미지 API 다시 불러오기
                    // 2. 로딩창 띄우기
                    // 3. 로딩창 2초 후에 false로 변경
                    // 4. 엽서 이미지 띄우기
                  }}
                >
                  새로고침
                </S.RefreshText>
              </S.ResetBtnContainer> */}
            </>
          ) : (
            <div
              style={{
                marginTop: "2rem"
              }}
            ></div>
          )}
          <QuestionBtnComponent
            colorCode={"#ffd84d"}
            text={letterOn ? "우체통에 넣기" : "편지 쓰러 가기"}
            action={SubmitHandler}
          />
        </>
      )}
    </PS.Root>
  );
}

export default PostBoxResut;
