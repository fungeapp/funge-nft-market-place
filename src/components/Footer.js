import React from 'react'

const Footer = () => {

    return (
        <>
            <div className='funge-footer'>
                <div class="row icon-row text-center">
                    <div class="col-sm-12 col-md-2">
                            <i class="fa-brands fa-twitter"></i> <span class="logo-text ms-1">Twitter</span>
                    </div>
                    <div class="col-sm-12 col-md-2">
                            <i class="fa-brands fa-facebook-f"></i> <span class="logo-text ms-1">Facebook</span>
                    </div>
                    <div class="col-sm-12 col-md-2">
                            <i class="fa-solid fa-envelope"></i> <span class="logo-text ms-1">Gmail</span>
                    </div>
                    <div class="col-sm-12 col-md-2">
                            <i class="fa-brands fa-slack"></i> <span class="logo-text ms-1">Slack</span>
                    </div>
                    <div class="col-sm-4 col-md-2">
                            <i class="fa-brands fa-reddit-alien"></i> <span class="logo-text ms-1">Reddit</span>
                    </div>
                    <div class="col-sm-4 col-md-2">
                            <i class="fa-brands fa-youtube"></i> <span class="logo-text ms-1">Youtube</span>
                    </div>
                </div>
                <hr className='footer-seprator' />
                <div class="row justify-content-center p-4">
                    <div class="col-md-2 col-sm-12">
                        <img
                            src="./assets/images/logo.svg"
                            alt=""
                            className="img-fluid footer-logo"
                        />
                        <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority believable.</p>
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <h5>Funge</h5>
                        <div class="d-flex flex-column footer-funge-links">
                            <a href="#">About Us</a>
                            <a href="#">Help Center</a>
                            <a href="#">Careers</a>
                            <a href="#">Company</a>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <h5>Community</h5>
                        <div class="d-flex flex-column footer-funge-links">
                            <a href="#">Blog</a>
                            <a href="#">Funge Token</a>
                            <a href="#">Suggest feature</a>
                            <a href="#">Terms and conditions</a>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <h5>Resources</h5>
                        <div class="d-flex flex-column footer-funge-links">
                            <a href="#">Blog</a>
                            <a href="#">Funge Token</a>
                            <a href="#">Suggest feature</a>
                            <a href="#">Terms and conditions</a>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <h5>Resources</h5>
                        <div class="d-flex flex-column footer-funge-links">
                            <a href="#">Blog</a>
                            <a href="#">Funge Token</a>
                            <a href="#">Suggest feature</a>
                            <a href="#">Terms and conditions</a>
                        </div>
                    </div>
                    <div className='col-md-10'>
                        <small>©2020 Funge. All Rights Reserved</small>
                    </div>
                    {/* <div class="col-md-3 col-sm-12">
                        <h5>Earn more with Funge token</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority believable.</p>
                        <a class="funge-link" href="#">Learn More</a>
                        <br />
                        <br />
                        <div className='row'>
                            <div className='col-12'>
                                <h5>Sign up for our newsletter</h5>
                            </div>
                            <div className='col-8'>
                                <input type="text" class="footer-signup" placeholder="Enter your email here" />
                            </div>
                            <div className='col-4'>
                                <button class="footer-button">Signup</button>
                            </div>

                        </div>

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Footer