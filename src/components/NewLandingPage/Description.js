import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Wrapper>
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
  border: 2px solid red;
  padding: 0 0 10.5vw 6vw;
  @media (max-width: 425px) {
    padding: 0 35px 10.5vw 35px;
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
