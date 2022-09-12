import React from "react";
import styled from "styled-components";
import SingleImageDescription from "./SingleImageDescription";

const ImageDescriptions = () => {
  return (
    <Wrapper>
      <SingleImageDescription
        title={"Collector Spotlight"}
        subtitle={"Robust Social Features"}
        description={
          "Connect with users who are passionate about NFTs, keep up with \ncurrent trends, and mint NFTs all within one social feed built \nspecifically for the blockchain community."
        }
        items={[
          "Stay up-to-date with trending NFT discussions and topics",
          "Connect with fellow users through built-in direct messaging",
          "Mint verified NFTs from your social feed",
        ]}
        video1={"assets/videos/Video01.mp4"}
      />
      <SingleImageDescription
        title={"Trader Spotlight"}
        subtitle={"Powerful NFT Tools & Solutions"}
        description={
          "A complete and comprehensive toolset for all your NFT needs. \nExplore the limits with our feature-packed trading tools, cross-\nplatform transactions, live NFT analytics, and more."
        }
        items={[
          "Advanced market insights, analytics, and alerts",
          "Compare floor prices across different platforms",
          "Conduct private sales",
          "Batch buy multiple NFT’s",
        ]}
        video1={"assets/videos/Video03.mp4"}
        video2={"assets/videos/Video02.mp4"}
      />
      <SingleImageDescription
        title={"Rewards Spotlight"}
        subtitle={"Engagement Incentives"}
        description={
          "Our Tokenomics system turns users into owners by rewarding \nthem for creating valuable content and participating on the \nplatform."
        }
        items={[
          "Earn tokens when the community engages with your content",
          "Receive $FUNGE rewards for every NFT you trade",
          "Stake $FUNGE tokens and receive up to 445% APY",
          "Earn additional commission for every friend you refer",
        ]}
        video1={"assets/videos/Video05.mp4"}
      />
    </Wrapper>
  );
};

export default ImageDescriptions;

const Wrapper = styled.div`
  padding: 0 6vw;
  padding-bottom: 6vw;
`;
