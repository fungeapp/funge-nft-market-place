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
    </Wrapper>
  );
};

export default FungeCommunity;

const Wrapper = styled.div`
  position: relative;
  padding: 15vw 0;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -35vw;
  left: 0;
  z-index: -1;
  width: 100%;
`;

const Image = styled.img`
  width: 65%;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  margin: 0 18vw;
  margin-top: 10vw;
  @media (max-width: 768px) {
    margin: 0 7vw;
    margin-top: 10vw;
  }
`;

const Title = styled.p`
  font-size: 3vw;
  font-family: "StabilGorteskBold";
  text-align: center;
  line-height: 4vw;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Description = styled.p`
  font-size: 1.4vw;
  text-align: center;
  line-height: 2.3vw;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
