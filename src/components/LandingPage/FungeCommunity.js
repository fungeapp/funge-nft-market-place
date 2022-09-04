import React from "react";
import styled from "styled-components";

const FungeCommunity = () => {
  return (
    <Wrapper>
      <BackgroundImage src="assets/images/Background2.png" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <Image src="assets/images/Token_Section.png" />
          </div>
        </div>
        <TextWrapper>
          <Title>The Funge community token</Title>
          <Description>
            We’re putting the future of Funge and the power of the creator
            economy in the hands of our community. With $FUNGE, you have access
            to exclusive holder benefits and rewards tailored for you to grow
            and develop as an artist or innovator. By holding our token, you are
            more than just a user - you become a part-owner of the platform.
          </Description>
        </TextWrapper>
      </div>
      <br />
      <br />
    </Wrapper>
  );
};

export default FungeCommunity;

const Wrapper = styled.div`
  position: relative;
  padding-top: 400px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    padding-top: 100px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -600px;
  left: 0;
  z-index: -1;
  width: 100%;
  @media (max-width: 1024px) {
    top: -200px;
  }
  @media (max-width: 425px) {
    top: -100px;
  }
`;

const Image = styled.img`
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  margin: 0 200px;
  margin-top: 185px;
  @media (max-width: 1024px) {
    margin: 0 100px;
    margin-top: 185px;
  }
  @media (max-width: 425px) {
    margin: 0 50px;
    margin-top: 50px;
  }
`;

const Title = styled.p`
  font-size: 51px;
  font-family: "StabilGorteskBold";
  text-align: center;
  line-height: 66.3px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
  line-height: 40px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
