import React, { useState } from "react";
import env from "react-dotenv";
import axios from "axios";

import TopNavBarV0 from "./LandingPage/TopNavBarV0";
import FooterV0 from "./LandingPage/FooterV0";

import Entry from "./LandingPage/Entry";
import Description from "./LandingPage/Description";
import ImageDescription from "./LandingPage/ImageDescription";
import CommunityBuilder from "./LandingPage/CommunityBuilder";
import TalentMarketPlace from "./LandingPage/TalentMarketPlace";
import Principles from "./LandingPage/Principles";
import BuiltOnPlanetEarth from "./LandingPage/BuiltOnPlanetEarth";
import FungeCommunity from "./LandingPage/FungeCommunity";
import TokenUsage from "./LandingPage/TokenUsage";
import Tokenomics from "./LandingPage/Tokenomics";
import MeetOurTeam from "./LandingPage/MeetOurTeam";
import OurPlanForTheFuture from "./LandingPage/OurPlanForTheFuture";
import GrowYourBrand from "./LandingPage/GrowYourBrand";

const LandingPageV0 = () => {
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
    <>
      <TopNavBarV0 />
      <Entry />
      <Description />
      <ImageDescription
        title={"Collector Spotlight"}
        subtitle={"Robust Social Features"}
        description={
          "Use our wide range of social tools to find & connect with users who are passionate about NFTs. Create eye-catching content, keep up with current trends, and mint NFTs all within one social feed built specifically for the blockchain community."
        }
        list1={"Stay up-to-date with trending NFT discussions and topics"}
        list2={"Connect with fellow users through built-in direct messaging"}
        list3={"Mint verified NFTs from your social feed with ease"}
        image1={"assets/images/LandingPage1.png"}
        image2={"assets/images/LandingPage2.png"}
      />
      <ImageDescription
        title={"Trader Spotlight"}
        subtitle={"Powerful NFT Tools & Solutions"}
        description={
          "A complete and comprehensive tool set for all your NFT needs. Explore the limits of Web3 with our feature-packed peer-to-peer trading tools, cross-platform transactions, liveNFT analytics, and more."
        }
        list1={"Advanced market insights, analytics, and alerts"}
        list2={"Compare floor prices across different platforms"}
        list3={"Conduct private sales"}
        list4={"Batch buy multiple NFT’s"}
        image1={"assets/images/LandingPage3.png"}
      />
      <ImageDescription
        noMarginBottom
        title={"Reward Spotlight"}
        subtitle={"Engagement Incentives"}
        description={
          "Our Tokenomics system turns users into owners by rewarding them for creating valuable content and participating on the platform."
        }
        list1={"Earn tokens when the community engages with your content"}
        list2={"Receive $FUNGE rewards for every NFT you trade"}
        list3={"Stake $FUNGE tokens and receive up to 445% APY"}
        list4={"Earn additional commission for every friend you refer"}
        image1={"assets/images/LandingPage4.png"}
      />
      <CommunityBuilder />
      <TalentMarketPlace />
      <Principles />
      <BuiltOnPlanetEarth />
      <FungeCommunity />
      <TokenUsage />
      <Tokenomics />
      <MeetOurTeam />
      <OurPlanForTheFuture />
      <GrowYourBrand />
      <FooterV0 />
      <div
        className="modal fade phoneModal"
        id="waitListModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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
    </>
  );
};

export default LandingPageV0;
