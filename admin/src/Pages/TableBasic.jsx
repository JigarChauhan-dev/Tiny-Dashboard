import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function TableBasic() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="page-title">Basic table</h2>
                <p> Tables with built-in bootstrap styles </p>
                <div className="row">
                  {/* simple table */}
                  <div className="col-md-6 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Simple Table</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Company</th>
                              <th>Address</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3224</td>
                              <td>Keith Baird</td>
                              <td>Enim Limited</td>
                              <td>901-6206 Cras Av.</td>
                              <td>Apr 24, 2019</td>
                              <td>
                                <span className="badge badge-pill badge-warning">
                                  Hold
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>3218</td>
                              <td>Graham Price</td>
                              <td>Nunc Lectus Incorporated</td>
                              <td>Ap #705-5389 Id St.</td>
                              <td>May 23, 2020</td>
                              <td>
                                <span className="badge badge-pill badge-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2651</td>
                              <td>Reuben Orr</td>
                              <td>Nisi Aenean Eget Limited</td>
                              <td>7425 Malesuada Rd.</td>
                              <td>Nov 4, 2019</td>
                              <td>
                                <span className="badge badge-pill badge-warning">
                                  Hold
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2636</td>
                              <td>Akeem Holder</td>
                              <td>Pellentesque Associates</td>
                              <td>896 Sodales St.</td>
                              <td>Mar 27, 2020</td>
                              <td>
                                <span className="badge badge-pill badge-danger">
                                  Danger
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2757</td>
                              <td>Beau Barrera</td>
                              <td>Augue Incorporated</td>
                              <td>4583 Id St.</td>
                              <td>Jan 13, 2020</td>
                              <td>
                                <span className="badge badge-pill badge-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
                  {/* simple table */}
                  {/* Bordered table */}
                  <div className="col-md-6 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Bordered table</h5>
                        <p className="card-text">
                          Add .table-bordered for borders on all sides of the
                          table and cells.
                        </p>
                        <table className="table table-bordered table-hover mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Company</th>
                              <th>Address</th>
                              <th>Date</th>
                              <th>Activate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3224</td>
                              <td>Keith Baird</td>
                              <td>Enim Limited</td>
                              <td>901-6206 Cras Av.</td>
                              <td>Apr 24, 2019</td>
                              <td>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="c1"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="c1"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>3218</td>
                              <td>Graham Price</td>
                              <td>Nunc Lectus Incorporated</td>
                              <td>Ap #705-5389 Id St.</td>
                              <td>May 23, 2020</td>
                              <td>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="c2"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="c2"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2651</td>
                              <td>Reuben Orr</td>
                              <td>Nisi Aenean Eget Limited</td>
                              <td>7425 Malesuada Rd.</td>
                              <td>Nov 4, 2019</td>
                              <td>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="c3"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="c3"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2636</td>
                              <td>Akeem Holder</td>
                              <td>Pellentesque Associates</td>
                              <td>896 Sodales St.</td>
                              <td>Mar 27, 2020</td>
                              <td>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="c4"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="c4"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2757</td>
                              <td>Beau Barrera</td>
                              <td>Augue Incorporated</td>
                              <td>4583 Id St.</td>
                              <td>Jan 13, 2020</td>
                              <td>
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="c5"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="c5"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Bordered table */}
                </div>{" "}
                {/* end section */}
                <div className="row">
                  {/* Striped rows */}
                  <div className="col-md-6 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Striped rows</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="chall"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="d1"
                                  />
                                </div>
                              </th>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Address</th>
                              <th>Phone</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="d1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="d1"
                                  />
                                </div>
                              </td>
                              <td>2474</td>
                              <td>Brown, Asher D.</td>
                              <td>Ap #331-7123 Lobortis Avenue</td>
                              <td>(958) 421-0798</td>
                              <td>13/09/2020</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="dr1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr1"
                                  >
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
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="d2"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="d2"
                                  />
                                </div>
                              </td>
                              <td>2786</td>
                              <td>Leblanc, Yoshio V.</td>
                              <td>287-8300 Nisl. St.</td>
                              <td>(899) 881-3833</td>
                              <td>04/05/2019</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="dr2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr2"
                                  >
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
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="d3"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="d3"
                                  />
                                </div>
                              </td>
                              <td>2747</td>
                              <td>Hester, Nissim L.</td>
                              <td>4577 Cras St.</td>
                              <td>(977) 220-6518</td>
                              <td>Nov 4, 2019</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
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
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="d4"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="d4"
                                  />
                                </div>
                              </td>
                              <td>2639</td>
                              <td>Gardner, Leigh S.</td>
                              <td>P.O. Box 228, 7512 Lectus Ave</td>
                              <td>(537) 315-1481</td>
                              <td>04/08/2019</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="dr4"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr4"
                                  >
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
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="d5"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="d5"
                                  />
                                </div>
                              </td>
                              <td>2238</td>
                              <td>Higgins, Uriah L.</td>
                              <td>Ap #377-5357 Sed Road</td>
                              <td>(238) 386-0247</td>
                              <td>Jan 13, 2020</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="dr5"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr5"
                                  >
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
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Striped rows */}
                  {/* Bordered table */}
                  <div className="col-md-6 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Table head options</h5>
                        <p className="card-text">
                          Add .table-hover to enable a hover state on table rows
                          within a
                        </p>
                        <table className="table table-hover">
                          <thead className="thead-dark">
                            <tr>
                              <th>ID</th>
                              <th>Progress</th>
                              <th>Name</th>
                              <th>Company</th>
                              <th>Address</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2370</td>
                              <td>
                                <div
                                  className="progress progress-sm"
                                  style={{ height: 3 }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "87%" }}
                                    aria-valuenow={87}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>Barry Bright</td>
                              <td>Donec Corporation</td>
                              <td>662-5410 Eu Ave</td>
                              <td>Jun 22, 2020</td>
                            </tr>
                            <tr>
                              <td>3224</td>
                              <td>
                                <div
                                  className="progress progress-sm"
                                  style={{ height: 3 }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: "37%" }}
                                    aria-valuenow={37}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>Keith Baird</td>
                              <td>Enim Limited</td>
                              <td>901-6206 Cras Av.</td>
                              <td>Apr 24, 2019</td>
                            </tr>
                            <tr>
                              <td>3218</td>
                              <td>
                                <div
                                  className="progress progress-sm"
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
                              <td>Graham Price</td>
                              <td>Nunc Lectus Incorporated</td>
                              <td>Ap #705-5389 Id St.</td>
                              <td>May 23, 2020</td>
                            </tr>
                            <tr>
                              <td>2651</td>
                              <td>
                                <div
                                  className="progress progress-sm"
                                  style={{ height: 3 }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>Reuben Orr</td>
                              <td>Nisi Aenean Eget Limited</td>
                              <td>7425 Malesuada Rd.</td>
                              <td>Nov 4, 2019</td>
                            </tr>
                            <tr>
                              <td>2636</td>
                              <td>
                                <div
                                  className="progress progress-sm"
                                  style={{ height: 3 }}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: "8%" }}
                                    aria-valuenow={8}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>Akeem Holder</td>
                              <td>Pellentesque Associates</td>
                              <td>896 Sodales St.</td>
                              <td>Mar 27, 2020</td>
                            </tr>
                            <tr>
                              <td>2757</td>
                              <td>
                                <div
                                  className="progress progress-sm"
                                  style={{ height: 3 }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: "55%" }}
                                    aria-valuenow={55}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>Beau Barrera</td>
                              <td>Augue Incorporated</td>
                              <td>4583 Id St.</td>
                              <td>Jan 13, 2020</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Bordered table */}
                </div>{" "}
                {/* end section */}
                <div className="row">
                  {/* Small table */}
                  <div className="col-md-6 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Small table</h5>
                        <p className="card-text">
                          Add .table-sm to make tables more compact by cutting
                          cell padding in half.
                        </p>
                        <table className="table table-hover table-sm">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Company</th>
                              <th>Address</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3224</td>
                              <td>Keith Baird</td>
                              <td>Enim Limited</td>
                              <td>901-6206 Cras Av.</td>
                              <td>Apr 24, 2019</td>
                              <td>
                                <span className="text-warning">Hold</span>
                              </td>
                            </tr>
                            <tr>
                              <td>3218</td>
                              <td>Graham Price</td>
                              <td>Nunc Lectus Incorporated</td>
                              <td>Ap #705-5389 Id St.</td>
                              <td>May 23, 2020</td>
                              <td>
                                <span className="text-success">Success</span>
                              </td>
                            </tr>
                            <tr>
                              <td>2651</td>
                              <td>Reuben Orr</td>
                              <td>Nisi Aenean Eget Limited</td>
                              <td>7425 Malesuada Rd.</td>
                              <td>Nov 4, 2019</td>
                              <td>
                                <span className="text-warning">Hold</span>
                              </td>
                            </tr>
                            <tr>
                              <td>2636</td>
                              <td>Akeem Holder</td>
                              <td>Pellentesque Associates</td>
                              <td>896 Sodales St.</td>
                              <td>Mar 27, 2020</td>
                              <td>
                                <span className="text-danger">Danger</span>
                              </td>
                            </tr>
                            <tr>
                              <td>2757</td>
                              <td>Beau Barrera</td>
                              <td>Augue Incorporated</td>
                              <td>4583 Id St.</td>
                              <td>Jan 13, 2020</td>
                              <td>
                                <span className="text-success">Success</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
                  {/* simple table */}
                  {/*Expandable rows */}
                  <div className="col-md-6 my-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Color table rows</h5>
                        <p className="card-text">
                          Use contextual classes to color table rows or
                          individual cells.
                        </p>
                        <table className="table table-sm table-hover table-borderless">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Company</th>
                              <th>Address</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-warning">
                              <td>3224</td>
                              <td>Keith Baird</td>
                              <td>Enim Limited</td>
                              <td>901-6206 Cras Av.</td>
                              <td>Apr 24, 2019</td>
                              <td>
                                <span className="badge badge-pill badge-warning">
                                  Hold
                                </span>
                              </td>
                            </tr>
                            <tr className="table-success">
                              <td>3218</td>
                              <td>Graham Price</td>
                              <td>Nunc Lectus Incorporated</td>
                              <td>Ap #705-5389 Id St.</td>
                              <td>May 23, 2020</td>
                              <td>
                                <span className="badge badge-pill badge-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr className="table-warning">
                              <td>2651</td>
                              <td>Reuben Orr</td>
                              <td>Nisi Aenean Eget Limited</td>
                              <td>7425 Malesuada Rd.</td>
                              <td>Nov 4, 2019</td>
                              <td>
                                <span className="badge badge-pill badge-warning">
                                  Hold
                                </span>
                              </td>
                            </tr>
                            <tr className="table-danger">
                              <td>2636</td>
                              <td>Akeem Holder</td>
                              <td>Pellentesque Associates</td>
                              <td>896 Sodales St.</td>
                              <td>Mar 27, 2020</td>
                              <td>
                                <span className="badge badge-pill badge-danger">
                                  Danger
                                </span>
                              </td>
                            </tr>
                            <tr className="table-primary">
                              <td>2757</td>
                              <td>Beau Barrera</td>
                              <td>Augue Incorporated</td>
                              <td>4583 Id St.</td>
                              <td>Jan 13, 2020</td>
                              <td>
                                <span className="badge badge-pill badge-primary">
                                  Active
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Expandable rows */}
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

export default TableBasic;
