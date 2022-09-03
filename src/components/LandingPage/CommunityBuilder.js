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
        <div className="col-md-4 col-sm-8 p-0">
          <h2 className="badge rounded-pill funge-bgcolor px-3 py-2 fs-10px w-600">
            COMING SOON
          </h2>
          <Title>Commmunity Builder</Title>
          <Description>
            We're launching a VoIP and instant messaging social platform where
            you can find and share ideas in private chats or on community
            channels using voice, video calls, text messages and other media.
          </Description>
        </div>
        <div className="col-md-6 col-sm-12 p-0">
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
        </div>
      </Container>
    </Wrapper>
  );
};

export default CommunityBuilder;

const Wrapper = styled.div`
  padding: 0 187px;
  position: relative;
  padding-top: 150px;
  @media (max-width: 1024px) {
    padding: 0 100px;
    padding-top: 150px;
  }
  @media (max-width: 425px) {
    padding: 0 20px;
    padding-top: 100px;
  }
`;

const Text = styled.p`
  font-size: 60px;
  font-weight: 600;
  color: #000;
  text-align: center;
  font-family: "StabilGorteskMedium";
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -300px;
  left: 0;
  z-index: -1;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    width: 50%;
    top: -100px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 500px;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;

const Title = styled.p`
  font-size: 40px;
  letter-spacing: 0.2px;
  font-family: "StabilGorteskMedium";
  line-height: 52px;
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 32px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    width: 75%;
    font-size: 14px;
    line-height: 20px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  margin-right: 30px;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 425px) {
    width: 50%;
    padding: 8px;
    margin-right: 15px;
  }
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    width: 24px;
    height: 24px;
    margin-right: 7px;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  font-family: "StabilGorteskBold";
  letter-spacing: 0.2px;
  margin-bottom: -4px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 10px;
    letter-spacing: 0.1px;
    margin-bottom: -1.5px;
  }
`;
