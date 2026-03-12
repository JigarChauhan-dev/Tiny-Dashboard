import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function Profile() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="h3 mb-4 page-title">Profile</h2>
                <div className="row mt-5 align-items-center">
                  <div className="col-md-3 text-center mb-5">
                    <div className="avatar avatar-xl">
                      <img
                        src="./assets/avatars/face-1.jpg"
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <h4 className="mb-1">Brown, Asher</h4>
                        <p className="small mb-3">
                          <span className="badge badge-dark">
                            New York, USA
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-7">
                        <p className="text-muted">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris blandit nisl ullamcorper, rutrum metus
                          in, congue lectus. In hac habitasse platea dictumst.
                          Cras urna quam, malesuada vitae risus at, pretium
                          blandit sapien.{" "}
                        </p>
                      </div>
                      <div className="col">
                        <p className="small mb-0 text-muted">
                          Nec Urna Suscipit Ltd
                        </p>
                        <p className="small mb-0 text-muted">
                          P.O. Box 464, 5975 Eget Avenue
                        </p>
                        <p className="small mb-0 text-muted">(537) 315-1481</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-4">
                    <div className="card mb-4 shadow">
                      <div className="card-body my-n3">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                              <i className="fe fe-user fe-24 text-primary" />
                            </span>
                          </div>{" "}
                          {/* .col */}
                          <div className="col">
                            <a href="#">
                              <h3 className="h5 mt-4 mb-1">Personal</h3>
                            </a>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris blandit nisl ullamcorper, rutrum
                              metus in, congue lectus.
                            </p>
                          </div>{" "}
                          {/* .col */}
                        </div>{" "}
                        {/* .row */}
                      </div>{" "}
                      {/* .card-body */}
                      <div className="card-footer">
                        <a
                          href
                          className="d-flex justify-content-between text-muted"
                        >
                          <span>Account Settings</span>
                          <i className="fe fe-chevron-right" />
                        </a>
                      </div>{" "}
                      {/* .card-footer */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                  <div className="col-md-4">
                    <div className="card mb-4 shadow">
                      <div className="card-body my-n3">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                              <i className="fe fe-shield fe-24 text-primary" />
                            </span>
                          </div>{" "}
                          {/* .col */}
                          <div className="col">
                            <a href="#">
                              <h3 className="h5 mt-4 mb-1">Security</h3>
                            </a>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris blandit nisl ullamcorper, rutrum
                              metus in, congue lectus.
                            </p>
                          </div>{" "}
                          {/* .col */}
                        </div>{" "}
                        {/* .row */}
                      </div>{" "}
                      {/* .card-body */}
                      <div className="card-footer">
                        <a
                          href
                          className="d-flex justify-content-between text-muted"
                        >
                          <span>Security Settings</span>
                          <i className="fe fe-chevron-right" />
                        </a>
                      </div>{" "}
                      {/* .card-footer */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                  <div className="col-md-4">
                    <div className="card mb-4 shadow">
                      <div className="card-body my-n3">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                              <i className="fe fe-bell fe-24 text-primary" />
                            </span>
                          </div>{" "}
                          {/* .col */}
                          <div className="col">
                            <a href="#">
                              <h3 className="h5 mt-4 mb-1">Notifications</h3>
                            </a>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris blandit nisl ullamcorper, rutrum
                              metus in, congue lectus.
                            </p>
                          </div>{" "}
                          {/* .col */}
                        </div>{" "}
                        {/* .row */}
                      </div>{" "}
                      {/* .card-body */}
                      <div className="card-footer">
                        <a
                          href
                          className="d-flex justify-content-between text-muted"
                        >
                          <span>Notification Settings</span>
                          <i className="fe fe-chevron-right" />
                        </a>
                      </div>{" "}
                      {/* .card-footer */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md*/}
                </div>{" "}
                {/* .row*/}
                <h3>Subscription</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris blandit nisl ullamcorper, rutrum metus in, congue
                  lectus.
                </p>
                <div className="card-deck my-4">
                  <div className="card mb-4 shadow">
                    <div className="card-body text-center my-4">
                      <a href="#">
                        <h3 className="h5 mt-4 mb-0">Basic</h3>
                      </a>
                      <p className="text-muted">package</p>
                      <span className="h1 mb-0">$9.9</span>
                      <p className="text-muted">year</p>
                      <ul className="list-unstyled">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Eget porttitor lorem</li>
                      </ul>
                      <span className="dot dot-lg bg-success" />
                      <span className="text-muted ml-3">Active</span>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card mb-4">
                    <div className="card-body text-center my-4">
                      <a href="#">
                        <h3 className="h5 mt-4 mb-0">Professional</h3>
                      </a>
                      <p className="text-muted">package</p>
                      <span className="h1 mb-0">$16.9</span>
                      <p className="text-muted">year</p>
                      <ul className="list-unstyled">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Eget porttitor lorem</li>
                      </ul>
                      <button
                        type="button"
                        className="btn mb-2 btn-primary btn-lg"
                      >
                        Ugrade
                      </button>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                </div>{" "}
                {/* .card-group */}
                <h6 className="mb-3">Last payment</h6>
                <table className="table table-borderless table-striped">
                  <thead>
                    <tr role="row">
                      <th>ID</th>
                      <th>Purchase Date</th>
                      <th>Total</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">1331</th>
                      <td>2020-12-26 01:32:21</td>
                      <td>$16.9</td>
                      <td>Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-warning mr-2" />
                        Due
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
                      <th scope="col">1156</th>
                      <td>2020-04-21 00:38:38</td>
                      <td>$9.9</td>
                      <td>Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-danger mr-2" />
                        False
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
                      <th scope="col">1038</th>
                      <td>2019-06-25 19:13:36</td>
                      <td>$9.9</td>
                      <td>Credit Card </td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                        Paid
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
                      <th scope="col">1227</th>
                      <td>2021-01-22 13:28:00</td>
                      <td>$9.9</td>
                      <td>Paypal</td>
                      <td>
                        <span className="dot dot-lg bg-success mr-2" />
                        Paid
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
              </div>{" "}
              {/* /.col-12 */}
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

export default Profile;
