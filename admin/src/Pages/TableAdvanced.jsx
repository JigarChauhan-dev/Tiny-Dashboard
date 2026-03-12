import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function TableAdvanced() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="row">
                  {/* Small table */}
                  <div className="col-md-12 my-4">
                    <h2 className="h4 mb-1">Customize table rendering</h2>
                    <p className="mb-3">
                      Additional table rendering with vertical border, rich
                      content formatting for cell
                    </p>
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="toolbar">
                          <form className="form">
                            <div className="form-row">
                              <div className="form-group col-auto mr-auto">
                                <label
                                  className="my-1 mr-2 sr-only"
                                  htmlFor="inlineFormCustomSelectPref1"
                                >
                                  Show
                                </label>
                                <select
                                  className="custom-select mr-sm-2"
                                  id="inlineFormCustomSelectPref1"
                                >
                                  <option value>...</option>
                                  <option value={1}>12</option>
                                  <option value={2} selected>
                                    32
                                  </option>
                                  <option value={3}>64</option>
                                  <option value={3}>128</option>
                                </select>
                              </div>
                              <div className="form-group col-auto">
                                <label htmlFor="search" className="sr-only">
                                  Search
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="search1"
                                  defaultValue
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* table */}
                        <table className="table table-borderless table-hover">
                          <thead>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="all2"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="all2"
                                  />
                                </div>
                              </td>
                              <th>ID</th>
                              <th>User</th>
                              <th>Company</th>
                              <th>Contact</th>
                              <th className="w-25">Bio</th>
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
                                    id={2474}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2474}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="avatar avatar-md">
                                  <img
                                    src="./assets/avatars/face-3.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <strong>Brown, Asher D.</strong>
                                </p>
                                <small className="mb-0 text-muted">2474</small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  Accumsan Consulting
                                </p>
                                <small className="mb-0 text-muted">
                                  Ap #331-7123 Lobortis Avenue
                                </small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <a href="#" className="text-muted">
                                    (958) 421-0798
                                  </a>
                                </p>
                                <small className="mb-0 text-muted">
                                  Nigeria
                                </small>
                              </td>
                              <td className="w-25">
                                <small className="text-muted">
                                  {" "}
                                  Egestas integer eget aliquet nibh praesent. In
                                  hac habitasse platea dictumst quisque sagittis
                                  purus.
                                </small>
                              </td>
                              <td className="text-muted">13/09/2020</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2786}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2786}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="avatar avatar-md">
                                  <img
                                    src="./assets/avatars/face-1.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <strong>Leblanc, Yoshio V.</strong>
                                </p>
                                <small className="mb-0 text-muted">2786</small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  Fringilla Ornare Placerat Consulting
                                </p>
                                <small className="mb-0 text-muted">
                                  287-8300 Nisl. St
                                </small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <a href="#" className="text-muted">
                                    (899) 881-3833
                                  </a>
                                </p>
                                <small className="mb-0 text-muted">
                                  Papua New Guinea
                                </small>
                              </td>
                              <td className="w-25">
                                <small className="text-muted">
                                  {" "}
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </small>
                              </td>
                              <td className="text-muted">04/05/2019</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2747}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2747}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="avatar avatar-md">
                                  <img
                                    src="./assets/avatars/face-2.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <strong>Hester, Nissim L.</strong>
                                </p>
                                <small className="mb-0 text-muted">2747</small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">Tristique Ltd</p>
                                <small className="mb-0 text-muted">
                                  4577 Cras St.
                                </small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <a href="#" className="text-muted">
                                    (977) 220-6518
                                  </a>
                                </p>
                                <small className="mb-0 text-muted">
                                  Central African Republic
                                </small>
                              </td>
                              <td className="w-25">
                                <small className="text-muted">
                                  {" "}
                                  Non tellus orci ac auctor augue. Elit at
                                  imperdiet dui accumsan sit.
                                </small>
                              </td>
                              <td className="text-muted">21/08/2019</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2639}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2639}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="avatar avatar-md">
                                  <img
                                    src="./assets/avatars/face-4.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <strong>Gardner, Leigh S.</strong>
                                </p>
                                <small className="mb-0 text-muted">2639</small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  Orci Luctus Et Inc.
                                </p>
                                <small className="mb-0 text-muted">
                                  P.O. Box 228, 7512 Lectus Ave
                                </small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <a href="#" className="text-muted">
                                    (537) 315-1481
                                  </a>
                                </p>
                                <small className="mb-0 text-muted">
                                  United Kingdom
                                </small>
                              </td>
                              <td className="w-25">
                                <small className="text-muted">
                                  {" "}
                                  Nunc pulvinar sapien et ligula ullamcorper
                                  malesuada proin. Neque convallis a cras semper
                                  auctor
                                </small>
                              </td>
                              <td className="text-muted">04/08/2019</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2238}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2238}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="avatar avatar-md">
                                  <img
                                    src="./assets/avatars/face-5.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <strong>Higgins, Uriah L.</strong>
                                </p>
                                <small className="mb-0 text-muted">2238</small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  Sit Amet Lorem Industries
                                </p>
                                <small className="mb-0 text-muted">
                                  Ap #377-5357 Sed Road
                                </small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <a href="#" className="text-muted">
                                    (238) 386-0247
                                  </a>
                                </p>
                                <small className="mb-0 text-muted">
                                  Canada
                                </small>
                              </td>
                              <td className="w-25">
                                <small className="text-muted">
                                  {" "}
                                  Libero id faucibus nisl tincidunt eget. Leo a
                                  diam sollicitudin tempor id.{" "}
                                </small>
                              </td>
                              <td className="text-muted">26/07/2020</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2152}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2152}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="avatar avatar-md">
                                  <img
                                    src="./assets/avatars/face-6.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <strong>Wheeler, Ralph F.</strong>
                                </p>
                                <small className="mb-0 text-muted">2152</small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  Suspendisse LLC
                                </p>
                                <small className="mb-0 text-muted">
                                  Ap #410-5363 Non, Avenue
                                </small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <a href="#" className="text-muted">
                                    (587) 675-3258
                                  </a>
                                </p>
                                <small className="mb-0 text-muted">Chad</small>
                              </td>
                              <td className="w-25">
                                <small className="text-muted">
                                  {" "}
                                  Libero id faucibus nisl tincidunt eget. Leo a
                                  diam sollicitudin tempor id.{" "}
                                </small>
                              </td>
                              <td className="text-muted">11/09/2019</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2488}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2488}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="avatar avatar-md">
                                  <img
                                    src="./assets/avatars/face-7.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <strong>Kelley, Sonya Y.</strong>
                                </p>
                                <small className="mb-0 text-muted">2488</small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  Dolor Incorporated
                                </p>
                                <small className="mb-0 text-muted">
                                  8250 Molestie St.
                                </small>
                              </td>
                              <td>
                                <p className="mb-0 text-muted">
                                  <a href="#" className="text-muted">
                                    (934) 582-9495
                                  </a>
                                </p>
                                <small className="mb-0 text-muted">
                                  British Indian Ocean Territory
                                </small>
                              </td>
                              <td className="w-25">
                                <small className="text-muted">
                                  {" "}
                                  A lacus vestibulum sed arcu non odio euismod
                                  lacinia. In tellus integer feugiat
                                  scelerisque.
                                </small>
                              </td>
                              <td className="text-muted">30/03/2021</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <nav
                          aria-label="Table Paging"
                          className="mb-0 text-muted"
                        >
                          <ul className="pagination justify-content-center mb-0">
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
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
                      </div>
                    </div>
                  </div>{" "}
                  {/* customized table */}
                </div>{" "}
                {/* end section */}
                <div className="row">
                  {/* Striped rows */}
                  <div className="col-md-12 my-4">
                    <h2 className="h4 mb-1">Grouped header &amp; rows</h2>
                    <p className="mb-4">
                      Customized table based on Bootstrap with additional
                      elements and more functions
                    </p>
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="toolbar row mb-3">
                          <div className="col">
                            <form className="form-inline">
                              <div className="form-row">
                                <div className="form-group col-auto">
                                  <label htmlFor="search" className="sr-only">
                                    Search
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="search"
                                    defaultValue
                                    placeholder="Search"
                                  />
                                </div>
                                <div className="form-group col-auto ml-3">
                                  <label
                                    className="my-1 mr-2 sr-only"
                                    htmlFor="inlineFormCustomSelectPref"
                                  >
                                    Status
                                  </label>
                                  <select
                                    className="custom-select my-1 mr-sm-2"
                                    id="inlineFormCustomSelectPref"
                                  >
                                    <option selected>Choose...</option>
                                    <option value={1}>Processing</option>
                                    <option value={2}>Success</option>
                                    <option value={3}>Pending</option>
                                    <option value={3}>Hold</option>
                                  </select>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="col ml-auto">
                            <div className="dropdown float-right">
                              <button
                                className="btn btn-primary float-right ml-3"
                                type="button"
                              >
                                Add more +
                              </button>
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="actionMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {" "}
                                Action{" "}
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="actionMenuButton"
                              >
                                <a className="dropdown-item" href="#">
                                  Export
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* table */}
                        <table className="table table-bordered">
                          <thead>
                            <tr role="row">
                              <th colSpan={3}>Orders</th>
                              <th colSpan={4}>Billing</th>
                              <th colSpan={3}>State</th>
                            </tr>
                            <tr role="row">
                              <th>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="all"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="all"
                                  />
                                </div>
                              </th>
                              <th>ID</th>
                              <th>Purchase Date</th>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Address</th>
                              <th>Total</th>
                              <th>Status</th>
                              <th>Tracking #</th>
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
                                    id={4574}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={4574}
                                  />
                                </div>
                              </td>
                              <td>4574</td>
                              <td>2019-09-11 10:22:04</td>
                              <td>Kitra Knapp</td>
                              <td>(132) 339-7423</td>
                              <td>P.O. Box 944, 4739 Suspendisse Road</td>
                              <td>$68.79</td>
                              <td>
                                <span className="badge badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td />
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2132}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2132}
                                  />
                                </div>
                              </td>
                              <td>2132</td>
                              <td>2019-08-23 12:28:40</td>
                              <td>Blake Orr</td>
                              <td>(257) 565-4706</td>
                              <td>P.O. Box 939, 9156 Sollicitudin St.</td>
                              <td>$84.24</td>
                              <td>
                                <span className="badge badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td />
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr role="group" className="bg-light">
                              <td colSpan={10}>
                                <strong>Shipped</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2576}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2576}
                                  />
                                </div>
                              </td>
                              <td>2576</td>
                              <td>2020-07-14 17:18:27</td>
                              <td>Amber Rice</td>
                              <td>(791) 898-8806</td>
                              <td>P.O. Box 724, 3385 Vel Ave</td>
                              <td>$37.00</td>
                              <td>
                                <span className="badge badge-success">
                                  Success
                                </span>
                              </td>
                              <td>487385-5144</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={2397}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={2397}
                                  />
                                </div>
                              </td>
                              <td>2397</td>
                              <td>2020-12-25 13:35:39</td>
                              <td>Fletcher Petty</td>
                              <td>(115) 625-5813</td>
                              <td>8907 Orci St.</td>
                              <td>$75.69</td>
                              <td>
                                <span className="badge badge-success">
                                  Success
                                </span>
                              </td>
                              <td>039606-5955</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr role="group" className="bg-light">
                              <td colSpan={10}>
                                <strong>Return</strong>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={4028}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={4028}
                                  />
                                </div>
                              </td>
                              <td>4028</td>
                              <td>2021-04-11 22:33:47</td>
                              <td>Kasimir Carr</td>
                              <td>(266) 991-0479</td>
                              <td>489-624 Quis St.</td>
                              <td>$86.89</td>
                              <td>
                                <span className="badge badge-danger">Hold</span>
                              </td>
                              <td />
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={3782}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={3782}
                                  />
                                </div>
                              </td>
                              <td>3782</td>
                              <td>2020-03-01 10:44:03</td>
                              <td>Daria Frank</td>
                              <td>(599) 361-7999</td>
                              <td>Ap #875-5778 Massa. Av.</td>
                              <td>$38.04</td>
                              <td>
                                <span className="badge badge-primary">
                                  Processing
                                </span>
                              </td>
                              <td>072140-0703</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={3881}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={3881}
                                  />
                                </div>
                              </td>
                              <td>3881</td>
                              <td>2019-12-17 00:40:24</td>
                              <td>Herrod Byrd</td>
                              <td>(878) 901-7269</td>
                              <td>P.O. Box 107, 3720 Vitae, Ave</td>
                              <td>$73.38</td>
                              <td>
                                <span className="badge badge-primary">
                                  Processing
                                </span>
                              </td>
                              <td>047336-4370</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <nav
                          aria-label="Table Paging"
                          className="mb-0 text-muted"
                        >
                          <ul className="pagination justify-content-end mb-0">
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li className="page-item">
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
                      </div>
                    </div>
                  </div>{" "}
                  {/* simple table */}
                </div>{" "}
                {/* end section */}
                <div className="row">
                  <div className="col-md-12 my-4">
                    <h2 className="h4 mb-1">Expandable rows</h2>
                    <p className="mb-3">
                      Child rows with additional detailed information
                    </p>
                    <div className="card shadow">
                      <div className="card-body">
                        {/* table */}
                        <table className="table table-hover table-borderless border-v">
                          <thead className="thead-dark">
                            <tr>
                              <th>Invoice No</th>
                              <th>Invoice Date</th>
                              <th>Order #</th>
                              <th>Bill To</th>
                              <th>Status</th>
                              <th>Grand Total</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-2474"
                              data-toggle="collapse"
                              data-parent="#c-2474"
                              href="#collap-2474"
                            >
                              <td>3599</td>
                              <td>2020-09-12 11:21:03</td>
                              <td>3951</td>
                              <td>Alexander Ellis</td>
                              <td>
                                <span className="badge badge-pill badge-success mr-2">
                                  S
                                </span>
                                <small className="text-muted">Paid</small>
                              </td>
                              <td>$37.39</td>
                              <td>$80.11</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-2474"
                              className="collapse show in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">
                                    Fringilla Ornare Consulting
                                  </dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">
                                    287-8300 Nisl. St.
                                  </dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(899) 881-3833</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">Papua New Guinea</dd>
                                </dl>
                              </td>
                            </tr>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-3954"
                              data-toggle="collapse"
                              data-parent="#c-3954"
                              href="#collap-3954"
                            >
                              <td>3954</td>
                              <td>2020-10-11 19:09:12</td>
                              <td>4038</td>
                              <td>Casey Caldwell</td>
                              <td>
                                <span className="badge badge-pill badge-success mr-2">
                                  S
                                </span>
                                <small className="text-muted">Paid</small>
                              </td>
                              <td>$30.74</td>
                              <td>$46.14</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-3954"
                              className="collapse in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">Tristique Ltd</dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">4577 Cras St.</dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(977) 220-6518</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">
                                    Central African Republic
                                  </dd>
                                </dl>
                              </td>
                            </tr>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-2429"
                              data-toggle="collapse"
                              data-parent="#c-2429"
                              href="#collap-2429"
                            >
                              <td>2429</td>
                              <td>2020-11-26 02:45:30</td>
                              <td>4603</td>
                              <td>Jack Adams</td>
                              <td>
                                <span className="badge badge-pill badge-warning mr-2">
                                  W
                                </span>
                                <small className="text-muted">Pending</small>
                              </td>
                              <td>$20.84</td>
                              <td>$28.51</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-2429"
                              className="collapse in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">
                                    Orci Luctus Et Inc.
                                  </dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">
                                    P.O. Box 228, 7512 Lectus Ave
                                  </dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(537) 315-1481</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">
                                    Bonaire, Sint Eustatius and Sabac
                                  </dd>
                                </dl>
                              </td>
                            </tr>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-3987"
                              data-toggle="collapse"
                              data-parent="#c-3987"
                              href="#collap-3987"
                            >
                              <td>3987</td>
                              <td>2020-02-13 19:29:45</td>
                              <td>4261</td>
                              <td>Samantha Hansen</td>
                              <td>
                                <span className="badge badge-pill badge-success mr-2">
                                  S
                                </span>
                                <small className="text-muted">Paid</small>
                              </td>
                              <td>$83.19</td>
                              <td>$48.48</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-3987"
                              className="collapse in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">
                                    Ap #377-5357 Sed Road
                                  </dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">
                                    P.O. Box 228, 7512 Lectus Ave
                                  </dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(238) 386-0247</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">Canada</dd>
                                </dl>
                              </td>
                            </tr>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-3165"
                              data-toggle="collapse"
                              data-parent="#c-3987"
                              href="#collap-3165"
                            >
                              <td>3165</td>
                              <td>2020-05-05 22:33:28</td>
                              <td>3308</td>
                              <td>Carla Ochoa</td>
                              <td>
                                <span className="badge badge-pill badge-primary mr-2">
                                  P
                                </span>
                                <small className="text-muted">Invoiced</small>
                              </td>
                              <td>$99.92</td>
                              <td>$38.62</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-3165"
                              className="collapse in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">Suspendisse LLC</dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">
                                    Ap #410-5363 Non, Avenue
                                  </dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(587) 675-3258</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">Chad</dd>
                                </dl>
                              </td>
                            </tr>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-5429"
                              data-toggle="collapse"
                              data-parent="#c-5429"
                              href="#collap-5429"
                            >
                              <td>5429</td>
                              <td>2020-11-26 02:45:30</td>
                              <td>4603</td>
                              <td>Jack Adams</td>
                              <td>
                                <span className="badge badge-pill badge-warning mr-2">
                                  W
                                </span>
                                <small className="text-muted">Pending</small>
                              </td>
                              <td>$20.84</td>
                              <td>$28.51</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-5429"
                              className="collapse in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">
                                    Dolor Incorporated
                                  </dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">
                                    8250 Molestie St.
                                  </dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(934) 582-9495</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">British</dd>
                                </dl>
                              </td>
                            </tr>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-3951"
                              data-toggle="collapse"
                              data-parent="#c-3951"
                              href="#collap-3951"
                            >
                              <td>3951</td>
                              <td>2020-10-11 19:09:12</td>
                              <td>4038</td>
                              <td>Casey Caldwell</td>
                              <td>
                                <span className="badge badge-pill badge-success mr-2">
                                  S
                                </span>
                                <small className="text-muted">Paid</small>
                              </td>
                              <td>$30.74</td>
                              <td>$46.14</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-3951"
                              className="collapse in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">Urna Et PC</dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">3132 Mi Av.</dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(459) 982-1284</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">Burkina Faso</dd>
                                </dl>
                              </td>
                            </tr>
                            <tr
                              className="accordion-toggle collapsed"
                              id="c-3599"
                              data-toggle="collapse"
                              data-parent="#c-3599"
                              href="#collap-3599"
                            >
                              <td>3599</td>
                              <td>2020-09-12 11:21:03</td>
                              <td>3951</td>
                              <td>Alexander Ellis</td>
                              <td>
                                <span className="badge badge-pill badge-primary mr-2">
                                  P
                                </span>
                                <small className="text-muted">Invoiced</small>
                              </td>
                              <td>$37.39</td>
                              <td>$80.11</td>
                              <td>
                                <button
                                  className="btn btn-sm dropdown-toggle more-horizontal"
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
                              </td>
                            </tr>
                            <tr
                              id="collap-3599"
                              className="collapse in p-3 bg-light"
                            >
                              <td colSpan={8}>
                                <dl className="row mb-0 mt-1">
                                  <dt className="col-sm-1">Company</dt>
                                  <dd className="col-sm-2">Mi Consulting</dd>
                                  <dt className="col-sm-1">Address</dt>
                                  <dd className="col-sm-2">921-6311 Nam Av.</dd>
                                  <dt className="col-sm-1">Phone</dt>
                                  <dd className="col-sm-2">(759) 501-2397</dd>
                                  <dt className="col-sm-1 text-truncate">
                                    Region
                                  </dt>
                                  <dd className="col-sm-2">Singapore</dd>
                                </dl>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default TableAdvanced;
