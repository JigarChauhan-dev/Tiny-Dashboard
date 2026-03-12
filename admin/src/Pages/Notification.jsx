import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <h2 className="h3 mb-4 page-title">Settings</h2>
                <div className="my-4">
                  <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Security
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Notifications
                      </a>
                    </li>
                  </ul>
                  <h5 className="mb-0 mt-5">Notifications Settings</h5>
                  <p>Select notification you want to receive</p>
                  <hr className="my-4" />
                  <strong className="mb-0">Security</strong>
                  <p>Control security alert you will be notified.</p>
                  <div className="list-group mb-5 shadow">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          <strong className="mb-0">
                            Unusual activity notifications
                          </strong>
                          <p className="text-muted mb-0">
                            Donec in quam sed urna bibendum tincidunt quis
                            mollis mauris.
                          </p>
                        </div>{" "}
                        {/* .col */}
                        <div className="col-auto">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="alert1"
                              defaultChecked
                            />
                            <span className="custom-control-label" />
                          </div>
                        </div>{" "}
                        {/* .col */}
                      </div>{" "}
                      {/* .row */}
                    </div>{" "}
                    {/* .list-group-item */}
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          <strong className="mb-0">
                            Unauthorized financial activity
                          </strong>
                          <p className="text-muted mb-0">
                            Fusce lacinia elementum eros, sed vulputate urna
                            eleifend nec.
                          </p>
                        </div>{" "}
                        {/* .col */}
                        <div className="col-auto">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="alert2"
                            />
                            <span className="custom-control-label" />
                          </div>
                        </div>{" "}
                        {/* .col */}
                      </div>{" "}
                      {/* .row */}
                    </div>{" "}
                    {/* .list-group-item */}
                  </div>{" "}
                  {/* .list-group */}
                  <hr className="my-4" />
                  <strong className="mb-0">System</strong>
                  <p>Please enable system alert you will get.</p>
                  <div className="list-group mb-5 shadow">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          <strong className="mb-0">
                            Notify me about new features and updates
                          </strong>
                          <p className="text-muted mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>{" "}
                        {/* .col */}
                        <div className="col-auto">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="alert3"
                              defaultChecked
                            />
                            <span className="custom-control-label" />
                          </div>
                        </div>{" "}
                        {/* .col */}
                      </div>{" "}
                      {/* .row */}
                    </div>{" "}
                    {/* .list-group-item */}
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          <strong className="mb-0">
                            Notify me by email for latest news
                          </strong>
                          <p className="text-muted mb-0">
                            Nulla et tincidunt sapien. Sed eleifend volutpat
                            elementum.
                          </p>
                        </div>{" "}
                        {/* .col */}
                        <div className="col-auto">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="alert4"
                              defaultChecked
                            />
                            <span className="custom-control-label" />
                          </div>
                        </div>{" "}
                        {/* .col */}
                      </div>{" "}
                      {/* .row */}
                    </div>{" "}
                    {/* .list-group-item */}
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          <strong className="mb-0">
                            Notify me about tips on using account
                          </strong>
                          <p className="text-muted mb-0">
                            Donec in quam sed urna bibendum tincidunt quis
                            mollis mauris.
                          </p>
                        </div>{" "}
                        {/* .col */}
                        <div className="col-auto">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="alert5"
                            />
                            <span className="custom-control-label" />
                          </div>
                        </div>{" "}
                        {/* .col */}
                      </div>{" "}
                      {/* .row */}
                    </div>{" "}
                    {/* .list-group-item */}
                  </div>{" "}
                  {/* .list-group */}
                </div>{" "}
                {/* /.card-body */}
              </div>{" "}
              {/* /.col-12 */}
            </div>{" "}
            {/* .row */}
          </div>{" "}
          {/* .container-fluid */}
          <div
            className="modal fade modal-notif modal-slide"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="defaultModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="defaultModalLabel">
                    Notifications
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="list-group list-group-flush my-n3">
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-box fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Package has uploaded successfull</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            Package is zipped and uploaded
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            1m ago
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-download fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Widgets are updated successfull</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            Just create new layout Index, form, table
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            2m ago
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-inbox fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Notifications have been sent</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            Fusce dapibus, tellus ac cursus commodo
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            30m ago
                          </small>
                        </div>
                      </div>{" "}
                      {/* / .row */}
                    </div>
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-link fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Link was attached to menu</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            New layout has been attached to the menu
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            1h ago
                          </small>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>{" "}
                  {/* / .list-group */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-block"
                    data-dismiss="modal"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade modal-shortcut modal-slide"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="defaultModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="defaultModalLabel">
                    Shortcuts
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body px-5">
                  <div className="row align-items-center">
                    <div className="col-6 text-center">
                      <div className="squircle bg-success justify-content-center">
                        <i className="fe fe-cpu fe-32 align-self-center text-white" />
                      </div>
                      <p>Control area</p>
                    </div>
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-activity fe-32 align-self-center text-white" />
                      </div>
                      <p>Activity</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-droplet fe-32 align-self-center text-white" />
                      </div>
                      <p>Droplet</p>
                    </div>
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-upload-cloud fe-32 align-self-center text-white" />
                      </div>
                      <p>Upload</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-users fe-32 align-self-center text-white" />
                      </div>
                      <p>Users</p>
                    </div>
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-settings fe-32 align-self-center text-white" />
                      </div>
                      <p>Settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>{" "}
        {/* main */}
      </div>
    </>
  );
}

export default Notification;
