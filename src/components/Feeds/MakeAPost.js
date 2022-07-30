import React from "react";

const NewPost = (props) => {
  return (
    <>
      <div className="card funge-card shadow-sm p-5">
        <div className="card-body p-0">
          <p className="w-700 mb-3">Make a post</p>
          <p className="w-400">
            There are many variations of passages of Lorem Ipsum
          </p>
          <br />
          <div className="card funge-card">
            <p className="w-700 mb-0">
              <i className="fa fa-plus-circle rounded-circle funge-color me-2"></i>
              Post an NFT
            </p>
            <span>
              <i className="fa fa-angle-right float-end"></i>
            </span>
            <p className="w-400 ms-4">
              There are many variations of passages <br /> of Lorem Ipsum
            </p>
          </div>
          <div className="card funge-card">
            <p className="w-700 mb-0">
              <i className="fa fa-plus-circle rounded-circle funge-color me-2"></i>
              Post an NFT
            </p>
            <span>
              <i className="fa fa-angle-right float-end"></i>
            </span>
            <p className="w-400 ms-4">
              There are many variations of passages &nbsp;
              <br /> of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
