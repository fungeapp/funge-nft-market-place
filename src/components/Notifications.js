import React, { state, useState } from 'react';
import TopBar from './TopBar';
import FeedContainer from './Feeds/FeedContainer';
import NewPost from './Feeds/NewPost';
import LeftSidebar from './LeftSidebar';
import NewNotifictions from './Notifications/NewNotifications';

const Notifications = () => {

    const [isActive, setActive] = useState("notifications");

    return (
        <>
            <TopBar />
            <LeftSidebar myState='notifications' />
            <div className='container-fluid main-div min-vh-100'>
                <div className='row justify-content-around' style={{ marginLeft: 220 }}>
                    <div className='col-md-8 mt-3 ps-0'>
                        <h2 className='w-800 mx-3 mb-2'>Notifications</h2>
                        <div className='card funge-card p-4'>
                            <div className='card-body'>
                                <button className='btn btn-primary'>All</button>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <button className='btn btn-secondary'>Unread</button>
                                <span className='float-end'><i class="fas fa-cog fs-5 funge-grey my-3"></i></span>
                                <br />
                                <br />
                                <hr />
                                <div className='row pt-2'>
                                    <div className='col-12 mb-3'>
                                        <p className='w-400'>
                                            <span className='w-700 mb-2'>New</span><a href="#" className='funge-link w-400 float-end'>See All</a>
                                            <br />
                                        </p>
                                    </div>
                                    <div className='col-12'>
                                        <NewNotifictions/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className='col-md-4 mt-3'>
                    <h2 className='w-800 mx-3 mb-2'> &nbsp; </h2>
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
                        <div className='card funge-card mt-4'>
                            <div className='container'>
                                <div className='row pt-2'>
                                    <div className='col-12'>
                                        <p className='w-700 ms-2 mt-2 mb-4'>
                                            Top Collections<a href="#" className='funge-link w-600 float-end'>See All</a>
                                        </p>
                                    </div>
                                    <div className='col-12'>
                                        <table className='table table-borderless'>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>1</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>2</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>3</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>4</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>5</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>6</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>7</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className='w-700'>8</span>
                                                </td>
                                                <td>
                                                    <img src='./assets/images/collaction_table_1.png' className='img-fluid float-start' />
                                                </td>
                                                <td className='w-600'>
                                                    <span className='p-0'>Meebits</span>
                                                    <br />
                                                    3.75 &nbsp; | <span className='funge-color'>18.18%</span>
                                                </td>
                                                <td>
                                                    <i class="fa fa-angle-right float-end funge-grey" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )

}


export default Notifications;