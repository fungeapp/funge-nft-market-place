import React from "react";
import styled from "styled-components";

const Principles = () => {
  return (
    <Wrapper>
      <BackgroundImage src="assets/images/LeftBackground2.png" />
      <div className="container">
        <div className="row justify-content-center">
          <Title>Our Company Principles</Title>
          <Subtitle>
            Taking care of our commmunity is at the core of everything we do.
          </Subtitle>
          <div className="col-md-12 text-center mt-4">
            <Container className="row">
              <div
                className="col-md-3 ps-0-desktop"
                style={{ display: "flex", flex: 1 }}
              >
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img className="img-fluid" src="./assets/icon/tag.svg" />
                    </div>
                    <CardTitle>Customer Satisfaction</CardTitle>
                    <CardDescription>
                      We aim to place endless NFT solutions at the power of your
                      fingertips and provide you with an exceptional user
                      experience.
                    </CardDescription>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ display: "flex", flex: 1 }}>
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img
                        className="img-fluid"
                        src="./assets/icon/security.svg"
                      />
                    </div>
                    <CardTitle>Transparency</CardTitle>
                    <CardDescription>
                      We take pride in being honest and open about our
                      operations as we prioritize building long-lasting trust
                      with our userbase and partners.
                    </CardDescription>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ display: "flex", flex: 1 }}>
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img
                        className="img-fluid"
                        src="./assets/icon/medal.svg"
                      />
                    </div>
                    <CardTitle>Accessibility</CardTitle>
                    <CardDescription>
                      We focus on building a simple and intuitive platform, so
                      anyone can get a chance to explore and thrive in the word
                      of NFTs.
                    </CardDescription>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 pe-0-desktop"
                style={{ display: "flex", flex: 1 }}
              >
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img
                        className="img-fluid"
                        src="./assets/icon/thumb.svg"
                      />
                    </div>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>
                      We implement state-of-the-art protocols to mitigate
                      security risks and keep the network safe for everyone.
                    </CardDescription>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Principles;

const Wrapper = styled.div`
  position: relative;
  margin-top: 200px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    padding: 0 10px;
    margin-top: 140px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -250px;
  left: 0;
  z-index: -1;
`;

const Title = styled.p`
  font-size: 36px;
  font-family: "StabilGorteskBold";
  line-height: 48px;
  letter-spacing: 0.2px;
  color: #183b56;
  text-align: center;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #5a7184;
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 22px;
    padding: 0 60px;
    margin-bottom: 17px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const CardTitle = styled.p`
  font-size: 20px;
  font-family: "StabilGorteskBold";
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #183b56;
`;

const CardDescription = styled.p`
  font-size: 14px;
  line-height: 24px;
`;
