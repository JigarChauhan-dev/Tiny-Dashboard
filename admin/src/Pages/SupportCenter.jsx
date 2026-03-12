import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function SupportCenter() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="w-50 mx-auto text-center justify-content-center py-5 my-5">
                  <h2 className="page-title mb-0">How can we help?</h2>
                  <p className="lead text-muted mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <form className="searchform searchform-lg">
                    <input
                      className="form-control form-control-lg bg-white rounded-pill pl-5"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <p className="help-text mt-2 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </form>
                </div>
                <div className="row my-4">
                  <div className="col-6 col-lg-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <i className="fe fe-info fe-32 text-primary" />
                        <a href="#">
                          <h3 className="h5 mt-4 mb-1">Getting start</h3>
                        </a>
                        <p className="text-muted">Start working with theme</p>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                  <div className="col-6 col-lg-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <i className="fe fe-help-circle fe-32 text-success" />
                        <a href="./page-faqs.html">
                          <h3 className="h5 mt-4 mb-1">FAQs</h3>
                        </a>
                        <p className="text-muted">Frequently asked questions</p>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                  <div className="col-6 col-lg-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <i className="fe fe-globe fe-32 text-warning" />
                        <a href="#">
                          <h3 className="h5 mt-4 mb-1">Knowledge Base</h3>
                        </a>
                        <p className="text-muted">Learn more about products?</p>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                  <div className="col-6 col-lg-3">
                    <div className="card shadow">
                      <div className="card-body">
                        <i className="fe fe-alert-triangle fe-32 text-danger" />
                        <a href="#">
                          <h3 className="h5 mt-4 mb-1">Reporting</h3>
                        </a>
                        <p className="text-muted">Report a bug</p>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                </div>{" "}
                {/* .row */}
                <div className="my-5 p-5">
                  <div className="text-center">
                    <h2 className="mb-0">Knowledge Base</h2>
                    <p className="lead text-muted mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="row my-5">
                    <div className="col-md-4">
                      <h3 className="h5 mt-4 mb-1">Getting start</h3>
                      <p className="text-muted mb-4">
                        Start working with theme
                      </p>
                      <ul className="list-unstyled">
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Lorem ipsum dolor sit amet
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Consectetur adipiscing elit
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Integer molestie lorem at massa
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Facilisis in pretium nisl aliquet
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Nulla volutpat aliquam velit
                        </li>
                      </ul>
                    </div>{" "}
                    {/* .col-md*/}
                    <div className="col-md-4">
                      <h3 className="h5 mt-4 mb-1">Integrations</h3>
                      <p className="text-muted mb-4">
                        How to integrate the theme?
                      </p>
                      <ul className="list-unstyled">
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Lorem ipsum dolor sit amet
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Consectetur adipiscing elit
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Integer molestie lorem at massa
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Facilisis in pretium nisl aliquet
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Nulla volutpat aliquam velit
                        </li>
                      </ul>
                    </div>{" "}
                    {/* .col-md*/}
                    <div className="col-md-4">
                      <h3 className="h5 mt-4 mb-1">Reporting</h3>
                      <p className="text-muted mb-4">
                        Report a bug or request a feature
                      </p>
                      <ul className="list-unstyled">
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Lorem ipsum dolor sit amet
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Consectetur adipiscing elit
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Integer molestie lorem at massa
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Facilisis in pretium nisl aliquet
                        </li>
                        <li className="my-1">
                          <i className="fe fe-file-text mr-2 text-muted" />
                          Nulla volutpat aliquam velit
                        </li>
                      </ul>
                    </div>{" "}
                    {/* .col-md*/}
                  </div>{" "}
                  {/* .row */}
                </div>
                <div className="row my-4">
                  <div className="col-md-6">
                    <div className="card shadow bg-primary text-center mb-4">
                      <div className="card-body p-5">
                        <span className="circle circle-md bg-primary-light">
                          <i className="fe fe-navigation fe-24 text-white" />
                        </span>
                        <h3 className="h4 mt-4 mb-1 text-white">
                          Sumit a ticket
                        </h3>
                        <p className="text-white mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                        <a
                          href="#"
                          className="btn btn-lg bg-primary-light text-white"
                        >
                          New Ticket
                          <i className="fe fe-arrow-right fe-16 ml-2" />
                        </a>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                  <div className="col-md-6">
                    <div className="card shadow bg-success text-center mb-4">
                      <div className="card-body p-5">
                        <span className="circle circle-md bg-success-light">
                          <i className="fe fe-message-circle fe-24 text-white" />
                        </span>
                        <h3 className="h4 mt-4 mb-1 text-white">Live chart</h3>
                        <p className="text-white mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                        <a
                          href="#"
                          className="btn btn-lg bg-success-light text-white"
                        >
                          Let chat
                          <i className="fe fe-arrow-right fe-16 ml-2" />
                        </a>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                </div>{" "}
                {/* .row */}
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

export default SupportCenter;
