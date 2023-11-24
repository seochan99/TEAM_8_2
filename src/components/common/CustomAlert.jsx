import React from "react";
import styled, { css } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// style
const StyledButton = styled.button`
  width: 18rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  ${({ colorCode }) => css`
    background-color: ${colorCode}; // Use ${colorCode} to set the background color
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 2rem 1rem;
  border-radius: 16px;
  background: var(--White, #fff);
  /* Card */
  box-shadow: 0px 2px 6px 0px rgba(98, 98, 114, 0.2);
  z-index: 100;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  color: var(--Black, #151515);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  white-space: pre-line;
  line-height: 150%;
`;

const OkText = styled.span`
  color: var(--White, var(--White, #fff));
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
function CustomAlert({ message, onClose, colorCode }) {
  return (
    <Overlay
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}
    >
      <Container>
        <Text>{message}</Text>
        <ButtonContainer>
          <StyledButton colorCode={colorCode} onClick={onClose}>
            <OkText>확인</OkText>
          </StyledButton>
        </ButtonContainer>
      </Container>
    </Overlay>
  );
}

export default CustomAlert;
