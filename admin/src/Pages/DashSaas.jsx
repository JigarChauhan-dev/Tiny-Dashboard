import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function DashSaas() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="row align-items-center mb-2">
                  <div className="col">
                    <h2 className="h5 page-title"></h2>
                  </div>
                  <div className="col-auto">
                    <form className="form-inline">
                      <div className="form-group d-none d-lg-inline">
                        <label htmlFor="reportrange" className="sr-only">
                          Date Ranges
                        </label>
                        <div id="reportrange" className="px-2 py-2 text-muted">
                          <span className="small" />
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="button" className="btn btn-sm">
                          <span className="fe fe-refresh-ccw fe-16 text-muted" />
                        </button>
                        <button type="button" className="btn btn-sm mr-2">
                          <span className="fe fe-filter fe-16 text-muted" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card shadow my-4">
                  <div className="card-body">
                    <div className="row align-items-center my-4">
                      <div className="col-md-4">
                        <div className="mx-4">
                          <strong className="mb-0 text-uppercase text-muted">
                            Earning
                          </strong>
                          <br />
                          <h3>$2,562.30</h3>
                          <p className="text-muted">
                            Etiam ultricies nisi vel augue. Curabitur
                            ullamcorper ultricies nisi. Nam eget dui. Etiam
                            rhoncus...
                          </p>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="p-4">
                              <p className="small text-uppercase text-muted mb-0">
                                Sales
                              </p>
                              <span className="h2 mb-0">$1.2K</span>
                              <p className="small mb-0">
                                <span className="fe fe-arrow-up text-success fe-12" />
                                <span className="text-muted ml-1">+1.5%</span>
                              </p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="p-4">
                              <p className="small text-uppercase text-muted mb-0">
                                Orders
                              </p>
                              <span className="h2 mb-0">1K+</span>
                              <p className="small mb-0">
                                <span className="fe fe-arrow-up text-success fe-12" />
                                <span className="text-muted ml-1">+28.5%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="p-4">
                              <p className="small text-uppercase text-muted mb-0">
                                Visitors
                              </p>
                              <span className="h2 mb-0">1626</span>
                              <p className="small mb-0">
                                <span className="text-muted ml-1">+1.5%</span>
                              </p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="p-4">
                              <p className="small text-uppercase text-muted mb-0">
                                Customers
                              </p>
                              <span className="h2 mb-0">186</span>
                              <p className="small mb-0">
                                <span className="fe fe-arrow-down text-danger fe-12" />
                                <span className="text-muted ml-1">-2.5%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="mr-4">
                          <div id="areaChart" />
                        </div>
                      </div>{" "}
                      {/* .col-md-8 */}
                    </div>{" "}
                    {/* end section */}
                  </div>{" "}
                  {/* .card-body */}
                </div>{" "}
                {/* .card */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="card shadow eq-card mb-4">
                      <div className="card-body">
                        <div className="card-title">
                          <strong>Sumerize</strong>
                          <a className="float-right small text-muted" href="#!">
                            View all
                          </a>
                        </div>
                        <div className="row mt-b">
                          <div className="col-6 text-center mb-3 border-right">
                            <p className="text-muted mb-1">Today</p>
                            <h6 className="mb-1">830</h6>
                            <p className="text-muted mb-2">
                              +5.5%{" "}
                              <span className="fe fe-arrow-up fe-12 text-success" />
                            </p>
                          </div>
                          <div className="col-6 text-center mb-3">
                            <p className="text-muted mb-1">Yesterday</p>
                            <h6 className="mb-1">4,830</h6>
                            <p className="text-muted">-5.5%</p>
                          </div>
                          <div className="col-6 text-center border-right">
                            <p className="text-muted mb-1">This Week</p>
                            <h6 className="mb-1">680</h6>
                            <p className="text-muted mb-2">
                              +1.5%{" "}
                              <span className="fe fe-arrow-up fe-12 text-warning" />
                            </p>
                          </div>
                          <div className="col-6 text-center">
                            <p className="text-muted mb-1">Last Week</p>
                            <h6 className="mb-1">430</h6>
                            <p className="text-muted">-5.5%</p>
                          </div>
                        </div>
                        <div className="chart-widget">
                          <div
                            id="columnChartWidget"
                            width={300}
                            height={200}
                          />
                        </div>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-4">
                    <div className="card shadow eq-card mb-4">
                      <div className="card-body">
                        <div className="card-title">
                          <strong>Services</strong>
                          <a className="float-right small text-muted" href="#!">
                            View all
                          </a>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row align-items-center my-2">
                              <div className="col">
                                <strong>Cloud Server</strong>
                                <div className="my-0 text-muted small">
                                  Global, Services
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+85%</strong>
                              </div>
                              <div className="col-3">
                                <div className="progress" style={{ height: 4 }}>
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow={85}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center my-2">
                              <div className="col">
                                <strong>CDN</strong>
                                <div className="my-0 text-muted small">
                                  Global, Services
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+75%</strong>
                              </div>
                              <div className="col-3">
                                <div className="progress" style={{ height: 4 }}>
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row align-items-center my-2">
                              <div className="col">
                                <strong>Databases</strong>
                                <div className="my-0 text-muted small">
                                  Local, DC
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+62%</strong>
                              </div>
                              <div className="col-3">
                                <div className="progress" style={{ height: 4 }}>
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "62%" }}
                                    aria-valuenow={62}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* .col-md-12 */}
                          <div className="col-md-12">
                            <div id="chart-box" className="mt-3">
                              <div id="pieChartWidget" />
                            </div>
                          </div>
                        </div>{" "}
                        {/* .row */}
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md-4 */}
                  {/* Map */}
                  <div className="col-md-4">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="card-title">
                          <strong>Region</strong>
                          <a className="float-right small text-muted" href="#!">
                            View all
                          </a>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row align-items-center my-2">
                              <div className="col">
                                <strong>Paris</strong>
                                <div className="my-0 text-muted small">
                                  France
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+85%</strong>
                              </div>
                            </div>
                            <div className="row align-items-center my-2">
                              <div className="col">
                                <strong>Amsterdam</strong>
                                <div className="my-0 text-muted small">
                                  Netherlands
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+75%</strong>
                              </div>
                            </div>
                            <div className="row align-items-center mt-2">
                              <div className="col">
                                <strong>Sydney</strong>
                                <div className="my-0 text-muted small">
                                  Australia
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+20%</strong>
                              </div>
                            </div>
                          </div>{" "}
                          {/* .col-md-12 */}
                          <div className="col-md-12 mt-4">
                            <div
                              className="map-box"
                              style={{
                                position: "relative",
                                width: 320,
                                minHeight: 170,
                                margin: "0 auto",
                              }}
                            >
                              <div id="dataMapUSA" />
                            </div>
                          </div>
                        </div>{" "}
                        {/* .row */}
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col-md-6 */}
                </div>{" "}
                {/* / .row */}
                <div className="row">
                  {/* Recent orders */}
                  <div className="col-md-8">
                    <div className="card shadow eq-card">
                      <div className="card-header">
                        <strong className="card-title">Recent Orders</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
                        <table className="table table-hover table-borderless table-striped mt-n3 mb-n1">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Company</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3224</td>
                              <th scope="col">Keith Baird</th>
                              <td>
                                Enim Limited
                                <br />
                                <span className="small text-muted">
                                  901-6206 Cras Av.
                                </span>
                              </td>
                              <td>Apr 24, 2019</td>
                              <td>
                                <span className="dot dot-lg bg-warning mr-2" />
                              </td>
                            </tr>
                            <tr>
                              <td>3218</td>
                              <th scope="col">Graham Price</th>
                              <td>
                                Nunc Lectus Incorporated
                                <br />
                                <span className="small text-muted">
                                  Ap #705-5389 Id St.
                                </span>
                              </td>
                              <td>May 23, 2020</td>
                              <td>
                                <span className="dot dot-lg bg-success mr-2" />
                              </td>
                            </tr>
                            <tr>
                              <td>2651</td>
                              <th scope="col">Reuben Orr</th>
                              <td>
                                Nisi Aenean Eget Limited
                                <br />
                                <span className="small text-muted">
                                  7425 Malesuada Rd.
                                </span>
                              </td>
                              <td>Nov 4, 2019</td>
                              <td>
                                <span className="dot dot-lg bg-warning mr-2" />
                              </td>
                            </tr>
                            <tr>
                              <td>2636</td>
                              <th scope="col">Akeem Holder</th>
                              <td>
                                Pellentesque Associates
                                <br />
                                <span className="small text-muted">
                                  896 Sodales St.
                                </span>
                              </td>
                              <td>Mar 27, 2020</td>
                              <td>
                                <span className="dot dot-lg bg-danger mr-2" />
                              </td>
                            </tr>
                            <tr>
                              <td>2757</td>
                              <th scope="col">Beau Barrera</th>
                              <td>
                                Augue Incorporated
                                <br />
                                <span className="small text-muted">
                                  4583 Id St.
                                </span>
                              </td>
                              <td>Jan 13, 2020</td>
                              <td>
                                <span className="dot dot-lg bg-success mr-2" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* / .col-md-8 */}
                  {/* Recent Activity */}
                  <div className="col-md-4">
                    <div className="card shadow eq-card timeline">
                      <div className="card-header">
                        <strong className="card-title">Recent Activity</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div
                        className="card-body"
                        data-simplebar
                        style={{
                          height: 360,
                          overflowY: "auto",
                          overflowX: "hidden",
                        }}
                      >
                        <div className="pb-3 timeline-item item-primary">
                          <div className="pl-5">
                            <div className="mb-1 small">
                              <strong>@Brown Asher</strong>
                              <span className="text-muted mx-2">
                                Just create new layout Index, form, table
                              </span>
                              <strong>Tiny Admin</strong>
                            </div>
                            <p className="small text-muted">
                              Creative Design{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                        <div className="pb-3 timeline-item item-warning">
                          <div className="pl-5">
                            <div className="mb-3 small">
                              <strong>@Fletcher Everett</strong>
                              <span className="text-muted mx-2">
                                created new group for
                              </span>
                              <strong>Tiny Admin</strong>
                            </div>
                            <ul className="avatars-list mb-2">
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-1.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-3.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="small text-muted">
                              Front-End Development{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                        <div className="pb-3 timeline-item item-success">
                          <div className="pl-5">
                            <div className="mb-2 small">
                              <strong>@Kelley Sonya</strong>
                              <span className="text-muted mx-2">
                                has commented on
                              </span>
                              <strong>Advanced table</strong>
                            </div>
                            <div className="card d-inline-flex mb-2">
                              <div className="card-body bg-light small py-2 px-3">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                              </div>
                            </div>
                            <p className="small text-muted">
                              Back-End Development{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col-md-3 */}
                </div>{" "}
                {/* end section */}
              </div>
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

export default DashSaas;
