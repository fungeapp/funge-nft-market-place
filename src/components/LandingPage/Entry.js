import React, { useState } from "react";
import styled from "styled-components";
import env from "react-dotenv";
import axios from "axios";

const Entry = () => {
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
      <Wrapper>
        <BackgroundImage src="assets/images/Background.png" />
        <Title>Your gateway to the creative economy</Title>
        <Subtitle>
          Trade, Connect and Earn
          <br />
          like never before.
        </Subtitle>
        <Button data-bs-toggle="modal" data-bs-target="#waitListModal">
          Join The Waitlist
        </Button>
        <ImagesWrapper>
          <BrowserImage src="assets/images/Browser.png" />
          <MobileImage src="assets/images/Mobile.png" />
        </ImagesWrapper>
      </Wrapper>
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

export default Entry;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 214.4px;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: #fff;
  line-height: 48px;
`;

const Subtitle = styled.p`
  font-size: 72px;
  font-weight: bold;
  color: #fff;
  line-height: 93.6px;
  text-align: center;
  font-family: "StabilGorteskBold";
`;

const Button = styled.button`
  padding: 13.2px 94.6px;
  background-color: #fff;
  border-radius: 48px;
  font-size: 18px;
  font-family: "StabilGorteskBold";
  color: #000;
  border: none;
  margin-top: 37.6px;
`;

const ImagesWrapper = styled.div`
  position: relative;
  margin-top: 85.8px;
  margin-left: -170px;
`;

const BrowserImage = styled.img``;

const MobileImage = styled.img`
  position: absolute;
  bottom: 0;
  right: -190px;
`;
