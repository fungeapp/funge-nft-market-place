import React, { state, useState } from "react";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import NewNotifictions from "./Notifications/NewNotifications";
import MakeAPost from "./Feeds/MakeAPost";
import DailyChallenge from "./Feeds/DailyChallenge";

const Notifications = () => {
  const [isActive, setActive] = useState("notifications");

  return (
    <>
      <TopBar />
      <LeftSidebar myState="notifications" />
      <div className="container-fluid main-div min-vh-100 ps-0">
        <div className="row justify-content-around mainbox">
          <div className="col-md-8 mt-3 mb-5 ps-0">
            <h2 className="w-800 mx-3 mb-2">Notifications</h2>
            <div className="card funge-card shadow-sm p-4">
              <div className="card-body">
                <button className="btn btn-primary">All</button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="btn btn-secondary">Unread</button>
                <span className="float-end">
                  <i className="fas fa-cog fs-5 funge-grey my-3"></i>
                </span>
                <br />
                <br />
                <hr />
                <div className="row pt-2">
                  <div className="col-12 mb-3">
                    <p className="w-400">
                      <span className="w-700 mb-2">New</span>
                      <a href="#" className="funge-link w-400 float-end">
                        See All
                      </a>
                      <br />
                    </p>
                  </div>
                  <div className="col-12">
                    <NewNotifictions />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <h2 className="w-800 mx-3 mb-2"> &nbsp; </h2>
            <MakeAPost />
            <br />
            <DailyChallenge />
            <div className="card funge-card shadow-sm mt-4">
              <div className="container">
                <div className="row pt-2">
                  <div className="col-12">
                    <p className="w-700 ms-2 mt-2 mb-4">
                      Top Collections
                      <a href="#" className="funge-link w-600 float-end">
                        See All
                      </a>
                    </p>
                  </div>
                  <div className="col-12">
                    <table className="table table-borderless">
                      <tr>
                        <td>
                          <span className="w-700">1</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_1.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="w-700">2</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_2.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="w-700">3</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_3.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="w-700">4</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_4.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="w-700">5</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_5.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="w-700">6</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_6.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="w-700">7</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_7.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="w-700">8</span>
                        </td>
                        <td>
                          <img
                            src="./assets/images/collaction_table_8.png"
                            className="img-fluid ms-2"
                          />
                        </td>
                        <td className="w-600">
                          <span className="p-0 ms-2">Meebits</span>
                          <br />
                          <img src="./assets/images/Ethereum.png" />
                          3.75 &nbsp; |{" "}
                          <span className="funge-color">18.18%</span>
                        </td>
                        <td>
                          <i
                            className="fa fa-angle-right float-end funge-grey"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                    </table>
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

export default Notifications;
