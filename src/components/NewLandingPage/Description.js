import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Wrapper
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-mirror="false"
    >
      <Text>
        <BoldedText>FUNGE </BoldedText>
        is an all-in-one solution for the blockchain community, bringing
        together NFT trading and social media, into one comprehensive platform.
      </Text>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  padding: 0 0 10.5vw 6vw;
  @media (max-width: 425px) {
    padding: 0 6vw 10.5vw 6vw;
  }
`;

const Text = styled.p`
  font-size: 3vw;
  font-family: "StabilGorteskMedium";
  color: #000;
  letter-spacing: 1px;
  @media (max-width: 425px) {
    font-size: 20px;
    text-align: center;
  }
`;

const BoldedText = styled.span`
  font-family: "StabilGorteskMedium";
  color: #71afac;
`;

const LineBreak = styled.br`
  display: none;
`;
