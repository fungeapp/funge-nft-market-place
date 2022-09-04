import React from "react";
import styled from "styled-components";

const TalentMarketPlace = () => {
  return (
    <Wrapper>
      <Container reverse>
        <Image src="assets/images/TalentMarketPlace.png" />
        <TextWrapper>
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
        <Image src="assets/images/InHouseWallet.png" />
      </Container>
      <BackgroundImage src="assets/images/RightBackground.png" />
    </Wrapper>
  );
};

export default TalentMarketPlace;

const Wrapper = styled.div`
  position: relative;
  padding: 0 100px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 250px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
    margin-top: 100px;
    align-items: flex-start;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -350px;
  right: 0;
  z-index: -1;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    width: 50%;
    top: -200px;
  }
`;

const Image = styled.img`
  width: 60%;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  width: 35%;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    width: 80%;
  }
`;

const Title = styled.p`
  font-family: "StabilGorteskMedium";
  font-size: 40px;
  line-height: 52px;
  letter-spacing: 0.2px;
  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 42px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 32px;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
