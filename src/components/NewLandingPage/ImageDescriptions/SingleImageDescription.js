import React, { useRef, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const SingleImageDescription = ({
  title,
  subtitle,
  description,
  items,
  video1,
  video2,
}) => {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  return (
    <Wrapper>
      <Container className="sticky-top align-self-start">
        <Title>{title}</Title>
        <Subtitle>
          {subtitle.split(" ").map((el) => {
            if (el === "&") {
              return (
                <Subtitle style={{ fontFamily: "InterBold" }}>
                  &nbsp;&&nbsp;
                </Subtitle>
              );
            } else {
              return el + " ";
            }
          })}
        </Subtitle>
        <Description>{description}</Description>
        {items.map((el, index) => (
          <RowWrapper noMarginBottom={items.length === index + 1}>
            <Dot />
            <ListItem>{el}</ListItem>
          </RowWrapper>
        ))}
      </Container>
      <Container style={{ flex: 1.5 }}>
        <VideoWrapper onClick={() => setIsPlaying1(!isPlaying1)}>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            playing={isPlaying1}
            url={video1}
          />
          {!isPlaying1 && (
            <PlayWrapper>
              <Play src="assets/images/play.png" />
            </PlayWrapper>
          )}
        </VideoWrapper>
        {video2 && (
          <VideoWrapper onClick={() => setIsPlaying2(!isPlaying2)}>
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              playing={isPlaying2}
              url={video2}
            />
            {!isPlaying2 && (
              <PlayWrapper>
                <Play src="assets/images/play.png" />
              </PlayWrapper>
            )}
          </VideoWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default SingleImageDescription;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 6vw 0 2vw 0;
  @media (max-width: 425px) {
    position: relative;
    top: auto;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.noMarginBottom ? 0 : 1.8)}vw;
  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.p`
  font-family: "StabilGorteskBold";
  font-size: 0.9vw;
  color: #71afac;
  margin-bottom: 0.5vw;
  text-transform: uppercase;
  @media (max-width: 425px) {
    font-size: 16px;
    margin-bottom: 9px;
  }
`;

const Subtitle = styled.p`
  display: flex;
  font-family: "StabilGorteskMedium";
  font-size: 2.2vw;
  color: #000;
  letter-spacing: 0.2px;
  margin-bottom: 0.8vw;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 9px;
  }
`;

const Description = styled.p`
  font-family: "StabilGorteskLight";
  font-size: 1.1vw;
  color: #000;
  margin-bottom: 1.8vw;
  white-space: pre-wrap;
  @media (max-width: 425px) {
    font-size: 14px;
    margin-bottom: 20px;
    white-space: normal;
  }
`;

const ListItem = styled.p`
  font-family: "StabilGorteskLight";
  font-size: 1vw;
  color: #000;
  letter-spacing: 0.2px;
  margin-bottom: 0;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const Dot = styled.div`
  width: 1vw;
  height: 1vw;
  border-radius: 100%;
  background-color: #71afac;
  margin-right: 1.1vw;
  @media (max-width: 425px) {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
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
