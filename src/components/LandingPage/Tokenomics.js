import React from "react";
import styled from "styled-components";

const Tokenomics = () => {
  return (
    <Wrapper>
      <Title>Tokenomics</Title>
      <Card>
        <Left>
          <CardTitle>Funge Token Allocation</CardTitle>
          <CardSubtitle>Total Supply: 100,000,000</CardSubtitle>
          <Text>
            <BoldText>6.25%</BoldText>Seed Stage - (6,250,000)
          </Text>
          <Text>
            <BoldText>10.21%</BoldText>Private Round - (10,208,333)
          </Text>
          <Text>
            <BoldText>32.95%</BoldText>Community Incentives - (32,947,388)
          </Text>
          <Text>
            <BoldText>2.00%</BoldText>Marketing - (2,000,000)
          </Text>
          <Text>
            <BoldText>10%</BoldText>Teams - (10,000,000)
          </Text>
          <Text>
            <BoldText>2%</BoldText>Advisors - (2,000,000)
          </Text>
          <Text>
            <BoldText>12%</BoldText>Airdrop - (12,000,000)
          </Text>
          <Text>
            <BoldText>17.09%</BoldText>Liquidity - (17,094,278)
          </Text>
          <Text>
            <BoldText>8.09%</BoldText>Staking - (8,094,278)
          </Text>
          <Text>
            <BoldText>12%</BoldText>Reserve - (12,000,000)
          </Text>
        </Left>
        <Image src="./assets/images/Tokenomics.png" />
      </Card>
    </Wrapper>
  );
};

export default Tokenomics;

const Wrapper = styled.div`
  margin: 0 160px;
  margin-bottom: 200px;
  @media (max-width: 1024px) {
    margin: 0 50px;
  }
  @media (max-width: 425px) {
    margin: 0 20px;
  }
`;

const Title = styled.p`
  font-size: 60px;
  font-family: "StabilGorteskBold";
  text-align: center;
  margin-bottom: 70px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  box-shadow: 0px 64px 94px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  padding: 50px 0 50px 50px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 425px) {
    flex-direction: column-reverse;
    border: 0px solid #e1e1e1;
    padding: 0;
    box-shadow: none;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const CardTitle = styled.p`
  font-size: 40px;
  font-family: "StabilGorteskMedium";
  letter-spacing: 0.2px;
  margin-bottom: 44px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 19px;
    text-align: center;
  }
`;

const CardSubtitle = styled.p`
  font-size: 32px;
  font-family: "StabilGorteskMedium";
  color: #71afac;
  margin-bottom: 49px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 19px;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 20px;
  display: flex;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 14px;
    text-align: center;
    justify-content: center;
  }
`;

const BoldText = styled.p`
  font-family: "StabilGorteskBold";
  margin-right: 5px;
`;

const Image = styled.img`
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
