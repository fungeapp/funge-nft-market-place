import React, { useState } from "react";
import styled from "styled-components";
import CommunityBuilder from "./CommunityBuilder";
import TalentMarketplace from "./TalentMarketplace";
import WalletManager from "./WalletManager";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const descriptions = [
  "Funge talent marketplace is the fastest and most efficient way to source top Web3 talent. Seek and hire experts in smart \ncontract development, web design, tokenomics creation, discord management, marketing, and more.",
  "We're launching a VoIP and instant messaging social platform where you can find and share ideas in private chats or on \ncommunity channels using voice, video calls, text messages and other media.",
  "No need to hold multiple wallets to store and manage your tokens. Each user receives a built-in Funge wallet that \nallows them easily monitor, send and receive their crypto assets.",
];

const ToolsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderComp = () => {
    switch (activeIndex) {
      case 0:
        return <TalentMarketplace />;
      case 1:
        return <CommunityBuilder />;
      case 2:
        return <WalletManager />;
    }
  };

  return (
    <Wrapper data-aos="fade-up">
      <Title>
        Tools designed for the growing wave of forward-thinking creators,
        innovators, and traders.
      </Title>
      <SubtitlesWrapper>
        <Subtitle active={activeIndex === 0} onClick={() => setActiveIndex(0)}>
          Talent Marketplace
        </Subtitle>
        <Line />
        <Subtitle active={activeIndex === 1} onClick={() => setActiveIndex(1)}>
          Community Builder
        </Subtitle>
        <Line />
        <Subtitle active={activeIndex === 2} onClick={() => setActiveIndex(2)}>
          Wallet Manager
        </Subtitle>
      </SubtitlesWrapper>
      <Description data-aos="fade-in" data-aos-duration="2000">
        {descriptions[activeIndex]}
      </Description>
      {renderComp()}
    </Wrapper>
  );
};

export default ToolsCarousel;

const Wrapper = styled.div`
  padding: 8vw 6vw;
  background-color: #f7f8fa;
`;

const Title = styled.p`
  font-size: 3vw;
  font-family: "StabilGorteskMedium";
  color: #000;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 6vw;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const SubtitlesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4vw;
`;

const Subtitle = styled.p`
  font-size: 2.2vw;
  font-family: "StabilGorteskMedium";
  color: ${(props) => (props.active ? "#000" : "#979797")};
  letter-spacing: 0.2px;
  transition: all 0.5s;
  margin-bottom: 0;
  cursor: pointer;
  @media (max-width: 425px) {
    font-size: 15px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "StabilGorteskLight";
  font-size: 1.1vw;
  color: #000;
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 4vw;
  @media (max-width: 425px) {
    font-size: 12px;
    margin-bottom: 20px;
    white-space: normal;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 3vw;
  background-color: #cbd5e1;
`;
