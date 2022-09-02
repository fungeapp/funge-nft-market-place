import React from "react";
import styled from "styled-components";

const GrowYourBrand = () => {
  return (
    <section className="free-trial">
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
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #5a7184;
`;
