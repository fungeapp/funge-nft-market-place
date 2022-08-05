import React, { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';
import FeedPost from './FeedPost'

const FeedContainer = (props) => {

    const [userid, setuserid] = useState();
    const [useremail, setuseremail] = useState();
    
    useEffect(() => {
        let id = localStorage.getItem("user_id")
        let user = localStorage.getItem("user_email")
        setuserid(id)
        setuseremail(user)
        getAllPost();
    },[userid, useremail]);

    const getAllPost = async(e) => {
        console.log(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/feeds/post/${userid}`)
        axios.get(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/feeds/post/${userid}`)
        /*.then((response) => {
            console.log(response.data)
        })*/
    }

    return (
        <>
            <FeedPost shadow={props.shadow} image="./assets/images/design.png" text="ssssssLorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod
                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor"/>
            <FeedPost shadow={props.shadow} image="./assets/images/nft--7.png" postText="Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod
                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor" />
            <FeedPost shadow={props.shadow} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod
                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor"/>
        </>
    )
};

export default FeedContainer;