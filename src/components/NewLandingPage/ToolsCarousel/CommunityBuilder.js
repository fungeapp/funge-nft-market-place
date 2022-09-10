import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const cards = [
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
  {
    icon: "assets/icon/tag.svg",
    text: "Voice Chat Rooms",
  },
];

const CommunityBuilder = () => {
  return (
    <Wrapper data-aos="fade-in" data-aos-duration="2000">
      {cards.map((card) => (
        <Card>
          <Icon src={card.icon} />
          <Text>{card.text}</Text>
        </Card>
      ))}
    </Wrapper>
  );
};

export default CommunityBuilder;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: opacity 1s ease;
`;

const Card = styled.div`
  width: calc(90% / 4);
  height: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  margin-bottom: 35px;
`;

const Text = styled.p`
  font-size: 1.1vw;
  font-family: "StabilGorteskBold";
  color: #183b56;
`;

const Icon = styled.img`
  width: 4vw;
  height: 4vw;
  object-fit: contain;
  margin-bottom: 2.3vw;
`;
