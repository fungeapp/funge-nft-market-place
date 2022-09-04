import React from "react";
import styled from "styled-components";

const TokenUsage = () => {
  return (
    <section className="collection mb-5 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <Title>Token Usage</Title>
          </div>
          <div className="col-md-12 text-center mt-5">
            <div className="row justify-content-evenly">
              <div className="col-md-3">
                <div className="card-body">
                  <div className="travelya-icon my-4">
                    <img className="img-fluid" src="./assets/icon/tag.svg" />
                  </div>
                  <CardTitle>Staking</CardTitle>
                  <CardDescription>
                    Stake your $FUNGE earn rewards of up to 445% APY.
                  </CardDescription>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <div className="travelya-icon my-4">
                    <img
                      className="img-fluid"
                      src="./assets/icon/security.svg"
                    />
                  </div>
                  <CardTitle>In-App Purchases</CardTitle>
                  <CardDescription>
                    Use your tokens for any purchase on the Funge App.
                    <br />
                    <br />
                  </CardDescription>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <div className="travelya-icon my-4">
                    <img className="img-fluid" src="./assets/icon/medal.svg" />
                  </div>
                  <CardTitle>Trading Rewards</CardTitle>
                  <CardDescription>
                    $FUNGE token holders earn 90% of trading fee revenue
                    generated on Funge
                  </CardDescription>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default TokenUsage;

const Title = styled.p`
  font-size: 36px;
  font-family: "StabilGorteskBold";
  letter-spacing: 0.2px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 28px;
  }
`;

const CardTitle = styled.p`
  font-size: 20px;
  font-family: "StabilGorteskBold";
  letter-spacing: 0.2px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    margin: 0 80px;
  }
`;
