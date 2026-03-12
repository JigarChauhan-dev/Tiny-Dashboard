import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function FormElements() {
  return (
    <>
  <div className="wrapper">
    <Header/>
    <Aside/>
  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="page-title">Form elements</h2>
          <p className="text-muted">Demo for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
          <div className="card shadow mb-4">
            <div className="card-header">
              <strong className="card-title">Form controls</strong>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="simpleinput">Text</label>
                    <input type="text" id="simpleinput" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="example-email">Email</label>
                    <input type="email" id="example-email" name="example-email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="example-password">Password</label>
                    <input type="password" id="example-password" className="form-control" defaultValue="password" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="example-palaceholder">Placeholder</label>
                    <input type="text" id="example-palaceholder" className="form-control" placeholder="placeholder" />
                  </div>
                </div> {/* /.col */}
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="example-helping">Helping text</label>
                    <input type="text" id="example-helping" className="form-control" placeholder="Input with helping text" />
                    <span className="help-block"><small>A block of help text that breaks onto a new line.</small></span>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="example-readonly">Readonly</label>
                    <input type="text" id="example-readonly" className="form-control" readOnly defaultValue="Readonly value" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="example-disable">Disabled</label>
                    <input type="text" className="form-control" id="example-disable" disabled defaultValue="Disabled value" />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="example-static">Static control</label>
                    <input type="text" readOnly className="form-control-plaintext" id="example-static" defaultValue="j@example.com" />
                  </div>
                </div>
              </div>
            </div>
          </div> {/* / .card */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <label htmlFor="example-textarea">Text area</label>
                    <textarea className="form-control" id="example-textarea" rows={4} defaultValue={""} />
                  </div>
                </div> {/* /.card-body */}
              </div> {/* /.card */}
            </div> {/* /.col */}
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <div className="form-group mb-3">
                      <label htmlFor="example-fileinput">Default file input</label>
                      <input type="file" id="example-fileinput" className="form-control-file" />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="customFile">Custom file input</label>
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                      </div>
                    </div>
                  </div>
                </div> {/* /.card-body */}
              </div> {/* /.card */}
            </div> {/* /.col */}
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <label htmlFor="example-select">Input Select</label>
                    <select className="form-control" id="example-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="example-multiselect">Multiple Select</label>
                    <select id="example-multiselect" multiple className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div> {/* /.card-body */}
              </div> {/* /.card */}
            </div> {/* /.col */}
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <label htmlFor="custom-select">Custom Select</label>
                    <select className="custom-select" id="custom-select">
                      <option selected>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="custom-multiselect">Custom Multiple Select</label>
                    <select className="custom-select" multiple id="custom-multiselect">
                      <option selected>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <p className="mb-2"><strong>Checkboxes</strong></p>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1"> Default checkbox </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3" disabled />
                    <label className="form-check-label" htmlFor="defaultCheck3"> Disabled checkbox </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <p className="mb-2"><strong>Custom checkboxes</strong></p>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Check this first custom checkbox</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" htmlFor="customCheck2">Check this secondary custom checkbox</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1-1" disabled defaultChecked />
                    <label className="custom-control-label" htmlFor="customCheck1">Disabled custom checkbox</label>
                  </div>
                </div> {/* / .card-body */}
              </div> {/* / .card */}
            </div> {/* /. col */}
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <p className="mb-2"><strong>Default radio</strong></p>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="exampleRadios1"> This is default radio </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="exampleRadios3"> Disabled radio </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                  </div>
                </div> {/* /.card-body */}
              </div> {/* /.card */}
            </div> {/* /.col */}
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <p className="mb-2"><strong>Custom Radios</strong></p>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" defaultChecked />
                    <label className="custom-control-label" htmlFor="customRadio2">Or toggle this other custom radio</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input type="radio" name="radioDisabled" id="customRadioDisabled2" className="custom-control-input" disabled />
                    <label className="custom-control-label" htmlFor="customRadioDisabled2">Disabled this custom radio</label>
                  </div>
                </div> {/* /.card-body */}
              </div> {/* /.card */}
            </div> {/* /.col */}
            <div className="col-md-12 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title">Sizing</strong>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Default input" />
                  </div>
                  <div className="form-group">
                    <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div> {/* end section */}
        </div> {/* .col-12 */}
      </div> {/* .row */}
    </div> {/* .container-fluid */}
    <div className="modal fade modal-notif modal-slide" tabIndex={-1} role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="defaultModalLabel">Notifications</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                    <small><strong>Package has uploaded successfull</strong></small>
                    <div className="my-0 text-muted small">Package is zipped and uploaded</div>
                    <small className="badge badge-pill badge-light text-muted">1m ago</small>
                  </div>
                </div>
              </div>
              <div className="list-group-item bg-transparent">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="fe fe-download fe-24" />
                  </div>
                  <div className="col">
                    <small><strong>Widgets are updated successfull</strong></small>
                    <div className="my-0 text-muted small">Just create new layout Index, form, table</div>
                    <small className="badge badge-pill badge-light text-muted">2m ago</small>
                  </div>
                </div>
              </div>
              <div className="list-group-item bg-transparent">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="fe fe-inbox fe-24" />
                  </div>
                  <div className="col">
                    <small><strong>Notifications have been sent</strong></small>
                    <div className="my-0 text-muted small">Fusce dapibus, tellus ac cursus commodo</div>
                    <small className="badge badge-pill badge-light text-muted">30m ago</small>
                  </div>
                </div> {/* / .row */}
              </div>
              <div className="list-group-item bg-transparent">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="fe fe-link fe-24" />
                  </div>
                  <div className="col">
                    <small><strong>Link was attached to menu</strong></small>
                    <div className="my-0 text-muted small">New layout has been attached to the menu</div>
                    <small className="badge badge-pill badge-light text-muted">1h ago</small>
                  </div>
                </div>
              </div> {/* / .row */}
            </div> {/* / .list-group */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Clear All</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal-shortcut modal-slide" tabIndex={-1} role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="defaultModalLabel">Shortcuts</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
  </main> {/* main */}
</div>
    </>
  )
}

export default FormElements