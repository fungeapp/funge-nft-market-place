import React, { state, useState } from 'react';
import TopBar from './TopBar';
import LeftSidebar from './LeftSidebar';

const Wallet = () => {

    const [isActive, setActive] = useState("wallet");

    return (
        <>
            <TopBar />
            <LeftSidebar myState='wallet' />
            <div className='container-fluid main-div min-vh-100'>
                <div className='row justify-content-center' style={{ marginLeft: 220 }}>
                    <div className='col-md-12 m-3 ps-0'>
                        <h3 className='m-3 w-800'>Wallet</h3>
                    </div>
                    <div className='col-md-12 col-sm-12 ps-0 mb-4'>
                        <div className='card funge-card'>
                            <div className='card-body'>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col">
                                            <h6>Current Balance</h6>
                                            <h2 className='w-600'>$58,072.24</h2>
                                            <small><span className='text-success'>+17.82%</span> | 24 hrs</small>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className='align-self-end'>
                                                <button className='btn btn-primary'>Deposit</button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <button className='btn btn-secondary'>Withdraw</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 col-sm-12 ps-0 pe-3 mb-4'>
                        <div className='card funge-card p-5'>
                            <div className='card-body'>
                                <div className='card funge-card funge-bggrey mb-4'>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src='./assets/images/polygon.png' className='img-fluid mt-1' />
                                        </div>
                                        <div className='col-11 pe-4'>
                                            <p className='mb-0'>
                                                <small>Polygon (MATIC)</small><br />
                                                <span className='w-600'>$0.000003</span>
                                                <span className='float-end'>$0.73 MATIC</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card funge-card funge-bggrey mb-4'>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src='./assets/images/ETH_wallet.png' className='img-fluid mt-1' />
                                        </div>
                                        <div className='col-11 pe-4'>
                                            <p className='mb-0'>
                                                <small>Ethereum Wallet</small><br />
                                                <span className='w-600'>$0.000003</span>
                                                <span className='float-end'>$0.73 ETH</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card funge-card funge-bggrey mb-4'>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src='./assets/images/lite_wallet.png' className='img-fluid mt-1' />
                                        </div>
                                        <div className='col-11 pe-4'>
                                            <p className='mb-0'>
                                                <small>Litcoin Wallet</small><br />
                                                <span className='w-600'>$0.000003</span>
                                                <span className='float-end'>$0.73 LTC</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card funge-card manage-wallet-card mb-2'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <p className='mb-0 text-center'>
                                            <img src='./assets/images/manage_wallet.png' className='img-fluid mt-1' />
                                                &nbsp; <span>Manage Wallet</span><br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 ps-0 mb-4'>
                        <div className='card funge-card'>
                            <div className='card-body'>
                                <div className='card funge-card funge-bggrey mb-4 text-center'>
                                    <br />
                                    <div className='w-600'> <img src='./assets/images/polygon-circle.png' className='img-fluid mt-1' /></div>
                                    <div className='w-600 my-3'>Polygon Bridge</div>
                                    <div className='w-400'> psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className='col-6 mx-auto text-center'>
                                        <button className='btn btn-primary w-600'>Start</button>
                                    </div>
                                    <br />
                                </div>
                                <div className='card funge-card funge-bggrey mb-4 text-center'>
                                    <br />
                                    <h5 className='w-600'> <img src='./assets/images/funge_token.png' className='img-fluid mt-1' /><br /><br /> Funge Tokens</h5>
                                    <div className='w-500 mt-3'>Current Balance</div>
                                    <h1 className='w-600 fs-42px my-3'>$20.24</h1>
                                    <hr className='mx-3' />
                                    <br />
                                    <small className='w-400'>Points Awarded</small>
                                    <h5 className='w-600 my-3'>100 Funge Points</h5>
                                    <p className='w-400 fs-13px'>100 Funge points = 10 Dollars<br />worth of funge Token</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 ps-0'>
                        <div className='card funge-card p-4'>
                            <div className='card-body'>

                                <div className='card funge-card'>
                                    <table className='px-5'>
                                        <tr>
                                            <td colSpan={3} className='pb-3'>
                                                <p className='w-700 px-5 mb-2'>Market Value<a href='#' className='funge-link float-end'>See All</a></p>
                                            </td>
                                        </tr>
                                        <tr className='border-bottom'>
                                            <td width={110} className='py-3 ps-5'>
                                                <img src='./assets/images/BTC.png' className='img-fluid mt-1' />
                                            </td>
                                            <td className='py-3'>
                                                <span className='w-400'>Bitcoin (BTC)</span>
                                            </td>
                                            <td className='text-end py-3 pe-5'>
                                                $300.43
                                            </td>
                                        </tr>
                                        <tr className='border-bottom'>
                                            <td width={110} className='py-3 ps-5'>
                                                <img src='./assets/images/ETH.png' className='img-fluid mt-1' />
                                            </td>
                                            <td className='py-3'>
                                                <span className='w-400'>Ethereum</span>
                                            </td>
                                            <td className='text-end py-3 pe-5'>
                                                $300.43
                                            </td>
                                        </tr>
                                        <tr className='border-bottom'>
                                            <td width={110} className='py-3 ps-5'>
                                                <img src='./assets/images/IT.png' className='img-fluid mt-1' />
                                            </td>
                                            <td className='py-3'>
                                                <span className='w-400'>Litcoin</span>
                                            </td>
                                            <td className='text-end py-3 pe-5'>
                                                $300.43
                                            </td>
                                        </tr>
                                        <tr className='border-bottom'>
                                            <td width={110} className='py-3 ps-5'>
                                                <img src='./assets/images/ALG.png' className='img-fluid mt-1' />
                                            </td>
                                            <td className='py-3'>
                                                <span className='w-400'>Algorand</span>
                                            </td>
                                            <td className='text-end py-3 pe-5'>
                                                $300.43
                                            </td>
                                        </tr>
                                        <tr className='border-bottom'>
                                            <td width={110} className='py-3 ps-5'>
                                                <img src='./assets/images/USDT.png' className='img-fluid mt-1' />
                                            </td>
                                            <td className='py-3'>
                                                <span className='w-400'>Tether (USDT)</span>
                                            </td>
                                            <td className='text-end py-3 pe-5'>
                                                $300.43
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width={110} className='py-3 ps-5'>
                                                <img src='./assets/images/IT.png' className='img-fluid mt-1' />
                                            </td>
                                            <td className='py-3'>
                                                <span className='w-400'>Solana (SOL)</span>
                                            </td>
                                            <td className='text-end py-3 pe-5'>
                                                $300.43
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Wallet;