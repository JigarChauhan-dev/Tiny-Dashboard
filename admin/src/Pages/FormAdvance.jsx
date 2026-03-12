import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function FormAdvance() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="page-title">Form advanced elements</h2>
                <p className="text-muted">
                  Demo for form control styles, layout options, and custom
                  components for creating a wide variety of forms.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <p className="mb-3">
                          <strong>Input group</strong>
                        </p>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                            >
                              @example.com
                            </span>
                          </div>
                        </div>
                        <label htmlFor="basic-url">Your vanity URL</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon3"
                            >
                              https://example.com/users/
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-url"
                            aria-describedby="basic-addon3"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">.00</span>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Button addons"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary"
                              type="button"
                              id="button-addon2"
                            >
                              Button
                            </button>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-secondary" type="button">
                              Button
                            </button>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelect03"
                            aria-label="Example select with button addon"
                          >
                            <option selected>Choose...</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <p className="mb-3">
                          <strong>Switches</strong>
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
                            Toggle this switch element
                          </label>
                        </div>
                        <div className="custom-control custom-switch mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            disabled
                            id="customSwitch2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customSwitch2"
                          >
                            Disabled switch element
                          </label>
                        </div>
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <p className="mb-2">
                          <strong>Select2</strong>
                        </p>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="simple-select2">
                              Simple Select
                            </label>
                            <select
                              className="form-control select2"
                              id="simple-select2"
                            >
                              <optgroup label="Alaskan/Hawaiian Time Zone">
                                <option value="AK">Alaska</option>
                                <option value="HI">Hawaii</option>
                              </optgroup>
                              <optgroup label="Pacific Time Zone">
                                <option value="CA">California</option>
                                <option value="NV" disabled="disabled">
                                  Nevada (disabled)
                                </option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                              </optgroup>
                            </select>
                          </div>{" "}
                          {/* form-group */}
                          <div className="form-group col-md-6">
                            <label htmlFor="multi-select2">
                              Multiple Select
                            </label>
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
                        </div>{" "}
                        {/* form-row */}
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <p className="mb-2">
                          <strong>Date &amp; Time Pickers</strong>
                        </p>
                        <div className="form-row">
                          <div className="form-group col-md-8">
                            <label htmlFor="date-input1">Date Picker</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control drgpicker"
                                id="date-input1"
                                defaultValue="04/24/2020"
                                aria-describedby="button-addon2"
                              />
                              <div className="input-group-append">
                                <div
                                  className="input-group-text"
                                  id="button-addon-date"
                                >
                                  <span className="fe fe-calendar fe-16" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="time-input2">Time Picker</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control time-input"
                                id="time-input2"
                                placeholder
                                aria-describedby="button-addon2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <p className="mb-2">
                          <strong>Date Range Picker</strong>
                        </p>
                        <div className="form-group">
                          <label htmlFor="date-input1">Date Range</label>
                          <input
                            type="text"
                            name="datetimes"
                            className="form-control datetimes"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="reportrange">
                            Predefined Date Ranges
                          </label>
                          <div
                            id="reportrange"
                            className="border px-2 py-2 bg-light"
                          >
                            <i className="fe fe-calendar fe-16 mx-2" />
                            <span />
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <p className="mb-2">
                          <strong>Input masks</strong>
                        </p>
                        <div className="form-group mb-3">
                          <label htmlFor="example-date">Date</label>
                          <input
                            className="form-control"
                            id="example-date"
                            type="date"
                            name="date"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="example-month">Month</label>
                          <input
                            className="form-control"
                            id="example-month"
                            type="month"
                            name="month"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="example-time">Time</label>
                          <input
                            className="form-control"
                            id="example-time"
                            type="time"
                            name="time"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="example-week">Week</label>
                          <input
                            className="form-control"
                            id="example-week"
                            type="week"
                            name="week"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="example-number">Number</label>
                          <input
                            className="form-control"
                            id="example-number"
                            type="number"
                            name="number"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="example-color">Color</label>
                          <input
                            className="form-control"
                            id="example-color"
                            type="color"
                            name="color"
                            defaultValue="#28a745"
                          />
                        </div>
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <p className="mb-2">
                          <strong>Custom input masks</strong>
                        </p>
                        <div className="form-group mb-3">
                          <label htmlFor="custom-placeholder">
                            Mask placeholder
                          </label>
                          <input
                            className="form-control input-placeholder"
                            id="custom-placeholder"
                            type="text"
                            name="placeholder"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="custom-zip">Zip code</label>
                          <input
                            className="form-control input-zip"
                            id="custom-zip"
                            data-placeholder="__/__/____"
                            data-mask="00/00/0000"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="custom-money">Money</label>
                          <input
                            className="form-control input-money"
                            id="custom-money"
                            type="text"
                            name="money"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="custom-phone">US Telephone</label>
                          <input
                            className="form-control input-phoneus"
                            id="custom-phone"
                            placeholder="(987) 654-3210"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="custom-mixed">Mixed mask</label>
                          <input
                            className="form-control input-mixed"
                            id="custom-mixed"
                            type="text"
                            placeholder="AAA 000-S0S"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="custom-ipadd">IP address</label>
                          <input
                            className="form-control input-ip"
                            id="custom-ipadd"
                          />
                        </div>
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                </div>{" "}
                {/* end section */}
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">Editor</h5>
                        <p>
                          Pages type scale includes a range of contrasting
                          styles that support the needs of your product and its
                          content.
                        </p>
                        {/* Create the editor container */}
                        <div id="editor" style={{ minHeight: 100 }}>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc lobortis convallis efficitur. Cras nisi
                            felis, luctus nec nibh quis, consequat maximus
                            velit. Ut iaculis at lacus sed pellentesque.
                          </p>
                          <p>
                            Maecenas luctus nisl quis leo porta, quis elementum
                            mi tempus. Morbi blandit metus ut nulla scelerisque,
                            sed ornare purus elementum. Vivamus sed augue in
                            tortor commodo malesuada sed et nulla. Nullam cursus
                            erat eget tellus maximus, ut placerat lorem
                            fringilla.
                          </p>
                        </div>
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

export default FormAdvance;
