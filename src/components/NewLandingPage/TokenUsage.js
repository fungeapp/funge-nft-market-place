import React from "react";
import styled from "styled-components";

const cards = [
  {
    icon: "assets/icon/tag.svg",
    title: "Staking",
    description: "Stake your $FUNGE earn rewards of up to 445% APY.",
  },
  {
    icon: "assets/icon/security.svg",
    title: "In-App Purchases",
    description: "Use your tokens for any purchase on the Funge App.",
  },
  {
    icon: "assets/icon/medal.svg",
    title: "Trading Rewards",
    description:
      "$FUNGE token holders earn 90% of trading fee revenue generated on Funge.",
  },
];

const TokenUsage = () => {
  return (
    <Wrapper>
      <Title>Token Usage</Title>
      <CardsWrapper>
        {cards.map((card) => (
          <Card>
            <CardIcon src={card.icon} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default TokenUsage;

const Wrapper = styled.div`
  border: 2px solid black;
  padding: 0 6vw;
`;

const Title = styled.p`
  font-size: 2.3vw;
  font-family: "StabilGorteskBold";
  color: #000;
  text-align: center;
  margin-bottom: 4vw;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: calc(75% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 38.2px;
  margin-bottom: 5.5vw;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const CardIcon = styled.img`
  width: 5vw;
  height: 5vw;
  object-fit: contain;
  margin-bottom: 2.8vw;
  @media (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;

const CardTitle = styled.p`
  font-size: 1.3vw;
  font-family: "StabilGorteskBold";
  color: #000;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const CardDescription = styled.p`
  font-size: 0.9vw;
  font-family: "StabilGorteskLight";
  color: #000;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 14px;
    padding: 0 50px;
  }
`;
