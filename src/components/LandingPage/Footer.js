import React from 'react'

const Footer = () => {

    return (
        <>
            <div className='funge-footer'>
                <div className="row icon-row text-center">
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
                <div className='row my-5 justify-content-center'>
                    <div className='col-md-5 mt-3'>
                        <p className='w-600 mb-3'>Earn more with Funge Token</p>
                        <p className='sub-heading'>There are many variations of passages of Lorem Ipsum<br></br> available, but the majority believable.
                            <br />
                            <br />
                            <br />
                            <a className='funge-link' href='#'>Learn More</a>
                        </p>
                    </div>
                    <div className='col-md-5 mt-3'>
                        <p className='w-600 mb-3'>Signup for our newsletter</p>
                        <div class="row g-3 align-items-center">
                            <div class="col-auto p-0">
                                <input type="text" class="form-control footer-signup" placeholder='Enter your email here'/>
                            </div>
                            <div class="col-auto">
                            <input type='button' className='btn btn-primary footer-button' value='Sign Up' />
                            </div>
                        </div>


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
                    <div className='col-md-1'></div>
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
                    <div className='col-md-11'>
                        <small>©2020 Funge. All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer