import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function Contactslist() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="row align-items-center my-4">
                  <div className="col">
                    <h2 className="h3 mb-0 page-title">Contacts</h2>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-secondary">
                      <span className="fe fe-trash fe-12 mr-2" />
                      Delete
                    </button>
                    <button type="button" className="btn btn-primary">
                      <span className="fe fe-filter fe-12 mr-2" />
                      Create
                    </button>
                  </div>
                </div>
                {/* table */}
                <div className="card shadow">
                  <div className="card-body">
                    <table className="table table-borderless table-hover">
                      <thead>
                        <tr>
                          <th>
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
                          </th>
                          <th>ID</th>
                          <th>User</th>
                          <th>Company</th>
                          <th>Country</th>
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
                            <div className="avatar avatar-sm">
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
                            <small className="mb-0 text-muted">Nigeria</small>
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
                            <div className="avatar avatar-sm">
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
                          <td className="text-muted">04/05/2019</td>
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
                            <div className="avatar avatar-sm">
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
                          <td className="text-muted">21/08/2019</td>
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
                            <div className="avatar avatar-sm">
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
                          <td className="text-muted">04/08/2019</td>
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
                            <div className="avatar avatar-sm">
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
                            <small className="mb-0 text-muted">Canada</small>
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
                            <div className="avatar avatar-sm">
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
                            <p className="mb-0 text-muted">Suspendisse LLC</p>
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
                          <td className="text-muted">11/09/2019</td>
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
                            <div className="avatar avatar-sm">
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
                          <td className="text-muted">30/03/2021</td>
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
                  </div>
                </div>
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

export default Contactslist;
