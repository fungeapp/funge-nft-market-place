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
        <Button>Join the waitlist</Button>
      </Container>
      <Container>
        <MainImg src="assets/images/main.png" />
      </Container>
    </Wrapper>
  );
};

export default Entry;

const Wrapper = styled.div`
  border: 2px solid black;
  display: flex;
  align-items: center;
  padding: 17vw 0 19vw 6vw;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => (props.marginBottom ? 5 : 0)}vw;
`;

const Title = styled.p`
  font-size: 2.1vw;
  color: #000;
  margin-bottom: 0;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  font-size: 4.2vw;
  font-family: "StabilGorteskBold";
  color: #000;
  @media (max-width: 425px) {
    font-size: 24px;
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
    padding: 14px 96px;
    font-size: 18px;
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
