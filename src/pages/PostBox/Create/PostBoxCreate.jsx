import React from "react";
import * as PS from "../style";
import * as S from "./style";
import LetterHiddenImg from "../../../assets/img/letter_hidden.png";

import QuestionBtn from "../../../components/common/QuestionBtn";
import { useNavigate } from "react-router-dom";

function PostBoxCreate() {
  const navigate = useNavigate();

  return (
    <PS.Root>
      <S.Title>
        질문에 답하면 <br />
        어울리는 엽서를 만들어드려요.
      </S.Title>
      <S.Description>
        질문의 답변은 우체통 주인이 확인할 수 있어요!
      </S.Description>
      <S.LetterHiddenImg src={LetterHiddenImg} alt="letter hidden" />
      <QuestionBtn
        colorCode={"#ffd84d"}
        text={"시작!"}
        action={() => {
          navigate("/postbox/question");
        }}
      />
    </PS.Root>
  );
}

export default PostBoxCreate;
