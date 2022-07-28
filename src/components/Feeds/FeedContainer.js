import React from 'react';
import Post from './Posts/Post'

const FeedContainer = (props) => {

    return (
        <>
            <Post shadow={props.shadow} image="./assets/images/design.png" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod
                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor"/>
            <Post shadow={props.shadow} image="./assets/images/nft--7.png" postText="Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod
                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor" />
            <Post shadow={props.shadow} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do eiusmod
                    tempor amet, consectetur dipiscing elit,sed do eiusmod tempor"/>
        </>
    )
};

export default FeedContainer;