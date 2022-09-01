import React from "react";
import styled from "styled-components";

const FungeCommunity = () => {
  return (
    <Wrapper>
      <BackgroundImage src="assets/images/Background2.png" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <img src="assets/images/Token_Section.png" />
          </div>
        </div>
        <div className="row mt-5 pt-5 justify-content-center">
          <div className="col-md-7 col-sm-12 py-5">
            <Title>The Funge community token</Title>
            <Description>
              We’re putting the future of Funge and the power of the creator
              economy in the hands of our community. With $FUNGE, you have
              access to exclusive holder benefits and rewards tailored for you
              to grow and develop as an artist or innovator. By holding our
              token, you are more than just a user - you become a part-owner of
              the platform.
            </Description>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Wrapper>
  );
};

export default FungeCommunity;

const Wrapper = styled.div`
  position: relative;
  padding-top: 400px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: -650px;
  left: 0;
  z-index: -1;
`;

const Title = styled.p`
  font-size: 51px;
  font-family: "StabilGorteskBold";
  text-align: center;
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
`;
