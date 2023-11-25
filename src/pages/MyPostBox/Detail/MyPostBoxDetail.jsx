import * as S from "./style";
import * as PS from "../style";
import React, { useEffect, useState } from "react";
import DummyImg from "../../../assets/img/letter_done.png";
import { useNavigate } from "react-router-dom";

function MyPostBoxDetail() {
  const [letterList, setLetterList] = useState([]);

  const [userName, setUserName] = useState("chan");
  const navigate = useNavigate();

  // detail 페이지 이동
  const goDetailPage = id => {
    navigate(`/mypostbox/detail/${id}`);
  };

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "편지 1",
        content: "ㅋㅋㅋ",
        sender: "희찬",
        letterImage: DummyImg
      },
      {
        id: 2,
        title: "편지 제목",
        content: "편지 내용",
        sender: "서찬",
        letterImage: DummyImg
      },
      {
        id: 3,
        title: "편지 제목",
        content: "편지 내용",
        sender: "찬스",
        letterImage: DummyImg
      }
    ];
    setLetterList(data);
  }, []);

  return (
    <PS.Root>
      <S.Title>{userName}님의 우체통</S.Title>
      <S.Description>내 편지를 구경해보아요!</S.Description>
      <S.PostWrapper>
        {letterList.map((letter, index) => (
          <S.PostContainer key={index}>
            <S.PostImg
              src={letter.letterImage}
              onClick={() => {
                goDetailPage(letter.id);
              }}
            />
            <S.PostTitle>From.{letter.sender}</S.PostTitle>
          </S.PostContainer>
        ))}
      </S.PostWrapper>
    </PS.Root>
  );
}

export default MyPostBoxDetail;
