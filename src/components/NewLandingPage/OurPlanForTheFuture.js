import React from "react";
import styled from "styled-components";

const OurPlanForTheFuture = () => {
  return (
    <OuterWrapper>
      <Title>Our plan for the future</Title>
      <Wrapper className="row">
        <div className="col-11 mx-auto">
          <div className="accordion mb-3" id="faq-accord1">
            <div className="accordion-item">
              <Button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Q4 2022
              </Button>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord1"
              >
                <div className="accordion-body">
                  <Text>Token Launch</Text>
                  <Text>Private Seed Rounds 1 & 2</Text>
                  <Text>API Integration For Credit Card Purchases</Text>
                  <Text>Users Profiles</Text>
                  <Text>Social Feed</Text>
                  <Text>Wallet Manager</Text>
                  <Text>Direct Messaging</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion mb-3" id="faq-accord2">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Q1 2023
              </Button>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord2"
              >
                <div className="accordion-body">
                  <Text>Staking</Text>
                  <Text>NFT Marketplace</Text>
                  <Text>Batch Buying</Text>
                  <Text>Private Sales</Text>
                  <Text>Reward System</Text>
                  <Text>Talent Marketplace</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion mb-3" id="faq-accord3">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Q2 2023
              </Button>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord3"
              >
                <div className="accordion-body">
                  <Text>Beta Testing</Text>
                  <Text>PR Press Release</Text>
                  <Text>Advanced Analytics</Text>
                  <Text>Community Manager</Text>
                  <Text>Platform improvements</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion mb-3" id="faq-accord4">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                Q3 2023
              </Button>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord4"
              >
                <div className="accordion-body">
                  <Text>Marketing campaigns</Text>
                  <Text>NFT Project collaboration</Text>
                  <Text>Partner acquisitions</Text>
                  <Text>Exchange Listings</Text>
                  <Text>Cross Platform Floor Prices</Text>
                  <Text>Support for Solana NFT’s</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion mb-3" id="faq-accord5">
            <div className="accordion-item">
              <Button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
              >
                Q4 2023
              </Button>

              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faq-accord5"
              >
                <div className="accordion-body">
                  <Text>Funge Platform Release</Text>
                  <Text>Token Airdrops</Text>
                  <Text>Voice Chat Rooms</Text>
                  <Text>Media Outlet</Text>
                  <Text>NFT asset generator</Text>
                  <Text>Roadmap Update</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default OurPlanForTheFuture;
const OuterWrapper = styled.div`
  padding: 0 1.5vw;
  padding-top: 10vw;
`;

const Title = styled.p`
  font-size: 3.1vw;
  font-family: "StabilGorteskBold";
  text-align: center;
  color: #123442;
  margin-bottom: 4.1vw;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 425px) {
    padding: 0 25px;
  }
`;

const Button = styled.button`
  font-family: "StabilGorteskBold";
  font-size: 1.3vw;
  letter-spacing: 0.2px;
  color: #71afac;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  font-size: 1.1vw;
  font-family: "StabilGorteskLight";
  color: #5a7184;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
