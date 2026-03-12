import React from "react";
import { Link } from "react-router-dom";

function Error500() {
  return (
    <>
      <div className="wrapper vh-100">
        <div className="align-items-center h-100 d-flex w-50 mx-auto">
          <div className="mx-auto text-center">
            <h1
              className="display-1 m-0 font-weight-bolder text-muted"
              style={{ fontSize: 80 }}
            >
              500
            </h1>
            <h1 className="mb-1 text-muted font-weight-bold">OOPS!</h1>
            <h6 className="mb-3 text-muted">Something went wrong here.</h6>
            <Link to={"/"} className="btn btn-lg btn-primary px-5">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error500;
