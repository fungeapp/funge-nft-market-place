import React from "react";
import styled from "styled-components";

const GrowYourBrand = () => {
  return (
    <section className="free-trial position-relative">
      <BackgroundImage src="assets/images/CTA.png" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <Title>
              Grow your brand
              <br />
              presence on social media.
            </Title>
            <Subtitle>
              Try Ehya free for 14 days. No credit card required.
            </Subtitle>
            <br />
            <button className="btn btn-primary w-600 waitlist-btn">
              Sign Up for Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourBrand;

const Title = styled.p`
  font-size: 40px;
  font-family: "StabilGorteskBold";
  letter-spacing: 0.2px;
  color: #183b56;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #5a7184;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  @media (max-width: 1024px) {
  }
  @media (max-width: 425px) {
    top: 250px;
    content: url("assets/images/CTA1.png");
  }
`;
