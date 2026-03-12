import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function SupportTicDetail() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="row align-items-center mb-4">
                  <div className="col">
                    <h2 className="h5 page-title">
                      <small className="text-muted text-uppercase">
                        Ticket
                      </small>
                      <br />
                      #342
                    </h2>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-secondary">
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Assign
                    </button>
                  </div>
                </div>{" "}
                {/* .row */}
                <div className="row my-4">
                  <div className="col-md-9">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title">
                          Donec id elit non mi porta gravida at eget metus.
                        </strong>
                        <span className="float-right">
                          <i className="fe fe-flag mr-2" />
                          <span className="badge badge-pill badge-success text-white">
                            Payment
                          </span>
                        </span>
                      </div>
                      <div className="card-body">
                        <dl className="row align-items-center mb-0">
                          <dt className="col-sm-2 mb-3 text-muted">
                            Reported by
                          </dt>
                          <dd className="col-sm-4 mb-3">
                            <strong>Brown Asher</strong>
                          </dd>
                          <dt className="col-sm-2 mb-3 text-muted">
                            Assigned to
                          </dt>
                          <dd className="col-sm-4 mb-3">
                            <strong>Kelley Sonya</strong>
                          </dd>
                        </dl>
                        <dl className="row mb-0">
                          <dt className="col-sm-2 mb-3 text-muted">Plan</dt>
                          <dd className="col-sm-4 mb-3">Basic</dd>
                          <dt className="col-sm-2 mb-3 text-muted">
                            Department
                          </dt>
                          <dd className="col-sm-4 mb-3">Support</dd>
                          <dt className="col-sm-2 mb-3 text-muted">Priority</dt>
                          <dd className="col-sm-4 mb-3">
                            <span className="badge badge-pill badge-danger">
                              High
                            </span>
                            <div className="dropdown d-inline">
                              <button
                                className="btn btn-sm p-0 dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Change Priority</span>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a className="dropdown-item" href="#">
                                  High
                                </a>
                                <a className="dropdown-item" href="#">
                                  Meddium
                                </a>
                                <a className="dropdown-item" href="#">
                                  Low
                                </a>
                              </div>
                            </div>
                          </dd>
                          <dt className="col-sm-2 mb-3 text-muted">Status</dt>
                          <dd className="col-sm-4 mb-3">
                            <span className="dot dot-md bg-warning mr-2" /> Open{" "}
                            <div className="dropdown d-inline">
                              <button
                                className="btn btn-sm p-0 dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Change status</span>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a className="dropdown-item" href="#">
                                  Close
                                </a>
                                <a className="dropdown-item" href="#">
                                  Assigned
                                </a>
                                <a className="dropdown-item" href="#">
                                  Wait
                                </a>
                              </div>
                            </div>
                          </dd>
                          <dt className="col-sm-2 mb-3 text-muted">
                            Created On
                          </dt>
                          <dd className="col-sm-4 mb-3">2020-04-21 00:38:38</dd>
                          <dt className="col-sm-2 mb-3 text-muted">
                            Last Update
                          </dt>
                          <dd className="col-sm-4 mb-3">2020-04-21 08:48:18</dd>
                          <dt className="col-sm-2 text-muted">Description</dt>
                          <dd className="col-sm-10">
                            {" "}
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus.{" "}
                          </dd>
                        </dl>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title">Ticket Thread</strong>
                        <span className="float-right">
                          <i className="fe fe-message-circle mr-2" />4
                        </span>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-center mb-4">
                          <div className="col-auto">
                            <div className="avatar avatar-sm mb-3 mx-4">
                              <img
                                src="./assets/avatars/face-3.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <strong>Hester Nissim</strong>
                            <div className="mb-2">
                              Fusce dapibus, tellus ac cursus commodo, tortor
                              mauris condimentum nibh, ut fermentum massa justo
                              sit amet risus.
                            </div>
                            <div className="card mb-3 bg-light w-50">
                              <div className="row no-gutters align-items-center">
                                <div className="col-md-2 text-center">
                                  <img
                                    src="./assets/products/p1.jpg"
                                    alt="..."
                                    className="img-fluid rounded m-1"
                                  />
                                </div>
                                <div className="col-md-10">
                                  <div className="card-body py-0">
                                    <p className="card-title mb-0">
                                      New screenshot-12.png
                                    </p>
                                    <div className="card-text my-0 text-muted small">
                                      <span className="mr-2">1.2M</span>
                                      <span className="mr-2">SVG</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <small className="text-muted">
                              2020-04-21 08:48:18
                            </small>
                          </div>
                          <div className="col-auto">
                            <span className="circle circle-sm bg-light">
                              <i className="fe fe-corner-down-left" />
                            </span>
                          </div>
                        </div>{" "}
                        {/* .row*/}
                        <div className="row align-items-center mb-4">
                          <div className="col-auto">
                            <div className="avatar avatar-sm mb-3 mx-4">
                              <img
                                src="./assets/avatars/face-4.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <strong>Kelley Sonya</strong>
                            <div className="mb-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus sollicitudin luctus pretium.{" "}
                              <br />
                              Pellentesque porta massa ac nibh finibus iaculis.
                              Maecenas vel interdum urna. Integer auctor
                              ultrices faucibus. Aliquam consequat et ligula nec
                              sodales.
                            </div>
                            <small className="text-muted">
                              2020-04-21 12:01:22
                            </small>
                          </div>
                          <div className="col-auto">
                            <span className="circle circle-sm bg-light">
                              <i className="fe fe-corner-down-left" />
                            </span>
                          </div>
                        </div>{" "}
                        {/* .row*/}
                        <hr className="my-4" />
                        <h6 className="mb-3">Response</h6>
                        <form>
                          <div className="form-group">
                            <label
                              htmlFor="exampleFormControlTextarea1"
                              className="sr-only"
                            >
                              Your Message
                            </label>
                            <textarea
                              className="form-control bg-light"
                              id="exampleFormControlTextarea1"
                              rows={2}
                              defaultValue={""}
                            />
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check form-check-inline ml-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
                                defaultValue="option1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox1"
                              >
                                Email Notification
                              </label>
                            </div>
                            <div className="flex-fill mr-2 text-right">
                              <a href="#" className="btn">
                                <i className="fe fe-upload" />
                              </a>
                              <a href="#" className="btn">
                                <i className="fe fe-at-sign" />
                              </a>
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md */}
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <h3 className="h5 mb-1">Integrations</h3>
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
                            Integer molestie lorem
                          </li>
                          <li className="my-1">
                            <i className="fe fe-file-text mr-2 text-muted" />
                            Facilisis in pretium
                          </li>
                          <li className="my-1">
                            <i className="fe fe-file-text mr-2 text-muted" />
                            Nulla volutpat aliquam velit
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* .col-md */}
                </div>{" "}
                {/* .col-md */}
              </div>
            </div>{" "}
            {/* .col-12 */}
          </div>{" "}
          {/* .row */}
        </main>
      </div>
    </>
  );
}

export default SupportTicDetail;
