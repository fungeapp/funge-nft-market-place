import React, { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';

const FeedPost = (props) => {

    const PostOffer = (props) => {

        if (props.offer) {
            return <>

            </>;
        }
    }

    const PostImage = (props) => {

        if (props.imagePath) {
            return <>
                <div className="row mb-2">
                    <div className="col-md-12">
                        <img src={props.imagePath} className="img-fluid border-radius w-100" alt="Post Image" />
                    </div>
                </div>
            </>;
        }
    }

    return (
        <>

            <div className="card border-radius my-4 border-0">
                <div className="card-body">
                    <div className="container-fluid p-0">
                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default FeedPost;