import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Wrapper>
      <Text>
        Funge is an all-in-one solution for the blockchain community, bringing
        together NFT trading and social media, into one comprehensive platform.
      </Text>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  padding: 10vw 14vw;
`;

const Text = styled.p`
  font-size: 3vw;
  font-family: "StabilGorteskMedium";
  color: #000;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
