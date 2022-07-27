import React from "react";

const FeedPost = (props) => {
  const PostOffer = (props) => {
    if (props.offer) {
      return <></>;
    }
  };

  const PostImage = (props) => {
    if (props.imagePath) {
      return (
        <>
          <div className="row mb-2">
            <div className="col-md-12">
              <img
                src={props.imagePath}
                className="img-fluid border-radius w-100"
                alt="Post Image"
              />
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="card border-radius my-4 border-0">
        <div className="card-body">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-12 mt-3 my-2">
                <img
                  src="./assets/images/nft-5.png"
                  className="rounded-circle me-3"
                  alt="Cinque Terre"
                  width="30"
                  height="30"
                />
                <span className="fw-bold">Dotdot</span>
                <span className="float-end">
                  <div class="dropdown post-toggle-menu">
                    <a
                      class="dropdown-toggle text-dark"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-h fw-bold "></i>
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="dropdown-item">
                        <table className="table mb-0">
                          <tr>
                            <td className="align-baseline">
                              <img
                                src="./assets/images/Union.png"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <p className="w-400 mb-0">
                                <span className="w-600 mb-2">Pin Post</span>
                                <br />
                            Pin post to top of feeds
                              </p>
                            </td>
                            <td>
                              <i className="fa fa-angle-right float-end funge-grey"></i>
                            </td>
                          </tr>
                        </table>
                      </li>
                      <li className="dropdown-item">
                        <table className="table mb-0">
                          <tr>
                            <td className="align-baseline">
                              <img
                                src="./assets/images/Eye-off.png"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <p className="w-400 mb-0">
                                <span className="w-600 mb-2">Hide post</span>
                                <br />
                                See fewer posts like this
                              </p>
                            </td>
                            <td>
                              <i className="fa fa-angle-right float-end funge-grey"></i>
                            </td>
                          </tr>
                        </table>
                      </li>
                      <li className="dropdown-item">
                        <table className="table mb-0">
                          <tr>
                            <td className="align-baseline">
                              <img
                                src="./assets/images/User.png"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <p className="w-400 mb-0">
                                <span className="w-600 mb-2">Unfollow user</span>
                                <br />
                                See fewer posts like this
                              </p>
                            </td>
                            <td>
                              <i className="fa fa-angle-right float-end funge-grey"></i>
                            </td>
                          </tr>
                        </table>
                      </li>
                      <li className="dropdown-item">
                        <table className="table mb-0">
                          <tr>
                            <td className="align-baseline">
                              <img
                                src="./assets/images/Warning.png"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <p className="w-400 mb-0">
                                <span className="w-600 mb-2">Report post</span>
                                <br />
                               See fewer posts like this
                              </p>
                            </td>
                            <td>
                              <i className="fa fa-angle-right float-end funge-grey"></i>
                            </td>
                          </tr>
                        </table>
                      </li>
                      <li className="dropdown-item">
                        <table className="table mb-0">
                          <tr>
                            <td className="align-baseline">
                              <img
                                src="./assets/images/Snooze.png"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <p className="w-400 mb-0">
                                <span className="w-600 mb-2">Sanooze post</span>
                                <br />
                                See fewer posts like this
                              </p>
                            </td>
                            <td>
                              <i className="fa fa-angle-right float-end funge-grey"></i>
                            </td>
                          </tr>
                        </table>
                      </li>
                      <li className="dropdown-item">
                        <table className="table mb-0">
                          <tr>
                            <td className="align-baseline">
                              <img
                                src="./assets/images/Snooze.png"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <p className="w-400 mb-0">
                                <span className="w-600 mb-2">Save to folder</span>
                                <br />
                             See fewer posts like this
                              </p>
                            </td>
                            <td>
                              <i className="fa fa-angle-right float-end funge-grey"></i>
                            </td>
                          </tr>
                        </table>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="col-md-12 my-2">{props.text}</div>
            </div>
            <PostImage imagePath={props.image} />
            <div className="row mb-2 mt-4 px-2">
              <div className="col-12 d-flex justify-content-between feedpost-controls">
                <i className="fa fa-heart"></i>
                <i className="fa fa-commenting">&nbsp; 128</i>
                <i className="fa fa-share"></i>
                <i className="fa fa-retweet"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPost;
