import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function UiNotification() {
  return (
    <>
  <div className="wrapper">
<Header/>
<Aside/>
  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 mb-4">
          <h2 className="page-title">Alerts</h2>
          <p className="lead text-muted">This primitive is meant to make it easy to display both user-centric or activity-centric actions in your app. Sometimes it makes sense to even blend both in a single timeline, which works perfectly.</p>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title mb-0">Notifications</strong>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary" role="alert"> A simple primary alert—check it out! </div>
                  <div className="alert alert-secondary" role="alert"> A simple secondary alert—check it out! </div>
                  <div className="alert alert-success" role="alert"> A simple success alert—check it out! </div>
                  <div className="alert alert-danger" role="alert"> A simple danger alert—check it out! </div>
                  <div className="alert alert-warning" role="alert"> A simple warning alert—check it out! </div>
                  <div className="alert alert-info" role="alert"> A simple info alert—check it out! </div>
                  <div className="alert alert-light" role="alert"> A simple light alert—check it out! </div>
                  <div className="alert alert-dark" role="alert"> A simple dark alert—check it out! </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title mb-0">Notifications with icons</strong>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary" role="alert">
                    <span className="fe fe-alert-circle fe-16 mr-2" /> A simple primary alert—check it out! </div>
                  <div className="alert alert-secondary" role="alert">
                    <span className="fe fe-alert-octagon fe-16 mr-2" /> A simple secondary alert—check it out! </div>
                  <div className="alert alert-success" role="alert">
                    <span className="fe fe-help-circle fe-16 mr-2" /> A simple success alert—check it out! </div>
                  <div className="alert alert-danger" role="alert">
                    <span className="fe fe-minus-circle fe-16 mr-2" /> A simple danger alert—check it out! </div>
                  <div className="alert alert-warning" role="alert">
                    <span className="fe fe-alert-triangle fe-16 mr-2" /> A simple warning alert—check it out! </div>
                  <div className="alert alert-info" role="alert">
                    <span className="fe fe-cpu fe-16 mr-2" /> A simple info alert—check it out! </div>
                  <div className="alert alert-light" role="alert">
                    <span className="fe fe-link fe-16 mr-2" /> A simple light alert—check it out! </div>
                  <div className="alert alert-dark" role="alert">
                    <span className="fe fe-meh fe-16 mr-2" /> A simple dark alert—check it out! </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr />
                <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below. <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div> {/* /. col */}
          </div> {/* end section */}
          <h2>Toasts</h2>
          <p className="lead text-muted"> Push notifications to your visitors with a toast, a lightweight and easily customizable alert message. </p>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <strong className="mr-auto">New update</strong>
                  <small>11 mins ago</small>
                  <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="toast-body"> Hello, world! This is a toast message. </div>
              </div>
            </div>
          </div> {/* end section */}
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
    </div></main> {/* main */}
</div>

    </>
  )
}

export default UiNotification