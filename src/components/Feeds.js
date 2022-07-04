import React from 'react';
import TopBar from './TopBar';
import FeedContainer from './Feeds/FeedContainer';
import NewPost from './Feeds/NewPost';

const Feeds = () => {

  return (
    <>
      <TopBar />
      <div className='container-fluid feeds'>
        <div className='row justify-content-between'>
          <div className="col-md-2 flex-shrink-0 p-3 bg-white pt-5" style={{ maxWidth: 280 }}>
            <ul className="list-unstyled ps-0">
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  <i class="fas fa-align-left me-3 funge-color"></i>Feeds
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">Home</a></li>
                    <li><a href="#" className="link-dark rounded">Notifications</a></li>
                    <li><a href="#" className="link-dark rounded">Messages</a></li>
                    <li><a href="#" className="link-dark rounded">Saved</a></li>
                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start" data-bs-toggle="collapse" data-bs-target="#explore-collapse" aria-expanded="true">
                <i class="fas fa-store me-3 funge-color"></i> Explore
                </button>
                <div className="collapse" id="explore-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">Home</a></li>
                    <li><a href="#" className="link-dark rounded">Notifications</a></li>
                    <li><a href="#" className="link-dark rounded">Messages</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i class="fas fa-wallet me-3 funge-color"></i> Wallet
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i class="fas fa-wallet me-3 funge-color"></i> Analytics
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i class="fas fa-wallet me-3 funge-color"></i> Media
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i class="fas fa-wallet me-3 funge-color"></i> Refer and Earn
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i class="fas fa-wallet me-3 funge-color"></i> Hire
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start">
                <i class="fas fa-wallet me-3 funge-color"></i> Rewards
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