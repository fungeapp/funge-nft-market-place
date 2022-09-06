import React from "react";
import env from "react-dotenv";
import ProfileLogin from "../ProfileLogin";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const TopNavBar = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  return (
    <>
      <div className="header">
        <div className="my_nav">
          <nav className="navbar container-fluid navbar-expand-lg bg-white shadow-sm navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <Logo src="assets/images/FungeLogoW.svg" alt="" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <img
                    src="./assets/icon/menu_icon.svg"
                    alt=""
                    className="img-fluid"
                  />
                </span>
              </button>
              <div
                className="collapse align-items-center navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-between"
                  style={{ width: "80%" }}
                >
                  <li className="nav-item">
                    <Link href="#">HOME</Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">FEATURES</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">SUSTAINBILITY</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">TOKENOMICS</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">TEAM</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">ROADMAP</Link>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Button
                      data-bs-toggle="modal"
                      data-bs-target="#waitListModal"
                    >
                      Beta Trial
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;

const Logo = styled.img`
  width: 7vw;
  @media (max-width: 768px) {
    width: 130px;
  }
`;

const Link = styled.a`
  font-size: 1vw;
  font-family: "StabilGorteskBold";
  color: #fff !important;
  text-decoration: none;
`;

const Button = styled.button`
  background-color: #fff;
  border-radius: 48px;
  border-width: 0;
  font-size: 1vw;
  font-family: "StabilGorteskBold";
  color: #000;
  padding: 10.8px 21.6px;
`;
