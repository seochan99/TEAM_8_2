import React from "react";
import { styled, css } from "styled-components";
import Spinner from "../../assets/mind-letter-spinner.gif";

const LoadingGif = styled.img`
  width: 30%;
  margin: 10rem auto 1rem auto;
`;

const Text = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Esamanru";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

function Loading({ text }) {
  return (
    <>
      <LoadingGif src={Spinner} alt="loading" />;<Text>{text}</Text>
    </>
  );
}

export default Loading;
