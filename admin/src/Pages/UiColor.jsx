import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function UiColor() {
  return (
    <>
   <div className="wrapper">
    <Header/>
    <Aside/>
  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="h5 page-title">Colors</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at, pretium blanditsapien. </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body p-0">
                  <div className="row no-gutters bg-primary text-white">
                    <div className="col p-4">Primary color</div>
                    <div className="col-auto p-4 text-right"><small className="badge badge-pill text-white bg-primary-dark">#007bff</small></div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col p-2 bg-primary-lighter" />
                    <div className="col p-2 bg-primary-light" />
                    <div className="col p-2 bg-primary-dark" />
                    <div className="col p-2 bg-primary-darker" />
                  </div>
                </div> {/* /. card-body */}
              </div> {/* /. card */}
            </div> {/* /. col */}
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body p-0">
                  <div className="row no-gutters bg-success text-white">
                    <div className="col p-4">Success color</div>
                    <div className="col-auto p-4 text-right"><small className="badge badge-pill text-white bg-success-dark">#28a745</small></div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col p-2 bg-success-lighter" />
                    <div className="col p-2 bg-success-light" />
                    <div className="col p-2 bg-success-dark" />
                    <div className="col p-2 bg-success-darker" />
                  </div>
                </div> {/* /. card-body */}
              </div> {/* /. card */}
            </div> {/* /. col */}
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body p-0">
                  <div className="row no-gutters bg-warning text-white">
                    <div className="col p-4">Warning color</div>
                    <div className="col-auto p-4 text-right"><small className="badge badge-pill text-white bg-warning-dark">#28a745</small></div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col p-2 bg-warning-lighter" />
                    <div className="col p-2 bg-warning-light" />
                    <div className="col p-2 bg-warning-dark" />
                    <div className="col p-2 bg-warning-darker" />
                  </div>
                </div> {/* /. card-body */}
              </div> {/* /. card */}
            </div> {/* /. col */}
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body p-0">
                  <div className="row no-gutters bg-secondary text-white">
                    <div className="col p-4">Secondary color</div>
                    <div className="col-auto p-4 text-right"><small className="badge badge-pill text-white bg-secondary-dark">#6c757d</small></div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col p-2 bg-secondary-lighter" />
                    <div className="col p-2 bg-secondary-light" />
                    <div className="col p-2 bg-secondary-dark" />
                    <div className="col p-2 bg-secondary-darker" />
                  </div>
                </div> {/* /. card-body */}
              </div> {/* /. card */}
            </div> {/* /. col */}
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body p-0">
                  <div className="row no-gutters bg-info text-white">
                    <div className="col p-4">Info color</div>
                    <div className="col-auto p-4 text-right"><small className="badge badge-pill text-white bg-info-dark">#007bff</small></div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col p-2 bg-info-lighter" />
                    <div className="col p-2 bg-info-light" />
                    <div className="col p-2 bg-info-dark" />
                    <div className="col p-2 bg-info-darker" />
                  </div>
                </div> {/* /. card-body */}
              </div> {/* /. card */}
            </div> {/* /. col */}
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent">
                <div className="card-body p-0">
                  <div className="row no-gutters bg-danger text-white">
                    <div className="col p-4">Danger color</div>
                    <div className="col-auto p-4 text-right"><small className="badge badge-pill text-white bg-danger-dark">#28a745</small></div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col p-2 bg-danger-lighter" />
                    <div className="col p-2 bg-danger-light" />
                    <div className="col p-2 bg-danger-dark" />
                    <div className="col p-2 bg-danger-darker" />
                  </div>
                </div> {/* /. card-body */}
              </div> {/* /. card */}
            </div> {/* /. col */}
          </div> {/* end section */}
          <h2 className="h5" id="task-section">Gray Levels</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at, pretium blanditsapien. </p>
          <div className="card bg-transparent">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-2 p-4 bg-white text-secondary">White</div>
                <div className="col-lg-2 p-4 bg-light text-secondary">Light</div>
                <div className="col-lg-2 p-4 bg-secondary-lighter text-white">Borderds</div>
                <div className="col-lg-2 p-4 bg-secondary-light text-white">Muted</div>
                <div className="col-lg-2 p-4 bg-secondary text-white">Regular</div>
                <div className="col-lg-2 p-4 bg-dark text-white">Headings</div>
              </div>
            </div> {/* /. card-body */}
          </div> {/* /. card */}
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

export default UiColor