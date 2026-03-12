import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function FileList() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Aside/>
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="row align-items-center my-4">
                  <div className="col">
                    <h2 className="page-title">Files</h2>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-lg btn-primary">
                      <span className="fe fe-plus fe-16 mr-3" />
                      New
                    </button>
                  </div>
                </div>
                <h6 className="mb-3">Quick Access</h6>
                <div className="card-deck mb-4">
                  <div className="card border-0 bg-transparent">
                    <img
                      src="./assets/products/p4.jpg"
                      alt="..."
                      className="card-img-top img-fluid rounded"
                    />
                    <div className="card-body">
                      <h5 className="h6 card-title mb-1">Fusion Backpack</h5>
                      <p className="card-text">
                        <span className="badge badge-light text-muted mr-2">
                          1.2M
                        </span>
                        <span className="badge badge-pill badge-light text-muted">
                          SVG
                        </span>
                      </p>
                    </div>
                  </div>{" "}
                  {/* .card */}
                  <div className="card border-0 bg-transparent">
                    <img
                      src="./assets/products/p1.jpg"
                      alt="..."
                      className="card-img-top img-fluid rounded"
                    />
                    <div className="card-body">
                      <h5 className="h6 card-title mb-1">Luma hoodies</h5>
                      <p className="card-text">
                        <span className="badge badge-light text-muted mr-2">
                          1.2M
                        </span>
                        <span className="badge badge-pill badge-light text-muted">
                          PNG
                        </span>
                      </p>
                    </div>
                  </div>{" "}
                  {/* .card */}
                  <div className="card border-0 bg-transparent">
                    <img
                      src="./assets/products/p2.jpg"
                      alt="..."
                      className="card-img-top img-fluid rounded"
                    />
                    <div className="card-body">
                      <h5 className="h6 card-title mb-1">Luma shorts</h5>
                      <p className="card-text">
                        <span className="badge badge-light text-muted mr-2">
                          1.2M
                        </span>
                        <span className="badge badge-pill badge-light text-muted">
                          SVG
                        </span>
                      </p>
                    </div>
                  </div>{" "}
                  {/* .card */}
                  <div className="card border-0 bg-transparent">
                    <img
                      src="./assets/products/p3.jpg"
                      alt="..."
                      className="card-img-top img-fluid rounded"
                    />
                    <div className="card-body">
                      <h5 className="h6 card-title mb-1">Brown Trousers</h5>
                      <p className="card-text">
                        <span className="badge badge-light text-muted mr-2">
                          1.2M
                        </span>
                        <span className="badge badge-pill badge-light text-muted">
                          SVG
                        </span>
                      </p>
                    </div>
                  </div>{" "}
                  {/* .card */}
                  <div className="card border-0 bg-transparent">
                    <img
                      src="./assets/products/p3.jpg"
                      alt="..."
                      className="card-img-top img-fluid rounded"
                    />
                    <div className="card-body">
                      <h5 className="h6 card-title mb-1">Brown Trousers</h5>
                      <p className="card-text">
                        <span className="badge badge-light text-muted mr-2">
                          1.2M
                        </span>
                        <span className="badge badge-pill badge-light text-muted">
                          SVG
                        </span>
                      </p>
                    </div>
                  </div>{" "}
                  {/* .card */}
                </div>{" "}
                {/* .card-deck */}
                <div className="row align-items-center mb-3 border-bottom no-gutters">
                  <div className="col">
                    <ul
                      className="nav nav-tabs border-0"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Recent files
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Documents
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Photos
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-sm">
                      <i className="fe fe-16 fe-grid text-muted" />
                    </button>
                    <button type="button" className="btn btn-sm">
                      <i className="fe fe-16 fe-list text-muted" />
                    </button>
                  </div>
                </div>
                <table className="table table-borderless table-striped">
                  <thead>
                    <tr>
                      <th />
                      <th className="w-50">Name</th>
                      <th>Owner</th>
                      <th>Last Update</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="circle circle-sm bg-light">
                          <span className="fe fe-folder fe-16 text-muted" />
                        </div>
                        <span className="dot dot-md bg-success mr-1" />
                      </td>
                      <th scope="row">
                        {" "}
                        Admin Template Components
                        <br />
                        <span className="badge badge-light text-muted">
                          Folder
                        </span>
                      </th>
                      <td className="text-muted">Penelope Roy</td>
                      <td className="text-muted">Mar 17, 2020</td>
                      <td>
                        <div className="file-action">
                          <button
                            type="button"
                            className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-chevrons-right fe-12 mr-4" />
                              Move
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-copy fe-12 mr-4" />
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-edit-3 fe-12 mr-4" />
                              Rename
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-delete fe-12 mr-4" />
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-share fe-12 mr-4" />
                              Share
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-download fe-12 mr-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="circle circle-sm bg-light">
                          <span className="fe fe-archive fe-16 text-muted" />
                        </div>
                        <span className="dot dot-md bg-warning mr-1" />
                      </td>
                      <th scope="row">
                        {" "}
                        Template
                        <br />
                        <span className="badge badge-light text-muted mr-2">
                          2.2M
                        </span>
                        <span className="badge badge-light text-muted">
                          Zip
                        </span>
                      </th>
                      <td className="text-muted"> Cade Beard </td>
                      <td className="text-muted">Aug 20, 2020</td>
                      <td>
                        <div className="file-action">
                          <button
                            type="button"
                            className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-chevrons-right fe-12 mr-4" />
                              Move
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-copy fe-12 mr-4" />
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-edit-3 fe-12 mr-4" />
                              Rename
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-delete fe-12 mr-4" />
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-share fe-12 mr-4" />
                              Share
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-download fe-12 mr-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="circle circle-sm bg-light">
                          <span className="fe fe-film fe-16 text-muted" />
                        </div>
                        <span className="dot dot-md bg-success mr-1" />
                      </td>
                      <th scope="row">
                        {" "}
                        Creative Logo
                        <br />
                        <span className="badge badge-light text-muted mr-2">
                          1G
                        </span>
                        <span className="badge badge-light text-muted">
                          Mp4
                        </span>
                      </th>
                      <td className="text-muted">Whilemina Pate</td>
                      <td className="text-muted">Oct 10, 2019</td>
                      <td>
                        <div className="file-action">
                          <button
                            type="button"
                            className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-chevrons-right fe-12 mr-4" />
                              Move
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-copy fe-12 mr-4" />
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-edit-3 fe-12 mr-4" />
                              Rename
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-delete fe-12 mr-4" />
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-share fe-12 mr-4" />
                              Share
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-download fe-12 mr-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="circle circle-sm bg-light">
                          <span className="fe fe-folder fe-16 text-muted" />
                        </div>
                        <span className="dot dot-md bg-primary mr-1" />
                      </td>
                      <th scope="row">
                        {" "}
                        Bootstrap
                        <br />
                        <span className="badge badge-light text-muted">
                          Folder
                        </span>
                      </th>
                      <td className="text-muted">Lionel Carney</td>
                      <td className="text-muted">Jan 20, 2021</td>
                      <td>
                        <div className="file-action">
                          <button
                            type="button"
                            className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-chevrons-right fe-12 mr-4" />
                              Move
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-copy fe-12 mr-4" />
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-edit-3 fe-12 mr-4" />
                              Rename
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-delete fe-12 mr-4" />
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-share fe-12 mr-4" />
                              Share
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-download fe-12 mr-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5}>
                        <span className="small text-muted text-uppercase">
                          Yesterday
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="circle circle-sm bg-light">
                          <span className="fe fe-file-text fe-16 text-muted" />
                        </div>
                        <span className="dot dot-md bg-secondary mr-1" />
                      </td>
                      <th scope="row">
                        {" "}
                        Template
                        <br />
                        <span className="badge badge-light text-muted mr-2">
                          120K
                        </span>
                        <span className="badge badge-light text-muted">
                          Text
                        </span>
                      </th>
                      <td className="text-muted">Nayda Delacruz</td>
                      <td className="text-muted">Sep 19, 2020</td>
                      <td>
                        <div className="file-action">
                          <button
                            type="button"
                            className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-chevrons-right fe-12 mr-4" />
                              Move
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-copy fe-12 mr-4" />
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-edit-3 fe-12 mr-4" />
                              Rename
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-delete fe-12 mr-4" />
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-share fe-12 mr-4" />
                              Share
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-download fe-12 mr-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="circle circle-sm bg-light">
                          <span className="fe fe-pen-tool fe-16 text-muted" />
                        </div>
                        <span className="dot dot-md bg-success mr-1" />
                      </td>
                      <th scope="row">
                        {" "}
                        Tiny Admin Homepagge UI
                        <br />
                        <span className="badge badge-light text-muted mr-2">
                          5M
                        </span>
                        <span className="badge badge-light text-muted">
                          PSD
                        </span>
                      </th>
                      <td className="text-muted">Leilani Larson</td>
                      <td className="text-muted">Feb 5, 2020</td>
                      <td>
                        <div className="file-action">
                          <button
                            type="button"
                            className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-chevrons-right fe-12 mr-4" />
                              Move
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-copy fe-12 mr-4" />
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-edit-3 fe-12 mr-4" />
                              Rename
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-delete fe-12 mr-4" />
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-share fe-12 mr-4" />
                              Share
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-download fe-12 mr-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="circle circle-sm bg-light">
                          <span className="fe fe-file fe-16 text-muted" />
                        </div>
                        <span className="dot dot-md bg-warning mr-1" />
                      </td>
                      <th scope="row">
                        {" "}
                        Index page convverted
                        <br />
                        <span className="badge badge-light text-muted mr-2">
                          1M
                        </span>
                        <span className="badge badge-light text-muted">
                          HTML
                        </span>
                      </th>
                      <td className="text-muted">Dennis Pollard</td>
                      <td className="text-muted">Oct 30, 2019</td>
                      <td>
                        <div className="file-action">
                          <button
                            type="button"
                            className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-chevrons-right fe-12 mr-4" />
                              Move
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-copy fe-12 mr-4" />
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-edit-3 fe-12 mr-4" />
                              Rename
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-delete fe-12 mr-4" />
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-share fe-12 mr-4" />
                              Share
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fe fe-download fe-12 mr-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default FileList;
