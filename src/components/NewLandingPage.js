import React from "react";
import styled from "styled-components";
import Description from "./NewLandingPage/Description";
import Entry from "./NewLandingPage/Entry";
import ImageDescriptions from "./NewLandingPage/ImageDescriptions";

const NewLandingPage = () => {
  return (
    <Wrapper>
      <Entry />
      <Description />
      <ImageDescriptions />
    </Wrapper>
  );
};

export default NewLandingPage;

const Wrapper = styled.div``;
