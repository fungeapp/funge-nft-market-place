import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <TextsWrapper>
          <Title>Sign up for our newsletter</Title>
          <Description>
            {`There are many variations of passages of Lorem Ipsum available,
            but the majority believable.`}
          </Description>
        </TextsWrapper>
        <InputWrapper>
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </InputWrapper>
      </Container>
      <LinksWrapper>
        <Link>TERMS & CONDITIONS</Link>
        <Link>PRIVACY POLICY</Link>
        <Link>WHITEPAPER</Link>
        <Link>AUDIT</Link>
      </LinksWrapper>
      <br />
      <hr />
      <br />
      <Copyrights>©2020 Funge. All Rights Reserved</Copyrights>
      <br />
      <br />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  padding: 0 6vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5vw;
  margin: 0 6vw;
  border-radius: 8px;
  background-color: #71afac;
  @media (max-width: 425px) {
    flex-direction: column;
    margin: 0;
    padding: 20px;
  }
`;

const TextsWrapper = styled.div``;

const Title = styled.p`
  font-size: 0.9vw;
  font-family: "StabilGorteskBold";
  color: #fff;
  margin-bottom: 0.7vw;
  @media (max-width: 425px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  font-size: 0.8vw;
  font-family: "StabilGorteskLight";
  color: #fff;
  margin-bottom: 0;
  white-space: pre-line;
  @media (max-width: 425px) {
    font-size: 14px;
    white-space: normal;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-left: 3vw;
  @media (max-width: 425px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  display: flex;
  flex: 1;
  border: none;
  padding: 0.6vw 0.85vw;
  border-top-left-radius: 0.4vw;
  border-bottom-left-radius: 0.4vw;
  font-size: 0.8vw;
  font-family: "Inter";
  @media (max-width: 425px) {
    font-size: 14px;
    padding: 12px 16px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 0.6vw 1.1vw;
  background-color: #000;
  border-top-right-radius: 0.4vw;
  border-bottom-right-radius: 0.4vw;
  font-size: 0.8vw;
  font-family: "Inter";
  color: #fff;
  @media (max-width: 425px) {
    font-size: 14px;
    padding: 12px 20px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 6.5vw 16vw 0 16vw;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  font-size: 1.1vw;
  text-decoration: none;
  color: #232323;
  letter-spacing: 0.35px;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    color: #71afac;
    transform: scale(1.2);
  }
  @media (max-width: 425px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;

const Copyrights = styled.p`
  font-size: 0.8vw;
  font-family: "Inter";
  letter-spacing: 0.25px;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
