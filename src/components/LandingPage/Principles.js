import React from "react";
import styled from "styled-components";

const Principles = () => {
  return (
    <section className="collection my-5 py-5 position-relative">
      <BackgroundImage src="assets/images/LeftBackground2.png" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-3 pt-5">
            <h2 className="collection_heading w-800 our-company ">
              Our Company Principles
            </h2>
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            <p className="sub-heading fs-18px">
              Taking care of our commmunity is at the core of everything we do.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="col-md-12 text-center mt-4">
            <div className="row">
              <div
                className="col-md-3 ps-0-desktop"
                style={{ display: "flex", flex: 1 }}
              >
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img className="img-fluid" src="./assets/icon/tag.svg" />
                    </div>
                    <p className="fw-bold">Customer Satisfaction</p>
                    <p className="sub-heading">
                      We aim to place endless NFT solutions at the power of your
                      fingertips and provide you with an exceptional user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ display: "flex", flex: 1 }}>
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img
                        className="img-fluid"
                        src="./assets/icon/security.svg"
                      />
                    </div>
                    <p className="fw-bold">Transparency</p>
                    <p className="sub-heading">
                      We take pride in being honest and open about our
                      operations as we prioritize building long-lasting trust
                      with our userbase and partners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ display: "flex", flex: 1 }}>
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img
                        className="img-fluid"
                        src="./assets/icon/medal.svg"
                      />
                    </div>
                    <p className="fw-bold">Accessibility</p>
                    <p className="sub-heading">
                      We focus on building a simple and intuitive platform, so
                      anyone can get a chance to explore and thrive in the word
                      of NFTs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 pe-0-desktop"
                style={{ display: "flex", flex: 1 }}
              >
                <div className="card card-travelya">
                  <div className="card-body">
                    <div className="travelya-icon my-4">
                      <img
                        className="img-fluid"
                        src="./assets/icon/thumb.svg"
                      />
                    </div>
                    <p className="fw-bold">Security</p>
                    <p className="sub-heading">
                      We implement state-of-the-art protocols to mitigate
                      security risks and keep the network safe for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;

const BackgroundImage = styled.img`
  position: absolute;
  top: -150px;
  left: 0;
  z-index: -1;
`;
