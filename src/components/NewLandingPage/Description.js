import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Wrapper>
      <Text>
        <BoldedText>FUNGE</BoldedText> is an all-in-one solution for
        theblockchain community,
        <br />
        bringing together NFT trading and social media, into one
        <br />
        comprehensive platform.
      </Text>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  border: 2px solid red;
  padding: 0 0 10.5vw 6vw;
`;

const Text = styled.p`
  font-size: 3vw;
  font-family: "StabilGorteskMedium";
  color: #000;
`;

const BoldedText = styled.span`
  font-family: "StabilGorteskMedium";
  color: #71afac;
`;
