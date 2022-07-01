import React from 'react';
import { Link } from 'react-router-dom'

const FungeLogo = () => {
    return (
        <>

            <Link to="/"><img
                src="./assets/images/logo.svg"
                alt=""
                className="img-fluid"
            /></Link>
        </>
    )
};

export default FungeLogo;