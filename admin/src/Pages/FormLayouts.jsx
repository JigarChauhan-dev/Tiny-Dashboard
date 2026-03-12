import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function FormLayouts() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="page-title">Form Layout</h2>
                <p className="text-muted">
                  Demo for form control styles, layout options, and custom
                  components for creating a wide variety of forms.
                </p>
                <div className="card-deck">
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <strong className="card-title">Basic form</strong>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail4"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword4"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputCity"
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputZip"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridCheck"
                            >
                              {" "}
                              Check me out{" "}
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <strong className="card-title">Horizontal form</strong>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-group row">
                          <label
                            htmlFor="inputEmail3"
                            className="col-sm-3 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail3"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword3"
                            className="col-sm-3 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword3"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="disabledInput"
                            className="col-sm-3 col-form-label"
                          >
                            Disabled
                          </label>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              id="disabledInput"
                              type="text"
                              placeholder="Disabled input here..."
                              disabled
                            />
                          </div>
                        </div>
                        <fieldset className="form-group">
                          <div className="row">
                            <label className="col-form-label col-sm-3 pt-0">
                              Radios
                            </label>
                            <div className="col-sm-9">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios1"
                                  defaultValue="option1"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridRadios1"
                                >
                                  {" "}
                                  First radio{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridRadios2"
                                >
                                  {" "}
                                  Second radio{" "}
                                </label>
                              </div>
                              <div className="form-check disabled">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios3"
                                  defaultValue="option3"
                                  disabled
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridRadios3"
                                >
                                  {" "}
                                  Third disabled radio{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="form-group row">
                          <div className="col-sm-3">Checkbox</div>
                          <div className="col-sm-9">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridCheck1"
                              >
                                {" "}
                                Checkbox{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-sm-3"
                            htmlFor="exampleFormControlTextarea1"
                          >
                            Textarea
                          </label>
                          <div className="col-sm-9">
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows={2}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-2">
                          <button type="submit" className="btn btn-primary">
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>{" "}
                {/* / .card-desk*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title">Form row</strong>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail4">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail5"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputPassword4">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="inputPassword5"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress5"
                              placeholder="1234 Main St"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress6"
                              placeholder="Apartment, studio, or floor"
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputCity">City</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputCity5"
                              />
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="inputState">State</label>
                              <select id="inputState5" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                              </select>
                            </div>
                            <div className="form-group col-md-2">
                              <label htmlFor="inputZip">Zip</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputZip5"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridCheck5"
                              >
                                {" "}
                                Check me out{" "}
                              </label>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Sign in
                          </button>
                        </form>
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card */}
                  </div>{" "}
                  {/* /. col */}
                </div>{" "}
                {/* /. end-section */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title">Inline Form</strong>
                      </div>
                      <div className="card-body">
                        <form className="form-inline">
                          <label
                            className="sr-only"
                            htmlFor="inlineFormInputName2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            id="inlineFormInputName2"
                            placeholder="Jane Doe"
                          />
                          <label
                            className="sr-only"
                            htmlFor="inlineFormInputGroupUsername2"
                          >
                            Username
                          </label>
                          <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text">@</div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroupUsername2"
                              placeholder="Username"
                            />
                          </div>
                          <label
                            className="my-1 mr-2"
                            htmlFor="inlineFormCustomSelectPref"
                          >
                            Preference
                          </label>
                          <select
                            className="custom-select my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                          >
                            <option selected>Choose...</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                          <div className="form-check mb-2 mr-sm-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineFormCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineFormCheck"
                            >
                              {" "}
                              Remember me{" "}
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary mb-2"
                          >
                            Submit
                          </button>
                        </form>
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

export default FormLayouts;
