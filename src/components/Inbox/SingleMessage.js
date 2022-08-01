import React from "react";

const SingleMessage = (props) => {

    if (props.rMsg) {
        return (
            <>
                <div className="col-md-12 py-4 ps-2">
                    <img
                        width={30}
                        src="./assets/images/profile-1.png"
                        alt=""
                        className="pt-3"
                    />
                    &nbsp; &nbsp;
                    <span className="rMsg chat-msg funge-bghover fs-14px w-400 text-break">
                        {props.msgText}
                    </span>
                    <span className="float-end pt-3 fs-12px funge-grey">
                        {props.msgTime}
                    </span>
                </div>
            </>
        );
    }
    if (props.sMsg) {
        return (
            <>
                <div className="col-md-12 ps-4">
                    &nbsp;
                    <span className="fs-12px funge-grey pt-3">{props.msgTime}</span>
                    <div className="sMsg chat-msg funge-bggrey fs-14px w-400 float-end">
                        {props.msgText}
                    </div>
                </div>
            </>
        );
    }

};

export default SingleMessage;
