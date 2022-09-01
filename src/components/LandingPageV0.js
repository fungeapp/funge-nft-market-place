import React from "react";
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

const LandingPageV0 = () => {
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
      <section className="ourteam my-5 py-5">
        <div className="container">
          <h1 className="w-800 text-center mt-2 mb-4 dark-blue-heading">
            Meet Our Team
          </h1>
          <br />
          <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 px-0 px-0">
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker1.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Claudio Giglieri</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Co-creator of Skype </td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">
                        Investor at Sebo Digital Ventures
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-0 px-0">
              <br />
              <br />
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker2.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Elsie Mendoza</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">VP of BukaDagang</td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Co-founder at Slack</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-0">
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker3.png"
                    className="img-fluid"
                  />
                </div>
                <h2 className="w-700">Philip Castro</h2>
                <table>
                  <tr>
                    <td className="align-text-top">
                      <i className="fa fa-check funge-text-success"></i>
                    </td>
                    <td className="ps-3">CEO at Berkarya</td>
                  </tr>
                  <tr>
                    <td className="align-text-top">
                      <i className="fa fa-check funge-text-success"></i>
                    </td>
                    <td className="ps-3">Investor at Sebo Digital Ventures</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-0">
              <br />
              <br />
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker4.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Carrie Angela</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Founder of Nike</td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Investor at BukaDagang</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 px-0">
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker1.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Claudio Giglieri</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Co-creator of Skype </td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">
                        Investor at Sebo Digital Ventures
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-0">
              <br />
              <br />
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker2.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Elsie Mendoza</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">VP of BukaDagang</td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Co-founder at Slack</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-0">
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker3.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Philip Castro</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">CEO at Berkarya</td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">
                        Investor at Sebo Digital Ventures
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-0">
              <br />
              <br />
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker4.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Carrie Angela</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Founder of Nike</td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Investor at BukaDagang</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 px-0">
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker1.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Claudio Giglieri</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Co-creator of Skype </td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">
                        Investor at Sebo Digital Ventures
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 col-sm-6 px-0">
              <div className="card funge-card speaker-card">
                <div className="card-image-top">
                  <img
                    src="./assets/images/speaker2.png"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body p-0">
                  <h2 className="w-700">Elsie Mendoza</h2>
                  <table>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">VP of BukaDagang</td>
                    </tr>
                    <tr>
                      <td className="align-text-top">
                        <i className="fa fa-check funge-text-success"></i>
                      </td>
                      <td className="ps-3">Co-founder at Slack</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourplan my-5 py-5">
        <div className="container">
          <h1 className="w-800 text-center mb-4 dark-blue-heading">
            Our plan for the future
          </h1>
          <br />
          <br />
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="accordion mb-3" id="faq-accord1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Q2 2021
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq-accord1"
                  >
                    <div className="accordion-body">
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion mb-3" id="faq-accord2">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Q2 2021
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq-accord2"
                  >
                    <div className="accordion-body">
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion mb-3" id="faq-accord3">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Q2 2021
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq-accord3"
                  >
                    <div className="accordion-body">
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion mb-3" id="faq-accord4">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Q2 2021
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq-accord4"
                  >
                    <div className="accordion-body">
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion mb-3" id="faq-accord5">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      Q2 2021
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq-accord5"
                  >
                    <div className="accordion-body">
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                      You can pay with credit. <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="free-trial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="w-600">
                Grow your brand
                <br />
                presence on social media.
              </h2>
              <p className="sub-heading mt-3">
                Try Ehya free for 14 days. No credit card required.
              </p>
              <br />
              <button className="btn btn-primary w-600 waitlist-btn">
                Sign Up for Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterV0 />
    </>
  );
};

export default LandingPageV0;
