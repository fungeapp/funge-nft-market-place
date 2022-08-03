import React, { state, useState } from "react";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";

const CreateNewItem = () => {
  const [isActive, setActive] = useState("newItem");

  return (
    <>
      <TopBar />
      <LeftSidebar myState="newItem" />
      <div className="container-fluid main-div min-vh-100 ps-0">
        <div className="row justify-content-around mainbox">
          <div className="col-md-8 mt-3 ps-0">
            <h2 className="w-800 mx-2">Create New Item</h2>

            <div className="card funge-card p-4 shadow-sm">
              <p className="w-700">Image, Video, Audio, or 3D Model</p>
              <p>
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG,
                <br /> GLB, GLTF. Max size: 100 MB
              </p>
              <div className="card-body"></div>
              <div className="card funge-card manage-wallet-card mb-3 fa-10x ">
                <div className="row">
                  <div className="col-12 ">
                    <p className="mb-0 text-center">
                      <button className="btn btn-primary m-2">
                        Choose file
                      </button>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card funge-card p-4 mt-4 shadow-sm">
              <p className="w-700">Choose collection</p>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6 col-md-3 col-lg-2 text-center">
                    <img src="./assets/images/add.png" className="img-fluid" />
                    <br />
                    <br />
                    <p className="w-700">Create</p>
                    <p className="w-400">ERC-721</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card funge-card p-4 mt-4 shadow-sm">
              <br />
              <br />
              <p className="w-700">Description</p>
              <div className="mb-3 ">
                <textarea
                  rows={5}
                  class="form-control new_item_input w-400 fs-14px"
                  placeholder="Provide a detailed description of your item."
                ></textarea>
              </div>
              <p className="w-700">Category</p>
              <div className="mb-3">
                <input
                  type="text"
                  class="form-control new_item_input w-400 p-2"
                  placeholder="Select Category"
                />
              </div>
              <p className="w-700">Price of NFT</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control new_item_input w-400 p-2"
                  placeholder="Enter Price of NFT"
                />
                <span className="input-group-text bg-white funge-post-addon">
                  <img src="./assets/images/Ethdark.png" />
                </span>
              </div>
            </div>
            <div className="card funge-card p-4 mt-4 shadow-sm">
              <p className="w-700">Select type of sell</p>
              <ul className="nav funge-nav-pills nav-pills nav-justified mb-5">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="pill"
                    href="#directbuy"
                  >
                    Direct Buy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="pill" href="#auction">
                    Auction
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="pill" href="#raffle">
                    Raffle
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane container p-0 active" id="directbuy">
                  <p>
                    <span className="w-700">Direct Buy:</span> Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
                  </p>
                  <div className="mb-3">
                    <input
                      type="text"
                      class="form-control new_item_input w-400 px-3 py-2"
                      placeholder="Royalty"
                    />
                  </div>
                  <span className="w-400 funge-grey">
                    Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
                  </span>
                </div>
                <div className="tab-pane container" id="auction">
                  <h1 className="text-center">Auction</h1>
                </div>
                <div className="tab-pane container" id="raffle">
                  <h1 className="text-center">Raffle</h1>
                </div>
              </div>
            </div>
            <div className="card funge-card p-4 mt-4 shadow-sm">
              <p className="w-600">Properties</p>
              <p className="w-400">
                Properties show up underneath your item, are clickable, and can
                be filtered
                <br /> in your your collection's sidebar.{" "}
              </p>
              <div className="row p-0">
                <div className="col-sm-12 col-md-6">
                  <input
                    type="text"
                    class="form-control new_item_input w-400 px-3 py-2"
                    placeholder="Type"
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <input
                    type="text"
                    class="form-control new_item_input w-400 px-3 py-2"
                    placeholder="Name"
                  />
                </div>
              </div>
              <br />
              <p>
                <i class="fas fa-plus funge-color"></i>
                <a href="#" class="funge-link w-700 ms-2">
                  Add more
                </a>
              </p>
            </div>
            <br />
            <br />
            <div className="col-12">
              <p className="mb-5">
                <button className="btn btn-primary m-2 w-50">Create</button>
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <h5 className="w-700 mx-3 my-3 mt-5">Preview</h5>
            <div
              className="card funge-card border shadow-sm"
              style={{ maxWidth: 320 }}
            >
              <div className="card-body pt-0 px-0">
                <table className="table">
                  <tr>
                    <td width={47}>
                      <img
                        src="./assets/images/Ellipse.png"
                        width={80}
                        className="img-fluid p-1"
                      />
                    </td>
                    <td className="w-600">
                      <span className="p-0 ms-2 ">Meebits</span>
                    </td>
                    <td className="text-end">
                      <i class="fas fa-ellipsis-v funge-grey"></i>
                    </td>
                  </tr>
                </table>
              </div>
              <img src="./assets/images/unsplash.png" className="img-fluid" />
              <br />
              <p className="w-700 ms-2 mb-0">
                <img
                  src="./assets/images/Cryptocurrency.png"
                  className="float-end"
                />
                Kitty#4454
              </p>
              <p className="w-500 funge-grey ms-2 mb-0">Price</p>
              <p className="w-700 ms-2 mb-0 ">
                <img src="./assets/images/path1599.png" /> 0.001
              </p>
              <hr />
              <p className="w-400 ms-2 funge-grey ">
                <img src="./assets/images/greyheart.png" />{" "}
                <i class="fas fa-arrow-right float-end funge-color mt-1"></i>
                <a href="#" class="funge-link w-600 ms-2 float-end me-2">
                  Buy Now
                </a>
                23
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            
            <div
              className="card funge-card border shadow-sm"
              style={{ maxWidth: 320 }}
            >
              <div className="card-body pt-0 px-0">
                <table className="table">
                  <tr>
                    <td width={47}>
                      <img
                        src="./assets/images/Ellipse.png"
                        width={80}
                        className="img-fluid p-1"
                      />
                    </td>
                    <td className="w-600">
                      <span className="p-0 ms-2 ">Meebits</span>
                    </td>
                    <td className="text-end">
                      <i class="fas fa-ellipsis-v funge-grey"></i>
                    </td>
                  </tr>
                </table>
              </div>
              <img src="./assets/images/unsplash.png" className="img-fluid" />
              <br />
              <p className="w-700 ms-2 mb-0">
                <img
                  src="./assets/images/Cryptocurrency.png"
                  className="float-end"
                />
                Kitty#4454
              </p>
              <p className="w-500 funge-grey ms-2 mb-0">Price</p>
              <p className="w-700 ms-2 mb-0 ">
                <img src="./assets/images/path1599.png" /> 0.001
              </p>
              <hr />
              <p className="w-400 ms-2 funge-grey ">
                <img src="./assets/images/greyheart.png" />{" "}
                <i class="fas fa-arrow-right float-end funge-color mt-1"></i>
                <a href="#" class="funge-link w-600 ms-2 float-end me-2">
                  Buy Now
                </a>
                23
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewItem;
