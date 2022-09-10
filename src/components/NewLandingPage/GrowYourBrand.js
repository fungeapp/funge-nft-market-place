import React from "react";
import styled from "styled-components";

const GrowYourBrand = () => {
  return (
    <Wrapper>
      <BackgroundImage />
      <TextsWrapper>
        <Title>Stay informed about Funge</Title>
        <Subtitle>Try Ehya free for 14 days. No credit card required.</Subtitle>
        <Button>Sign Up for Free Trial</Button>
      </TextsWrapper>
    </Wrapper>
  );
};

export default GrowYourBrand;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10vw;
`;

const TextsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vw;
  z-index: 1;
`;

const Title = styled.p`
  font-size: 2.2vw;
  font-family: "StabilGorteskBold";
  color: #183b56;
  letter-spacing: 0.2px;
  margin-bottom: 1.5vw;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 1vw;
  font-family: "StabilGorteskLight";
  color: #5a7184;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 16.5vw;
  height: 3.5vw;
  border: none;
  border-radius: 12px;
  background-color: #71afac;
  font-size: 1vw;
  font-family: "StabilGorteskBold";
  color: #fff;
  margin-top: 3.1vw;
  @media (max-width: 425px) {
    width: 312px;
    height: 64px;
    font-size: 16px;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  content: url("assets/images/CTA.png");
  @media (max-width: 425px) {
    content: url("assets/images/CTA1.png");
    top: 250px;
    opacity: 0.7;
  }
`;
