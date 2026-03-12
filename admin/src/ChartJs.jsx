import React from "react";
import Header from "./Common/Header";
import Aside from "./Common/Aside";

function ChartJs() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Aside/>
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="h5 page-title">Chartjs</h2>
                <p className="text-muted">
                  Simple yet flexible JavaScript charting for designers &amp;
                  developers
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Bar Chart</strong>
                        <div className="dropdown float-right">
                          <button
                            className="btn btn-sm btn-link text-muted dropdown-toggle p-0"
                            type="button"
                            id="rangeDropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            7 days{" "}
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="rangeDropdown"
                          >
                            <a
                              className="dropdown-item small text-muted"
                              href="#"
                            >
                              30 days
                            </a>
                            <a className="dropdown-item small active" href="#">
                              90 days
                            </a>
                            <a
                              className="dropdown-item small text-muted"
                              href="#"
                            >
                              All
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <canvas id="barChartjs" width={400} height={300} />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Line Chart</strong>
                        <span className="badge badge-light float-right mr-2">
                          30 days
                        </span>
                        <span className="badge badge-light float-right mr-2">
                          7 days
                        </span>
                        <span className="badge badge-secondary float-right mr-2">
                          Today
                        </span>
                      </div>
                      <div className="card-body">
                        <canvas id="lineChartjs" width={400} height={300} />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                </div>{" "}
                {/* end section */}
                <div className="row my-4">
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Pie Chart</strong>
                      </div>
                      <div className="card-body">
                        <canvas id="pieChartjs" width={400} height={300} />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Area Chart</strong>
                      </div>
                      <div className="card-body">
                        <canvas id="areaChartjs" width={400} height={300} />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
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

export default ChartJs;
