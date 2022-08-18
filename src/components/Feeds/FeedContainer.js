import React, { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';
import FeedPost from './FeedPost'
import Post from './Posts/Post'


const FeedContainer = (props) => {

    const [userid, setuserid] = useState();
    const [useremail, setuseremail] = useState();
    
    useEffect(() => {
        let id = localStorage.getItem("user_id")
        let user = localStorage.getItem("user_email")
        setuserid(id)
        setuseremail(user)
        //getAllPost();
    });

    return (
        <>
            <FeedPost shadow={props.shadow} image="./assets/images/design.png" text="ssssssLorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod tempor amet, consectetur dipiscing elit,sed do eiusmod tempor"/>
            <FeedPost shadow={props.shadow} image="./assets/images/nft--7.png" postText="Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod

                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor" />
            <Post shadow={props.shadow} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod
                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor"/>
        </>
    )
};

export default FeedContainer;