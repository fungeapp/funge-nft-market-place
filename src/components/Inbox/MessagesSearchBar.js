import React from "react";

const MessagesSearchBar = () => {
  return (
    <>
      <div className="messages_search_bar ms-1 my-5">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8.33369"
                cy="8.33467"
                r="6.3669"
                stroke="#11142D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.7617 13.0936L15.2579 15.5833"
                stroke="#11142D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </>
  );
};

export default MessagesSearchBar;
