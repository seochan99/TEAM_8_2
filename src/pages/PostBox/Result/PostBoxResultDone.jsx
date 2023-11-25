import React, { useEffect, useState } from "react";
import * as PS from "../style";
import * as CS from "../Create/style";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/common/Loading";
import LetterDoneImg from "../../../assets/img/letter_done.png";
import EnvelopImg_1 from "../../../assets/img/envelop/green.png";
import EnvelopImg_2 from "../../../assets/img/envelop/red.png";
import EnvelopImg_3 from "../../../assets/img/envelop/purple.png";
import EnvelopImg_4 from "../../../assets/img/envelop/yellow.png";
import MindLetterBtnComponent from "../../../components/common/MindLetterBtn";
import CustomAlert from "../../../components/common/CustomAlert";

const envelopImages = [EnvelopImg_1, EnvelopImg_2, EnvelopImg_3, EnvelopImg_4];

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function PostBoxResultDone() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [letterOn, setLetterOn] = useState(false);
  const [userName] = useState("chan");

  const [showAlert, setShowAlert] = useState(false);
  const [envelopImage, setEnvelopImage] = useState(null);

  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    const randomEnvelopImage = getRandomImage(envelopImages);
    setEnvelopImage(randomEnvelopImage);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <PS.Root>
      {showAlert && (
        <CustomAlert
          message="링크가 복사되었습니다!"
          colorCode="#ffd84d"
          onClose={() => {
            setShowAlert(false);
          }}
        />
      )}
      {isLoading ? (
        <Loading text={"엽서가 만들어지고 있어요..."} />
      ) : (
        <>
          <CS.Title
            style={{
              marginTop: "8rem"
            }}
          >
            {" "}
            {userName}님에게 무사히 전달됐어요!
          </CS.Title>
          {/* {envelopImage && <S.LetterDoneImg src={envelopImage} alt="Envelop" />} */}

          <S.LetterDoneImg src={LetterDoneImg} />
          <MindLetterBtnComponent
            colorCode={"#ffd84d"}
            action={() => {
              navigator.clipboard.writeText(window.location.href);
              setShowAlert(true);
            }}
            text={"친구에게 공유하기"}
          />
          <div style={{ marginTop: "1.5rem" }}></div>
          <MindLetterBtnComponent
            colorCode={"#FFFCF5"}
            action={() => {
              navigate("/login");
            }}
            text={"나도 우체통 만들기 "}
          />
        </>
      )}
    </PS.Root>
  );
}

export default PostBoxResultDone;
