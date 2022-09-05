import React from "react";
import styled from "styled-components";

const BuiltOnPlanetEarth = () => {
  return (
    <Wrapper>
      <div>
        <Title>
          Built on planet earth, <br />
          for planet earth
        </Title>
        <Description>
          Being earth-conscious and taking responsibility for climate change is
          at the core of who we are and what we do.
          <br />
          <br />
          That’s why we are 100% carbon neutral, counterbalancing the entirety
          of our CO2 footprint for a net-zero output.
        </Description>
      </div>
      <GIF src="./assets/videos/eco_funge_section_low.gif" />
    </Wrapper>
  );
};

export default BuiltOnPlanetEarth;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 10vw;
  padding-top: 10vw;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 7vw;
    padding-top: 10vw;
  }
`;

const Title = styled.p`
  font-family: "StabilGorteskBold";
  font-size: 3vw;
  letter-spacing: 0.2px;
  line-height: 3vw;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    line-height: 20px;
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 425px) {
    text-align: start;
  }
`;

const Description = styled.p`
  font-size: 1.4vw;
  width: 80%;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    margin: auto;
  }
  @media (max-width: 425px) {
    text-align: start;
    margin: 0;
    width: 80%;
  }
`;

const GIF = styled.img`
  width: 524px;
  height: 674px;
  object-fit: cover;
  object-position: center;
  margin-top: 50px;
  @media (max-width: 1024px) {
    width: 324px;
    height: 474px;
  }
  @media (max-width: 425px) {
    height: 423px;
    width: 100%;
    margin-top: 0;
  }
`;
