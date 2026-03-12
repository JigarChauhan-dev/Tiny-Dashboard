import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function ContactsGrid() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Aside/>
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="row align-items-center my-4">
                  <div className="col">
                    <h2 className="h3 mb-0 page-title">Contacts</h2>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-secondary">
                      <span className="fe fe-trash fe-12 mr-2" />
                      Delete
                    </button>
                    <button type="button" className="btn btn-primary">
                      <span className="fe fe-filter fe-12 mr-2" />
                      Create
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-4.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Bass Wendy{" "}
                          </strong>
                          <p className="small text-muted mb-0">
                            Accumsan Consulting
                          </p>
                          <p className="small">
                            <span className="badge badge-light text-muted">
                              New York, USA
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-success mr-1" />{" "}
                              Online{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-1.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Leblanc Yoshio
                          </strong>
                          <p className="small text-muted mb-0">Tristique Ltd</p>
                          <p className="small">
                            <span className="badge badge-light text-muted">
                              United Kingdom
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-secondary mr-1" />{" "}
                              Offline{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-5.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Higgins Uriah
                          </strong>
                          <p className="small text-muted mb-0">
                            Suspendisse LLC
                          </p>
                          <p className="small">
                            <span className="badge badge-light text-muted">
                              Canada
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-success mr-1" />{" "}
                              Online{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-3.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Brown Asher
                          </strong>
                          <p className="small text-muted mb-0">
                            Orci Luctus Et Inc.
                          </p>
                          <p className="small">
                            <span className="badge badge-dark">USA</span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-success mr-1" />{" "}
                              Online{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-4.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Bass Wendy{" "}
                          </strong>
                          <p className="small text-muted mb-0">
                            Accumsan Consulting
                          </p>
                          <p className="small">
                            <span className="badge badge-light text-muted">
                              New York, USA
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-success mr-1" />{" "}
                              Online{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-1.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Leblanc Yoshio
                          </strong>
                          <p className="small text-muted mb-0">Tristique Ltd</p>
                          <p className="small">
                            <span className="badge badge-light text-muted">
                              United Kingdom
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-secondary mr-1" />{" "}
                              Offline{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-5.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Higgins Uriah
                          </strong>
                          <p className="small text-muted mb-0">
                            Suspendisse LLC
                          </p>
                          <p className="small">
                            <span className="badge badge-light text-muted">
                              Canada
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-success mr-1" />{" "}
                              Online{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <div className="avatar avatar-lg mt-4">
                          <a href>
                            <img
                              src="./assets/avatars/face-3.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </a>
                        </div>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Brown Asher
                          </strong>
                          <p className="small text-muted mb-0">
                            Orci Luctus Et Inc.
                          </p>
                          <p className="small">
                            <span className="badge badge-dark">USA</span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-success mr-1" />{" "}
                              Online{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <div className="file-action">
                              <button
                                type="button"
                                className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="text-muted sr-only">
                                  Action
                                </span>
                              </button>
                              <div className="dropdown-menu m-2">
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-meh fe-12 mr-4" />
                                  Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-message-circle fe-12 mr-4" />
                                  Chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-mail fe-12 mr-4" />
                                  Contact
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fe fe-delete fe-12 mr-4" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-9"></div> {/* .col */}
                </div>{" "}
                {/* .row */}
                <nav aria-label="Table Paging" className="my-3">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>{" "}
              {/* .col-12 */}
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

export default ContactsGrid;
