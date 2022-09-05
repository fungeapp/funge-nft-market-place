import React from "react";
import styled from "styled-components";

const TalentMarketPlace = () => {
  return (
    <Wrapper>
      <Container reverse>
        <ImageWrapper>
          <Image src="assets/images/TalentMarketPlace.png" />
        </ImageWrapper>
        <TextWrapper marginLeft>
          <Title>Talent Marketplace</Title>
          <Description>
            Funge talent marketplace is the fastest and most efficient way to
            source top Web3 talent. Seek and hire experts in smart contract
            development, web design, tokenomics creation, discord management,
            marketing, and more.
          </Description>
        </TextWrapper>
      </Container>
      <Container>
        <TextWrapper>
          <Title>In-house Wallet</Title>
          <Description>
            No need to hold multiple wallets to store and manage your tokens.
            Each user receives a built-in Funge wallet that allows them easily
            monitor, send and receive their crypto assets.
          </Description>
        </TextWrapper>
        <ImageWrapper>
          <Image src="assets/images/InHouseWallet.png" />
        </ImageWrapper>
      </Container>
      <BackgroundImage src="assets/images/RightBackground.png" />
    </Wrapper>
  );
};

export default TalentMarketPlace;

const Wrapper = styled.div`
  position: relative;
  padding: 0 10vw;
  @media (max-width: 768px) {
    padding: 0 7vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10vw;
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
    align-items: flex-start;
  }
`;

const BackgroundImage = styled.img`
  width: 25%;
  position: absolute;
  top: 200px;
  right: 0;
  z-index: -1;
  @media (max-width: 768px) {
    width: 30%;
    top: 100px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: ${(props) => (props.marginLeft ? 50 : 0)}px;
  padding-right: ${(props) => (props.marginLeft ? 0 : 50)}px;
  @media (max-width: 768px) {
    width: 80%;
    padding-left: 10px;
  }
`;

const Title = styled.p`
  font-family: "StabilGorteskMedium";
  font-size: 2vw;
  letter-spacing: 0.2px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 1.2vw;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`;
