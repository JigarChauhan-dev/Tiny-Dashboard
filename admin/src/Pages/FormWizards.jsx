import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function FormWizards() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <h2 className="page-title">Form Wizard</h2>
                <p>
                  Using jQuery Steps as default wizard plugin. That is an
                  extremely flexible, compact and feature-rich plugin.
                </p>
                <div className="card my-4">
                  <div className="card-header">
                    <strong>Basic</strong>
                  </div>
                  <div className="card-body">
                    <div id="example-basic">
                      <h3>Keyboard</h3>
                      <section>
                        <p>
                          Try the keyboard navigation by clicking arrow left or
                          right!
                        </p>
                      </section>
                      <h3>Effects</h3>
                      <section>
                        <p>Wonderful transition effects.</p>
                      </section>
                      <h3>Pager</h3>
                      <section>
                        <p>
                          The next and previous buttons help you to navigate
                          through your content.
                        </p>
                      </section>
                    </div>
                  </div>{" "}
                  {/* .card-body */}
                </div>{" "}
                {/* .card */}
                <div className="card my-4">
                  <div className="card-header">
                    <strong>Vertical</strong>
                  </div>
                  <div className="card-body">
                    <div id="example-vertical">
                      <h3>Keyboard</h3>
                      <section>
                        <p>
                          Try the keyboard navigation by clicking arrow left or
                          right!
                        </p>
                      </section>
                      <h3>Effects</h3>
                      <section>
                        <p>Wonderful transition effects.</p>
                      </section>
                      <h3>Pager</h3>
                      <section>
                        <p>
                          The next and previous buttons help you to navigate
                          through your content.
                        </p>
                      </section>
                    </div>
                  </div>{" "}
                  {/* .card-body */}
                </div>{" "}
                {/* .card */}
                <div className="card my-4">
                  <div className="card-header">
                    <strong>Validation</strong>
                  </div>
                  <div className="card-body">
                    <form id="example-form" action="#">
                      <div>
                        <h3>Account</h3>
                        <section>
                          <div className="form-group">
                            <label htmlFor="userName">User name *</label>
                            <input
                              id="userName"
                              name="userName"
                              type="text"
                              className="form-control required"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <input
                              id="password"
                              name="password"
                              type="text"
                              className="form-control required"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="confirm">Confirm Password *</label>
                            <input
                              id="confirm"
                              name="confirm"
                              type="text"
                              className="form-control required"
                            />
                          </div>
                          <div className="help-text text-muted">
                            (*) Mandatory
                          </div>
                        </section>
                        <h3>Profile</h3>
                        <section>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="name">First name *</label>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control required"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="surname">Last name *</label>
                              <input
                                id="surname"
                                name="surname"
                                type="text"
                                className="form-control required"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                              id="email"
                              name="email"
                              type="text"
                              className="form-control required email"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                              id="address"
                              name="address"
                              className="form-control"
                              type="text"
                            />
                          </div>
                          <div className="help-text text-muted">
                            (*) Mandatory
                          </div>
                        </section>
                        <h3>Hints</h3>
                        <section>
                          <ul className="ml-5">
                            <li>Foo</li>
                            <li>Bar</li>
                            <li>Foobar</li>
                          </ul>
                        </section>
                        <h3>Finish</h3>
                        <section>
                          <input
                            id="acceptTerms"
                            name="acceptTerms"
                            type="checkbox"
                            className="required"
                          />{" "}
                          <label htmlFor="acceptTerms">
                            I agree with the Terms and Conditions.
                          </label>
                        </section>
                      </div>
                    </form>
                  </div>{" "}
                  {/* .card-body */}
                </div>{" "}
                {/* .card */}
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

export default FormWizards;
