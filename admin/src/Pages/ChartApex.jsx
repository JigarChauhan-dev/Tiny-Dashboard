import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function ChartApex() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="h5 page-title">Apexcharts</h2>
                <p className="text-muted">
                  ApexCharts is a modern charting library that helps developers
                  to create beautiful and interactive visualizations for web
                  pages.
                </p>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">
                          Column Chart
                        </strong>
                      </div>
                      <div className="card-body">
                        <div id="columnChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Bar Chart</strong>
                      </div>
                      <div className="card-body">
                        <div id="barChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Line Chart</strong>
                      </div>
                      <div className="card-body">
                        <div id="lineChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Area Chart</strong>
                      </div>
                      <div className="card-body">
                        <div id="areaChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">
                          Heatmap Chart
                        </strong>
                      </div>
                      <div className="card-body">
                        <div id="heatmapChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">
                          Bubble Chart
                        </strong>
                      </div>
                      <div className="card-body">
                        <div id="bubbleChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title mb-0">Donut Chart</strong>
                      </div>
                      <div className="card-body text-center">
                        <div id="donutChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title mb-0">Radar Chart</strong>
                      </div>
                      <div className="card-body">
                        <div id="radarChart" />
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-12 col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title mb-0">
                          Candle Stick
                        </strong>
                      </div>
                      <div className="card-body">
                        <div id="candleChart" />
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

export default ChartApex;
