import React from "react";
import styled from "styled-components";
import CommunityToken from "./NewLandingPage/CommunityToken";
import Description from "./NewLandingPage/Description";
import Entry from "./NewLandingPage/Entry";
import GrowYourBrand from "./NewLandingPage/GrowYourBrand";
import ImageDescriptions from "./NewLandingPage/ImageDescriptions";
import NavBar from "./NewLandingPage/NavBar";
import OurPlanForTheFuture from "./NewLandingPage/OurPlanForTheFuture";
import SocialMedia from "./NewLandingPage/SocialMedia";
import Tokenomics from "./NewLandingPage/Tokenomics";
import TokenUsage from "./NewLandingPage/TokenUsage";
import ToolsCarousel from "./NewLandingPage/ToolsCarousel";

const NewLandingPage = () => {
  return (
    <Wrapper>
      <NavBar />
      <Entry />
      <Description />
      <ImageDescriptions />
      <ToolsCarousel />
      <CommunityToken />
      <TokenUsage />
      <Tokenomics />
      <OurPlanForTheFuture />
      <GrowYourBrand />
      <SocialMedia />
    </Wrapper>
  );
};

export default NewLandingPage;

const Wrapper = styled.div`
  position: relative;
`;
