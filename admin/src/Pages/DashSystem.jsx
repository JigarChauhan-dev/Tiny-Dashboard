import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function DashSystem() {
  return (
    <>
  <div className="wrapper">
    <Header/>
    <Aside/>
  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row align-items-center mb-2">
            <div className="col">
              <h2 className="h5 page-title"></h2>
            </div>
            <div className="col-auto">
              <form className="form-inline">
                <div className="form-group d-none d-lg-inline">
                  <label htmlFor="reportrange" className="sr-only">Date Ranges</label>
                  <div id="reportrange" className="px-2 py-2 text-muted">
                    <span className="small" />
                  </div>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-sm"><span className="fe fe-refresh-ccw fe-16 text-muted" /></button>
                  <button type="button" className="btn btn-sm mr-2"><span className="fe fe-filter fe-16 text-muted" /></button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="py-5 text-center">
                    <p className="text-muted mb-2">Real time</p>
                    <h2 className="mb-1">1,254</h2>
                    <span className="small text-success">+2%</span>
                  </div>
                  <div className="row align-items-center mb-1">
                    <div className="col-auto">
                      <div className="my-2 text-center">
                        <small className="text-danger pr-2 mr-2">High</small>
                        <span className="text-warning px-2 mx-2">Medium</span>
                        <span className="text-success px-2 mx-2">Low</span>
                      </div>
                    </div>
                    <div className="col">
                      <small className="h6 mb-0 text-muted">Statistics</small>
                    </div>
                  </div>
                  <div className="progress rounded mb-3" style={{height: 14}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '15%'}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>15%</div>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>30%</div>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>20%</div>
                  </div>
                </div> {/* .card-body */}
              </div> {/* .card */}
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="chart-box">
                    <div id="gradientRadial" />
                  </div>
                  <div className="row items-align-center">
                    <div className="col-4 text-center">
                      <p className="text-muted mb-1">Cost</p>
                      <h6 className="mb-1">$1,823</h6>
                      <p className="text-muted mb-0">+12%</p>
                    </div>
                    <div className="col-4 text-center">
                      <p className="text-muted mb-1">Revenue</p>
                      <h6 className="mb-1">$6,830</h6>
                      <p className="text-muted mb-0">+8%</p>
                    </div>
                    <div className="col-4 text-center">
                      <p className="text-muted mb-1">Earning</p>
                      <h6 className="mb-1">$4,830</h6>
                      <p className="text-muted mb-0">+8%</p>
                    </div>
                  </div>
                </div> {/* .card-body */}
              </div> {/* .card */}
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div id="radialbar" />
                  <div className="row">
                    <div className="col-6 text-center">
                      <p className="small text-uppercase text-muted mb-0">Yesterday</p>
                      <strong className="text-uppercase">126</strong>
                      <p className="small text-muted mb-2">+5.5%</p>
                    </div>
                    <div className="col-6 text-center">
                      <p className="small text-uppercase text-muted mb-0">Today</p>
                      <strong className="text-uppercase">89</strong>
                      <p className="small text-muted mb-2">-5.5%</p>
                    </div>
                  </div>
                </div> {/* .card-body */}
              </div> {/* .card */}
              <div className="card shadow mb-4">
                <div className="card-header">
                  <strong className="card-title mb-0">Status</strong>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 text-center">
                      <p className="small text-muted mb-0">Maximum</p>
                      <strong className="text-uppercase">126</strong>
                      <p className="small text-muted mb-0">+5.5%</p>
                    </div>
                    <div className="col-6 text-center">
                      <p className="small text-muted mb-0">Minimum</p>
                      <strong className="text-uppercase">89</strong>
                      <p className="small text-muted mb-0">-5.5%</p>
                    </div>
                  </div>
                  <div className="chart-box">
                    <div id="heatmapChartWidget" />
                  </div>
                </div> {/* /.card-body */}
              </div> {/* /.card */}
              <div className="card shadow mb-4">
                <div className="card-header">
                  <strong className="card-title">Notification List</strong>
                  <a className="float-right small text-muted" href="#!">View all</a>
                </div>
                <div className="card-body scrollable">
                  <div className="list-group list-group-flush my-n3">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-link fe-24" />
                        </div>
                        <div className="col">
                          <small><strong>Link was attached to menu</strong></small>
                          <div className="my-0 text-muted small">New layout has been attached to the menu</div>
                        </div>
                        <div className="col-auto">
                          <small className="badge badge-pill badge-light text-muted">1h ago</small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-box fe-24" />
                        </div>
                        <div className="col">
                          <small><strong>Package has uploaded successfull</strong></small>
                          <div className="my-0 text-muted small">Package is zipped and uploaded</div>
                        </div>
                        <div className="col-auto">
                          <small className="badge badge-pill badge-light text-muted">1m ago</small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-download fe-24" />
                        </div>
                        <div className="col">
                          <small><strong>Widgets are updated successfull</strong></small>
                          <div className="my-0 text-muted small">Just create new layout Index, form, table</div>
                        </div>
                        <div className="col-auto">
                          <small className="badge badge-pill badge-light text-muted">2m ago</small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item mb-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-inbox fe-24" />
                        </div>
                        <div className="col">
                          <small><strong>Notifications have been sent</strong></small>
                          <div className="my-0 text-muted small">Fusce dapibus, tellus ac cursus commodo</div>
                        </div>
                        <div className="col-auto">
                          <small className="badge badge-pill badge-light text-muted">30m ago</small>
                        </div>
                      </div> {/* / .row */}
                    </div>
                  </div> {/* / .list-group */}
                </div> {/* / .card-body */}
              </div> {/* / .card */}
            </div> {/* ./col */}
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <h4 className="mb-0">15%</h4>
                          <p className="small text-muted mb-0">Cpu Usage</p>
                        </div>
                        <div className="col-5">
                          <div id="gauge1" className="gauge-container" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <h4 className="mb-0">65%</h4>
                          <p className="small text-muted mb-0">Ram Usage</p>
                        </div>
                        <div className="col-5">
                          <div id="gauge2" className="gauge-container" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <p className="small text-muted mb-0">Network</p>
                          <h4 className="mb-0">20%</h4>
                        </div>
                        <div className="col-5">
                          <div id="gauge3" className="gauge-container" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* end section */}
              <div className="mb-4 align-items-center" style={{position: 'relative'}}>
                <div className="map-box" style={{height: 450, overflow: 'hidden'}}>
                  <div id="dataMapWorld" style={{minHeight: 450}} />
                </div>
              </div> {/* .col-md */}
              <div className="row">
                <div className="col-md-6">
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="h6 mb-0">Regions</h3>
                        </div>
                        <div className="col-auto">
                          <a className="small text-muted" href="#!">View all</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body my-n2">
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <strong>Paris</strong>
                          <div className="my-0 text-muted small">France</div>
                        </div>
                        <div className="col-auto">
                          <strong>+85%</strong>
                        </div>
                        <div className="col-3">
                          <div className="progress" style={{height: 4}}>
                            <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <strong>Amsterdam</strong>
                          <div className="my-0 text-muted small">Netherlands</div>
                        </div>
                        <div className="col-auto">
                          <strong>+75%</strong>
                        </div>
                        <div className="col-3">
                          <div className="progress" style={{height: 4}}>
                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <strong>Venice</strong>
                          <div className="my-0 text-muted small">Italy</div>
                        </div>
                        <div className="col-auto">
                          <strong>+62%</strong>
                        </div>
                        <div className="col-3">
                          <div className="progress" style={{height: 4}}>
                            <div className="progress-bar" role="progressbar" style={{width: '62%'}} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <strong>Barcelona</strong>
                          <div className="my-0 text-muted small">Spain</div>
                        </div>
                        <div className="col-auto">
                          <strong>+24%</strong>
                        </div>
                        <div className="col-3">
                          <div className="progress" style={{height: 4}}>
                            <div className="progress-bar" role="progressbar" style={{width: '24%'}} aria-valuenow={24} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <strong>Sydney</strong>
                          <div className="my-0 text-muted small">Australia</div>
                        </div>
                        <div className="col-auto">
                          <strong>+20%</strong>
                        </div>
                        <div className="col-3">
                          <div className="progress" style={{height: 4}}>
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> {/* .card */}
                </div> {/* .col-md */}
                <div className="col-md-6">
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="h6 mb-0">Users</h3>
                        </div>
                        <div className="col-auto">
                          <a className="small text-muted" href="#!">View all</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex mb-2">
                        <div className="flex-fill pt-2">
                          <p className="mb-0 text-muted">Total</p>
                          <h4 className="mb-0">108</h4>
                          <span className="small text-muted">+37.7%</span>
                        </div>
                        <div className="flex-fill chart-box mb-n1">
                          <div id="barChartWidget" />
                        </div>
                      </div> {/* .d-flex */}
                      <div className="row border-top">
                        <div className="col-md-6 pt-4">
                          <h6 className="mb-0">108 <span className="small text-muted">+37.7%</span></h6>
                          <p className="mb-0 text-muted">Cost</p>
                        </div>
                        <div className="col-md-6 pt-4">
                          <h6 className="mb-0">1168 <span className="small text-muted">-18.9%</span></h6>
                          <p className="mb-0 text-muted">Revenue</p>
                        </div>
                      </div> {/* .row */}
                    </div> {/* .card-body */}
                  </div> {/* .card */}
                </div> {/* .col-md */}
                <div className="col-md-12">
                  <div className="d-flex align-items-center mx-3 mb-3">
                    <div className="flex-fill">
                      <h3 className="h6 mb-0">Data Centers</h3>
                    </div>
                    <div className="flex-fill text-right">
                      <a className="small text-muted" href="#!">View all</a>
                    </div>
                  </div>
                  <table className="table table-striped table-borderless mb-4">
                    <thead className="thead-white d-none">
                      <tr>
                        <th colSpan={2}>Data</th>
                        <th>Center</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-muted text-center w-25">
                          <span className="fe fe-database fe-24" /><br /> 3218 </td>
                        <th scope="row" className="w-50"> Nunc Lectus Incorporated<br />
                          <small className="text-muted">Barcelona, Spain</small>
                        </th>
                        <td className="text-muted w-25">
                          <div className="progress mt-3 mb-1" style={{height: 4}}>
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <small>May 23, 2020</small>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-center w-25">
                          <span className="fe fe-cpu fe-24" /><br /> 2651 </td>
                        <th scope="row" className="w-50"> Nisi Aenean Eget Limited<br />
                          <small className="text-muted">Sydney, Australia</small>
                        </th>
                        <td className="text-muted w-25">
                          <div className="progress mt-3 mb-1" style={{height: 4}}>
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <small>Nov 4, 2019</small>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-center w-25">
                          <span className="fe fe-globe fe-24" /><br /> 2651 </td>
                        <th scope="row" className="w-50"> Pellentesque Associates<br />
                          <small className="text-muted">Amsterdam, Netherlands</small>
                        </th>
                        <td className="text-muted w-25">
                          <div className="progress mt-3 mb-1" style={{height: 4}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '8%'}} aria-valuenow={8} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <small>Mar 27, 2020</small>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-center w-25">
                          <span className="fe fe-database fe-24" /><br /> 2757 </td>
                        <th scope="row" className="w-50"> Augue Incorporated<br />
                          <small className="text-muted">Paris, France</small>
                        </th>
                        <td className="text-muted w-25">
                          <div className="progress mt-3 mb-1" style={{height: 4}}>
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <small>Jan 13, 2020</small>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-center w-25">
                          <span className="fe fe-cpu fe-24" /><br /> 2816 </td>
                        <th scope="row" className="w-50"> Enim Limited<br />
                          <small className="text-muted">London, United Kingdom</small>
                        </th>
                        <td className="text-muted w-25">
                          <div className="progress mt-3 mb-1" style={{height: 4}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <small>Jan 01, 2020</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Log */}
                  <div className="card shadow">
                    <div className="card-header">
                      <strong className="card-title">Logging</strong>
                      <a className="float-right small text-muted" href="#!">View all</a>
                    </div>
                    <div className="card-body">
                      <div className="list-group list-group-flush my-n3">
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="circle circle-sm bg-warning"><i className="fe fe-shield-off fe-16 text-white" /></span>
                            </div>
                            <div className="col">
                              <small><strong>11:00 April 16, 2020</strong></small>
                              <div className="mb-2 text-muted small">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Integer dignissim nulla eu quam cursus placerat. Vivamus non odio ullamcorper, lacinia ante nec, blandit leo. </div>
                              <span className="badge badge-pill badge-warning">Security</span>
                            </div>
                            <div className="col-auto pr-0">
                              <small className="fe fe-more-vertical fe-16 text-muted" />
                            </div>
                          </div> {/* / .row */}
                        </div>{/* / .list-group-item */}
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="circle circle-sm bg-success"><i className="fe fe-database fe-16 text-white" /></span>
                            </div>
                            <div className="col">
                              <small><strong>17:00 April 15, 2020</strong></small>
                              <div className="mb-2 text-muted small">Proin porta vel erat suscipit luctus. Cras rhoncus felis sed magna commodo, in <a href="#!">pretium</a> mauris faucibus. Cras rhoncus felis sed magna commodo, in pretium mauris faucibus.</div>
                              <span className="badge badge-pill badge-success">System Update</span>
                            </div>
                            <div className="col-auto pr-0">
                              <small className="fe fe-more-vertical fe-16 text-muted" />
                            </div>
                          </div> {/* / .row */}
                        </div>{/* / .list-group-item */}
                        <div className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className="circle circle-sm bg-secondary"><i className="fe fe-user-plus fe-16 text-white" /></span>
                            </div>
                            <div className="col">
                              <small><strong>17:00 April 10, 2020</strong></small>
                              <div className="mb-2 text-muted small"> Morbi id arcu convallis, eleifend justo tristique, tincidunt nisl. Morbi euismod fermentum quam, at fringilla elit posuere a. <strong>Aliquam</strong> accumsan mi venenatis risus fermentum, at sagittis velit fermentum.</div>
                              <span className="badge badge-pill badge-secondary">Users</span>
                            </div>
                            <div className="col-auto pr-0">
                              <small className="fe fe-more-vertical fe-16 text-muted" />
                            </div>
                          </div> {/* / .row */}
                        </div>{/* / .list-group-item */}
                      </div> {/* / .list-group */}
                    </div> {/* / .card-body */}
                  </div> {/* / .card */}
                </div>
              </div> {/* /. row */}
            </div> {/* /. col */}
          </div> {/* end section */}
        </div>
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

export default DashSystem