import React from "react";
import styled from "styled-components";

const items = [
  {
    icon: "assets/images/Twitter1.png",
    text: "Twitter",
  },
  {
    icon: "assets/images/Facebook.png",
    text: "Facebook",
  },
  {
    icon: "assets/images/Email.png",
    text: "Gmail",
  },
  {
    icon: "assets/images/Slack.png",
    text: "Slack",
  },
  {
    icon: "assets/images/Reddit.png",
    text: "Reddit",
  },
  {
    icon: "assets/images/Youtube.png",
    text: "Youtube",
  },
];

const SocialMedia = () => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ItemsWrapper>
          <Icon src={item.icon} />
          <Text>{item.text}</Text>
        </ItemsWrapper>
      ))}
    </Wrapper>
  );
};

export default SocialMedia;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7vw 12vw 4vw 12vw;
  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    margin: 30px 0;
  }
`;

const Icon = styled.img`
  height: 1.5vw;
  object-fit: contain;
  margin-right: 0.5vw;
  @media (max-width: 425px) {
    height: 28px;
    margin-right: 10px;
  }
`;

const Text = styled.p`
  font-size: 0.8vw;
  font-family: "StabilGorteskMedium";
  margin-bottom: 0;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
