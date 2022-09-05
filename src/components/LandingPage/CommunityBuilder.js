import React from "react";
import styled from "styled-components";

const CommunityBuilder = () => {
  return (
    <Wrapper>
      <BackgroundImage src="assets/images/LeftBackground.png" />
      <Text>
        Tools designed for the growing wave of forward-thinking creators,
        innovators, and traders.
      </Text>
      <Container>
        <ColumnWrapper>
          <div>
            <h2 className="badge rounded-pill funge-bgcolor px-3 py-2 fs-10px w-600">
              COMING SOON
            </h2>
          </div>
          <Title>Commmunity Builder</Title>
          <Description>
            We're launching a VoIP and instant messaging social platform where
            you can find and share ideas in private chats or on community
            channels using voice, video calls, text messages and other media.
          </Description>
        </ColumnWrapper>
        <ColumnWrapper>
          <RowWrapper>
            <Card>
              <Image src="./assets/images/user-icon.png" />
              <CardText>Voice chat rooms</CardText>
            </Card>
            <Card>
              <Image src="./assets/images/user-icon.png" />
              <CardText> Video calls</CardText>
            </Card>
          </RowWrapper>
          <RowWrapper>
            <Card>
              <Image src="./assets/images/livestream-icon.png" />
              <CardText> Live streaming</CardText>
            </Card>
            <Card>
              <Image src="./assets/images/livestream-icon.png" />
              <CardText> File sharing</CardText>
            </Card>
          </RowWrapper>
          <RowWrapper>
            <Card>
              <Image src="./assets/images/pushnoti-icon.png" />
              <CardText> Push Notifications</CardText>
            </Card>
            <Card>
              <Image src="./assets/images/pushnoti-icon.png" />
              <CardText> Internal trading &amp; giveaways</CardText>
            </Card>
          </RowWrapper>
          <RowWrapper>
            <Card>
              <Image src="./assets/images/configurebot-icon.png" />
              <CardText> Configure bots</CardText>
            </Card>
            <Card>
              <Image src="./assets/images/configurebot-icon.png" />
              <CardText> Events calender</CardText>
            </Card>
          </RowWrapper>
        </ColumnWrapper>
      </Container>
    </Wrapper>
  );
};

export default CommunityBuilder;

const Wrapper = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 25%;
  position: absolute;
  top: -300px;
  left: 0;
  z-index: -1;
  @media (max-width: 768px) {
    width: 30%;
    top: -100px;
  }
`;

const Text = styled.p`
  font-size: 3vw;
  font-family: "StabilGorteskMedium";
  color: #000;
  text-align: center;
  padding: 10vw 14vw;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10vw;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 7vw;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.p`
  font-size: 2vw;
  letter-spacing: 0.2px;
  font-family: "StabilGorteskMedium";
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 1.2vw;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1vw;
  margin-left: 15px;
  @media (max-width: 768px) {
    width: 50%;
    padding: 8px;
    margin-left: 0;
    margin-right: 15px;
  }
`;

const Image = styled.img`
  width: 3vw;
  height: 3vw;
  margin-right: 16px;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 7px;
  }
`;

const CardText = styled.p`
  font-size: 0.8vw;
  font-family: "StabilGorteskBold";
  letter-spacing: 0.2px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 10px;
    letter-spacing: 0.1px;
  }
`;
