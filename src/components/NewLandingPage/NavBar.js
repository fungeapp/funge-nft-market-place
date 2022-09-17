import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NavBar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const changeColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  return (
    <Wrapper color={color}>
      <Logo src="assets/images/FungeLogoW.svg" />
      <Link href="#home">Home</Link>
      <Link href="#features">Features</Link>
      <Link href="#sustainability">Sustainability</Link>
      <Link href="#tokenomics">Tokenomics</Link>
      <Link>Team</Link>
      <Link href="#roadmap">Roadmap</Link>
      <Button data-bs-toggle="modal" data-bs-target="#waitListModal">
        Beta Trial
      </Button>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2vw 0 1vw 0;
  background-color: ${(props) => (props.color ? "#fff" : "transparent")};
  transition: all 2s;
  @media (max-width: 425px) {
    justify-content: flex-start;
    padding: 20px;
    position: relative;
  }
`;

const Logo = styled.img`
  width: 8vw;
  object-fit: contain;
  @media (max-width: 425px) {
    justify-content: flex-start;
    width: 79px;
  }
`;

const Link = styled.a`
  font-size: 1.1vw;
  font-family: "StabilGorteskMedium";
  color: #000;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    color: #71afac;
    transform: scale(1.2);
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0.6vw 1.2vw;
  background-color: #000000;
  border: none;
  border-radius: 48px;
  font-family: "StabilGorteskBold";
  font-size: 0.9vw;
  color: #fff;
  @media (max-width: 425px) {
    display: none;
  }
`;
