import React from 'react'

const Footer = () => {

    return (
        <>
            <div className='funge-footer'>
                <div class="row justify-content-center p-4">
                    <div class="col-md-2 col-sm-12">
                        <img
                            src="./assets/images/logo.svg"
                            alt=""
                            className="img-fluid footer-logo"
                        />
                        <p class="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority believable.
                            <br />
                            <br />
                            ©2020 Funge. All Rights Reserved
                        </p>
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
                    <div class="col-md-3 col-sm-12">
                        <h5>Earn more with Funge token</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority believable.</p>
                        <a class="funge-link" href="#">Learn More</a>
                        <br />
                        <br />
                        <h5>Sign up for our newsletter</h5>
                        <input type="text" class="footer-signup" placeholder="Enter your email here" /><button class="footer-button">Signup</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer