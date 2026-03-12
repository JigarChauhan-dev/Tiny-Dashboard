import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function Settings() {
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
                        className="nav-link active"
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
                        className="nav-link"
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
                  <form>
                    <div className="row mt-5 align-items-center">
                      <div className="col-md-3 text-center mb-5">
                        <div className="avatar avatar-xl">
                          <img
                            src="./assets/avatars/face-1.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="row align-items-center">
                          <div className="col-md-7">
                            <h4 className="mb-1">Brown, Asher</h4>
                            <p className="small mb-3">
                              <span className="badge badge-dark">
                                New York, USA
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col-md-7">
                            <p className="text-muted">
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris blandit nisl ullamcorper, rutrum
                              metus in, congue lectus. In hac habitasse platea
                              dictumst. Cras urna quam, malesuada vitae risus
                              at, pretium blandit sapien.{" "}
                            </p>
                          </div>
                          <div className="col">
                            <p className="small mb-0 text-muted">
                              Nec Urna Suscipit Ltd
                            </p>
                            <p className="small mb-0 text-muted">
                              P.O. Box 464, 5975 Eget Avenue
                            </p>
                            <p className="small mb-0 text-muted">
                              (537) 315-1481
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                          type="text"
                          id="firstname"
                          className="form-control"
                          placeholder="Brown"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                          type="text"
                          id="lastname"
                          className="form-control"
                          placeholder="Asher"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmail4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="brown@asher.me"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress5">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress5"
                        placeholder="P.O. Box 464, 5975 Eget Avenue"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputCompany5">Company</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCompany5"
                          placeholder="Nec Urna Suscipit Ltd"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState5">State</label>
                        <select id="inputState5" className="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="inputZip5">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip5"
                          placeholder={98232}
                        />
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="inputPassword4">Old Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword5"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPassword5">New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword5"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputPassword6">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword6"
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
                    <button type="submit" className="btn btn-primary">
                      Save Change
                    </button>
                  </form>
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

export default Settings;
