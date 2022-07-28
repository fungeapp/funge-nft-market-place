import React, { state, useState } from "react";
import TopBar from "./TopBar";
import FeedContainer from "./Feeds/FeedContainer";
import NewPost from "./Feeds/NewPost";
import LeftSidebar from "./LeftSidebar";

const Feeds = () => {
  const [isActive, setActive] = useState("home");

  return (
    <>
      <TopBar />
      <LeftSidebar myState="home" />
      <div className="container-fluid main-div min-vh-100 ps-0">
        <div className="row justify-content-around mainbox">
          <div className="col-md-6">
            <NewPost />
            <FeedContainer />
          </div>
          <div className="col-md-4 mt-4">
            <div className="card funge-card p-5">
              <div className="card-body p-0">
                <p className="w-700 mb-3">Make a post</p>
                <p className="w-400">
                  There are many variations of passages of Lorem Ipsum
                </p>
                <br />
                <div className="card funge-card">
                  <p className="w-700 mb-0">
                    <i className="fa fa-plus-circle rounded-circle funge-color me-2"></i>
                    Post an NFT
                  </p>
                  <span>
                    <i className="fa fa-angle-right float-end"></i>
                  </span>
                  <p className="w-400 ms-4">
                    There are many variations of passages <br /> of Lorem Ipsum
                  </p>
                </div>
                <div className="card funge-card">
                  <p className="w-700 mb-0">
                    <i className="fa fa-plus-circle rounded-circle funge-color me-2"></i>
                    Post an NFT
                  </p>
                  <span>
                    <i className="fa fa-angle-right float-end"></i>
                  </span>
                  <p className="w-400 ms-4">
                    There are many variations of passages &nbsp;
                    <br /> of Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="card funge-card">
              <div className="container">
                <div className="row pt-2">
                  <div className="col-2 p-0">
                    <img
                      src="./assets/images/award.png"
                      className="img-fluid mt-3"
                    />
                  </div>
                  <div className="col-10">
                    <div className="w-400 ms-2">
                      <p className="w-700 mb-2">Daily Challenge</p>
                      There are many variations of passages of Lorem Ipsum
                      <br />
                      <br />
                      <a href="#" className="funge-link w-700">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="card funge-card">
              <div className="container">
                <div className="row pt-2">
                  <div className="col-12 ps-0">
                    <p className="w-400">
                      <span className="w-700 mb-2">Recent News</span>
                      <a href="#" className="funge-link w-700 float-end">
                        See All
                      </a>
                      <br />
                    </p>
                  </div>
                  <div className="col-12 p-0">
                    <table>
                      <tbody>
                        <tr>
                          <td width={110} className="pb-3 ps-2">
                            <img
                              src="./assets/images/Rectangle.png"
                              className="img-fluid mt-1"
                            />
                          </td>
                          <td className="pb-3 me-2 align-middle">
                            <span className="w-600 ms-4 ">
                              Lil Pump Enlists soulja Boy
                              <br />
                            </span>
                            <span className="w-600 ms-4">
                              for new song "Mona Lisa"
                            </span>
                            <br />
                            <small>
                              <span className="w-400 recent-news ms-4">
                                Feb 14, 2022 . 4 min read
                              </span>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td width={110} className="pb-3 ps-2">
                            <img
                              src="./assets/images/Rectangle.png"
                              className="img-fluid mt-1"
                            />
                          </td>
                          <td className="pb-3 me-2 align-middle">
                            <span className="w-600 ms-4 ">
                              Lil Pump Enlists soulja Boy
                              <br />
                            </span>
                            <span className="w-600 ms-4">
                              for new song "Mona Lisa"
                            </span>
                            <br />
                            <small>
                              <span className="w-400 recent-news ms-4">
                                Feb 14, 2022 . 4 min read
                              </span>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td width={110} className="pb-3 ps-2">
                            <img
                              src="./assets/images/Rectangle.png"
                              className="img-fluid mt-1"
                            />
                          </td>
                          <td className="pb-3 me-2 align-middle">
                            <span className="w-600 ms-4 ">
                              Lil Pump Enlists soulja Boy
                              <br />
                            </span>
                            <span className="w-600 ms-4">
                              for new song "Mona Lisa"
                            </span>
                            <br />
                            <small>
                              <span className="w-400 recent-news ms-4">
                                Feb 14, 2022 . 4 min read
                              </span>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td width={110} className="pb-3 ps-2">
                            <img
                              src="./assets/images/Rectangle.png"
                              className="img-fluid mt-1"
                            />
                          </td>
                          <td className="pb-3 me-2 align-middle">
                            <span className="w-600 ms-4 ">
                              Lil Pump Enlists soulja Boy
                              <br />
                            </span>
                            <span className="w-600 ms-4">
                              for new song "Mona Lisa"
                            </span>
                            <br />
                            <small>
                              <span className="w-400 recent-news ms-4">
                                Feb 14, 2022 . 4 min read
                              </span>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td width={110} className="pb-3 ps-2">
                            <img
                              src="./assets/images/Rectangle.png"
                              className="img-fluid mt-1"
                            />
                          </td>
                          <td className="pb-3 me-2 align-middle">
                            <span className="w-600 ms-4 ">
                              Lil Pump Enlists soulja Boy
                              <br />
                            </span>
                            <span className="w-600 ms-4">
                              for new song "Mona Lisa"
                            </span>
                            <br />
                            <small>
                              <span className="w-400 recent-news ms-4">
                                Feb 14, 2022 . 4 min read
                              </span>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td width={110} className="pb-3 ps-2">
                            <img
                              src="./assets/images/Rectangle.png"
                              className="img-fluid mt-1"
                            />
                          </td>
                          <td className="pb-3 me-2 align-middle">
                            <span className="w-600 ms-4 ">
                              Lil Pump Enlists soulja Boy
                              <br />
                            </span>
                            <span className="w-600 ms-4">
                              for new song "Mona Lisa"
                            </span>
                            <br />
                            <small>
                              <span className="w-400 recent-news ms-4">
                                Feb 14, 2022 . 4 min read
                              </span>
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <td width={110} className="pb-3 ps-2">
                            <img
                              src="./assets/images/Rectangle.png"
                              className="img-fluid mt-1"
                            />
                          </td>
                          <td className="pb-3 me-2 align-middle">
                            <span className="w-600 ms-4 ">
                              Lil Pump Enlists soulja Boy
                              <br />
                            </span>
                            <span className="w-600 ms-4">
                              for new song "Mona Lisa"
                            </span>
                            <br />
                            <small>
                              <span className="w-400 recent-news ms-4">
                                Feb 14, 2022 . 4 min read
                              </span>
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card funge-card mt-4">
              <div className="container">
                <div className="row pt-2">
                  <div className="col-1 p-0">
                    <img
                      src="./assets/images/profile_new.png"
                      className="img-fluid mt-3 ms-2"
                    />
                  </div>
                  <div className="col-11 ps-4">
                    <div className="w-400 ms-2 ">
                      <p className="w-400 mb-2 my-3 mb-2">
                        Today is a good day to post Nfts
                      </p>
                      <p className="w-500 mb-2  funge-color">#Newcollection</p>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-6">
                    <img
                      src="./assets/images/Rectangle .png"
                      className="img-fluid w-100"
                      alt="Post Image"
                    />
                    <span
                      className="fs-3 position-absolute"
                      style={{ top: 136, left: 60 }}
                    >
                      <i className="fas fa-times-circle funge-color"></i>
                    </span>
                  </div>
                  <div className="col-6">
                    <img
                      src="./assets/images/Rectangle 864.png"
                      className="img-fluid  w-100"
                      alt="Post Image"
                    />
                  </div>
                  <br />
                  <div className="row pt-2 ms-2 my-2">
                    <div className="col-1 p-0">
                      <img
                        src="./assets/images/User.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-11 p-0">
                      <a href="#" className="funge-link w-700 me-5">
                        Tag people
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="funge-grey" />
              </div>
              <div className="row pt-2 px-5">
                <div className="col-1 p-0">
                  <img src="./assets/images/Image.png" className="img-fluid" />
                </div>
                <div className="col-1 p-0">
                  <img
                    src="./assets/images/user+.png"
                    className="img-fluid  "
                  />
                </div>
                <div className="col-1 p-0">
                  <img src="./assets/images/Smile.png" className="img-fluid " />
                </div>
                <div className="col-1 p-0">
                  <img
                    src="./assets/images/Location.png"
                    className="img-fluid  "
                  />
                </div>
                <div className="col-8 p-0 text-end">
                  <button className="btn btn-primary">Funge it</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feeds;
