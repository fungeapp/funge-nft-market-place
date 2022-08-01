import React, { state, useState } from "react";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import NewMessages from "./Inbox/NewMessages";
import SingleChat from "./Inbox/SingleChat";
import MessagesSearchBar from "./Inbox/MessagesSearchBar";
import SingleMessage from "./Inbox/SingleMessage";

const Messages = () => {
  const [isActive, setActive] = useState("messages");

  return (
    <>
      <TopBar />
      <LeftSidebar myState="messages" />
      <div className="container-fluid main-div min-vh-100">
        <div
          className="row justify-content-around "
          style={{ marginLeft: 220 }}
        >
          <div className="col-md-12 my-3 ps-0">
            <h2 className="w-700 mx-3 mb-2">Messages</h2>
            <div className="card funge-card">
              <div className="container-fluid ps-0">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card funge-card px-0">
                      <div className="card-body pe-4 min-vh-75">
                        <span className="fw-bold w-700">Inbox</span>
                        <span className="float-end">
                          <i
                            className="fa fa-ellipsis-h fw-bold"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <br />
                        <br />
                        <button className="btn btn-primary">All</button>
                        <button className="btn btn-secondary ms-3">Unread</button>
                        <MessagesSearchBar />
                        <div className="container p-0">
                          <div className="row">
                            <div className="col-md-12">
                              <table className="table table-borderless">
                                {/* Set props to single message */}
                                <tbody>
                                  <SingleChat />
                                  <SingleChat />
                                  <SingleChat />
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 border-start">
                    <div className="card funge-card ps-2 p-1">
                      <div className="card-body p-0">
                        <table className="table table-borderless">
                          <SingleChat />
                        </table>

                        <div className="container p-0 min-vh-75">
                          <div className="row">
                            <SingleMessage rMsg msgText="Hello there! What's Up?12" msgTime="15:20" />
                            <SingleMessage sMsg msgText="Hello there! What's Up?12" msgTime="14:20" />
                          </div>
                        </div>
                        <div className="container p-0">
                          <div className="row">
                            <div className="col-md-12 my-2 mt-3">
                              <div className="message-box ms-1">
                                <div className="input-group ">

                                  <input
                                    type="text"
                                    className="form-control ps-4"
                                    placeholder="Type your message ..."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                  />

                                  <input tyype='button' className="btn btn-primary btn-sm send-btn" value='Send' />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
