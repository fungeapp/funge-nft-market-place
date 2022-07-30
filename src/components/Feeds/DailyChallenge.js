import React from "react";

const DailyChallenge = (props) => {
  return (
    <>
      <div className="card funge-card shadow-sm">
        <div className="container">
          <div className="row pt-2">
            <div className="col-2 p-0">
              <img src="./assets/images/award.png" className="img-fluid mt-3" />
            </div>
            <div className="col-10">
              <div className="w-400 ms-2">
                <p className="w-700 mb-2">Daily Challenge</p>
                There are many variations of passages of Lorem Ipsum
                <br />
                <br />
                <a href="#" className="funge-link w-700">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyChallenge;
