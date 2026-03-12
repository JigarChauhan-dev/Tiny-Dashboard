import React from "react";
import Header from "../Common/Header";

function IndexHorizontal() {
  return (
    <>
      <div className="wrapper">
       <Header/>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-white flex-row border-bottom shadow">
  
    <div class="container-fluid">
  
  <a class="navbar-brand mx-lg-1 mr-0" href="./index.html">
    <svg version="1.1" id="logo" class="navbar-brand-img brand-sm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xml:space="preserve">
    <g>
    	<polygon class="st0" points="78,105 15,105 24,87 87,87 	"/>
    	<polygon class="st0" points="96,69 33,69 42,51 105,51 	"/>
    	<polygon class="st0" points="78,33 15,33 24,15 87,15 	"/>
    </g>
    </svg>
  </a>

  <button class="navbar-toggler mt-2 mr-auto toggle-sidebar text-muted">
    <i class="fe fe-menu navbar-toggler-icon"></i>
  </button>

  <div class="navbar-slide bg-white ml-lg-4" id="navbarSupportedContent">
    <a href="#" class="btn toggle-sidebar d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
<i class="fe fe-x"><span class="sr-only"></span></i>
    </a>
    <ul class="navbar-nav mr-auto">
<li class="nav-item dropdown">
  <a href="#" id="dashboardDropdown" class="dropdown-toggle nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="ml-lg-2">Dashboard</span><span class="sr-only">(current)</span>
  </a>
  <div class="dropdown-menu" aria-labelledby="dashboardDropdown">
    <a class="nav-link pl-lg-2" href="./index.html"><span class="ml-1">Default</span></a>
    <a class="nav-link pl-lg-2" href="./dashboard-analytics.html"><span class="ml-1">Analytics</span></a>
    <a class="nav-link pl-lg-2" href="./dashboard-sales.html"><span class="ml-1">E-commerce</span></a>
    <a class="nav-link pl-lg-2" href="./dashboard-saas.html"><span class="ml-1">Saas Dashboard</span></a>
    <a class="nav-link pl-lg-2" href="./dashboard-system.html"><span class="ml-1">Systems</span></a>
  </div>
</li>
<li class="nav-item dropdown">
  <a href="#" id="ui-elementsDropdown" class="dropdown-toggle nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="ml-lg-2">UI elements</span>
  </a>
  <div class="dropdown-menu" aria-labelledby="ui-elementsDropdown">
    <a class="nav-link pl-lg-2" href="./ui-color.html"><span class="ml-1">Colors</span></a>
    <a class="nav-link pl-lg-2" href="./ui-typograpy.html"><span class="ml-1">Typograpy</span></a>
    <a class="nav-link pl-lg-2" href="./ui-icons.html"><span class="ml-1">Icons</span></a>
    <a class="nav-link pl-lg-2" href="./ui-buttons.html"><span class="ml-1">Buttons</span></a>
    <a class="nav-link pl-lg-2" href="./ui-notification.html"><span class="ml-1">Notifications</span></a>
    <a class="nav-link pl-lg-2" href="./ui-modals.html"><span class="ml-1">Modals</span></a>
    <a class="nav-link pl-lg-2" href="./ui-tabs-accordion.html"><span class="ml-1">Tabs & Accordion</span></a>
    <a class="nav-link pl-lg-2" href="./ui-progress.html"><span class="ml-1">Progress</span></a>
  </div>
</li>
<li class="nav-item">
  <a class="nav-link" href="widgets.html">
    <span class="ml-lg-2">Widgets</span>
    <span class="badge badge-pill badge-primary">New</span>
  </a>
</li>
<li class="nav-item dropdown">
  <a href="#" id="formsDropdown" class="dropdown-toggle nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="ml-lg-2">Forms</span>
  </a>
  <div class="dropdown-menu" aria-labelledby="formsDropdown">
    <a class="nav-link pl-lg-2" href="./form_elements.html"><span class="ml-1">Basic Elements</span></a>
    <a class="nav-link pl-lg-2" href="./form_advanced.html"><span class="ml-1">Advanced Elements</span></a>
    <a class="nav-link pl-lg-2" href="./form_validation.html"><span class="ml-1">Validation</span></a>
    <a class="nav-link pl-lg-2" href="./form_layouts.html"><span class="ml-1">Layouts</span></a>
    <a class="nav-link pl-lg-2" href="./form_upload.html"><span class="ml-1">File upload</span></a>
  </div>
</li>
<li class="nav-item dropdown">
  <a href="#" id="tablesDropdown" class="dropdown-toggle nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="ml-lg-2">Tables</span>
  </a>
  <div class="dropdown-menu" aria-labelledby="tablesDropdown">
    <a class="nav-link pl-lg-2" href="./table_basic.html"><span class="ml-1">Basic Tables</span></a>
    <a class="nav-link pl-lg-2" href="./table_advanced.html"><span class="ml-1">Advanced Tables</span></a>
    <a class="nav-link pl-lg-2" href="./table_datatables.html"><span class="ml-1">Data Tables</span></a>
  </div>
</li>
<li class="nav-item dropdown">
  <a class="dropdown-toggle nav-link pl-lg-3" href="#" id="chartsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Charts
  </a>
  <ul class="dropdown-menu" aria-labelledby="chartsDropdown">
    <a class="nav-link pl-lg-2" href="./chart-inline.html"><span class="ml-1">Inline Chart</span></a>
    <a class="nav-link pl-lg-2" href="./chart-chartjs.html"><span class="ml-1">Chartjs</span></a>
    <a class="nav-link pl-lg-2" href="./chart-apexcharts.html"><span class="ml-1">ApexCharts</span></a>
    <a class="nav-link pl-lg-2" href="./datamaps.html"><span class="ml-1">Datamaps</span></a>
  </ul>
</li>
<li class="nav-item dropdown">
  <a class="dropdown-toggle nav-link pl-lg-3" href="#" id="appsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apps
  </a>
  <ul class="dropdown-menu" aria-labelledby="appsDropdown">
    <li class="nav-item">
      <a class="nav-link pl-lg-2" href="./calendar.html">
        <span class="ml-1">Calendar</span>
      </a>
    </li>
    <li class="nav-item dropdown">
      <a class="dropdown-toggle nav-link pl-lg-2" href="#" id="contactDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="ml-1">Contacts</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="contactDropdown">
        <a class="nav-link pl-lg-2" href="./contacts-list.html"><span class="ml-1">Contact List</span></a>
        <a class="nav-link pl-lg-2" href="./contacts-grid.html"><span class="ml-1">Contact Grid</span></a>
        <a class="nav-link pl-lg-2" href="./contacts-new.html"><span class="ml-1">New Contact</span></a>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="dropdown-toggle nav-link pl-lg-2" href="#" data-toggle="collapse" id="profileDropdown" aria-expanded="false">
        <span class="ml-1">Profile</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="profileDropdown">
        <a class="nav-link pl-lg-2" href="./profile.html"><span class="ml-1">Overview</span></a>
        <a class="nav-link pl-lg-2" href="./profile-settings.html"><span class="ml-1">Settings</span></a>
        <a class="nav-link pl-lg-2" href="./profile-security.html"><span class="ml-1">Security</span></a>
        <a class="nav-link pl-lg-2" href="./profile-notification.html"><span class="ml-1">Notifications</span></a>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="dropdown-toggle nav-link pl-lg-2" href="#" data-toggle="collapse" id="fileDropdown" aria-expanded="false">
        <span class="ml-1">File Manager</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="fileDropdown">
        <a class="nav-link pl-lg-2" href="./files-list.html"><span class="ml-1">Files List</span></a>
        <a class="nav-link pl-lg-2" href="./files-grid.html"><span class="ml-1">Files Grid</span></a>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="dropdown-toggle nav-link pl-lg-2" href="#" data-toggle="collapse" id="supportDropdown" aria-expanded="false">
        <span class="ml-1">Help Desk</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="supportDropdown">
        <a class="nav-link pl-lg-2" href="./support-center.html"><span class="ml-1">Home</span></a>
        <a class="nav-link pl-lg-2" href="./support-tickets.html"><span class="ml-1">Tickets</span></a>
        <a class="nav-link pl-lg-2" href="./support-ticket-detail.html"><span class="ml-1">Ticket Detail</span></a>
        <a class="nav-link pl-lg-2" href="./support-faqs.html"><span class="ml-1">FAQs</span></a>
      </ul>
    </li>
  </ul>
</li>
<li class="nav-item dropdown more">
  <a class="dropdown-toggle more-horizontal nav-link" href="#" id="moreDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="ml-2 sr-only">More</span>
  </a>
  <ul class="dropdown-menu" aria-labelledby="moreDropdown">
    <li class="nav-item dropdown">
      <a class="dropdown-toggle nav-link pl-lg-2" href="#" data-toggle="collapse" id="pagesDropdown" aria-expanded="false">
        <span class="ml-1">Pages</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="nav-link pl-lg-2" href="./page-orders.html">
          <span class="ml-1">Orders</span>
        </a>
        <a class="nav-link pl-lg-2" href="./page-timeline.html">
          <span class="ml-1">Timeline</span>
        </a>
        <a class="nav-link pl-lg-2" href="./page-invoice.html">
          <span class="ml-1">Invoice</span>
        </a>
        <a class="nav-link pl-lg-2" href="./page-404.html">
          <span class="ml-1">Page 404</span>
        </a>
        <a class="nav-link pl-lg-2" href="./page-500.html">
          <span class="ml-1">Page 500</span>
        </a>
        <a class="nav-link pl-lg-2" href="./page-blank.html">
          <span class="ml-1">Blank</span>
        </a>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="dropdown-toggle nav-link pl-lg-2" href="#" data-toggle="collapse" id="authDropdown" aria-expanded="false">
        <span class="ml-1">Authentication</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="authDropdown">
        <a class="nav-link pl-lg-2" href="./auth-login.html"><span class="ml-1">Login 1</span></a>
        <a class="nav-link pl-lg-2" href="./auth-login-half.html"><span class="ml-1">Login 2</span></a>
        <a class="nav-link pl-lg-2" href="./auth-register.html"><span class="ml-1">Register</span></a>
        <a class="nav-link pl-lg-2" href="./auth-resetpw.html"><span class="ml-1">Reset Password</span></a>
        <a class="nav-link pl-lg-2" href="./auth-confirm.html"><span class="ml-1">Confirm Password</span></a>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="dropdown-toggle nav-link pl-lg-2" href="#" data-toggle="collapse" id="layoutsDropdown" aria-expanded="false">
        <span class="ml-1">Layouts</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="layoutsDropdown">
          <a class="nav-link pl-lg-2" href="./index.html"><span class="ml-1">Default</span></a>
          
            <a class="nav-link pl-lg-2" href="./index-horizontal.html"><span class="ml-1">Top Navigation</span></a>
          
          
          <a class="nav-link pl-lg-2" href="./index-boxed.html"><span class="ml-1">Boxed</span></a>
          
      </ul>
    </li>
  </ul>
</li>
    </ul>
  </div>
  <form class="form-inline ml-md-auto d-none d-lg-flex searchform text-muted">
    <input class="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted" type="search" placeholder="Type something..." aria-label="Search">
  </form>
  <ul class="navbar-nav d-flex flex-row">
    <li class="nav-item">
<a class="nav-link text-muted my-2" href="./#" id="modeSwitcher" data-mode="light">
    <i class="fe fe-sun fe-16"></i>
</a>
    </li>
    <li class="nav-item">
<a class="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-shortcut">
    <i class="fe fe-grid fe-16"></i>
</a>
    </li>
    <li class="nav-item nav-notif">
<a class="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-notif">
  <i class="fe fe-bell fe-16"></i>
  <span class="dot dot-md bg-success"></span>
</a>
    </li>
    <li class="nav-item dropdown ml-lg-0">
<a class="nav-link dropdown-toggle text-muted" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span class="avatar avatar-sm mt-2">
    <img src="./assets/avatars/face-1.jpg" alt="..." class="avatar-img rounded-circle">
  </span>
</a>
<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
  <li class="nav-item">
    <a class="nav-link pl-3" href="#">Settings</a>
  </li>
  <li class="nav-item">
    <a class="nav-link pl-3" href="#">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link pl-3" href="#">Activities</a>
  </li>
</ul>
    </li>
  </ul>
  </div>
</nav>
 */}
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
                        <label htmlFor="reportrange" className="sr-only">
                          Date Ranges
                        </label>
                        <div id="reportrange" className="px-2 py-2 text-muted">
                          <span className="small" />
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="button" className="btn btn-sm">
                          <span className="fe fe-refresh-ccw fe-16 text-muted" />
                        </button>
                        <button type="button" className="btn btn-sm mr-2">
                          <span className="fe fe-filter fe-16 text-muted" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mb-2 align-items-center">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="row mt-1 align-items-center">
                        <div className="col-12 col-lg-4 text-left pl-4">
                          <p className="mb-1 small text-muted">Balance</p>
                          <span className="h3">$12,600</span>
                          <span className="small text-muted">+20%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                          <p className="text-muted">
                            {" "}
                            Etiam ultricies nisi vel augue. Curabitur
                            ullamcorper ultricies nisi. Nam eget dui{" "}
                          </p>
                        </div>
                        <div className="col-6 col-lg-2 text-center py-4">
                          <p className="mb-1 small text-muted">Today</p>
                          <span className="h3">$2600</span>
                          <br />
                          <span className="small text-muted">+20%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                        </div>
                        <div className="col-6 col-lg-2 text-center py-4 mb-2">
                          <p className="mb-1 small text-muted">Goal Value</p>
                          <span className="h3">$260</span>
                          <br />
                          <span className="small text-muted">+6%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                        </div>
                        <div className="col-6 col-lg-2 text-center py-4">
                          <p className="mb-1 small text-muted">Completions</p>
                          <span className="h3">26</span>
                          <br />
                          <span className="small text-muted">+20%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                        </div>
                        <div className="col-6 col-lg-2 text-center py-4">
                          <p className="mb-1 small text-muted">Conversion</p>
                          <span className="h3">6%</span>
                          <br />
                          <span className="small text-muted">-2%</span>
                          <span className="fe fe-arrow-down text-danger fe-12" />
                        </div>
                      </div>
                      <div className="map-box">
                        <div id="areaChart" />
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                </div>
                <div className="row items-align-baseline">
                  <div className="col-md-12 col-lg-4">
                    <div className="card shadow eq-card mb-4">
                      <div className="card-body mb-n3">
                        <div className="row items-align-baseline h-100">
                          <div className="col-md-6 my-3">
                            <p className="mb-0">
                              <strong className="mb-0 text-uppercase text-muted">
                                Earning
                              </strong>
                            </p>
                            <h3>$2,562</h3>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                          <div className="col-md-6 my-4 text-center">
                            <div lass="chart-box mx-4">
                              <div id="radialbarWidget" />
                            </div>
                          </div>
                          <div className="col-md-6 border-top py-3">
                            <p className="mb-1">
                              <strong className="text-muted">Cost</strong>
                            </p>
                            <h4 className="mb-0">108</h4>
                            <p className="small text-muted mb-0">
                              <span>37.7% Last week</span>
                            </p>
                          </div>{" "}
                          {/* .col */}
                          <div className="col-md-6 border-top py-3">
                            <p className="mb-1">
                              <strong className="text-muted">Revenue</strong>
                            </p>
                            <h4 className="mb-0">1168</h4>
                            <p className="small text-muted mb-0">
                              <span>-18.9% Last week</span>
                            </p>
                          </div>{" "}
                          {/* .col */}
                        </div>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-12 col-lg-4">
                    <div className="card shadow eq-card mb-4">
                      <div className="card-body">
                        <div className="chart-widget mb-2">
                          <div id="radialbar" />
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
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-12 col-lg-4">
                    <div className="card shadow eq-card mb-4">
                      <div className="card-body">
                        <div className="d-flex mt-3 mb-4">
                          <div className="flex-fill pt-2">
                            <p className="mb-0 text-muted">Total</p>
                            <h4 className="mb-0">108</h4>
                            <span className="small text-muted">+37.7%</span>
                          </div>
                          <div className="flex-fill chart-box mt-n2">
                            <div id="barChartWidget" />
                          </div>
                        </div>{" "}
                        {/* .d-flex */}
                        <div className="row border-top">
                          <div className="col-md-6 pt-4">
                            <h6 className="mb-0">
                              108{" "}
                              <span className="small text-muted">+37.7%</span>
                            </h6>
                            <p className="mb-0 text-muted">Cost</p>
                          </div>
                          <div className="col-md-6 pt-4">
                            <h6 className="mb-0">
                              1168{" "}
                              <span className="small text-muted">-18.9%</span>
                            </h6>
                            <p className="mb-0 text-muted">Revenue</p>
                          </div>
                        </div>{" "}
                        {/* .row */}
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col-md */}
                </div>{" "}
                {/* .row */}
                <div className="row">
                  {/* Recent Activity */}
                  <div className="col-md-12 col-lg-4 mb-4">
                    <div className="card timeline shadow">
                      <div className="card-header">
                        <strong className="card-title">Recent Activity</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div
                        className="card-body"
                        data-simplebar
                        style={{
                          height: 355,
                          overflowY: "auto",
                          overflowX: "hidden",
                        }}
                      >
                        <h6 className="text-uppercase text-muted mb-4">
                          Today
                        </h6>
                        <div className="pb-3 timeline-item item-primary">
                          <div className="pl-5">
                            <div className="mb-1">
                              <strong>@Brown Asher</strong>
                              <span className="text-muted small mx-2">
                                Just create new layout Index, form, table
                              </span>
                              <strong>Tiny Admin</strong>
                            </div>
                            <p className="small text-muted">
                              Creative Design{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                        <div className="pb-3 timeline-item item-warning">
                          <div className="pl-5">
                            <div className="mb-3">
                              <strong>@Hester Nissim</strong>
                              <span className="text-muted small mx-2">
                                has upload new files to
                              </span>
                              <strong>Tiny Admin</strong>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <img
                                  src="./assets/products/p1.jpg"
                                  alt="..."
                                  className="img-fluid rounded"
                                />
                              </div>
                              <div className="col">
                                <img
                                  src="./assets/products/p2.jpg"
                                  alt="..."
                                  className="img-fluid rounded"
                                />
                              </div>
                              <div className="col">
                                <img
                                  src="./assets/products/p3.jpg"
                                  alt="..."
                                  className="img-fluid rounded"
                                />
                              </div>
                              <div className="col">
                                <img
                                  src="./assets/products/p4.jpg"
                                  alt="..."
                                  className="img-fluid rounded"
                                />
                              </div>
                            </div>
                            <p className="small text-muted">
                              Front-End Development{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                        <div className="pb-3 timeline-item item-success">
                          <div className="pl-5">
                            <div className="mb-3">
                              <strong>@Kelley Sonya</strong>
                              <span className="text-muted small mx-2">
                                has commented on
                              </span>
                              <strong>Advanced table</strong>
                            </div>
                            <div className="card d-inline-flex mb-2">
                              <div className="card-body bg-light py-2 px-3">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer dignissim nulla eu quam
                                cursus placerat. Vivamus non odio ullamcorper,
                                lacinia ante nec, blandit leo.{" "}
                              </div>
                            </div>
                            <p className="small text-muted">
                              Back-End Development{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                        <h6 className="text-uppercase text-muted mb-4">
                          Yesterday
                        </h6>
                        <div className="pb-3 timeline-item item-warning">
                          <div className="pl-5">
                            <div className="mb-3">
                              <strong>@Fletcher Everett</strong>
                              <span className="text-muted small mx-2">
                                created new group for
                              </span>
                              <strong>Tiny Admin</strong>
                            </div>
                            <ul className="avatars-list mb-3">
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-1.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-4.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-3.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="small text-muted">
                              Front-End Development{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                        <div className="pb-3 timeline-item item-success">
                          <div className="pl-5">
                            <div className="mb-3">
                              <strong>@Bertha Ball</strong>
                              <span className="text-muted small mx-2">
                                has commented on
                              </span>
                              <strong>Advanced table</strong>
                            </div>
                            <div className="card d-inline-flex mb-2">
                              <div className="card-body bg-light py-2 px-3">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer dignissim nulla eu quam
                                cursus placerat. Vivamus non odio ullamcorper,
                                lacinia ante nec, blandit leo.{" "}
                              </div>
                            </div>
                            <p className="small text-muted">
                              Back-End Development{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                        <div className="pb-3 timeline-item item-danger">
                          <div className="pl-5">
                            <div className="mb-3">
                              <strong>@Lillith Joseph</strong>
                              <span className="text-muted small mx-2">
                                has upload new files to
                              </span>
                              <strong>Tiny Admin</strong>
                            </div>
                            <div className="row mb-3">
                              <div className="col-1">
                                <img
                                  src="./assets/products/p4.jpg"
                                  alt="..."
                                  className="img-fluid rounded"
                                />
                              </div>
                              <div className="col-1">
                                <img
                                  src="./assets/products/p1.jpg"
                                  alt="..."
                                  className="img-fluid rounded"
                                />
                              </div>
                              <div className="col-1">
                                <img
                                  src="./assets/products/p2.jpg"
                                  alt="..."
                                  className="img-fluid rounded"
                                />
                              </div>
                            </div>
                            <p className="small text-muted">
                              Front-End Development{" "}
                              <span className="badge badge-light">1h ago</span>
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col-md-6 */}
                  {/* Striped rows */}
                  <div className="col-md-12 col-lg-8">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Recent Data</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body my-n2">
                        <table className="table table-striped table-hover table-borderless">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Address</th>
                              <th>Phone</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2474</td>
                              <th scope="col">Brown, Asher D.</th>
                              <td>Ap #331-7123 Lobortis Avenue</td>
                              <td>(958) 421-0798</td>
                              <td>13/09/2020</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-vertical"
                                    type="button"
                                    id="dr1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr1"
                                  >
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Assign
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2786</td>
                              <th scope="col">Leblanc, Yoshio V.</th>
                              <td>287-8300 Nisl. St.</td>
                              <td>(899) 881-3833</td>
                              <td>04/05/2019</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-vertical"
                                    type="button"
                                    id="dr2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr2"
                                  >
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Assign
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2747</td>
                              <th scope="col">Hester, Nissim L.</th>
                              <td>4577 Cras St.</td>
                              <td>(977) 220-6518</td>
                              <td>04/06/2019</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-vertical"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Assign
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2639</td>
                              <th scope="col">Gardner, Leigh S.</th>
                              <td>P.O. Box 228, 7512 Lectus Ave</td>
                              <td>(537) 315-1481</td>
                              <td>04/08/2019</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-vertical"
                                    type="button"
                                    id="dr4"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr4"
                                  >
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Assign
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>2238</td>
                              <th scope="col">Higgins, Uriah L.</th>
                              <td>Ap #377-5357 Sed Road</td>
                              <td>(238) 386-0247</td>
                              <td>04/01/2019</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-vertical"
                                    type="button"
                                    id="dr5"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="text-muted sr-only">
                                      Action
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dr5"
                                  >
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Remove
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Assign
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Striped rows */}
                </div>{" "}
                {/* .row*/}
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

export default IndexHorizontal;
