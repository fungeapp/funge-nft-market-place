import React, { useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import styled from "styled-components";

// components
import CommunityToken from "./NewLandingPage/CommunityToken";
import Description from "./NewLandingPage/Description";
import Entry from "./NewLandingPage/Entry";
import GrowYourBrand from "./NewLandingPage/GrowYourBrand";
import ImageDescriptions from "./NewLandingPage/ImageDescriptions";
import NavBar from "./NewLandingPage/NavBar";
import OurPlanForTheFuture from "./NewLandingPage/OurPlanForTheFuture";
import SocialMedia from "./NewLandingPage/SocialMedia";
import Tokenomics from "./NewLandingPage/Tokenomics";
import TokenUsage from "./NewLandingPage/TokenUsage";
import ToolsCarousel from "./NewLandingPage/ToolsCarousel";

const NewLandingPage = () => {
  const [emailaddress, setemailaddress] = useState();
  const [registrationstatus, setregistrationstatus] = useState(
    "Enter your Email to continue"
  );

  const registerEmailAddress = async (e) => {
    setregistrationstatus("registering.....");
    console.log(`register ${emailaddress}`);
    axios({
      method: "post",
      url: `${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/users/register/${emailaddress}`,
    }).then((response) => {
      console.log(`${JSON.stringify(response)}`);
      setregistrationstatus(
        "You're on the Waitlist.  You may close this window"
      );
    });
  };
  return (
    <Wrapper>
      <NavBar />
      <Entry />
      <Description />
      <ImageDescriptions />
      <ToolsCarousel />
      <CommunityToken />
      <TokenUsage />
      <Tokenomics />
      <OurPlanForTheFuture />
      <GrowYourBrand />
      <SocialMedia />
      <div
        className="modal fade phoneModal"
        id="waitListModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close funge-modal-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5">
              <h4 className="w-700">Join the Waitlist</h4>
              <p className="text-black-50">{registrationstatus}</p>
              <input
                type="text"
                className="login-input mb-4 w-100"
                placeholder="Email"
                onChange={(e) => setemailaddress(e.target.value)}
              />
              <button
                className="btn btn-primary w-100"
                onClick={(e) => registerEmailAddress(e)}
              >
                Subscribe
              </button>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewLandingPage;

const Wrapper = styled.div`
  position: relative;
`;
