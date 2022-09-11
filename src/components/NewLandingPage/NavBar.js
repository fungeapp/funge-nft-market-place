import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <Logo src="assets/images/FungeLogoW.svg" />
      <Link>Home</Link>
      <Link>Features</Link>
      <Link>Sustainability</Link>
      <Link>Tokenomics</Link>
      <Link>Team</Link>
      <Link>Roadmap</Link>
      <Button>Beta Trial</Button>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 2vw;
`;

const Logo = styled.img`
  width: 8vw;
  object-fit: contain;
`;

const Link = styled.a`
  font-size: 1.1vw;
  font-family: "StabilGorteskMedium";
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 0.6vw 1.2vw;
  background-color: #000000;
  border: none;
  border-radius: 48px;
  font-family: "StabilGorteskBold";
  font-size: 0.9vw;
  color: #fff;
`;
