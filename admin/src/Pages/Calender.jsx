import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function Calender() {
  return (
    <>
<div className="wrapper">

  <Header/>

    <Aside/>

  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row align-items-center my-3">
            <div className="col">
              <h2 className="page-title">Calendar</h2>
            </div>
            <div className="col-auto">
              <button type="button" className="btn" data-toggle="modal" data-target=".modal-calendar"><span className="fe fe-filter fe-16 text-muted" /></button>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#eventModal"><span className="fe fe-plus fe-16 mr-3" />New Event</button>
            </div>
          </div>
          <div id="calendar" />
          {/* new event modal */}
          <div className="modal fade" id="eventModal" tabIndex={-1} role="dialog" aria-labelledby="eventModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="varyModalLabel">New Event</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body p-4">
                  <form>
                    <div className="form-group">
                      <label htmlFor="eventTitle" className="col-form-label">Title</label>
                      <input type="text" className="form-control" id="eventTitle" placeholder="Add event title" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="eventNote" className="col-form-label">Note</label>
                      <textarea className="form-control" id="eventNote" placeholder="Add some note for your event" defaultValue={""} />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-8">
                        <label htmlFor="eventType">Event type</label>
                        <select id="eventType" className="form-control select2">
                          <option value="work">Work</option>
                          <option value="home">Home</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="date-input1">Start Date</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text" id="button-addon-date"><span className="fe fe-calendar fe-16" /></div>
                          </div>
                          <input type="text" className="form-control drgpicker" id="drgpicker-start" defaultValue="04/24/2020" />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="startDate">Start Time</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text" id="button-addon-time"><span className="fe fe-clock fe-16" /></div>
                          </div>
                          <input type="text" className="form-control time-input" id="start-time" placeholder="10:00 AM" />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="date-input1">End Date</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text" id="button-addon-date"><span className="fe fe-calendar fe-16" /></div>
                          </div>
                          <input type="text" className="form-control drgpicker" id="drgpicker-end" defaultValue="04/24/2020" />
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="startDate">End Time</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text" id="button-addon-time"><span className="fe fe-clock fe-16" /></div>
                          </div>
                          <input type="text" className="form-control time-input" id="end-time" placeholder="11:00 AM" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="RepeatSwitch" defaultChecked />
                    <label className="custom-control-label" htmlFor="RepeatSwitch">All day</label>
                  </div>
                  <button type="button" className="btn mb-2 btn-primary">Save Event</button>
                </div>
              </div>
            </div>
          </div> {/* new event modal */}
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
</div> {/* .wrapper */}

    </>
  )
}

export default Calender