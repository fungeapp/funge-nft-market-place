import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const TalentMarketplace = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <VideoWrapper
      data-aos="fade-in"
      data-aos-duration="2000"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        style={{ borderRadius: 40, overflow: "hidden" }}
        playing={isPlaying}
        url={"assets/videos/Video06.mp4"}
      />
      {!isPlaying && (
        <PlayWrapper>
          <Play src="assets/images/play.png" />
        </PlayWrapper>
      )}
    </VideoWrapper>
  );
};

export default TalentMarketplace;

const VideoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease;
`;

const PlayWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-top: -5px;
  width: 83%;
  height: 82%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  @media (max-width: 425px) {
    border-radius: 5px;
  }
`;

const Play = styled.img`
  width: 6vw;
  height: 6vw;
  object-fit: contain;
  @media (max-width: 425px) {
    width: 48px;
    height: 48px;
  }
`;
