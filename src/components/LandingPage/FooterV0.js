import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FungeLogo from "../FungeLogo";

const Footer = () => {
  return (
    <Wrapper>
      <div className="funge-footer container-fluid col-11">
        <SocialWrapper>
          <RowWrapper>
            <Icon src="assets/images/Twitter1.png" />
            <SocialMedia className="logo-text ms-1">Twitter</SocialMedia>
          </RowWrapper>
          <RowWrapper>
            <Icon src="assets/images/Facebook.png" />
            <SocialMedia className="logo-text ms-1">Facebook</SocialMedia>
          </RowWrapper>
          <RowWrapper>
            <Icon src="assets/images/Email.png" />
            <SocialMedia className="logo-text ms-1">Gmail</SocialMedia>
          </RowWrapper>
          <RowWrapper>
            <Icon src="assets/images/Slack.png" />
            <SocialMedia className="logo-text ms-1">Slack</SocialMedia>
          </RowWrapper>
          <RowWrapper>
            <Icon src="assets/images/Reddit.png" />
            <SocialMedia className="logo-text ms-1">Reddit</SocialMedia>
          </RowWrapper>
          <RowWrapper last>
            <Icon src="assets/images/Youtube.png" />
            <SocialMedia className="logo-text ms-1">Youtube</SocialMedia>
          </RowWrapper>
        </SocialWrapper>
        <hr className="footer-seprator" />
        <div className="row my-5 justify-content-center">
          <div className="col-md-6 mt-3">
            <Title>Earn more with Funge Token</Title>
            <Description>
              There are many variations of passages of Lorem Ipsum<br></br>{" "}
              available, but the majority believable.
              <br />
              <br />
              <Learn className="funge-link" href="#">
                Learn More
              </Learn>
            </Description>
          </div>
          <div className="col-md-5 mt-3 pe-0">
            <Title>Signup for our newsletter</Title>
            <SignUpWrapper>
              <input
                type="text"
                className="form-control footer-signup"
                placeholder="Enter your email here"
              />
              <button
                type="button"
                className="btn btn-primary waitlist-btn w-50"
              >
                Sign Up
              </button>
            </SignUpWrapper>
          </div>
        </div>
        <div className="row my-5 justify-content-center">
          <FungeWrapper className="col-md-3 col-sm-12">
            <FungeLogo />
            <FungeDescription>
              There are many variations of passages of Lorem Ipsum available,
              but the majority believable.
            </FungeDescription>
          </FungeWrapper>
          <div className="col-md-2 col-sm-12">
            <LinkTitle>Funge</LinkTitle>
            <div className="d-flex flex-column footer-funge-links">
              <StyledLink to="/">About Us</StyledLink>
              <StyledLink to="/">Help Center</StyledLink>
              <StyledLink to="/">Careers</StyledLink>
              <StyledLink to="/">Company</StyledLink>
            </div>
          </div>
          <div className="col-md-2 col-sm-12">
            <LinkTitle>Community</LinkTitle>
            <div className="d-flex flex-column footer-funge-links">
              <StyledLink to="/">Blog</StyledLink>
              <StyledLink to="/">Funge Token</StyledLink>
              <StyledLink to="/">Suggest feature</StyledLink>
              <StyledLink to="/">Terms and conditions</StyledLink>
            </div>
          </div>
          <div className="col-md-2 col-sm-12">
            <LinkTitle>Resources</LinkTitle>
            <div className="d-flex flex-column footer-funge-links">
              <StyledLink to="/">Blog</StyledLink>
              <StyledLink to="/">Funge Token</StyledLink>
              <StyledLink to="/">Suggest feature</StyledLink>
              <StyledLink to="/">Terms and conditions</StyledLink>
            </div>
          </div>
          <div className="col-md-2 col-sm-12">
            <LinkTitle>Resources</LinkTitle>
            <div className="d-flex flex-column footer-funge-links">
              <StyledLink to="/">Blog</StyledLink>
              <StyledLink to="/">Funge Token</StyledLink>
              <StyledLink to="/">Suggest feature</StyledLink>
              <StyledLink to="/">Terms and conditions</StyledLink>
            </div>
          </div>
          <div className="col-md-11">
            <small className="">©2020 Funge. All Rights Reserved</small>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  @media (max-width: 425px) {
    margin-top: 400px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    margin-bottom: ${(props) => (props.last ? 0 : 40)}px;
  }
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const SocialMedia = styled.span`
  margin-left: 10px;
`;

const Title = styled.p`
  font-size: 0.9vw;
  font-family: "StabilGorteskBold";
  line-height: 1.1vw;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20.8px;
  }
  @media (max-width: 425px) {
    text-align: start;
  }
`;

const Description = styled.p`
  font-size: 0.8vw;
  line-height: 1.1vw;
  letter-spacing: 0.1px;
  font-family: "StabilGorteskThin";
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22.4px;
  }
  @media (max-width: 425px) {
    text-align: start;
    width: 65%;
  }
`;

const Learn = styled.a`
  font-family: "StabilGorteskBold";
`;

const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FungeWrapper = styled.div`
  @media (max-width: 425px) {
    text-align: start;
  }
`;

const FungeDescription = styled.p`
  font-size: 1vw;
  line-height: 1.4vw;
  letter-spacing: 0.1px;
  font-family: "StabilGorteskThin";
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28.8px;
  }
  @media (max-width: 425px) {
    text-align: start;
  }
`;

const LinkTitle = styled.p`
  font-size: 1vw;
  font-family: "StabilGorteskBold";
  line-height: 1.4vw;
  letter-spacing: 0.35px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 0.8vw;
  letter-spacing: 0.35px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
