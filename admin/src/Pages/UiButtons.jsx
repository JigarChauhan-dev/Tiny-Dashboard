import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function UiButtons() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="page-title">Buttons</h2>
                <p className="lead text-muted">
                  This primitive is meant to make it easy to display both
                  user-centric or activity-centric actions in your app.
                  Sometimes it makes sense to even blend both in a single
                  timeline, which works perfectly.
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Buttons</strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <div className="mb-2">
                          <button
                            type="button"
                            className="btn mb-2 btn-primary"
                          >
                            Primary
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-secondary"
                          >
                            Secondary
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-success"
                          >
                            Success
                          </button>
                          <button type="button" className="btn mb-2 btn-danger">
                            Danger
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-warning"
                          >
                            Warning
                          </button>
                          <button type="button" className="btn mb-2 btn-info">
                            Info
                          </button>
                          <button type="button" className="btn mb-2 btn-light">
                            Light
                          </button>
                          <button type="button" className="btn mb-2 btn-dark">
                            Dark
                          </button>
                          <button type="button" className="btn mb-2 btn-link">
                            Link
                          </button>
                        </div>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Outline buttons</strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <div className="mb-2">
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-primary"
                          >
                            Primary
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-secondary"
                          >
                            Secondary
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-success"
                          >
                            Success
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-danger"
                          >
                            Danger
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-warning"
                          >
                            Warning
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-info"
                          >
                            Info
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-light"
                          >
                            Light
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-dark"
                          >
                            Dark
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-link"
                          >
                            Link
                          </button>
                        </div>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Buttons sizes</strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <button
                          type="button"
                          className="btn mb-2 btn-secondary btn-lg"
                        >
                          Large button
                        </button>
                        <button
                          type="button"
                          className="btn mb-2 btn-secondary "
                        >
                          Default Button
                        </button>
                        <button
                          type="button"
                          className="btn mb-2 btn-secondary btn-sm"
                        >
                          Small Button
                        </button>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Buttons State</strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <div className="mb-2">
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-primary active"
                          >
                            Active
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-primary"
                            disabled
                          >
                            Disabled
                          </button>
                        </div>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Button group</strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            className="btn mb-2 btn-secondary"
                          >
                            Left
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-secondary"
                          >
                            Middle
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-secondary"
                          >
                            Right
                          </button>
                        </div>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Button toolbar</strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <div
                          className="btn-toolbar"
                          role="toolbar"
                          aria-label="Toolbar with button groups"
                        >
                          <div
                            className="btn-group mr-2"
                            role="group"
                            aria-label="First group"
                          >
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              1
                            </button>
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              2
                            </button>
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              3
                            </button>
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              4
                            </button>
                          </div>
                          <div
                            className="btn-group mr-2"
                            role="group"
                            aria-label="Second group"
                          >
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              5
                            </button>
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              6
                            </button>
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              7
                            </button>
                          </div>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Third group"
                          >
                            <button
                              type="button"
                              className="btn mb-2 btn-secondary"
                            >
                              8
                            </button>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Icon buttons</strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <div className="mb-2">
                          <button
                            type="button"
                            className="btn mb-2 btn-primary"
                          >
                            <span className="fe fe-arrow-right fe-16 mr-2" />
                            Primary
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-success"
                          >
                            Success
                            <span className="fe fe-chevron-right fe-16 ml-2" />
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-secondary"
                          >
                            <span className="fe fe-download fe-16">
                              <span />
                            </span>
                          </button>
                        </div>
                        <div className="mb-2">
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-primary"
                          >
                            <span className="fe fe-arrow-right fe-16 mr-2" />
                            Primary
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-secondary"
                          >
                            <span className="fe fe-arrow-down fe-16 mr-2" />
                            Secondary
                          </button>
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-success"
                          >
                            <span className="fe fe-upload-cloud fe-16" />
                          </button>
                        </div>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">
                          Block level buttons
                        </strong>
                      </div>
                      <div className="card-body">
                        <p className="text-muted">
                          Bootstrap includes several predefined button styles,
                          each serving its own semantic purpose, with a few
                          extras thrown in for more control.
                        </p>
                        <button
                          type="button"
                          className="btn mb-2 btn-primary btn-lg btn-block"
                        >
                          Block level button
                        </button>
                        <button
                          type="button"
                          className="btn mb-2 btn-secondary btn-lg btn-block"
                        >
                          Block level button
                        </button>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. col */}
                </div>{" "}
                {/* end section */}
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

export default UiButtons;
