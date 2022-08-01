import React, { state, useState } from "react";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import NewMessages from "./Messages/NewMessages";
import SingleChat from "./Messages/SingleChat";
import MessagesSearchBar from "./Messages/MessagesSearchBar";

const MessagesDropDown = () => {
  const [isActive, setActive] = useState("messagesdropdown");

  return (
    <>
    <div className="container-fluid main-div min-vh-100">
        <div
          className="row justify-content-around "
          style={{ marginLeft: 220 }}
        >
          <div className="col-md-12 my-3 ps-0">
              <div className="container-fluid ps-0">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card funge-card ps-0">
                      <div className="card-body">
                        <span className="fw-bold w-700 ps-2">Messages</span>
                        <span className="float-end">
                          <i
                            className="fa fa-ellipsis-h fw-bold"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <br />
                        <br />
                        &nbsp;
                        <button className="btn btn-primary">All</button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button className="btn btn-secondary">Unread</button>
                        <br />
                        <br />
                        <MessagesSearchBar />
                        <br />
                        <br />
                        <table className="table table-borderless">
                          <SingleChat />

                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile-4.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile-4.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile-4.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile-4.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile-4.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile-4.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width={110} className="py-3 ps-2">
                              <img
                                src="./assets/images/profile.png"
                                className="img-fluid"
                              />
                            </td>
                            <td className="pt-3 align-middle w-700">
                              Dotdotdot
                              <br />
                              <span>
                                <p className="float-start py-1 w-400">
                                  Hey Bro, sick NFT
                                </p>
                                <span className="w-400 recent-news funge-color float-end ">
                                  .1 day ago
                                </span>
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-7">
                    <div className="card funge-card p-1 ">
                      <div className="card-body">
                        <table className="table table-borderless">
                          <SingleChat />
                        </table>

                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 py-4 ps-2">
                              <img
                                width={30}
                                src="./assets/images/profile-1.png"
                                alt=""
                                className="pt-3"
                              />
                              &nbsp; &nbsp;
                              <span className="chat-bg-1 text-break">
                                Hello there! What's Up?
                              </span>
                              <span className="float-end pt-3 funge-time">
                                14:20
                              </span>
                            </div>

                            <div className="col-md-12  ps-4 text-center">
                              &nbsp;
                              <span className="funge-time pt-3">14:25</span>
                              <span className="chat-bg-2 float-end">
                                Nothing... Just chilling watching Tiktok. What
                                about you tobias??
                              </span>
                            </div>

                            <div className="col-md-12 py-4 ps-2">
                              &nbsp; &nbsp;
                              <span className="chat-bg-1 text-break">
                                Some here! Been watching Tiktok for the past 3
                                hours despite of having so much to do! 😢
                              </span>
                              <span className="float-end pt-3 funge-time">
                                14:20
                              </span>
                            </div>
                            <div className="py-0 ps-2">
                              <img
                                width={30}
                                src="./assets/images/profile-1.png"
                                alt=""
                                className="pt-3"
                              />
                              &nbsp; &nbsp;
                              <span className="chat-bg-1 text-break">
                                It’s hard to be productive, man. that’s make me
                                bad! 😩
                              </span>
                              <span className="float-end pt-3 funge-time">
                                14:20
                              </span>
                            </div>

                            <div className="col-md-12 py-4 ps-4 text-center">
                              &nbsp;
                              <span className="funge-time pt-3">14:25</span>
                              <span className="chat-bg-2 float-end">
                                That’s true, I’m in the same position with you
                                wahahaha 🤣
                              </span>
                            </div>
                            <div className="row">
                            <div className="col-md-12">
                              <div className="message-box ms-1 position ">
                                <div className="input-group ">
                                 
                                  <input
                                    type="text"
                                    className="form-control ps-4"
                                    placeholder="Type your message ..."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                  />

                                  <input tyype='button' className="btn btn-primary btn-sm send-btn" value='Send'/>
                                  <img src="./assets/images/smiley.png" width={30} className="img-fluid ms-2"/>
                                </div>
                              </div>
                            </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
          </div>
        </div>
      </div>
    
            {/* <div className="card funge-card">
            </div> */}
    </>
    );
};

export default MessagesDropDown;