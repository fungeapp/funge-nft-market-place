import React from 'react';
import Logo from '../images/funge-logo.png';
import { Link } from "react-router-dom";
import FungeLogo from './FungeLogo';

const Login = () => {
    return (
        <>
            <div class="container-fluid">
                <div className='row'>
                    <div className='col-md-6 pt-4 px-5'>
                    <FungeLogo/>
                    </div>
                    <div className='col-md-6 pt-4 px-5'>
                        <span class="text-black-50 float-end">
                            <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            <Link className='btn text-black-50 mb-1' to="/">Back To Home</Link>
                        </span>
                    </div>
                    <div className='row justify-content-center py-5'>
                        <div className='col-md-5 col-lg-4'>
                            <div className='card border-0'>
                                <div className='card-body text-center'>
                                    <h3 class="w-800 text-start">Login</h3>
                                    <p class="sub-heading text-start">Hey! Welcome Back </p>
                                    <input class="login-input mb-4 w-100" placeholder="Email Address" />
                                    <br />
                                    <button className='btn btn-primary login-btn w-100'>Login</button>
                                    <div class="text-center p-4">
                                        <span class="sub-heading">or continue with</span>
                                    </div>
                                    <button class="phone-button w-100"><i class="fa-solid fa-mobile text-black-50 fa-flip-vertical"></i> &nbsp;Phone Number</button>
                                    <div class="text-center p-4">
                                        <span class="text-black-50">I don’t have an account yet, <Link className='funge-link text-decoration-none' to="/signin">Sign Up</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;