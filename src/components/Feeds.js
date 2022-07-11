import React,{state, useEffect, useState} from 'react';
import TopBar from './TopBar';
import FeedContainer from './Feeds/FeedContainer';
import NewPost from './Feeds/NewPost';

const Feeds = () => {

  const [isActive,setActive] = useState("home");
  const [profileemail, setprofileemail] = useState()

  useEffect(() => {
        let currentprofile = sessionStorage.getItem("profilesession");
        setprofileemail(currentprofile);
  });

  const handleWalletConnect = async (e) => {
      
  }

  return (
    <>
      <TopBar />
      <div className='container-fluid feeds'>
        <div className='row justify-content-between'>
          <div className="col-md-2 flex-shrink-0 p-3 bg-white pt-5" style={{ maxWidth: 280 }}>
            <ul className="list-unstyled ps-0">
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  <i className="fas fa-align-left me-3 funge-color"></i>Feeds <i className="fas fa-angle-up float-end"></i>
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className={` ${isActive === "home" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Home</a></li>
                    <li><a href="#" className={` ${isActive === "notifications" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Notifications</a></li>
                    <li><a href="#" className={` ${isActive === "messages" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Messages</a></li>
                    <li><a href="#" className={` ${isActive === "saved" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Saved</a></li>
                    <li><a href="#" className={` ${isActive === "profile" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Profile</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start" data-bs-toggle="collapse" data-bs-target="#explore-collapse" aria-expanded="true">
                <i className="fas fa-store me-3 funge-color"></i> Explore <i className="fas fa-angle-down float-end"></i>                
                </button>
                <div className="collapse" id="explore-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className={` ${isActive === "home1" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Home</a></li>
                    <li><a href="#" className={` ${isActive === "notifications1" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Notifications</a></li>
                    <li><a href="#" className={` ${isActive === "messages1" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Messages</a></li>
                  </ul>
                </div>
              </li> 
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start" onClick={handleWalletConnect}>
                <i className="fas fa-chart-pie me-3 funge-color"></i> Wallet
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i className="fa fa-folder-open me-3 funge-color"></i>Analytics
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i className="fa fa-briefcase me-3 funge-color"></i> Media
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i className="fa fa-briefcase me-3 funge-color"></i> Refer and Earn
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i className="fa fa-briefcase me-3 funge-color"></i> Hire
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i className="fa fa-briefcase me-3 funge-color"></i> Rewards
                </button>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <NewPost/>
            <FeedContainer/>
          </div>
          <div className='col-md-3'>

          </div>
        </div>
      </div>
    </>
  )

}


export default Feeds;