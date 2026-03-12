import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function Timeline() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card card-fill timeline">
                  <div className="card-header">
                    <strong className="card-title">Recent Activity</strong>
                    <a className="float-right small text-muted" href="#!">
                      View all
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="text-uppercase text-muted mb-4">Today</h6>
                    <div className="pb-3 timeline-item item-primary">
                      <div className="pl-5">
                        <div className="mb-1">
                          <strong>@Brown Asher</strong>
                          <span className="text-muted small mx-2">
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
                        <div className="mb-3">
                          <strong>@Hester Nissim</strong>
                          <span className="text-muted small mx-2">
                            has upload new files to
                          </span>
                          <strong>Tiny Admin</strong>
                        </div>
                        <div className="row mb-3">
                          <div className="col-1">
                            <img
                              src="./assets/products/p1.jpg"
                              alt="..."
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-1">
                            <img
                              src="./assets/products/p2.jpg"
                              alt="..."
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-1">
                            <img
                              src="./assets/products/p3.jpg"
                              alt="..."
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-1">
                            <img
                              src="./assets/products/p4.jpg"
                              alt="..."
                              className="img-fluid rounded"
                            />
                          </div>
                        </div>
                        <p className="small text-muted">
                          Front-End Development{" "}
                          <span className="badge badge-light">1h ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="pb-3 timeline-item item-success">
                      <div className="pl-5">
                        <div className="mb-3">
                          <strong>@Kelley Sonya</strong>
                          <span className="text-muted small mx-2">
                            has commented on
                          </span>
                          <strong>Advanced table</strong>
                        </div>
                        <div className="card d-inline-flex mb-2">
                          <div className="card-body bg-light py-2 px-3">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer dignissim nulla eu quam cursus
                            placerat. Vivamus non odio ullamcorper, lacinia ante
                            nec, blandit leo.{" "}
                          </div>
                        </div>
                        <p />
                        <p className="small text-muted">
                          Back-End Development{" "}
                          <span className="badge badge-light">1h ago</span>
                        </p>
                      </div>
                    </div>
                    <h6 className="text-uppercase text-muted mb-4">
                      Yesterday
                    </h6>
                    <div className="pb-3 timeline-item item-warning">
                      <div className="pl-5">
                        <div className="mb-3">
                          <strong>@Fletcher Everett</strong>
                          <span className="text-muted small mx-2">
                            created new group for
                          </span>
                          <strong>Tiny Admin</strong>
                        </div>
                        <ul className="avatars-list mb-3">
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
                        <div className="mb-3">
                          <strong>@Bertha Ball</strong>
                          <span className="text-muted small mx-2">
                            has commented on
                          </span>
                          <strong>Advanced table</strong>
                        </div>
                        <div className="card d-inline-flex mb-2">
                          <div className="card-body bg-light py-2 px-3">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer dignissim nulla eu quam cursus
                            placerat. Vivamus non odio ullamcorper, lacinia ante
                            nec, blandit leo.{" "}
                          </div>
                        </div>
                        <p />
                        <p className="small text-muted">
                          Back-End Development{" "}
                          <span className="badge badge-light">1h ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="pb-3 timeline-item item-danger">
                      <div className="pl-5">
                        <div className="mb-3">
                          <strong>@Lillith Joseph</strong>
                          <span className="text-muted small mx-2">
                            has upload new files to
                          </span>
                          <strong>Tiny Admin</strong>
                        </div>
                        <div className="row mb-3">
                          <div className="col-1">
                            <img
                              src="./assets/products/p4.jpg"
                              alt="..."
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-1">
                            <img
                              src="./assets/products/p1.jpg"
                              alt="..."
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-1">
                            <img
                              src="./assets/products/p2.jpg"
                              alt="..."
                              className="img-fluid rounded"
                            />
                          </div>
                        </div>
                        <p className="small text-muted">
                          Front-End Development{" "}
                          <span className="badge badge-light">1h ago</span>
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* / .card-body */}
                </div>{" "}
                {/* / .card */}
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

export default Timeline;
