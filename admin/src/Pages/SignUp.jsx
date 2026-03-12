import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SIgnUp() {

  return (
    <>
      <div className="wrapper vh-100">
        <div className="row align-items-center h-100">
          <form className="col-lg-6 col-md-8 col-10 mx-auto">
            <div className="mx-auto text-center my-4">
              <Link
                className="navbar-brand mx-auto mt-2 flex-fill text-center"
                to={"/"}
              >
                <svg
                  version="1.1"
                  id="logo"
                  className="navbar-brand-img brand-md"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 120 120"
                  xmlSpace="preserve"
                >
                  <g>
                    <polygon
                      className="st0"
                      points="78,105 15,105 24,87 87,87 	"
                    />
                    <polygon
                      className="st0"
                      points="96,69 33,69 42,51 105,51 	"
                    />
                    <polygon
                      className="st0"
                      points="78,33 15,33 24,15 87,15 	"
                    />
                  </g>
                </svg>
              </Link>
              <h2 className="my-3">Register</h2>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail4">Name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstname">Email</label>
                <input
                  type="email"
                  name="email"
                  id="firstname"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastname">Phone</label>
                <input type="tel" className="form-control" />
              </div>
            </div>
            <hr className="my-4" />
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="inputPassword5">Password</label>
                  <input
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="mb-2">Password requirements</p>
                <p className="small text-muted mb-2">
                  {" "}
                  To create a new password, you have to meet all of the
                  following requirements:{" "}
                </p>
                <ul className="small text-muted pl-4 mb-0">
                  <li> Minimum 8 character </li>
                  <li>At least one special character</li>
                  <li>At least one number</li>
                  <li>Can’t be the same as a previous password </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign up
            </button>
            <p className="mt-5 mb-3 text-muted text-center">© 2026</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SIgnUp;
