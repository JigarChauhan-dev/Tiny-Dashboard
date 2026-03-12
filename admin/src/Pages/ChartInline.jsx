import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function ChartInline() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Aside/>
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-10 mx-auto">
                <h2 className="h5 page-title" id="task-section">
                  Sparkline Charts
                </h2>
                <p className="text-muted">
                  A jQuery plugin generates sparklines (small inline charts)
                  directly in the browser using data supplied either inline in
                  the HTML, or via javascript{" "}
                </p>
                <div className="row">
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <strong className="card-title">
                              Sparkline Bar
                            </strong>
                            <p className="small mb-0">
                              <span className="fe fe-12 fe-arrow-up text-success" />
                              <span className="text-muted">37.7%</span>
                            </p>
                          </div>
                          <div className="col-4 text-right">
                            <span className="sparkline inlinebar" />
                          </div>
                        </div>{" "}
                        {/* /. row */}
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <strong className="card-title">
                              Sparkline line
                            </strong>
                            <p className="small mb-0">
                              <span className="fe fe-12 fe-arrow-down text-danger" />
                              <span className="text-muted">-6.8%</span>
                            </p>
                          </div>
                          <div className="col-4 text-right">
                            <span className="sparkline inlineline" />
                          </div>
                        </div>{" "}
                        {/* /. row */}
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <strong className="card-title">
                              Sparkline line
                            </strong>
                            <p className="small mb-0">
                              <span className="fe fe-12 fe-arrow-up text-success" />
                              <span className="text-muted">32.7%</span>
                            </p>
                          </div>
                          <div className="col-4 text-right">
                            <span className="sparkline inlinepie" />
                          </div>
                        </div>{" "}
                        {/* /. row */}
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card */}
                  </div>{" "}
                  {/* /. col */}
                </div>{" "}
                {/* end section */}
                <h2 className="h5" id="task-section">
                  SVG gauge
                </h2>
                <p className="text-muted">
                  Minmalistic, configurable, animated SVG gauge. Zero
                  dependencies{" "}
                </p>
                <div className="row">
                  <div className="col-md-3 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <p className="small mb-3">
                          <strong>CPU</strong>
                        </p>
                        <div
                          id="gauge1"
                          className="gauge-container mx-auto"
                        ></div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-3 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <p className="small mb-3">
                          <strong>RAM</strong>
                        </p>
                        <div
                          id="gauge2"
                          className="gauge-container mx-auto"
                        ></div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-3 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <p className="small mb-3">
                          <strong>Disk</strong>
                        </p>
                        <div
                          id="gauge3"
                          className="gauge-container g3 mx-auto"
                        ></div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-3 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <p className="small mb-3">
                          <strong>Network</strong>
                        </p>
                        <div id="gauge4" className="gauge-container g4 mx-auto">
                          <span className="value-text text-muted small">
                            MB/s
                          </span>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                </div>{" "}
                {/* end section */}
                {/* Apex Radialbar Charts */}
                <h2 className="h5" id="task-section">
                  ApexCharts Radialbars
                </h2>
                <p className="text-muted">
                  Data can be represented on a radial bar chart in the various
                  formats such as multiple radial bar charts, radial bar with an
                  image, and even in semi-circular gauge forms
                </p>
                <div className="row">
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <div id="radialbar" />
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <div id="multiRadialbar" />
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <div id="customAngle" />
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <div id="gradientRadial" />
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <div id="strokeRadial" />
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 my-4">
                    <div className="card shadow">
                      <div className="card-body text-center">
                        <div id="semiRadial" />
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
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

export default ChartInline;
