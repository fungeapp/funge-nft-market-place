import React from "react";
import styled from "styled-components";

const Principles = () => {
  return (
    <Wrapper>
      <BackgroundImage src="assets/images/LeftBackground2.png" />
      <Title>Our Company Principles</Title>
      <Subtitle>
        Taking care of our commmunity is at the core of everything we do.
      </Subtitle>
      <Container>
        <Card>
          <div className="travelya-icon my-4">
            <img className="img-fluid" src="./assets/icon/tag.svg" />
          </div>
          <CardTitle>Customer Satisfaction</CardTitle>
          <CardDescription>
            We are dedicated is to providing our users with innovative NFT
            solutions and world-class customer service.
          </CardDescription>
        </Card>
        <Card>
          <div className="travelya-icon my-4">
            <img className="img-fluid" src="./assets/icon/security.svg" />
          </div>
          <CardTitle>Transparency</CardTitle>
          <CardDescription>
            We pride ourselves on being honest and open about our operations,
            prioritizing the building of trust with our userbase and partners.
          </CardDescription>
        </Card>
        <Card>
          <div className="travelya-icon my-4">
            <img className="img-fluid" src="./assets/icon/medal.svg" />
          </div>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Funge is built to be accessible and useful to all types of users,
            from novices who are unfamiliar with NFTs to experts in the field.
          </CardDescription>
        </Card>
        <Card noMargin>
          <div className="travelya-icon my-4">
            <img className="img-fluid" src="./assets/icon/thumb.svg" />
          </div>
          <CardTitle>Security</CardTitle>
          <CardDescription>
            We implement state-of-the-art protocols to mitigate security risks
            and keep the network safe for everyone.
          </CardDescription>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Principles;

const Wrapper = styled.div`
  position: relative;
  padding: 0 10vw;
  padding-top: 10vw;
  @media (max-width: 768px) {
    padding: 0 7vw;
    padding-top: 10vw;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 500px;
  left: 0;
  z-index: -1;
  @media (max-width: 768px) {
    top: 0;
  }
`;

const Title = styled.p`
  font-size: 2vw;
  font-family: "StabilGorteskBold";
  letter-spacing: 0.2px;
  color: #183b56;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2vw;
  color: #5a7184;
  text-align: center;
  margin-bottom: 4vw;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 15px;
  padding-bottom: 30px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0px 64px 94px rgba(0, 0, 0, 0.05);
  margin-right: ${(props) => (props.noMargin ? 0 : 20)}px;
  background-color: #fff;
  @media (max-width: 1024px) {
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: ${(props) => (props.noMargin ? 0 : 20)}px;
    padding: 5vw 10vw;
  }
`;

const CardTitle = styled.p`
  font-size: 1vw;
  font-family: "StabilGorteskBold";
  letter-spacing: 0.2px;
  color: #183b56;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 0.8vw;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
