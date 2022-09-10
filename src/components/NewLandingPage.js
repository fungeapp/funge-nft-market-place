import React from "react";
import styled from "styled-components";
import Description from "./NewLandingPage/Description";
import Entry from "./NewLandingPage/Entry";
import ImageDescriptions from "./NewLandingPage/ImageDescriptions";
import ToolsCarousel from "./NewLandingPage/ToolsCarousel";

const NewLandingPage = () => {
  return (
    <Wrapper>
      <Entry />
      <Description />
      <ImageDescriptions />
      <ToolsCarousel />
    </Wrapper>
  );
};

export default NewLandingPage;

const Wrapper = styled.div``;
