import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

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
        <Right
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <Image src="./assets/images/Tokenomics.png" />
        </Right>
      </Card>
    </Wrapper>
  );
};

export default Tokenomics;

const Wrapper = styled.div`
  padding: 0 6vw;
  padding-top: 10vw;
`;

const Title = styled.p`
  font-size: 3.1vw;
  font-family: "StabilGorteskBold";
  text-align: center;
  color: #000;
  margin-bottom: 6.4vw;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 2;
`;

const CardTitle = styled.p`
  font-size: 2.1vw;
  font-family: "StabilGorteskMedium";
  letter-spacing: 0.2px;
  color: #000;
  margin-bottom: 2.3vw;
  @media (max-width: 425px) {
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const CardSubtitle = styled.p`
  font-size: 1.7vw;
  font-family: "StabilGorteskMedium";
  color: #71afac;
  margin-bottom: 2.3vw;
  @media (max-width: 425px) {
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Text = styled.p`
  font-size: 1.1vw;
  font-family: "Inter";
  display: flex;
  color: #000;
  margin-bottom: 0;
  @media (max-width: 425px) {
    font-size: 14px;
    text-align: center;
    justify-content: center;
  }
`;

const BoldText = styled.p`
  font-family: "InterBold";
  margin-right: 5px;
`;

const Image = styled.img`
  width: 100%;
  @media (max-width: 425px) {
    margin-bottom: 30px;
  }
`;
