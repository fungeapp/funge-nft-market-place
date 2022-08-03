import React, { state, useState } from "react";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";

const EditProfile = () => {
  const [isActive, setActive] = useState("home");

  return (
    <>
      <TopBar />
      <LeftSidebar myState="profile" />
      <div className="container-fluid main-div min-vh-100 ps-0">
        <div className="row justify-content-center mainbox">
          <div className="col-md-4 mt-3 col-sm-12 ps-0">
          <div className="card funge-card social-card">
              <div className="card-body">
                <h6 className="w-600">Wallet Address</h6>
                <div className="input-group input-wallet mb-3">
                  <span className="input-group-text icon">
                    <img src="./assets/images/fox.png" />
                  </span>
                  <input
                    type={"text"}
                    placeholder={"1F1tAassdadsd...GNn4xqXw6"}
                    className="form-control border-0"
                  />
                  <span className="input-group-text bg-transparent border-0 fa-rotate-270">
                    <i className="fas fa-clone"></i>
                  </span>
                </div>
                <hr />
                <h6 className="w-600">Bio</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do
                </p>
                <hr />
                <h6 className="w-600">Social Media</h6>
                <div className="container-fluid p-0">
                  <div className="row p-0">
                    <div className="col-sm-12 col-md-6 px-1">
                      <div className="d-grid gap-3 mt-3">
                        <button className="btn btn-secondary" type="button">
                          <img src="./assets/images/fb.png" />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris
                        </button>
                        <button className="btn btn-secondary" type="button">
                          <img src="./assets/images/insta.png" />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris
                        </button>
                        <button className="btn btn-secondary" type="button">
                          <img
                            className="float-start"
                            src="./assets/images/twitter.png"
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 px-1">
                      <div className="d-grid gap-3 mt-3">
                        <button className="btn btn-secondary" type="button">
                          <img
                            className="float-start"
                            src="./assets/images/twitter.png"
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris
                        </button>
                        <button className="btn btn-secondary" type="button">
                          <img src="./assets/images/discord.png" />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris
                        </button>
                      </div>
                    </div>

                  </div>
                  <br />
                  <hr />
                  <br/>
                  <div className="w-500">
                  <i className="fas fa-globe fa-rotate-180"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>www.mynfts.com</span><i className="fas fa-external-link float-end funge-color"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 mt-3 ps-0">
            <div className="card profile-card px-4 pt-4 border-0">
              <div className="cover-profile">
                <img
                  src="./assets/images/profile_pic1.png"
                  className="profile-pic rounded-circle"
                />
                <button className="btn-primary float-end me-4 mt-4 bg-light border-0 ">
                  <i className="fa fa-camera funge-color me-4"></i>
                  <span className="w-600 funge-color">Add cover Photo</span>
                </button>
              </div>
              <div className="card-body profile-card-body">
                <div className="container-fluid">
                  <div className="row justify-content-start">
                    <div className="col-12">
                      <table>
                        <tr>
                          <td>
                            <h5 className="card-title w-800 d-inline-block">
                              Joe Chris <br />
                              <small className="funge-color">@Joe Chris</small>
                            </h5>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="col-sm-12 col-md-10 mt-5">
                      <form>
                        <div className="form-group mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="sub-heading fs-14px"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control funge-input"
                            id="username"
                            aria-describedby="usernameHelp"
                            placeholder="Abz"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="sub-heading fs-14px"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control funge-input"
                            id="exampleInputPassword1"
                            placeholder="Johndoe@gmail.com"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label for="user_bio" className="sub-heading fs-14px">
                            Bio
                          </label>
                          <textarea
                            id="user_bio"
                            className="form-control funge-input"
                            placeholder="Write Here..."
                          >
                          </textarea>
                        </div>
                        <div className="form-group mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="sub-heading fs-14px"
                          >
                            Language
                          </label>
                          <input
                            type="email"
                            className="form-control funge-input"
                            id="exampleInputPassword1"
                            placeholder="English"
                          />
                        </div>
                        <br />
                        <div className="w-600">Connect Social Media</div>
                        <br />
                        <div className="input-group flex-nowrap mb-3">
                          <span className="input-group-text funge-pre-addon">
                            <img
                              src="./assets/images/facebook.png"
                              width={15}
                            />
                          </span>
                          <input
                            type="text"
                            className="form-control funge-input"
                            placeholder="Facebook Username"
                            aria-describedby="addon-wrapping"
                          />
                        </div>
                        <div className="input-group flex-nowrap mb-3">
                          <span className="input-group-text funge-pre-addon">
                            <img
                              src="./assets/images/instagram.png"
                              width={15}
                            />
                          </span>
                          <input
                            type="text"
                            className="form-control funge-input"
                            placeholder="Instagram Userme"
                            aria-describedby="addon-wrapping"
                          />
                        </div>
                        <div className="input-group flex-nowrap mb-3">
                          <span className="input-group-text funge-pre-addon">
                            <img
                              src="./assets/images/twitter-grey.png"
                              width={15}
                            />
                          </span>
                          <input       
                            type="text"
                            className="form-control funge-input"
                            placeholder="Twitter Userme"
                            aria-describedby="addon-wrapping"
                          />
                        </div>
                        <br />
                        <div className="w-600">Wallet Adress</div>   
                        <br />
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control funge-input"
                            placeholder="0x4E1f41613c9084FdB9E34E11fAE9412427480e56"
                          />
                          <span className="input-group-text funge-post-addon"><i className="far fa-clone sub-heading float-end"></i></span>
                        </div>
                        <br />
                        <button type="Save" className="btn btn-primary ">
                          Save
                        </button>
                      </form>
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

export default EditProfile;
