<<<<<<< HEAD
import React from 'react'

const TopNavBar = () => {
    return (
        <>
        <div className="header">
                <div className="my_nav">
                    <nav className="navbar container-fluid navbar-expand-lg bg-white shadow-sm navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand"
                                href="#">
                                <img
                                    src="./assets/images/logo.svg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                            <div className="search_sectio">
                                <div className="input-group">
                                    <span className="input-group-text"
                                        id="basic-addon1">
                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="8.33369"
                                                cy="8.33467"
                                                r="6.3669"
                                                stroke="#A1AEB2"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.7617 13.0936L15.2579 15.5833"
                                                stroke="#A1AEB2"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Feeds"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </div>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon">
                                    <img
                                        src="./assets/icon/menu_icon.svg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </span>
                            </button>
                            <div
                                className="collapse align-items-center navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            Explore
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            Community
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-primary"
                                            href="#">
                                            Signup
                                        </a>
                                    </li>
                                    {/* <Wallet btnText={"Connect Wallet"} /> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
=======
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../images/funge-logo.png';
import env from 'react-dotenv'
import ProfileLogin from './ProfileLogin'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import '../App.css';

const NavBar = () => {
    console.log(`${env.AUTH0_DOMAIN} :: ${env.AUTH0_CLIENT_ID} :: ${env.LOGIN_REDIRECT_URL}`)
    return (
        <Navbar expand="sm" className='p-3 shadow-sm'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container fluid className='navbar-container'>
                <Navbar.Collapse className='justify-content-between' id="basic-navbar-nav">
                    <Navbar.Brand href="#home"><img width="100" src={logo} alt="Funge" /></Navbar.Brand>
                    <Form className="d-flex search">
                        <FormControl
                            type="search"
                            placeholder="Feeds"
                            className="me-2 topbar-search"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav>
                        <Nav.Link href="/explore">Explore</Nav.Link>
                        <Nav.Link href="/about_us">About us</Nav.Link>
                        <Nav.Link href="/community">Community</Nav.Link>
                        <Auth0Provider
                                            domain={env.AUTH0_DOMAIN}
                                            clientId={env.AUTH0_CLIENT_ID}
                                            redirectUrl={env.LOGIN_REDIRECT_URL}
                                            onRedirectCallback={env.LOGIN_REDIRECT_URL}
                        >
                            <ProfileLogin />
                        </Auth0Provider>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
>>>>>>> 9a0c408848e0766a2d223cb25520dea0dcbd0d2f
    )
}

export default TopNavBar