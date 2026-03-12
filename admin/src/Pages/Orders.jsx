import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function Orders() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="h3 mb-3 page-title">Orders</h2>
                <div className="row mb-4 items-align-center">
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
                    <span className="small bg-white border py-1 px-2 rounded mr-2 d-none d-lg-inline">
                      <a href="#" className="text-muted">
                        <i className="fe fe-x mx-1" />
                      </a>
                      <span className="text-muted">
                        Status : <strong>Pending</strong>
                      </span>
                    </span>
                    <span className="small bg-white border py-1 px-2 rounded mr-2 d-none d-lg-inline">
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
                {/* Slide Modal */}
                <div
                  className="modal fade modal-slide"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="defaultModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="defaultModalLabel">
                          Filters
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="fe fe-x fe-12" />
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="p-2">
                          <div className="form-group my-4">
                            <p className="mb-2">
                              <strong>Regions</strong>
                            </p>
                            <label
                              htmlFor="multi-select2"
                              className="sr-only"
                            />
                            <select
                              className="form-control select2-multi"
                              id="multi-select2"
                            >
                              <optgroup label="Mountain Time Zone">
                                <option value="AZ">Arizona</option>
                                <option value="CO">Colorado</option>
                                <option value="ID">Idaho</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NM">New Mexico</option>
                                <option value="ND">North Dakota</option>
                                <option value="UT">Utah</option>
                                <option value="WY">Wyoming</option>
                              </optgroup>
                              <optgroup label="Central Time Zone">
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="IL">Illinois</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="OK">Oklahoma</option>
                                <option value="SD">South Dakota</option>
                                <option value="TX">Texas</option>
                                <option value="TN">Tennessee</option>
                                <option value="WI">Wisconsin</option>
                              </optgroup>
                            </select>
                          </div>{" "}
                          {/* form-group */}
                          <div className="form-group my-4">
                            <p className="mb-2">
                              <strong>Payment</strong>
                            </p>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                Paypal
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck2"
                              >
                                Credit Card
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1-1"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                Wire Transfer
                              </label>
                            </div>
                          </div>{" "}
                          {/* form-group */}
                          <div className="form-group my-4">
                            <p className="mb-2">
                              <strong>Types</strong>
                            </p>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio1"
                              >
                                End users
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio2"
                                name="customRadio"
                                className="custom-control-input"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customRadio2"
                              >
                                Whole Sales
                              </label>
                            </div>
                          </div>{" "}
                          {/* form-group */}
                          <div className="form-group my-4">
                            <p className="mb-2">
                              <strong>Completed</strong>
                            </p>
                            <div className="custom-control custom-switch">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitch1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customSwitch1"
                              >
                                Include
                              </label>
                            </div>
                          </div>{" "}
                          {/* form-group */}
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn mb-2 btn-primary btn-block"
                        >
                          Apply
                        </button>
                        <button
                          type="button"
                          className="btn mb-2 btn-secondary btn-block"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table border table-hover bg-white">
                  <thead>
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
                      <th>Ship To</th>
                      <th>Total</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1331</td>
                      <td>2020-12-26 01:32:21</td>
                      <td>Kasimir Lindsey</td>
                      <td>(697) 486-2101</td>
                      <td>996-3523 Et Ave</td>
                      <td>$3.64</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1156</td>
                      <td>2020-04-21 00:38:38</td>
                      <td>Melinda Levy</td>
                      <td>(748) 927-4423</td>
                      <td>Ap #516-8821 Vitae Street</td>
                      <td>$4.18</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-warning mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1038</td>
                      <td>2019-06-25 19:13:36</td>
                      <td>Aubrey Sweeney</td>
                      <td>(422) 405-2736</td>
                      <td>Ap #598-7581 Tellus Av.</td>
                      <td>$4.98</td>
                      <td>Credit Card </td>
                      <td>
                        <span className="dot dot-lg bg-primary mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1227</td>
                      <td>2021-01-22 13:28:00</td>
                      <td>Timon Bauer</td>
                      <td>(690) 965-1551</td>
                      <td>840-2188 Placerat, Rd.</td>
                      <td>$3.46</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-primary mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1956</td>
                      <td>2019-11-11 16:23:17</td>
                      <td>Kelly Barrera</td>
                      <td>(117) 625-6737</td>
                      <td>816 Ornare, Street</td>
                      <td>$4.16</td>
                      <td>Credit Card </td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1669</td>
                      <td>2021-04-12 07:07:13</td>
                      <td>Kellie Roach</td>
                      <td>(422) 748-1761</td>
                      <td>5432 A St.</td>
                      <td>$3.53</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1909</td>
                      <td>2020-05-14 00:23:11</td>
                      <td>Lani Diaz</td>
                      <td>(767) 486-2253</td>
                      <td>3328 Ut Street</td>
                      <td>$4.29</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-warning mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1234</td>
                      <td>2020-01-25 07:56:57</td>
                      <td>Hadley Raymond</td>
                      <td>(356) 732-2834</td>
                      <td>917-1461 Aliquam St.</td>
                      <td>$3.94</td>
                      <td>Credit Card </td>
                      <td>
                        <span className="dot dot-lg bg-primary mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1085</td>
                      <td>2020-10-08 20:15:34</td>
                      <td>Simone Wright</td>
                      <td>(545) 742-5090</td>
                      <td>877-711 Dolor Rd.</td>
                      <td>$3.36</td>
                      <td>Credit Card </td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1872</td>
                      <td>2020-06-10 19:57:09</td>
                      <td>Lucas Bush</td>
                      <td>(720) 141-7318</td>
                      <td>6421 Integer Rd.</td>
                      <td>$3.17</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1511</td>
                      <td>2019-07-18 10:48:33</td>
                      <td>Grant Maldonado</td>
                      <td>(276) 751-9198</td>
                      <td>P.O. Box 968, 3979 Duis Rd.</td>
                      <td>$2.74</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1800</td>
                      <td>2019-07-14 04:31:07</td>
                      <td>Kiayada Reid</td>
                      <td>(910) 140-7500</td>
                      <td>6000 Phasellus St.</td>
                      <td>$2.70</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-warning mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1296</td>
                      <td>2019-10-09 13:56:11</td>
                      <td>Flynn Collins</td>
                      <td>(580) 287-6157</td>
                      <td>P.O. Box 734, 7447 Curabitur Street</td>
                      <td>$4.13</td>
                      <td>Credit Card </td>
                      <td>
                        <span className="dot dot-lg bg-warning mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1582</td>
                      <td>2019-11-14 14:28:52</td>
                      <td>Leonard Floyd</td>
                      <td>(530) 682-3320</td>
                      <td>5901 Rhoncus Rd.</td>
                      <td>$3.20</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1371</td>
                      <td>2021-04-12 16:52:25</td>
                      <td>Noelani Fitzpatrick</td>
                      <td>(143) 737-5060</td>
                      <td>Ap #826-9238 Pellentesque Rd.</td>
                      <td>$2.03</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-warning mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1437</td>
                      <td>2019-08-23 23:18:12</td>
                      <td>Fallon Rogers</td>
                      <td>(345) 430-9053</td>
                      <td>1531 Risus Av.</td>
                      <td>$2.89</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1242</td>
                      <td>2019-12-08 07:02:25</td>
                      <td>Zane Jackson</td>
                      <td>(327) 142-0897</td>
                      <td>P.O. Box 688, 4186 Feugiat Rd.</td>
                      <td>$3.25</td>
                      <td> Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" />
                        </div>
                      </td>
                      <td>1573</td>
                      <td>2020-01-14 01:04:42</td>
                      <td>Bryar Reilly</td>
                      <td>(873) 448-3021</td>
                      <td>745-3818 Vitae, Ave</td>
                      <td>$2.06</td>
                      <td>Credit Card </td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm dropdown-toggle more-vertical"
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

export default Orders;
