import React from "react";
import styled from "styled-components";

const TalentMarketPlace = () => {
  return (
    <Wrapper>
      <Container>
        <div className="col-sm-12 col-md-6 text-center">
          <img src="./assets/images/TalentMarketPlace.png" />
        </div>
        <div className="col-sm-8 col-md-4">
          <div className="feature1">
            <div className="p-4">
              <h2 className="collection_heading w-600 my-3">
                Talent Marketplace
              </h2>
              <p className="sub-heading">
                Funge talent marketplace is the fastest and most efficient way
                to source top Web3 talent. Seek and hire experts in smart
                contract development, web design, tokenomics creation, discord
                management, marketing, and more.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="col-sm-8 col-md-4 p-0">
          <div className="feature1">
            <div className="py-4 pe-4">
              <h2 className="collection_heading w-600 my-3">In-house Wallet</h2>
              <p className="sub-heading pe-4">
                No need to hold multiple wallets to store and manage your
                tokens. Each user receives a built-in Funge wallet that allows
                them easily monitor, send and receive their crypto assets.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <img src="./assets/images/InHouseWallet.png" />
        </div>
      </Container>
      <BackgroundImage src="assets/images/RightBackground.png" />
    </Wrapper>
  );
};

export default TalentMarketPlace;

const Wrapper = styled.div`
  position: relative;
  padding: 0 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 250px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -200px;
  right: 0;
  z-index: -1;
`;
