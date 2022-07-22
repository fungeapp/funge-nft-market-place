import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoinMarket from './LandingPage/CoinMarket';
import TopNavBarV0 from './LandingPage/TopNavBarV0';
import Footer from './LandingPage/Footer';

const LandingPageV0 = () => {

    const navigate = useNavigate();

    return (
        <>
            <TopNavBarV0 />
            <section id="hiro" className='v0'>
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-12 col-md-5 hiro_col_left mx-auto text-center'>
                            <p className="section_pera v0">
                                Your Gateway to the Creative Economy
                            </p>
                            <h2 className="section_heading hiro_heading">
                                Trade, Connect and Earn     Like Never Before.
                            </h2>
                            <br />
                            <br />
                            <br />
                            <br />
                            <button className="btn btn-primary w-600 waitlist-btn">
                                Join the Waitlist
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='w-800 unlock-heading p-5'>
                                Unlock a world of possibilities with our one-stop NFT trading and social media platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection">
                <div className='container'>
                    <div className='row pt-5 pb-3 justify-content-around'>
                        <div className='col-md-4 sticky-top align-self-start'>
                            <div className='card funge-card funge-bghover mt-5 px-5'>
                                <br />
                                <span className='funge-color'>Collector Spotlight</span>
                                <h2 className="collection_heading w-600 mt-3 mb-3">
                                    Robust social
                                    <br />
                                    Features
                                </h2>
                                <p className='sub-heading small'>Use our wide range of social tools to find &<br />Connect with user who are passionate about<br /> NFTs.Creat eye-catching content, keep up with<br />current trends,and mints NFTs all within one<br />social feed built specifically for the blockchain<br />community.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 ps-5 mt-5 section-thumb'>
                            <p className='ps-5 my-5'>
                                <ul className='funge-list'>
                                    <li>Stay up-to-date with trending NFT discussions and topics</li>
                                    <li>Connect with fellow users through built-in direct messaging</li>
                                    <li>Mint verified NFTs from your social feed with ease</li>
                                </ul>
                            </p>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection">
                <div className='container'>
                    <div className='row pt-5 pb-3 justify-content-around'>
                        <div className='col-md-4 sticky-top align-self-start'>
                            <div className='card funge-card funge-bghover mt-5 px-5'>
                                <br />
                                <span className='funge-color'>Trader Spotlight</span>
                                <h2 className="collection_heading w-600 mt-3 mb-3">
                                    Powerful NFT
                                    <br />
                                    Tools & Solutions
                                </h2>
                                <p className='sub-heading small'>A complete and comprehensive toolset for all your NFT needs. Explore the limits of Web3 with our feature-packed peer-to-peer trading tools, cross-platform transactions, live NFT analytics, and more.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 ps-5 mt-5 section-thumb'>
                            <p className='ps-5 my-5'>
                                <ul className='funge-list'>
                                    <li>Stay up-to-date with trending NFT discussions and topics</li>
                                    <li>Connect with fellow users through built-in direct messaging</li>
                                    <li>Mint verified NFTs from your social feed with ease</li>
                                </ul>
                            </p>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection">
                <div className='container'>
                    <div className='row pt-5 pb-3 justify-content-around'>
                        <div className='col-md-4 sticky-top align-self-start'>
                            <div className='card funge-card funge-bghover mt-5 px-5'>
                                <br />
                                <span className='funge-color'>Reward Spotlight</span>
                                <h2 className="collection_heading w-600 mt-3 mb-3">
                                    Engagement
                                    <br />
                                    Incentives
                                </h2>
                                <p className='sub-heading small'>Our Tokenomics system turns users into owners by rewarding them for creating valuable content and participating on the platform.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 ps-5 mt-5 section-thumb'>
                            <p className='ps-5 my-5'>
                                <ul className='funge-list'>
                                    <li>Stay up-to-date with trending NFT discussions and topics</li>
                                    <li>Connect with fellow users through built-in direct messaging</li>
                                    <li>Mint verified NFTs from your social feed with ease</li>
                                </ul>
                            </p>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                            <div className='card funge-card funge-bggrey mt-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-9'>
                            <p className='w-800 tools-heading p-5'>
                                Tools designed for the growing wave of forward-thinking creators, innovators, and traders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='features-section'>
                <div className='container'>
                    <div className='row' id='community-builder'>
                        <div className='col-12'>
                            <div className='card feature-card'>
                                <div className='card-body'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-md-6 col-sm-12 border-end'>
                                                <div className='feature1 px-5'>
                                                    <p className='p-5'>
                                                        <h2 className='badge rounded-pill funge-bgcolor px-3 py-2 fs-6 w-600'>Coming Soon</h2>
                                                        <h2 className="collection_heading w-600 my-3">
                                                            Commmunity Builder
                                                        </h2>
                                                        <p className='sub-heading'>We're launching a VoIP and instant messaging social
                                                            platform where you can find and share ideas  in private chats or on community
                                                            channels using voice, video calls, text messages and other media.
                                                        </p>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-12'>
                                                <div className='container'>
                                                    <div className='row community-feature my-5'>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0'>Voice hat rooms</p>
                                                                    <span className='sub-heading fs-12px'>Set up and manage your business</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0'>Voice hat rooms</p>
                                                                    <span className='sub-heading fs-12px'>Set up and manage your business</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row community-feature my-5'>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0 fs-14px'>Live streaming</p>
                                                                    <span className='sub-heading fs-12px'>Gravida gravida nisi, magna blandit</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0 fs-14px'>File sharing</p>
                                                                    <span className='sub-heading fs-12px'>Gravida gravida nisi, magna blandit</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row community-feature my-5'>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0 fs-14px'>Push Notifications</p>
                                                                    <span className='sub-heading fs-12px'>Gravida gravida nisi, magna blandit</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0 fs-14px'>Internal trading &amp; giveaways</p>
                                                                    <span className='sub-heading fs-12px'>Gravida gravida nisi, magna blandit</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row community-feature my-5'>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0 fs-14px'>Voice hat rooms</p>
                                                                    <span className='sub-heading fs-12px'>Gravida gravida nisi, magna blandit</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-6 container px-3'>
                                                            <div className='row border-bottom'>
                                                                <div className='col-3 p-1'>
                                                                    <img src='./assets/images/user-icon.png' className='img-fluid' />
                                                                </div>
                                                                <div className='col-9 p-1'>
                                                                    <p className='fw-bold mb-0 fs-14px'>Voice hat rooms</p>
                                                                    <span className='sub-heading fs-12px'>Gravida gravida nisi, magna blandit</span>
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
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card feature-card'>
                                <div className='card-body'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-6 border-end'>
                                                <div className='feature1 px-5'>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <p className='p-4'>
                                                        <h2 className="collection_heading w-600 my-3">
                                                            Talent Marketplace
                                                        </h2>
                                                        <p className='sub-heading'>Funge talent marketplace is the fastest and most
                                                            efficient way to source top Web3 talent. Seek and hire experts in smart contract
                                                            development, web design, tokenomics creation, discord management, marketing, and more.
                                                        </p>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-6 text-center'>
                                                <div className='p-5'>
                                                    <img src='./assets/images/talentGraph.png' className='img-fluid ms-3' />
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
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card feature-card'>
                                <div className='card-body'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-6 border-end'>
                                                <div className='feature1 px-5'>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <p className='p-4'>
                                                        <h2 className="collection_heading w-600 my-3">
                                                            In-house Wallet
                                                        </h2>
                                                        <p className='sub-heading'>No need to hold multiple wallets to store
                                                            and manage your tokens. Each user receives a built-in Funge wallet
                                                            that allows them easily monitor, send and receive their crypto assets.
                                                        </p>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-6 text-center'>
                                                <div className='p-5'>
                                                    <img src='./assets/images/talentGraph.png' className='img-fluid ms-3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="collection my-5 py-5">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className="collection_heading w-800">
                                Our Company Principles
                            </h2>
                        </div>
                        <div className='col-sm-12 col-md-6 text-center'>
                            <p className='sub-heading'>Taking care of our commmunity is at the core of everything we do.
                                <br />
                            </p>
                        </div>
                        <div className='col-md-12 text-center mt-4'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/tag.svg' />
                                            </div>
                                            <p className='fw-bold'>Customer Satisfaction</p>
                                            <p className='sub-heading'>We aim to place endless NFT solutions at the power of your fingertips and provide you with an exceptional user experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/security.svg' />
                                            </div>
                                            <p className='fw-bold'>Transparency</p>
                                            <p className='sub-heading'>We take pride in being honest and open about our operations as we prioritize building long-lasting trust with our userbase and partners.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/medal.svg' />
                                            </div>
                                            <p className='fw-bold'>Accessibility</p>
                                            <p className='sub-heading'>We focus on building a simple and intuitive platform, so anyone can get a chance to explore and thrive in the word of NFTs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/thumb.svg' />
                                            </div>
                                            <p className='fw-bold'>Security</p>
                                            <p className='sub-heading'>We implement state-of-the-art protocols to mitigate security risks and keep the network safe for everyone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection my-5 section-4">
                <div className='container-fluid'>
                    <div className='row justify-content-between'>
                        <div className='col-md-1'>

                        </div>
                        <div className='col-md-4 my-5'>
                            <br />
                            <br />
                            <br />
                            <h2 className="collection_heading w-800 mt-5 mb-3">
                                Built on planet earth, for<br /> planet earth
                            </h2>
                            <p className='pe-5'>Being earth-conscious and taking responsibility for
                                climate change is at the core of who we are and what
                                we do.
                                <br />
                                <br />
                                That’s why we are 100% carbon neutral,
                                counterbalancing the entirety of our CO2 footprint
                                for a net-zero output.
                            </p>
                            <p className='mt-4'><a href='#' className='funge-link me-4'><u>Our mission</u> > </a> | <a href='#' className='funge-link ms-4'><u>Our vision</u> > </a>
                                <br />
                                <br />
                                <img src='./assets/images/climate.png' width={100} />
                            </p>
                        </div>
                        <div className='col-md-1'>

                        </div>
                        <div className='col-md-6 p-0 text-end section-thumb'>
                            <img className='img-fluid' src='./assets/images/call-to-action.png' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='rare my-5 py-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <img src='./assets/images/rarebg.png' className='img-fluid' />
                        </div>
                    </div>
                    <div className='row mt-5 pt-5 justify-content-center'>
                        <div className='col-md-7 col-sm-12 py-5'>
                            <h2 className='w-800'>The Funge community token</h2>
                            <p>
                                We’re putting the future of Funge and the power of
                                the creator economy in the hands of our community.
                                With $FUNGE, you have access to exclusive holder benefits
                                and rewards tailored for you to grow and develop as an
                                artist or innovator. By holding our token, you are more
                                than just a user - you become a part-owner of the platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection my-5 py-5">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className="collection_heading w-800">
                                Token Usage
                            </h2>
                        </div>
                        <div className='col-sm-12 col-md-6 text-center'>
                            <p className='sub-heading'>There are multiple ways you can benefit from <br />
                                holding and using the $FUNGE token.
                                <br />
                            </p>
                        </div>
                        <div className='col-md-12 text-center mt-4'>
                            <div className='row justify-content-center'>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/tag.svg' />
                                            </div>
                                            <p className='fw-bold'>Staking</p>
                                            <p className='sub-heading'>Stake your $FUNGE to help us validate the blockchain and earn rewards of up to 445% APY.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/security.svg' />
                                            </div>
                                            <p className='fw-bold'>In-App Purchases</p>
                                            <p className='sub-heading'>Use your tokens for any purchase on the Funge App.
                                                <br />
                                                <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/medal.svg' />
                                            </div>
                                            <p className='fw-bold'>Trading Rewards</p>
                                            <p className='sub-heading'> $FUNGE token holders are granted access to our  launchpad where they can develop and launch their own NFT projects. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='tokenomics mt-5 pt-5'>
                <div className='container'>
                    <h1 className='w-800 text-center mb-4'>Tokenomics</h1>
                    <br />
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-6'>
                            <h2>Funge Token Allocation</h2>
                            <p className='mt-4'>Total Supply: 100,000,000</p>
                            <br />
                            <p>
                                <b>8%</b> Seed Stage 1 (800k) <br />
                                <b>7%</b> Seed Stage 2 (700k) <br />
                                <b>6%</b> Public IDO (600k) <br />
                                <b>5%</b> Market Making (500k) <br />
                                <b>12%</b> Marketing (1.2 Million) <br />
                                <b>12%</b> Artist Incentives (1.2 Million) <br />
                                <b>10%</b> Exchange Listing (1 Million) <br />
                                <b>12%</b> Private Reserve (1.2 Million) <br />
                                <b>12%</b> Team (1.2 Million) <br />
                                <b>3%</b> KOL's (300k) <br />
                                <b>4%</b> Advisors (400k) <br />
                                <b>9%</b> Community Allocation (900k) <br />
                            </p>
                        </div>
                        <div className='col-6'>
                            <img src='./assets/images/piechart.png' className='img-fluid p-3' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='ourteam my-5 py-5'>
                <div className='container'>
                    <h1 className='w-800 text-center mb-4'>Meet Our Team</h1>
                    <br />
                    <br />
                    <br />
                    <div className='row mb-5 px-3'>
                        <div className='col-12'>
                            <span className='badge funge-bg-success rounded-pill py-2 px-3 my-2 w-600'>SPEAKERS</span>
                            <h2 className='w-700'>TheFutureTalks Speakers</h2>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 col-sm-6'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker1.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Claudio Giglieri</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Co-creator of Skype <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at Sebo Digital Ventures <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker2.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Elsie Mendoza</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; VP of BukaDagang <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Co-founder at Slack <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker3.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Philip Castro</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; CEO at Berkarya <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at Sebo Digital Ventures <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker4.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Carrie Angela</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Founder of Nike <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at BukaDagang <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 col-sm-6'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker1.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Claudio Giglieri</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Co-creator of Skype <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at Sebo Digital Ventures <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker2.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Elsie Mendoza</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; VP of BukaDagang <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Co-founder at Slack <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker3.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Philip Castro</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; CEO at Berkarya <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at Sebo Digital Ventures <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker4.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Carrie Angela</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Founder of Nike <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at BukaDagang <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 col-sm-6'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker1.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Claudio Giglieri</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Co-creator of Skype <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at Sebo Digital Ventures <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker4.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Carrie Angela</h2>
                                    <p>
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Founder of Nike <br />
                                        <i class="fa fa-check funge-text-success"></i> &nbsp; Investor at BukaDagang <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ourplan my-5 py-5'>
                <div className='container'>
                    <h1 className='w-800 text-center mb-4'>Our plan for the future</h1>
                    <br />
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-12'>
                            <div class="accordion" id="faq-accord">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-accord">
                                        <div class="accordion-body">
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq-accord">
                                        <div class="accordion-body">
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq-accord">
                                        <div class="accordion-body">
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

            <section className='free-trial'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='w-600'>Grow your brand<br />
                                presence on social media.</h2>
                            <p className='sub-heading mt-3'>Try Ehya free for 14 days. No credit card required.</p>
                            <br />
                            <button className="btn btn-primary w-600 waitlist-btn">
                                Sign Up for Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LandingPageV0