import React, { useEffect, useState } from "react";
import * as PS from "../style";
import * as S from "./style";
import Spinner from "../../../assets/mind-letter-spinner.gif";
function PostBoxResut() {
  // isLoading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);
  // loading 2초 후에 false로 변경

  return (
    <PS.Root>
      {/* --------- 로딩창 --------- */}
      {isLoading && (
        <>
          {/* 동영상 */}
          <S.LoadingGif src={Spinner} alt="loading" />;
          {/* 엽서가 만들어지고 있어요... */}
          <S.Text>엽서가 만들어지고 있어요...</S.Text>
          <></>
        </>
      )}
      결과페이지
    </PS.Root>
  );
}

export default PostBoxResut;
