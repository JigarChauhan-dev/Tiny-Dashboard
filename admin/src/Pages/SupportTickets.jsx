import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function SupportTickets() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="h3 mb-0 page-title">Tickets</h2>
                <div className="row align-items-center my-4">
                  <div className="col-md-6">
                    <div id="chart-box">
                      <div id="donutChartWidget" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row align-items-center my-2">
                      <div className="col">
                        <strong>Completed</strong>
                        <br />
                        <span className="my-0 text-muted small">+85%</span>
                      </div>
                      <div className="col-auto">
                        <strong className="my-0">1200</strong>
                      </div>
                      <div className="col-3">
                        <div className="progress" style={{ height: 4 }}>
                          <div
                            className="progress-bar bg-success"
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
                        <strong>Processing</strong>
                        <br />
                        <span className="my-0 text-muted small">+60%</span>
                      </div>
                      <div className="col-auto">
                        <strong>80</strong>
                      </div>
                      <div className="col-3">
                        <div className="progress" style={{ height: 4 }}>
                          <div
                            className="progress-bar bg-primary"
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
                        <strong>Assigned</strong>
                        <div className="my-0 text-muted small">+2%</div>
                      </div>
                      <div className="col-auto">
                        <strong>262</strong>
                      </div>
                      <div className="col-3">
                        <div className="progress" style={{ height: 4 }}>
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center my-2">
                      <div className="col">
                        <strong>Pending</strong>
                        <div className="my-0 text-muted small">+6%</div>
                      </div>
                      <div className="col-auto">
                        <strong>26</strong>
                      </div>
                      <div className="col-3">
                        <div className="progress" style={{ height: 4 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* .col-md-12 */}
                </div>{" "}
                {/* .row */}
                <div className="row items-align-center my-4  d-none d-lg-flex">
                  <div className="col-md">
                    <ul className="nav nav-pills justify-content-start">
                      <li className="nav-item">
                        <a
                          className="nav-link active bg-transparent pr-2 pl-0 text-primary"
                          href="#"
                        >
                          All{" "}
                          <span className="badge badge-pill bg-primary text-white ml-2">
                            164
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-muted px-2" href="#">
                          Pending{" "}
                          <span className="badge badge-pill bg-white border text-muted ml-2">
                            64
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-muted px-2" href="#">
                          Processing{" "}
                          <span className="badge badge-pill bg-white border text-muted ml-2">
                            48
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-muted px-2" href="#">
                          Completed{" "}
                          <span className="badge badge-pill bg-white border text-muted ml-2">
                            52
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-auto ml-auto text-right">
                    <span className="small bg-white border py-1 px-2 rounded mr-2">
                      <a href="#" className="text-muted">
                        <i className="fe fe-x mx-1" />
                      </a>
                      <span className="text-muted">
                        Status : <strong>Pending</strong>
                      </span>
                    </span>
                    <span className="small bg-white border py-1 px-2 rounded mr-2">
                      <a href="#" className="text-muted">
                        <i className="fe fe-x mx-1" />
                      </a>
                      <span className="text-muted">
                        April 14, 2020 - May 13, 2020
                      </span>
                    </span>
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target=".modal-slide"
                    >
                      <span className="fe fe-filter fe-16 text-muted" />
                    </button>
                    <button type="button" className="btn">
                      <span className="fe fe-refresh-ccw fe-16 text-muted" />
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {/* table */}
                    <table className="table table-borderless table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th />
                          <th>Subject</th>
                          <th>Create At</th>
                          <th>Status</th>
                          <th>Updated At</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-muted small">2007</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-secondary mr-2" />
                          </td>
                          <th scope="col">
                            sed, sapien. Nunc pulvinar arcu et pede. Nunc sed
                          </th>
                          <td className="text-muted small">Apr 29, 2020</td>
                          <td>
                            <span className="small text-muted">Completed</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 9, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2053</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-success mr-2" />
                          </td>
                          <th scope="col">
                            lorem eu metus. In lorem. Donec elementum, lorem ut
                          </th>
                          <td className="text-muted small">May 4, 2020</td>
                          <td>
                            <span className="small text-muted">Completed</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 2, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2569</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-secondary mr-2" />
                          </td>
                          <th scope="col">
                            sagittis. Duis gravida. Praesent eu
                          </th>
                          <td className="text-muted small">May 7, 2020</td>
                          <td>
                            <span className="small text-muted">Pending</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "0%" }}
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 9, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2192</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-primary mr-2" />
                          </td>
                          <th scope="col">
                            mattis semper, dui lectus rutrum urna, nec luctus
                          </th>
                          <td className="text-muted small">May 5, 2020</td>
                          <td>
                            <span className="small text-muted">Processing</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">Apr 27, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2028</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-success mr-2" />
                          </td>
                          <th scope="col">at arcu. Vestibulum ante ipsum</th>
                          <td className="text-muted small">May 2, 2020</td>
                          <td>
                            <span className="small text-muted">Assigned</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 4, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2673</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-primary mr-2" />
                          </td>
                          <th scope="col">
                            dui nec urna suscipit nonummy. Fusce fermentum
                            fermentum
                          </th>
                          <td className="text-muted small">May 13, 2020</td>
                          <td>
                            <span className="small text-muted">Processing</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 3, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2698</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-primary mr-2" />
                          </td>
                          <td>habitant morbi tristique senectus et</td>
                          <td className="text-muted small">May 7, 2020</td>
                          <td>
                            <span className="small text-muted">Completed</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 8, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2382</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-secondary mr-2" />
                          </td>
                          <td>arcu. Vestibulum ut eros non enim</td>
                          <td className="text-muted small">May 2, 2020</td>
                          <td>
                            <span className="small text-muted">Assigned</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">Apr 30, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2582</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-success mr-2" />
                          </td>
                          <th scope="col">
                            ipsum sodales purus, in molestie tortor nibh
                          </th>
                          <td className="text-muted small">May 2, 2020</td>
                          <td>
                            <span className="small text-muted">Completed</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 6, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted small">2811</td>
                          <td className="text-center">
                            <span className="dot dot-lg bg-secondary mr-2" />
                          </td>
                          <th scope="col">
                            non, bibendum sed, est. Nunc laoreet lectus quis
                          </th>
                          <td className="text-muted small">Apr 5, 2020</td>
                          <td>
                            <span className="small text-muted">Processing</span>
                            <div
                              className="progress mt-2"
                              style={{ height: 3 }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </td>
                          <td className="text-muted small">May 14, 2020</td>
                          <td>
                            <button
                              className="btn btn-sm dropdown-toggle more-horizontal"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Table Paging" className="my-3">
                      <ul className="pagination justify-content-end mb-0">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>{" "}
                  {/* .col */}
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

export default SupportTickets;
