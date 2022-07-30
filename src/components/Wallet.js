import React, { state, useState } from "react";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";

const Wallet = () => {
  const [isActive, setActive] = useState("wallet");

  return (
    <>
      <TopBar />
      <LeftSidebar myState="wallet" />
      <div className="container-fluid main-div min-vh-100 ps-0">
        <div className="row justify-content-center mainbox">
          <div className="col-md-12 m-3 ps-0">
            <h2 className="m-3 w-800 d-inline">Wallet</h2>
            <span className="float-end">
              <div className="btn-group poly-dropdown">
                <button
                  className="btn dropdown-toggle shadow-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="./assets/images/polygon.png" /> &nbsp; Polygon
                  &nbsp;
                </button>
                <ul className="dropdown-menu shadow-sm">
                  <li className="dropdown-item py-2">
                    <img src="./assets/images/fox.png" width={30} /> &nbsp;
                    Funge 1
                  </li>
                  <li className="dropdown-item py-2">
                    <img src="./assets/images/ETH.png" width={30} /> &nbsp;
                    Funge 2
                  </li>
                  <li className="dropdown-item py-2">
                    <img src="./assets/images/star.png" width={30} /> &nbsp;
                    Funge 3
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div className="col-md-12 col-sm-12 ps-0 mb-3">
            <div className="card funge-card shadow-sm">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <h6>Current Balance</h6>
                      <h2 className="w-600">$58,072.24</h2>
                      <small>
                        <span className="text-success">+17.82%</span> | 24 hrs
                      </small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <div className="align-self-end">
                        <button className="btn btn-primary m-2">Deposit</button>
                        <button className="btn btn-secondary m-2">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 ps-0 pe-3 mb-4">
            <div className="card funge-card p-5 shadow-sm">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <ul className="nav funge-nav-pills nav-pills nav-justified mb-5">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="pill"
                          href="#crypto"
                        >
                          Crypto
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="pill"
                          href="#nft"
                        >
                          Nft
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane container p-0 active"
                        id="crypto"
                      >
                        <div className="card funge-card funge-bggrey mb-4">
                          <div className="row">
                            <div className="col-sm-2 col-md-1">
                              <img
                                src="./assets/images/polygon.png"
                                className="img-fluid mt-1"
                              />
                            </div>
                            <div className="col-sm-10 col-md-11 pe-4">
                              <p className="mb-0">
                                <small>Polygon (MATIC)</small>
                                <br />
                                <span className="w-600">$0.000003</span>
                                <span className="float-end">$0.73 MATIC</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card funge-card funge-bggrey mb-4">
                          <div className="row">
                            <div className="col-sm-2 col-md-1">
                              <img
                                src="./assets/images/ETH_wallet.png"
                                className="img-fluid mt-1"
                              />
                            </div>
                            <div className="col-sm-10 col-md-11 pe-4">
                              <p className="mb-0">
                                <small>Ethereum Wallet</small>
                                <br />
                                <span className="w-600">$0.000003</span>
                                <span className="float-end">$0.73 ETH</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card funge-card funge-bggrey mb-4">
                          <div className="row">
                            <div className="col-sm-2 col-md-1">
                              <img
                                src="./assets/images/lite_wallet.png"
                                className="img-fluid mt-1"
                              />
                            </div>
                            <div className="col-sm-10 col-md-11 pe-4">
                              <p className="mb-0">
                                <small>Litcoin Wallet</small>
                                <br />
                                <span className="w-600">$0.000003</span>
                                <span className="float-end">$0.73 LTC</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card funge-card manage-wallet-card mb-3 ">
                          <div className="row">
                            <div className="col-12">
                              <p className="mb-0 text-center">
                                <img
                                  src="./assets/images/manage_wallet.png"
                                  className="img-fluid mt-1"
                                />
                                &nbsp; <span>Manage Wallet</span>
                                <br />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container" id="nft">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-4 col-sm-6 mb-5 ">
                              <img
                                src="./assets/images/kitty2.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <img
                                src="./assets/images/kitty1.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <img
                                src="./assets/images/kitty.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-5">
                              <img
                                src="./assets/images/kitty2.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <img
                                src="./assets/images/kitty1.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <br />
                            <div className="col-md-4 col-sm-6">
                              <img
                                src="./assets/images/kitty.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <img
                                src="./assets/images/kitty2.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <img
                                src="./assets/images/kitty1.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454 </p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                            <br />

                            <div className="col-md-4 col-sm-6">
                              <img
                                src="./assets/images/kitty.png"
                                className="img-fluid mt-1"
                              />
                              <br />
                              <br />
                              <p className="w-500 ms-2 mb-0">Kitty#4454</p>
                              <span className="ms-2 mb-2 w-500">
                                <img src="./assets/images/ethlight.png" /> 0.001
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 ps-0 mb-4">
            <div className="card funge-card shadow-sm">
              <div className="card-body">
                <div className="card funge-card funge-bggrey mb-4 text-center">
                  <br />
                  <div className="w-600">
                    {" "}
                    <img
                      src="./assets/images/polygon-circle.png"
                      className="img-fluid mt-1"
                    />
                  </div>
                  <div className="w-600 my-3">Polygon Bridge</div>
                  <div className="w-400">
                    {" "}
                    psum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor amet, consectetur adipiscing elit, sed do
                    eiusmod tempor
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="col-6 mx-auto text-center">
                    <button className="btn btn-primary w-600">Start</button>
                  </div>
                  <br />
                </div>
                <div className="card funge-card funge-bggrey mb-4 text-center">
                  <br />
                  <h5 className="w-600">
                    {" "}
                    <img
                      src="./assets/images/funge_token.png"
                      className="img-fluid mt-1"
                    />
                    <br />
                    <br /> Funge Tokens
                  </h5>
                  <div className="w-500 mt-3">Current Balance</div>
                  <h1 className="w-600 fs-42px my-3">$20.24</h1>
                  <hr className="mx-3" />
                  <br />
                  <small className="w-400">Points Awarded</small>
                  <h5 className="w-600 my-3">100 Funge Points</h5>
                  <p className="w-400 fs-13px">
                    100 Funge points = 10 Dollars
                    <br />
                    worth of funge Token
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 ps-0 pe-3 mb-4">
            <div className="card funge-card p-5 shadow-sm">
              <div className="card-body">
                <h6 className="w-700 ms-4">
                  <i class="fas fa-arrow-left me-2"></i> Back
                </h6>
                <div className="row">
                  <div className="card funge-card shadow-sm mb-4 text-center">
                    <br />
                    <div className="card funge-card funge-bggrey mb-4 text-center">
                      <br />
                      <span className="w-400 bg-white btn">
                        {" "}
                        <img
                          src="./assets/images/polygon_dark.png"
                          className="img-fluid mt-1"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;Polygon Matic
                        <br />
                      </span>
                      <div className="w-600 fs-42px mt-3">$20,000.00</div>
                      <h1 className="w-400 my-2 fs-3">0.560797 MATIC</h1>
                      <small>
                        <span className="text-success">+9.66%</span> 24 hrs
                      </small>
                      <br />
                    </div>
                    <div className="row">
                      <button class="btn btn-secondary w-25 ms-5 border-3 rounded-pill">
                        <i class="fas fa-arrow-up me-3"></i>Buy
                      </button>
                      <button class="btn btn-secondary w-25 ms-5 border-3 rounded-pill">
                        <i class="fas fa-arrow-down me-3"></i>Deposit
                      </button>
                      <button class="btn btn-secondary w-25 ms-5 border-3 rounded-pill">
                        <i class="fas fa-arrow-down me-3"></i>Withdraw
                      </button>
                    </div>
                  </div>
                </div>
                <p className="w-700 ms-2 mt-2 mb-4">
                  Recent Activity
                  <a href="#" className="funge-link w-600 float-end">
                    See All
                  </a>
                </p>
              </div>
              <div className="col-12">
                <table className="table table-borderless">
                  <tr>
                    <td>
                      <img
                        src="./assets/images/Polygon2.png"
                        className="img-fluid mt-1 ms-3"
                      />
                    </td>
                    <td>
                      <span className="w-500 ms-5">Bought Matic</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">0.560797 MATIC</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">Just now</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-success text-decoration-none w-400 float-end me-2"
                      >
                        Success
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="./assets/images/Polygon2.png"
                        className="img-fluid mt-1 ms-3"
                      />
                    </td>
                    <td>
                      <span className="w-500 ms-5">Bought Matic</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">0.560797 MATIC</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">Just now</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-warning text-decoration-none w-400 float-end me-2"
                      >
                        Pending
                      </a>
                    </td>
                  </tr>
                 
                  <tr>
                    <td>
                      <img
                        src="./assets/images/Polygon2.png"
                        className="img-fluid mt-1 ms-3"
                      />
                    </td>
                    <td>
                      <span className="w-500 ms-5">Bought Matic</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">0.560797 MATIC</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">Just now</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-danger text-decoration-none w-400 float-end me-2"
                      >
                        Faild
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="./assets/images/Polygon2.png"
                        className="img-fluid mt-1 ms-3"
                      />
                    </td>
                    <td>
                      <span className="w-500 ms-5">Bought Matic</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">0.560797 MATIC</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">Just now</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-success text-decoration-none w-400 float-end me-2"
                      >
                        Success
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="./assets/images/Polygon2.png"
                        className="img-fluid mt-1 ms-3"
                      />
                    </td>
                    <td>
                      <span className="w-500 ms-5">Bought Matic</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">0.560797 MATIC</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">Just now</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-success text-decoration-none w-400 float-end me-2"
                      >
                        Success
                      </a>
                    </td>
                  </tr>
                 
                  <tr>
                    <td>
                      <img
                        src="./assets/images/Polygon2.png"
                        className="img-fluid mt-1 ms-3"
                      />
                    </td>
                    <td>
                      <span className="w-500 ms-5">Bought Matic</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">0.560797 MATIC</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">Just now</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-success text-decoration-none float-end w-400 me-2"
                      >
                        Success
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="./assets/images/Polygon2.png"
                        className="img-fluid mt-1 ms-3"
                      />
                    </td>
                    <td>
                      <span className="w-500 ms-5">Bought Matic</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">0.560797 MATIC</span>
                    </td>
                    <td>
                      <span className="w-400 ms-5">Just now</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="text-success text-decoration-none float-end w-400 me-2"
                      >
                        Success
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 ps-0 mb-4"></div>
          <div className="col-md-12 col-sm-12 ps-0 pe-3 mb-4">
            <div className="card funge-card shadow-sm p-4">
              <div className="card-body">
                <div className="card funge-card">
                  <table className="px-5">
                    <tr>
                      <td colSpan={3} className="pb-3">
                        <p className="w-700 px-5 mb-2">
                          Market Value
                          <a href="#" className="funge-link float-end">
                            See All
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td width={110} className="py-3 ps-5">
                        <img
                          src="./assets/images/BTC.png"
                          className="img-fluid mt-1"
                        />
                      </td>
                      <td className="py-3">
                        <span className="w-400">Bitcoin (BTC)</span>
                      </td>
                      <td className="text-end py-3 pe-5">$300.43</td>
                    </tr>
                    <tr className="border-bottom">
                      <td width={110} className="py-3 ps-5">
                        <img
                          src="./assets/images/ETH.png"
                          className="img-fluid mt-1"
                        />
                      </td>
                      <td className="py-3">
                        <span className="w-400">Ethereum</span>
                      </td>
                      <td className="text-end py-3 pe-5">$300.43</td>
                    </tr>
                    <tr className="border-bottom">
                      <td width={110} className="py-3 ps-5">
                        <img
                          src="./assets/images/IT.png"
                          className="img-fluid mt-1"
                        />
                      </td>
                      <td className="py-3">
                        <span className="w-400">Litcoin</span>
                      </td>
                      <td className="text-end py-3 pe-5">$300.43</td>
                    </tr>
                    <tr className="border-bottom">
                      <td width={110} className="py-3 ps-5">
                        <img
                          src="./assets/images/ALG.png"
                          className="img-fluid mt-1"
                        />
                      </td>
                      <td className="py-3">
                        <span className="w-400">Algorand</span>
                      </td>
                      <td className="text-end py-3 pe-5">$300.43</td>
                    </tr>
                    <tr className="border-bottom">
                      <td width={110} className="py-3 ps-5">
                        <img
                          src="./assets/images/USDT.png"
                          className="img-fluid mt-1"
                        />
                      </td>
                      <td className="py-3">
                        <span className="w-400">Tether (USDT)</span>
                      </td>
                      <td className="text-end py-3 pe-5">$300.43</td>
                    </tr>
                    <tr>
                      <td width={110} className="py-3 ps-5">
                        <img
                          src="./assets/images/IT.png"
                          className="img-fluid mt-1"
                        />
                      </td>
                      <td className="py-3">
                        <span className="w-400">Solana (SOL)</span>
                      </td>
                      <td className="text-end py-3 pe-5">$300.43</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
