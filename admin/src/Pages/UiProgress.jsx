import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function UiProgress() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="page-title">Progress</h2>
                <p className="lead text-muted">
                  Examples for using Bootstrap custom progress bars featuring
                  support for stacked bars, animated backgrounds, and text
                  labels.
                </p>
                <div className="row my-4">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="mb-1">
                        <strong>Default</strong>
                      </p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-1">
                        <strong>With label</strong>
                      </p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "45%" }}
                          aria-valuenow={45}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          45%
                        </div>
                      </div>
                      <p className="mb-1">
                        <strong>Small Progress</strong>
                      </p>
                      <div className="progress mb-3" style={{ height: 2 }}>
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-1">
                        <strong>Large Progress</strong>
                      </p>
                      <div className="progress mb-3" style={{ height: 30 }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="mb-1">
                        <strong>Multiple bars</strong>
                      </p>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-1">
                        <strong>Multiple bars with label</strong>
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          15%
                        </div>
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          30%
                        </div>
                        <div
                          className="progress-bar bg-dark"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          20%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="mb-1">
                        <strong>Backgrounds</strong>
                      </p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="mb-1">
                        <strong>Striped</strong>
                      </p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end section */}
                <h2>Spinners</h2>
                <p className="lead text-muted">
                  Indicate the loading state of a component or page with
                  Bootstrap spinners, built entirely with HTML, CSS, and no
                  JavaScript.
                </p>
                <div className="row my-4">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="mb-3">
                        <strong>Border Spinners</strong>
                      </p>
                      <div
                        className="spinner-border mr-3 text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border mr-3 text-secondary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border mr-3 text-success"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border mr-3 text-danger"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border mr-3 text-warning"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border mr-3 text-info"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border mr-3 text-light"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-border mr-3 text-dark"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="mb-3">
                        <strong>Spinners size</strong>
                      </p>
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <div
                            className="spinner-border mr-3"
                            style={{ width: "3rem", height: "3rem" }}
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                          <div
                            className="spinner-grow mr-3"
                            style={{ width: "3rem", height: "3rem" }}
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                        <div className="col">
                          <div
                            className="spinner-border mr-3 spinner-border"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                          <div
                            className="spinner-grow mr-3 spinner-grow"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                        <div className="col">
                          <div
                            className="spinner-border mr-3 spinner-border-sm"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                          <div
                            className="spinner-grow mr-3 spinner-grow-sm"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <p className="mb-3">
                        <strong>Growing spinner</strong>
                      </p>
                      <div
                        className="spinner-grow mr-3 text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow mr-3 text-secondary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow mr-3 text-success"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow mr-3 text-danger"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow mr-3 text-warning"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow mr-3 text-info"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow mr-3 text-light"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow mr-3 text-dark"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="mb-3">
                        <strong>Buttons with spinners</strong>
                      </p>
                      <button
                        className="btn btn-primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Loading...</span>
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />{" "}
                        Loading...{" "}
                      </button>
                      <button
                        className="btn btn-success"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Loading...</span>
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        />{" "}
                        Loading...{" "}
                      </button>
                    </div>
                  </div>
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

export default UiProgress;
