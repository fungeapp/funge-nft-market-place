import React from "react";
import styled from "styled-components";

const BuiltOnPlanetEarth = () => {
  return (
    <section className="collection my-5 pb-5">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-7 my-4 ps-4">
            <br />
            <br />
            <br />
            <Title>
              Built on planet earth, <br />
              for planet earth
            </Title>
            <Description>
              Being earth-conscious and taking responsibility for climate change
              is at the core of who we are and what we do.
              <br />
              <br />
              That’s why we are 100% carbon neutral, counterbalancing the
              entirety of our CO2 footprint for a net-zero output.
            </Description>
          </div>

          <GIF src="./assets/videos/eco_funge_section_low.gif" />
        </div>
      </div>
    </section>
  );
};

export default BuiltOnPlanetEarth;

const Title = styled.p`
  font-family: "StabilGorteskBold";
  font-size: 52px;
  letter-spacing: 0.2px;
  line-height: 52px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

const Description = styled.p`
  font-size: 25px;
  line-height: 34px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const GIF = styled.img`
  width: 524px;
  height: 674px;
  object-fit: cover;
  object-position: center;
  margin-top: 50px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    height: 423px;
    width: 100%;
    margin-top: 0;
  }
`;
