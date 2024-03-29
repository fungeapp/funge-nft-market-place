import React, { state, useState, useEffect, useMemo, useLayoutEffect } from 'react';
import { useLocation, URLSearchParamsInit } from 'react-router-dom';
import { Magic, RPCError } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import TopBar from './TopBar';
import FeedContainer from './Feeds/FeedContainer';
import NewPost from './Feeds/NewPost';
import FeedPost from './Feeds/FeedPost';
import LeftSidebar from './LeftSidebar';
import env from 'react-dotenv';
import axios from 'axios';
import {profileData} from './UserProfile'
import { useMetaMask } from 'metamask-react';


const Feeds = (props) => {
  const [magickey, setMagicKey] = useState(env.MAGIC_LINK_API_KEY);
  const magic = new Magic(magickey, {
        extensions: [new OAuthExtension()]
  });
  const [isloading, setisloading] = useState()
  const [isActive, setActive] = useState("home");
  const [userid, setuserid] = useState();
  const [allposts, setallposts] = useState({data:[]});
  
  const search = useLocation().search;
  const _email = new URLSearchParams(search).get('email')
  const _magiccredential = new URLSearchParams(search).get('magic_credential')
  const [useremail, setuseremail] = useState(_email);
  const [magiccredential, setmagiccredential] = useState(_magiccredential);
  const { status, connect, account, chainId, ethereum, addChain, switchChain } = useMetaMask();
  
  useLayoutEffect(() => {
    //check magic credential token and see if in the current user session.  If none, return user to login
    //call Magic's loginWithCredential using the token from magic_credential 
    magic.auth.loginWithCredential(magiccredential)
    .then( response =>
      console.log(`Magic Login ${response}`)
    )
    .then(
      getUserProfile()
    )
    
    
  },[])

  console.log(`${status} :: ${account} :: ${chainId}`)
  if(status === "notConnected" && typeof window.ethereum !== 'undefined') {
      console.log('Metamask is installed')
  }
  
  let _allposts = [];

  const getUserProfile = async() => {
    setisloading(true);
    //get complete profile info
    axios.get(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/users/${useremail}`)
    .then( response => {
        let elem = response.data[0].id
        setuserid(elem)
        return elem
    })
    .then( id => {
      axios.get(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/feeds/post/${id}`)
      .then(response => {
          response.data.map( post => {
              console.log(`Post ${post.post_content}`)  
              setallposts(<FeedPost text={post.post_content} />)
          })
      })
    })
  }


  return (
    <>
      <TopBar email={useremail} />
      <LeftSidebar myState="home" email={useremail}  />
      <div className="container-fluid main-div min-vh-100 ps-0">
        <div className="row justify-content-center mainbox">
          <div className="col-md-6 max-700">
            <NewPost email={useremail} />
            {

            }
          </div>
          
          <div className="col-md-4 mt-4 max-550">
            
            <div className="card funge-card mt-4">
              <div className="container">
                <div className="row pt-2">
                  <div className="col-1 p-0">
                    <img
                      src="./assets/images/profile_new.png"
                      className="img-fluid mt-3 ms-2"
                    />
                  </div>
                  <div className="col-11 ps-4">
                    <div className="w-400 ms-2 ">
                      <p className="w-400 mb-2 my-3 mb-2">
                        Today is a good day to post Nfts
                      </p>
                      <p className="w-500 mb-2  funge-color">#Newcollection</p>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-6">
                    <img
                      src="./assets/images/Rectangle.png"
                      className="img-fluid w-100"
                      alt="Post Image"
                    />
                    <span
                      className="fs-3 position-absolute"
                      style={{ top: 136, left: 60 }}
                    >
                      <i className="fas fa-times-circle funge-color"></i>
                    </span>
                  </div>
                  <div className="col-6">
                    <img
                      src="./assets/images/Rectangle 864.png"
                      className="img-fluid  w-100"
                      alt="Post Image"
                    />
                  </div>
                  <br />
                  <div className="row pt-2 ms-2 my-2">
                    <div className="col-1 p-0">
                      <img
                        src="./assets/images/User.png"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-11 p-0">
                      <a href="#" className="funge-link w-700 me-5">
                        Tag people
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="funge-grey" />
              </div>
              <div className="row pt-2 px-5">
                <div className="col-1 p-0">
                  <img src="./assets/images/Image.png" className="img-fluid" />
                </div>
                <div className="col-1 p-0">
                  <img
                    src="./assets/images/user+.png"
                    className="img-fluid  "
                  />
                </div>
                <div className="col-1 p-0">
                  <img src="./assets/images/Smile.png" className="img-fluid " />
                </div>
                <div className="col-1 p-0">
                  <img
                    src="./assets/images/Location.png"
                    className="img-fluid  "
                  />
                </div>
                <div className="col-8 p-0 text-end">
                  <button className="btn btn-primary">Funge it</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feeds;
