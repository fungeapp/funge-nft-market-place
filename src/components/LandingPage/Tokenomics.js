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
        <Right>
          <Image src="./assets/images/Tokenomics.png" />
        </Right>
      </Card>
    </Wrapper>
  );
};

export default Tokenomics;

const Wrapper = styled.div`
  padding: 0 10vw;
  padding-top: 8vw;
  @media (max-width: 768px) {
    padding: 0 7vw;
    padding-top: 8vw;
  }
`;

const Title = styled.p`
  font-size: 3vw;
  font-family: "StabilGorteskBold";
  text-align: center;
  margin-bottom: 4vw;
  @media (max-width: 768px) {
    font-size: 20px;
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
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    border: 0px solid #e1e1e1;
    padding: 0;
    box-shadow: none;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 2;
`;

const CardTitle = styled.p`
  font-size: 2vw;
  font-family: "StabilGorteskMedium";
  letter-spacing: 0.2px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const CardSubtitle = styled.p`
  font-size: 1.5vw;
  font-family: "StabilGorteskMedium";
  color: #71afac;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.1vw;
  display: flex;
  @media (max-width: 768px) {
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
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
