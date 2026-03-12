import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function Invoice() {
  return (
    <>
   <div className="wrapper">
  <Header/>
  <Aside/>
  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="row align-items-center mb-4">
            <div className="col">
              <h2 className="h5 page-title"><small className="text-muted text-uppercase">Invoice</small><br />#1806</h2>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-secondary">Print</button>
              <button type="button" className="btn btn-primary">Pay</button>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body p-5">
              <div className="row mb-5">
                <div className="col-12 text-center mb-4">
                  <img src="./assets/images/logo.svg" className="navbar-brand-img brand-sm mx-auto mb-4" alt="..." />
                  <h2 className="mb-0 text-uppercase">Invoice</h2>
                  <p className="text-muted"> Altavista<br /> 9022 Suspendisse Rd. </p>
                </div>
                <div className="col-md-7">
                  <p className="small text-muted text-uppercase mb-2">Invoice from</p>
                  <p className="mb-4">
                    <strong>Imani Lara</strong><br /> Asset Management<br /> 9022 Suspendisse Rd.<br /> High Wycombe<br /> (478) 446-9234<br />
                  </p>
                  <p>
                    <span className="small text-muted text-uppercase">Invoice #</span><br />
                    <strong>1806</strong>
                  </p>
                </div>
                <div className="col-md-5">
                  <p className="small text-muted text-uppercase mb-2">Invoice to</p>
                  <p className="mb-4">
                    <strong>Walter Sawyer</strong><br /> Human Resources<br /> Ap #992-8933 Sagittis Street<br /> Ivanteyevka<br /> (803) 792-2559<br />
                  </p>
                  <p>
                    <small className="small text-muted text-uppercase">Due date</small><br />
                    <strong>April, 20, 2020</strong>
                  </p>
                </div>
              </div> {/* /.row */}
              <table className="table table-borderless table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col" className="text-right">Rate</th>
                    <th scope="col" className="text-right">Hours</th>
                    <th scope="col" className="text-right">Ammout</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td> Creative Design<br />
                      <span className="small text-muted">Design responsive website with existing prototype</span>
                    </td>
                    <td className="text-right">$15.00</td>
                    <td className="text-right">2</td>
                    <td className="text-right">$30.00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td> Front-End Development<br />
                      <span className="small text-muted">Markup conversion and adding JavaScript</span>
                    </td>
                    <td className="text-right">$20.00</td>
                    <td className="text-right">5</td>
                    <td className="text-right">$100.00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td> Back-End Development<br />
                      <span className="small text-muted">Database intergration with model functions</span>
                    </td>
                    <td className="text-right">$25.00</td>
                    <td className="text-right">7</td>
                    <td className="text-right">$155.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="row mt-5">
                <div className="col-2 text-center">
                  <img src="./assets/images/qrcode.svg" className="navbar-brand-img brand-sm mx-auto my-4" alt="..." />
                </div>
                <div className="col-md-5">
                  <p className="text-muted small">
                    <strong>Note :</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. </p>
                </div>
                <div className="col-md-5">
                  <div className="text-right mr-2">
                    <p className="mb-2 h6">
                      <span className="text-muted">Subtotal : </span>
                      <strong>$285.00</strong>
                    </p>
                    <p className="mb-2 h6">
                      <span className="text-muted">VAT (10%) : </span>
                      <strong>$28.50</strong>
                    </p>
                    <p className="mb-2 h6">
                      <span className="text-muted">Total : </span>
                      <span>$313.50</span>
                    </p>
                  </div>
                </div>
              </div> {/* /.row */}
            </div> {/* /.card-body */}
          </div> {/* /.card */}
        </div> {/* /.col-12 */}
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

export default Invoice