import React from "react";
import styled from "styled-components";
import CommunityToken from "./NewLandingPage/CommunityToken";
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
      <CommunityToken />
    </Wrapper>
  );
};

export default NewLandingPage;

const Wrapper = styled.div``;
