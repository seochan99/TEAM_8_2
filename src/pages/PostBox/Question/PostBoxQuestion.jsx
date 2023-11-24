import React, { useState } from "react";
import * as PS from "../style";

function PostBoxQuestion() {
  const [questionSetep, setQuestionStep] = useState(0);
  const [question, setQuestion] = useState([
    {
      questionNum: "Q1",
      question: "당신은 이 사람에게 어떤 존재인가요?",
      answer: "",
      palceholderText: "나에게 이 사람은..."
    },
    {
      questionNum: "Q2",
      question: "당신은 이 사람에게 기억에 남는 장소는 어딘가요??",
      answer: "",
      palceholderText: "기억에 남는 장소는.."
    }
  ]);
  return <PS.Root>질문~</PS.Root>;
}

export default PostBoxQuestion;
