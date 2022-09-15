import React from "react";
import styled from "styled-components";

const Entry = () => {
  return (
    <Wrapper>
      <BackgroundImg src="assets/images/bg.png" />
      <Container marginBottom>
        <Title>Your gateway to the creative economy</Title>
        <Subtitle>
          Trade, Connect and
          <br />
          Earn like never before.
        </Subtitle>
        <Button data-bs-toggle="modal" data-bs-target="#waitListModal">
          Join the waitlist
        </Button>
      </Container>
      <Container>
        <MainImg src="assets/images/main.png" />
      </Container>
    </Wrapper>
  );
};

export default Entry;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 11vw 0 21vw 6vw;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => (props.marginBottom ? 5 : 0)}vw;
  @media (max-width: 425px) {
    align-items: center;
  }
`;

const Title = styled.p`
  font-size: 2.1vw;
  color: #000;
  margin-bottom: 0;
  @media (max-width: 425px) {
    font-size: 12px;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 4.2vw;
  font-family: "StabilGorteskBold";
  color: #000;
  @media (max-width: 425px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  border-radius: 48px;
  background-color: #000;
  padding: 1vw 5vw;
  font-size: 1vw;
  font-family: "StabilGorteskBold";
  color: #fff;
  border: none;
  width: fit-content;
  @media (max-width: 425px) {
    padding: 8px 40px;
    font-size: 14px;
  }
`;

const MainImg = styled.img`
  width: 100%;
`;

const BackgroundImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
