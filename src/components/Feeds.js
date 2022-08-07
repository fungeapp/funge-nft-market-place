import React, { state, useState, useEffect, useMemo } from 'react';
import TopBar from './TopBar';
import FeedContainer from './Feeds/FeedContainer';
import NewPost from './Feeds/NewPost';
import FeedPost from './Feeds/FeedPost';
import LeftSidebar from './LeftSidebar';
import env from 'react-dotenv';
import axios from 'axios';

const Feeds = () => {

  const [isActive, setActive] = useState("home");
  const [userid, setuserid] = useState(localStorage.getItem("user_id"));
  const [useremail, setuseremail] = useState(localStorage.getItem("user_email"));
  const [posts, setposts] = useState([]);

  useMemo(() => {
    console.log(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/feeds/post/${userid}`)
    if(userid !== 'undefined') {
      axios.get(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/feeds/post/${userid}`)
      .then((response) => {
          for(let post of response.data) {
            console.log(`${post.post_content}`)
            let content = post.post_content
            setposts(<FeedPost text={content} />)
          }
      })
      .catch(function(error) {
        console.log(`GET user post error :: ${error}`)
      })
    }
  },[posts, userid]);

  return (
    <>
      <TopBar />
      <LeftSidebar myState='home' />
      <div className='container-fluid main-div min-vh-100'>
        <div className='row justify-content-around' style={{ marginLeft: 220 }}>
          <div className='col-md-6'>
            <NewPost />
            {posts}
          </div>
          <div className='col-md-4 mt-4'>
            <div className='card funge-card p-5'>
              <div className='card-body p-0'>
                <p className='w-700 mb-3'>Make a post</p>
                <p className='w-400'>There are many variations of passages of Lorem Ipsum</p>
                <br />
                <div className='card funge-card'>
                  <p className='w-700 mb-0'><i className='fa fa-plus-circle rounded-circle funge-color me-2'></i>Post an NFT</p>
                  <span><i className='fa fa-angle-right float-end'></i></span>
                  <p className='w-400 ms-4'>
                    There are many variations of passages <br /> of Lorem Ipsum
                  </p>
                </div>
                <div className='card funge-card'>
                  <p className='w-700 mb-0'><i className='fa fa-plus-circle rounded-circle funge-color me-2'></i>Post an NFT</p>
                  <span><i className='fa fa-angle-right float-end'></i></span>
                  <p className='w-400 ms-4'>There are many variations of passages &nbsp;<br /> of Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <br />
            <div className='card funge-card'>
              <div className='container'>
                <div className='row pt-2'>
                  <div className='col-2 p-0'>
                    <img src='./assets/images/award.png' className='img-fluid mt-3' />
                  </div>
                  <div className='col-10'>
                    <p className='w-400 ms-2'>
                      <p className='w-700 mb-2'>Daily Challenge</p>
                      There are many variations of passages of Lorem Ipsum
                      <br />
                      <br />
                      <a href="#" className='funge-link w-700'>Read more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className='card funge-card'>
              <div className='container'>
                <div className='row pt-2'>
                  <div className='col-12 ps-0'>
                    <p className='w-400'>
                      <span className='w-700 mb-2'>Recent News</span><a href="#" className='funge-link w-700 float-end'>See All</a>
                      <br />
                    </p>
                  </div>
                  <div className='col-12 p-0'>
                    <table>
                      <tr>
                        <td width={110} className='pb-3 ps-2'>
                          <img src='./assets/images/Rectangle.png' className='img-fluid mt-1' />
                        </td>
                        <td className='pb-3 me-2 align-middle'>
                          <span className='w-600 ms-4 '>Lil Pump Enlists soulja Boy<br /></span>
                          <span className='w-600 ms-4'>for new song "Mona Lisa"</span>
                          <br />
                          <small><span className='w-400 recent-news ms-4'>Feb 14, 2022 . 4 min read</span></small>
                        </td>
                      </tr>
                      <tr>
                        <td width={110} className='pb-3 ps-2'>
                          <img src='./assets/images/Rectangle.png' className='img-fluid mt-1' />
                        </td>
                        <td className='pb-3 me-2 align-middle'>
                          <span className='w-600 ms-4 '>Lil Pump Enlists soulja Boy<br /></span>
                          <span className='w-600 ms-4'>for new song "Mona Lisa"</span>
                          <br />
                          <small><span className='w-400 recent-news ms-4'>Feb 14, 2022 . 4 min read</span></small>
                        </td>
                      </tr>
                      <tr>
                        <td width={110} className='pb-3 ps-2'>
                          <img src='./assets/images/Rectangle.png' className='img-fluid mt-1' />
                        </td>
                        <td className='pb-3 me-2 align-middle'>
                          <span className='w-600 ms-4 '>Lil Pump Enlists soulja Boy<br /></span>
                          <span className='w-600 ms-4'>for new song "Mona Lisa"</span>
                          <br />
                          <small><span className='w-400 recent-news ms-4'>Feb 14, 2022 . 4 min read</span></small>
                        </td>
                      </tr>
                      <tr>
                        <td width={110} className='pb-3 ps-2'>
                          <img src='./assets/images/Rectangle.png' className='img-fluid mt-1' />
                        </td>
                        <td className='pb-3 me-2 align-middle'>
                          <span className='w-600 ms-4 '>Lil Pump Enlists soulja Boy<br /></span>
                          <span className='w-600 ms-4'>for new song "Mona Lisa"</span>
                          <br />
                          <small><span className='w-400 recent-news ms-4'>Feb 14, 2022 . 4 min read</span></small>
                        </td>
                      </tr>
                      <tr>
                        <td width={110} className='pb-3 ps-2'>
                          <img src='./assets/images/Rectangle.png' className='img-fluid mt-1' />
                        </td>
                        <td className='pb-3 me-2 align-middle'>
                          <span className='w-600 ms-4 '>Lil Pump Enlists soulja Boy<br /></span>
                          <span className='w-600 ms-4'>for new song "Mona Lisa"</span>
                          <br />
                          <small><span className='w-400 recent-news ms-4'>Feb 14, 2022 . 4 min read</span></small>
                        </td>
                      </tr>
                      <tr>
                        <td width={110} className='pb-3 ps-2'>
                          <img src='./assets/images/Rectangle.png' className='img-fluid mt-1' />
                        </td>
                        <td className='pb-3 me-2 align-middle'>
                          <span className='w-600 ms-4 '>Lil Pump Enlists soulja Boy<br /></span>
                          <span className='w-600 ms-4'>for new song "Mona Lisa"</span>
                          <br />
                          <small><span className='w-400 recent-news ms-4'>Feb 14, 2022 . 4 min read</span></small>
                        </td>
                      </tr>
                      <tr>
                        <td width={110} className='pb-3 ps-2'>
                          <img src='./assets/images/Rectangle.png' className='img-fluid mt-1' />
                        </td>
                        <td className='pb-3 me-2 align-middle'>
                          <span className='w-600 ms-4 '>Lil Pump Enlists soulja Boy<br /></span>
                          <span className='w-600 ms-4'>for new song "Mona Lisa"</span>
                          <br />
                          <small><span className='w-400 recent-news ms-4'>Feb 14, 2022 . 4 min read</span></small>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}


export default Feeds;