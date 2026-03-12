import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function SupportFaq() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-12">
                <div className="row mt-4">
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-md bg-primary">
                              <span className="fe fe-briefcase fe-24 text-white" />
                            </span>
                          </div>
                          <div className="col">
                            <h3 className="h6 mb-0 text-uppercase">General</h3>
                            <p className="small text-muted mb-0">
                              Popular questions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-md bg-success">
                              <span className="fe fe-shopping-bag fe-24 text-white" />
                            </span>
                          </div>
                          <div className="col">
                            <h3 className="h6 mb-0 text-uppercase">Orders</h3>
                            <p className="small text-muted mb-0">
                              Orders proccesing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-md bg-warning">
                              <span className="fe fe-truck fe-24 text-white" />
                            </span>
                          </div>
                          <div className="col">
                            <h3 className="h6 mb-0 text-uppercase">Shipment</h3>
                            <p className="small text-muted mb-0">
                              Shipping problems
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-md bg-secondary">
                              <span className="fe fe-package fe-24 text-white" />
                            </span>
                          </div>
                          <div className="col">
                            <h3 className="h6 mb-0 text-uppercase">Return</h3>
                            <p className="small text-muted mb-0">
                              Returning item
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end section */}
                <div className="row my-4">
                  <div className="col-md-6">
                    <div className="accordion w-100" id="accordion1">
                      <div className="card shadow">
                        <div className="card-header" id="heading1">
                          <a
                            role="button"
                            href="#collapse1"
                            data-toggle="collapse"
                            data-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                          >
                            <strong>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse show"
                          aria-labelledby="heading1"
                          data-parent="#accordion1"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading2">
                          <a
                            role="button"
                            href="#collapse2"
                            data-toggle="collapse"
                            data-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            <strong>Dignissim suspendisse in est ante?</strong>
                          </a>
                        </div>
                        <div
                          id="collapse2"
                          className="collapse"
                          aria-labelledby="heading2"
                          data-parent="#accordion1"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading3">
                          <a
                            role="button"
                            href="#collapse3"
                            data-toggle="collapse"
                            data-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                          >
                            <strong>
                              Sapien et ligula ullamcorper malesuada proin?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse3"
                          className="collapse"
                          aria-labelledby="heading3"
                          data-parent="#accordion1"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="accordion w-100" id="accordion2">
                      <div className="card shadow">
                        <div className="card-header" id="heading4">
                          <a
                            role="button"
                            href="#collapse4"
                            data-toggle="collapse"
                            data-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            <strong>
                              Massa eget egestas purus viverra accumsan in nisl?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse4"
                          className="collapse show"
                          aria-labelledby="heading4"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading5">
                          <a
                            role="button"
                            href="#collapse5"
                            data-toggle="collapse"
                            data-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            <strong>
                              Augue lacus viverra vitae congue eu?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse5"
                          className="collapse"
                          aria-labelledby="heading5"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading6">
                          <a
                            role="button"
                            href="#collapse6"
                            data-toggle="collapse"
                            data-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            <strong>
                              Pharetra massa massa ultricies mi quis?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse6"
                          className="collapse"
                          aria-labelledby="heading6"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* /.col */}
                </div>{" "}
                {/* end section */}
                <div className="row my-4">
                  <div className="col-md-6">
                    <div className="accordion w-100" id="accordion3">
                      <div className="card shadow">
                        <div className="card-header" id="heading7">
                          <a
                            role="button"
                            href="#collapse7"
                            data-toggle="collapse"
                            data-target="#collapse7"
                            aria-expanded="false"
                            aria-controls="collapse7"
                          >
                            <strong>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse7"
                          className="collapse show"
                          aria-labelledby="heading7"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading8">
                          <a
                            role="button"
                            href="#collapse8"
                            data-toggle="collapse"
                            data-target="#collapse8"
                            aria-expanded="false"
                            aria-controls="collapse8"
                          >
                            <strong>Dignissim suspendisse in est ante?</strong>
                          </a>
                        </div>
                        <div
                          id="collapse8"
                          className="collapse"
                          aria-labelledby="heading8"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading9">
                          <a
                            role="button"
                            href="#collapse9"
                            data-toggle="collapse"
                            data-target="#collapse9"
                            aria-expanded="false"
                            aria-controls="collapse9"
                          >
                            <strong>
                              Sapien et ligula ullamcorper malesuada proin?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse9"
                          className="collapse"
                          aria-labelledby="heading9"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="accordion w-100" id="accordion4">
                      <div className="card shadow">
                        <div className="card-header" id="heading10">
                          <a
                            role="button"
                            href="#collapse10"
                            data-toggle="collapse"
                            data-target="#collapse10"
                            aria-expanded="false"
                            aria-controls="collapse10"
                          >
                            <strong>
                              Massa eget egestas purus viverra accumsan in nisl?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse10"
                          className="collapse show"
                          aria-labelledby="heading10"
                          data-parent="#accordion4"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading11">
                          <a
                            role="button"
                            href="#collapse11"
                            data-toggle="collapse"
                            data-target="#collapse11"
                            aria-expanded="false"
                            aria-controls="collapse11"
                          >
                            <strong>
                              Augue lacus viverra vitae congue eu?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse11"
                          className="collapse"
                          aria-labelledby="heading11"
                          data-parent="#accordion4"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading12">
                          <a
                            role="button"
                            href="#collapse12"
                            data-toggle="collapse"
                            data-target="#collapse12"
                            aria-expanded="false"
                            aria-controls="collapse12"
                          >
                            <strong>
                              Pharetra massa massa ultricies mi quis?
                            </strong>
                          </a>
                        </div>
                        <div
                          id="collapse12"
                          className="collapse"
                          aria-labelledby="heading12"
                          data-parent="#accordion4"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* /.col */}
                </div>{" "}
                {/* end section */}
              </div>{" "}
              {/* /.col */}
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

export default SupportFaq;
