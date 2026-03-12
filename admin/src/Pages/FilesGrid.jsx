import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function FilesGrid() {
  return (
    <>
 <div className="wrapper">
    <Header/>
    <Aside/>
  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="row align-items-center my-3">
            <div className="col">
              <h2 className="page-title">Files</h2>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-lg btn-primary"><span className="fe fe-plus fe-16 mr-3" />New</button>
            </div>
          </div>
          <div className="file-container border-top">
            <div className="file-panel mt-4">
              <h6 className="mb-3">Quick Access</h6>
              <div className="row my-4">
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-secondary my-4">
                        <span className="fe fe-folder fe-24 text-white" />
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong><span className="dot dot-md bg-success mr-2" />Fusion Backpack</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-secondary my-4">
                        <span className="fe fe-folder fe-24 text-white" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2"><i className="fe fe-users fe-12" /></span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <span className="dot dot-md bg-warning mr-2" />
                      <strong>Bootstrap 4.x</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-file-text fe-24 text-success" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">1.2M</span>
                        <span className="badge badge-pill badge-light text-muted">HTML</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Tinydash Document</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-image fe-24 text-success" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">288K</span>
                        <span className="badge badge-pill badge-light text-muted">PNG</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Creative Logo</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
              </div> {/* .row */}
              <hr className="my-4" />
              <div className="row align-items-center mb-4">
                <div className="col">
                  <strong>Folders</strong>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn btn-sm">
                    <i className="fe fe-16 fe-grid text-primary" />
                  </button>
                  <button type="button" className="btn btn-sm">
                    <i className="fe fe-16 fe-list text-muted" />
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-body file-list">
                      <div className="d-flex align-items-center">
                        <div className="circle circle-md bg-secondary">
                          <span className="fe fe-folder fe-16 text-white" />
                        </div>
                        <div className="flex-fill ml-4 fname">
                          <strong>Components</strong><br />
                          <span className="badge badge-light text-muted">3 files</span>
                          <i className="fe fe-users fe-12 ml-2 text-muted" />
                        </div>
                        <div className="file-action">
                          <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* .card-body */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-body file-list">
                      <div className="d-flex align-items-center">
                        <div className="text-center">
                          <div className="circle circle-md bg-secondary">
                            <span className="fe fe-folder fe-16 text-white" />
                          </div>
                        </div>
                        <div className="flex-fill ml-4 fname">
                          <strong>Admin template</strong><br />
                          <span className="badge badge-light text-muted">12 files</span>
                          <span className="dot dot-md bg-success ml-2" />
                        </div>
                        <div className="file-action">
                          <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* .card-body */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-body file-list">
                      <div className="d-flex align-items-center">
                        <div className="circle circle-md bg-secondary">
                          <span className="fe fe-folder fe-16 text-white" />
                        </div>
                        <div className="flex-fill ml-4 fname">
                          <strong>Bootstrap 4.x</strong><br />
                          <span className="badge badge-light text-muted">8 files</span>
                          <span className="dot dot-md bg-warning ml-2" />
                        </div>
                        <div className="file-action">
                          <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* .card-body */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-body file-list">
                      <div className="d-flex align-items-center">
                        <div className="circle circle-md bg-secondary">
                          <span className="fe fe-folder fe-16 text-white" />
                        </div>
                        <div className="flex-fill ml-4 fname">
                          <strong>Design Files</strong><br />
                          <span className="badge badge-light text-muted">3 files</span>
                          <span className="dot dot-md bg-warning ml-2" />
                          <i className="fe fe-users fe-12 ml-2 text-muted" />
                        </div>
                        <div className="file-action">
                          <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* .card-body */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-6 col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-body file-list">
                      <div className="d-flex align-items-center">
                        <div className="circle circle-md bg-secondary">
                          <span className="fe fe-folder fe-16 text-white" />
                        </div>
                        <div className="flex-fill ml-4 fname">
                          <strong>Production</strong><br />
                          <span className="badge badge-light text-muted">30 files</span>
                          <i className="fe fe-users fe-12 ml-2 text-muted" />
                        </div>
                        <div className="file-action">
                          <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-muted sr-only">Action</span>
                          </button>
                          <div className="dropdown-menu m-2">
                            <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                            <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div> {/* .card-body */}
                  </div> {/* .card */}
                </div> {/* .col */}
              </div> {/* .row */}
              <hr className="my-4" />
              <h6 className="mb-3">Files</h6>
              <div className="row my-4 pb-4">
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-archive fe-24 text-secondary" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">14.8M</span>
                        <span className="badge badge-pill badge-light text-muted">Zip</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Packaged-04.02.zip</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-film fe-24 text-info" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">28M</span>
                        <span className="badge badge-pill badge-light text-muted">MP4</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Introduction.mp4</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-file fe-24 text-success" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">1.2M</span>
                        <span className="badge badge-pill badge-light text-muted">HTML</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Tinydash Document</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-image fe-24 text-success" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">288K</span>
                        <span className="badge badge-pill badge-light text-muted">PNG</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Creative Logo</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-pen-tool fe-24 text-success" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">28M</span>
                        <span className="badge badge-pill badge-light text-muted">PSD</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Large Banner</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-file-text fe-24 text-success" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">68K</span>
                        <span className="badge badge-pill badge-light text-muted">TXT</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Readme</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
                <div className="col-md-3">
                  <div className="card shadow text-center mb-4">
                    <div className="card-body file">
                      <div className="file-action">
                        <button type="button" className="btn btn-link dropdown-toggle more-vertical p-0 text-muted mx-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="text-muted sr-only">Action</span>
                        </button>
                        <div className="dropdown-menu m-2">
                          <a className="dropdown-item" href="#"><i className="fe fe-chevrons-right fe-12 mr-4" />Move</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-copy fe-12 mr-4" />Copy</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-edit-3 fe-12 mr-4" />Rename</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-delete fe-12 mr-4" />Delete</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-share fe-12 mr-4" />Share</a>
                          <a className="dropdown-item" href="#"><i className="fe fe-download fe-12 mr-4" />Download</a>
                        </div>
                      </div>
                      <div className="circle circle-lg bg-light my-4">
                        <span className="fe fe-music fe-24 text-success" />
                      </div>
                      <div className="file-info">
                        <span className="badge badge-light text-muted mr-2">2M</span>
                        <span className="badge badge-pill badge-light text-muted">Mp3</span>
                      </div>
                    </div> {/* .card-body */}
                    <div className="card-footer bg-transparent border-0 fname">
                      <strong>Dark.mp3</strong>
                    </div> {/* .card-footer */}
                  </div> {/* .card */}
                </div> {/* .col */}
              </div> {/* .row */}
            </div> {/* .file-panel */}
            <div className="info-panel">
              <div className="info-content p-3 border-left">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-fill">
                    <span className="circle circle-sm bg-white mr-2">
                      <span className="fe fe-image fe-12 text-success" />
                    </span>
                    <span className="h6">Creative Logo.PNG</span>
                  </div>
                  <span className="btn close-info">
                    <i className="fe fe-x" />
                  </span>
                </div>
                <ul className="nav nav-tabs nav-fill mb-3" id="file-detail" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="tab-detail" data-toggle="tab" href="#detail" role="tab" aria-controls="detail" aria-selected="true">Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="tab-activity" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">Activities</a>
                  </li>
                </ul>
                <div className="tab-content" id="file-tabs">
                  <div className="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="tab-detail">
                    <img src="./assets/products/p4.jpg" alt="..." className="img-fluid rounded" />
                    <ul className="avatars-list my-4 mx-0">
                      <li>
                        <a href="#!" className="avatar avatar-sm">
                          <img alt="..." className="avatar-img rounded-circle" src="./assets/avatars/face-2.jpg" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="avatar avatar-sm">
                          <img alt="..." className="avatar-img rounded-circle" src="./assets/avatars/face-4.jpg" />
                        </a>
                      </li>
                    </ul>
                    <dl className="row my-4 small">
                      <dt className="col-6 text-muted">Owner</dt>
                      <dd className="col-6">Whilemina Pate</dd>
                      <dt className="col-6 text-muted">Type</dt>
                      <dd className="col-6">Image</dd>
                      <dt className="col-6 text-muted">Size</dt>
                      <dd className="col-6">32M</dd>
                      <dt className="col-6 text-muted">Location</dt>
                      <dd className="col-6"><a href="#" className="text-muted">Design File</a></dd>
                      <dt className="col-6 text-muted">Created at</dt>
                      <dd className="col-6">Aug 20, 2020</dd>
                      <dt className="col-6 text-muted">Last update</dt>
                      <dd className="col-6">Aug 21, 2020</dd>
                    </dl>
                  </div> {/* .tab-pane */}
                  <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="tab-activity">
                    <div className="timeline">
                      <div className="pb-3 timeline-item item-primary">
                        <div className="pl-5 small">
                          <div className="mb-1"><strong>@Brown Asher</strong><span className="text-muted mx-1">have uploaded</span><strong>Tinydash</strong></div>
                          <span className="badge badge-pill badge-dark">1h ago</span>
                        </div>
                      </div>
                      <div className="pb-3 timeline-item item-warning">
                        <div className="pl-5 small">
                          <div className="mb-3"><strong>@Fletcher</strong><span className="text-muted mx-1">shared</span><strong>Tiny Admin</strong></div>
                          <ul className="avatars-list mb-2">
                            <li>
                              <a href="#!" className="avatar avatar-sm">
                                <img alt="..." className="avatar-img rounded-circle" src="./assets/avatars/face-1.jpg" />
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="avatar avatar-sm">
                                <img alt="..." className="avatar-img rounded-circle" src="./assets/avatars/face-4.jpg" />
                              </a>
                            </li>
                            <li>
                              <a href="#!" className="avatar avatar-sm">
                                <img alt="..." className="avatar-img rounded-circle" src="./assets/avatars/face-3.jpg" />
                              </a>
                            </li>
                          </ul>
                          <span className="badge badge-pill badge-dark">1h ago</span>
                        </div>
                      </div>
                      <div className="pb-3 timeline-item item-success">
                        <div className="pl-5 small">
                          <div className="mb-2"><strong>@Kelley Sonya</strong><span className="text-muted small mx-1">has commented on</span><strong>Advanced table</strong></div>
                          <div className="card d-inline-flex mb-2">
                            <div className="card-body bg-light py-2 px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                          </div>
                          <span className="badge badge-pill badge-dark">1h ago</span>
                        </div>
                      </div>
                    </div> {/* / .timeline */}
                  </div> {/* .tab-pane */}
                </div> {/* .tab-content */}
              </div>
            </div>
          </div> {/* .file-container */}
        </div> {/* .col */}
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

export default FilesGrid