import React from "react";
import styled from "styled-components";

const Entry = () => {
  return (
    <Wrapper>
      <BackgroundImage src="assets/images/Background.png" />
      <Title>Your gateway to the creative economy</Title>
      <Subtitle>
        Trade, Connect and Earn
        <br />
        like never before.
      </Subtitle>
      <Button data-bs-toggle="modal" data-bs-target="#waitListModal">
        Join The Waitlist
      </Button>
      <Image src="assets/images/EntryImg.png" />
    </Wrapper>
  );
};

export default Entry;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100vw;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: clamp(100px, 11vw, 214.4px);
`;

const Title = styled.p`
  font-size: 2.3vw;
  font-weight: 500;
  color: #fff;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: 4.5vw;
  font-weight: bold;
  color: #fff;
  line-height: 6vw;
  text-align: center;
  font-family: "StabilGorteskBold";
  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Button = styled.button`
  padding: 13.2px 94.6px;
  background-color: #fff;
  border-radius: 48px;
  font-size: 18px;
  font-family: "StabilGorteskBold";
  color: #000;
  border: none;
  margin-top: 2vw;
  @media (max-width: 425px) {
    padding: 13.2px 54.5px;
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 80%;
  padding-left: 30px;
  margin-top: 5vw;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
  }
`;
