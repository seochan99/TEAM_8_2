import { styled, css } from "styled-components";

export const LogoImage = styled.img`
  width: 16%;
  margin: 5rem auto 48px auto;
`;
export const Title = styled.div`
  font-family: "Esamanru";
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24rem;
  z-index: 1;
  gap: 1rem;
`;

export const Description = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;

  font-weight: 400;
  transform: translateY(-1rem);
`;

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // This sets two columns per row
  column-gap: 0cap.5; // Add some gap between the columns
  row-gap: 1rem; // Add some gap between the rows
  padding: 0 1rem;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostImg = styled.img`
  width: 85%;
  cursor: pointer;
`;

export const PostTitle = styled.div`
  font-family: "Esamanru";
  color: #fff;
  margin-top: 1rem;
  text-align: center;
  font-family: esamanru;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
