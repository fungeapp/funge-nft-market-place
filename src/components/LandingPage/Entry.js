import React from "react";
import styled from "styled-components";

const Entry = ({ onClick }) => {
  return (
    <>
      <Wrapper>
        <Title>Your gateway to the creative economy</Title>
        <Subtitle>
          Trade, Connect and Earn
          <br />
          like never before.
        </Subtitle>
        <Button onClick={onClick}>Join The Waitlist</Button>
        <ImagesWrapper>
          <BrowserImage src="assets/images/Browser.svg" />
          <MobileImage src="assets/images/Mobile.svg" />
        </ImagesWrapper>
      </Wrapper>
    </>
  );
};

export default Entry;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 214.4px;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: #fff;
  line-height: 48px;
`;

const Subtitle = styled.p`
  font-size: 72px;
  font-weight: 700;
  color: #fff;
  line-height: 93.6px;
  text-align: center;
`;

const Button = styled.button`
  padding: 13.2px 94.6px;
  background-color: #fff;
  border-radius: 48px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  border: none;
  margin-top: 37.6px;
`;

const ImagesWrapper = styled.div`
  position: relative;
  margin-top: 85.8px;
  margin-left: -170px;
`;

const BrowserImage = styled.img``;

const MobileImage = styled.img`
  position: absolute;
  bottom: 0;
  right: -190px;
`;
