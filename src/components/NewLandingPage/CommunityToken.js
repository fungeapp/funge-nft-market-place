import React from "react";
import styled from "styled-components";

const CommunityToken = () => {
  return (
    <Wrapper>
      <Title>The Funge community token</Title>
      <Subtitle>
        We’re putting the future of Funge and the power of the creator economy
        in the hands of our community. With $FUNGE, you have access to exclusive
        holder benefits and rewards tailored for you to grow and develop as an
        artist or innovator. By holding our token, you are more than just a user
        — you become a part-owner of the platform.
      </Subtitle>
      <ImageWrapper>
        <Image src="assets/images/Token_Section.png" />
        <BackgroundImg src="assets/images/Vector.png" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default CommunityToken;

const Wrapper = styled.div`
  padding: 10vw 6vw;
`;

const Title = styled.p`
  font-size: 4vw;
  font-family: "StabilGorteskBold";
  color: #000;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.4vw;
  color: #000;
  text-align: center;
  padding: 0 6vw;
  @media (max-width: 425px) {
    font-size: 14px;
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7vw;
`;

const BackgroundImg = styled.img`
  width: 60%;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 80%;
  position: absolute;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
