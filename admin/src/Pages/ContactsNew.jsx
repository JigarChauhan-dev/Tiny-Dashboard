import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function ContactsNew() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <div className="row align-items-center my-4">
                  <div className="col">
                    <h2 className="h3 mb-0 page-title">Add Contact</h2>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-primary">
                      Save Change
                    </button>
                  </div>
                </div>
                <form>
                  <hr className="my-4" />
                  <h5 className="mb-2 mt-4">Personal</h5>
                  <p className="mb-4">
                    Mauris blandit nisl ullamcorper, rutrum metus in, congue
                    lectus
                  </p>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="firstname">Firstname</label>
                      <input
                        type="text"
                        id="firstname"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="lastname">Lastname</label>
                      <input
                        type="text"
                        id="lastname"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputPhone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="custom-placeholder">Date of Birth</label>
                      <input
                        className="form-control input-placeholder"
                        id="custom-placeholder"
                        type="text"
                        name="placeholder"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState5">Gender</label>
                      <select id="inputState5" className="form-control">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputLang">Language</label>
                      <select id="inputLang" className="form-control">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                      </select>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h5 className="mb-2 mt-4">Company</h5>
                  <p className="mb-4">
                    Mauris blandit nisl ullamcorper, rutrum metus in, congue
                    lectus
                  </p>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="firstname">Company Name</label>
                      <input
                        type="text"
                        id="firstname"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="lastname">Department</label>
                      <input
                        type="text"
                        id="lastname"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress5">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress5"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="custom-zip">Zip code</label>
                      <input
                        className="form-control input-zip"
                        id="custom-zip"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState5">Country</label>
                      <select id="inputState5" className="form-control">
                        <option valye>Select country...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState5">State</label>
                      <select id="inputState5" className="form-control">
                        <option selected>Choose state...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customPass"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customPass"
                        >
                          Create account and email generated password
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <button type="button" className="btn btn-primary">
                        Save Change
                      </button>
                    </div>
                  </div>
                </form>
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

export default ContactsNew;
