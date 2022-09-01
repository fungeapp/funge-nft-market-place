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
  margin: 240px 245px 200px 245px;
`;

const Text = styled.p`
  font-size: 55px;
  font-weight: 600;
  color: #000;
`;
