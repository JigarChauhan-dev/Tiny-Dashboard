import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function FormValidation() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Aside/>
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="page-title">Form validation</h2>
                <p className="text-muted">
                  Provide valuable, actionable feedback to your users with HTML5
                  form validation
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title">
                          Default Validation
                        </strong>
                      </div>
                      <div className="card-body">
                        <form className="needs-validation" noValidate>
                          <div className="form-row">
                            <div className="col-md-8 mb-3">
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                              />
                              <div className="invalid-feedback">
                                {" "}
                                Please use a valid email{" "}
                              </div>
                              <small
                                id="emailHelp"
                                className="form-text text-muted"
                              >
                                We'll never share your email with anyone else.
                              </small>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label htmlFor="validationCustomUsername">
                                Username
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="inputGroupPrepend"
                                  >
                                    @
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustomUsername"
                                  aria-describedby="inputGroupPrepend"
                                  required
                                />
                                <div className="invalid-feedback">
                                  {" "}
                                  Please choose a username.{" "}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                First name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                defaultValue="Mark"
                                required
                              />
                              <div className="valid-feedback">
                                {" "}
                                Looks good!{" "}
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom02">
                                Last name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                defaultValue="Otto"
                                required
                              />
                              <div className="valid-feedback">
                                {" "}
                                Looks good!{" "}
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom03">City</label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                required
                              />
                              <div className="invalid-feedback">
                                {" "}
                                Please provide a valid city.{" "}
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="validationCustom04">State</label>
                              <select
                                className="custom-select"
                                id="validationCustom04"
                                required
                              >
                                <option selected disabled value>
                                  Choose...
                                </option>
                                <option>...</option>
                              </select>
                              <div className="invalid-feedback">
                                {" "}
                                Please select a valid state.{" "}
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="validationCustom05">Zip</label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom05"
                                required
                              />
                              <div className="invalid-feedback">
                                {" "}
                                Please provide a valid zip.{" "}
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="validationTextarea">
                              About your self
                            </label>
                            <textarea
                              className="form-control"
                              id="validationTextarea"
                              placeholder="Required example textarea"
                              required
                              defaultValue={""}
                            />
                            <div className="invalid-feedback">
                              {" "}
                              Please enter a message in the textarea.{" "}
                            </div>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customControlValidation1"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customControlValidation1"
                            >
                              Check this custom checkbox
                            </label>
                            <div className="invalid-feedback">
                              Example invalid feedback text
                            </div>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="customControlValidation2"
                              name="radio-stacked"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customControlValidation2"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio mb-3">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="customControlValidation3"
                              name="radio-stacked"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customControlValidation3"
                            >
                              Or toggle this other custom radio
                            </label>
                            <div className="invalid-feedback">
                              More example invalid feedback text
                            </div>
                          </div>
                          <div className="form-group mb-4">
                            <label htmlFor="example-multiselect">
                              Select your level
                            </label>
                            <select
                              id="example-multiselect"
                              multiple
                              className="form-control"
                              required
                            >
                              <option>Level 1</option>
                              <option>Level 2</option>
                              <option>Level 3</option>
                              <option>Level 4</option>
                              <option>Level 5</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select one option
                            </div>
                          </div>
                          <div className="custom-file mb-3">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="validatedCustomFile"
                              required
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="validatedCustomFile"
                            >
                              Choose file...
                            </label>
                            <div className="invalid-feedback">
                              Example invalid custom file feedback
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="invalidCheck"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="invalidCheck"
                              >
                                {" "}
                                Agree to terms and conditions{" "}
                              </label>
                              <div className="invalid-feedback">
                                {" "}
                                You must agree before submitting.{" "}
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Submit form
                          </button>
                        </form>
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title">
                          Advanced Validation
                        </strong>
                      </div>
                      <div className="card-body">
                        <form className="needs-validation" noValidate>
                          <div className="form-row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom3">
                                First name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom3"
                                defaultValue="Mark"
                                required
                              />
                              <div className="valid-feedback">
                                {" "}
                                Looks good!{" "}
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom4">
                                Last name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom4"
                                defaultValue="Otto"
                                required
                              />
                              <div className="valid-feedback">
                                {" "}
                                Looks good!{" "}
                              </div>
                            </div>
                          </div>{" "}
                          {/* /.form-row */}
                          <div className="form-row">
                            <div className="col-md-8 mb-3">
                              <label htmlFor="exampleInputEmail2">
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail2"
                                aria-describedby="emailHelp1"
                                required
                              />
                              <div className="invalid-feedback">
                                {" "}
                                Please use a valid email{" "}
                              </div>
                              <small
                                id="emailHelp1"
                                className="form-text text-muted"
                              >
                                We'll never share your email with anyone else.
                              </small>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label htmlFor="custom-phone">US Telephone</label>
                              <input
                                className="form-control input-phoneus"
                                id="custom-phone"
                                maxLength={14}
                                required
                              />
                              <div className="invalid-feedback">
                                {" "}
                                Please enter a correct phone{" "}
                              </div>
                            </div>
                          </div>{" "}
                          {/* /.form-row */}
                          <div className="form-group mb-3">
                            <label htmlFor="address-wpalaceholder">
                              Address
                            </label>
                            <input
                              type="text"
                              id="address-wpalaceholder"
                              className="form-control"
                              placeholder="Enter your address"
                            />
                            <div className="valid-feedback"> Looks good! </div>
                            <div className="invalid-feedback">
                              {" "}
                              Badd address{" "}
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom33">City</label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom33"
                                required
                              />
                              <div className="invalid-feedback">
                                {" "}
                                Please provide a valid city.{" "}
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="validationSelect2">State</label>
                              <select
                                className="form-control select2"
                                id="validationSelect2"
                                required
                              >
                                <option value>Select state</option>
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
                              <div className="invalid-feedback">
                                {" "}
                                Please select a valid state.{" "}
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="custom-zip">Zip code</label>
                              <input
                                className="form-control input-zip"
                                id="custom-zip"
                                autoComplete="off"
                                maxLength={9}
                                required
                              />
                              <div className="invalid-feedback">
                                {" "}
                                Please provide a valid zip.{" "}
                              </div>
                            </div>
                          </div>
                          <div className="form-row mb-3">
                            <div className="col-md-6 mb-3">
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
                                    <span className="fe fe-calendar fe-16 mx-2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="example-time">Time</label>
                              <input
                                className="form-control"
                                id="example-time"
                                type="time"
                                name="time"
                                required
                              />
                            </div>
                            <div className="col-md-3 mx-auto mb-3">
                              <p className="mb-3">Pick Up</p>
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customSwitch1"
                                  required
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customSwitch1"
                                >
                                  Yes
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <p className="mb-2">Payment</p>
                            <div className="form-row">
                              <div className="col-md-6">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="customControlValidation22"
                                    name="radio-stacked"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customControlValidation22"
                                  >
                                    Card
                                  </label>
                                  <p className="text-muted">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="custom-control custom-radio mb-3">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="customControlValidation33"
                                    name="radio-stacked"
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customControlValidation33"
                                  >
                                    Paypal
                                  </label>
                                  <p className="text-muted">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="validationTextarea1">Note</label>
                            <textarea
                              className="form-control"
                              id="validationTextarea1"
                              placeholder="Take a note here"
                              required
                              rows={3}
                              defaultValue={""}
                            />
                            <div className="invalid-feedback">
                              {" "}
                              Please enter a message in the textarea.{" "}
                            </div>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customControlValidation16"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customControlValidation16"
                            >
                              {" "}
                              Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                              {" "}
                              You must agree before submitting.{" "}
                            </div>
                          </div>
                          <button className="btn btn-primary" type="submit">
                            Submit form
                          </button>
                        </form>
                      </div>{" "}
                      {/* /.card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                </div>{" "}
                {/* end section */}
              </div>{" "}
              {/* /.col-12 col-lg-10 col-xl-10 */}
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

export default FormValidation;
