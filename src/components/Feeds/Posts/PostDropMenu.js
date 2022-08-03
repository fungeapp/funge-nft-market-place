import React from "react";

const PostDropMenu = (props) => {
  return (
    <>
      <div className="dropdown post-toggle-menu">
        <a
          className="dropdown-toggle text-dark"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-h fw-bold "></i>
        </a>

        <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
          <li className="dropdown-item">
            <table className="table mb-0 table-borderless">
              <tbody>
                <tr>
                  <td className="pt-3">
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
                  <td className="pt-4">
                    <i className="fa fa-angle-right float-end funge-grey"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="dropdown-item">
            <table className="table mb-0 table-borderless">
              <tbody>
                <tr>
                  <td className="pt-3">
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
                  <td className="pt-4">
                    <i className="fa fa-angle-right float-end funge-grey"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="dropdown-item">
            <table className="table mb-0 table-borderless">
              <tbody>
                <tr>
                  <td className="pt-3">
                    <img src="./assets/images/User.png" className="img-fluid" />
                  </td>
                  <td>
                    <p className="w-400 mb-0">
                      <span className="w-600 mb-2">Unfollow user</span>
                      <br />
                      See fewer posts like this
                    </p>
                  </td>
                  <td className="pt-4">
                    <i className="fa fa-angle-right float-end funge-grey"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="dropdown-item">
            <table className="table mb-0 table-borderless">
              <tbody>
                <tr>
                  <td className="pt-3">
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
                  <td className="pt-4">
                    <i className="fa fa-angle-right float-end funge-grey"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="dropdown-item">
            <table className="table mb-0 table-borderless">
              <tbody>
                <tr>
                  <td className="pt-3">
                    <img
                      src="./assets/images/Snooze.png"
                      className="img-fluid"
                    />
                  </td>
                  <td>
                    <p className="w-400 mb-0">
                      <span className="w-600 mb-2">Snooze post</span>
                      <br />
                      See fewer posts like this
                    </p>
                  </td>
                  <td className="pt-4">
                    <i className="fa fa-angle-right float-end funge-grey"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="dropdown-item">
            <table className="table mb-0 table-borderless">
              <tbody>
                <tr>
                  <td className="pt-3">
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
                  <td className="pt-4">
                    <i className="fa fa-angle-right float-end funge-grey"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PostDropMenu;
