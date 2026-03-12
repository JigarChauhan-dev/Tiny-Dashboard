import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function Widgets() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                {/* <h2>Section title</h2> */}
                <h2 className="h5 page-title">Info Widgets</h2>
                <p className="text-muted">
                  This primitive is meant to make it easy to display both
                  user-centric or activity-centric actions in your app.
                  Sometimes it makes sense to even blend both in a single
                  timeline, which works perfectly.
                </p>
                <div className="row">
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow bg-primary text-white">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-sm bg-primary-light">
                              <i className="fe fe-16 fe-shopping-bag text-white mb-0" />
                            </span>
                          </div>
                          <div className="col pr-0">
                            <p className="small text-light mb-0">
                              Monthly Sales
                            </p>
                            <span className="h3 mb-0 text-white">$1250</span>
                            <span className="small text-muted">+5.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-sm bg-primary">
                              <i className="fe fe-16 fe-shopping-cart text-white mb-0" />
                            </span>
                          </div>
                          <div className="col pr-0">
                            <p className="small text-muted mb-0">Orders</p>
                            <span className="h3 mb-0">1,869</span>
                            <span className="small text-success">+16.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-sm bg-primary">
                              <i className="fe fe-16 fe-filter text-white mb-0" />
                            </span>
                          </div>
                          <div className="col">
                            <p className="small text-muted mb-0">Conversion</p>
                            <div className="row align-items-center no-gutters">
                              <div className="col-auto">
                                <span className="h3 mr-2 mb-0"> 86.6% </span>
                              </div>
                              <div className="col-md-12 col-lg">
                                <div
                                  className="progress progress-sm mt-2"
                                  style={{ height: 3 }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "87%" }}
                                    aria-valuenow={87}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-3 text-center">
                            <span className="circle circle-sm bg-primary">
                              <i className="fe fe-16 fe-activity text-white mb-0" />
                            </span>
                          </div>
                          <div className="col">
                            <p className="small text-muted mb-0">AVG Orders</p>
                            <span className="h3 mb-0">$80</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end section */}
                {/* info small box */}
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <span className="h2 mb-0">$1.2K</span>
                            <p className="small text-muted mb-0">
                              Monthly Sales
                            </p>
                            <span className="badge badge-pill badge-success">
                              +15.5%
                            </span>
                          </div>
                          <div className="col-auto">
                            <span className="fe fe-32 fe-shopping-bag text-muted mb-0" />
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
                            <span className="h2 mb-0">1K+</span>
                            <p className="small text-muted mb-0">Orders</p>
                            <span className="badge badge-pill badge-success">
                              +16.5%
                            </span>
                          </div>
                          <div className="col-auto">
                            <span className="fe fe-32 fe-clipboard text-muted mb-0" />
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
                            <span className="h2 mb-0">186</span>
                            <p className="small text-muted mb-0">Customers</p>
                            <span className="badge badge-pill badge-warning">
                              +1.5%
                            </span>
                          </div>
                          <div className="col-auto">
                            <span className="fe fe-32 fe-users text-muted mb-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end section */}
                {/* widgets */}
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <small className="text-muted mb-1">Visitors</small>
                            <h3 className="card-title mb-0">108</h3>
                            <p className="small text-muted mb-0">
                              <span className="fe fe-arrow-up fe-12 text-success" />
                              <span>37.7% Last week</span>
                            </p>
                          </div>
                          <div className="col-4 text-right">
                            <span className="inlinebar" />
                          </div>
                        </div>{" "}
                        {/* /. row */}
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <small className="text-muted mb-1">
                              Page Views
                            </small>
                            <h3 className="card-title mb-0">1168</h3>
                            <p className="small text-muted mb-0">
                              <span className="fe fe-arrow-down fe-12 text-danger" />
                              <span>-18.9% Last week</span>
                            </p>
                          </div>
                          <div className="col-4 text-right">
                            <span className="inlineline" />
                          </div>
                        </div>{" "}
                        {/* /. row */}
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card */}
                  </div>{" "}
                  {/* /. col */}
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <small className="text-muted mb-1">
                              Conversion
                            </small>
                            <h3 className="card-title mb-0">68</h3>
                            <p className="small text-muted mb-0">
                              <span className="fe fe-arrow-up fe-12 text-warning" />
                              <span>+1.9% Last week</span>
                            </p>
                          </div>
                          <div className="col-4 text-right">
                            <span className="inlinepie" />
                          </div>
                        </div>{" "}
                        {/* /. row */}
                      </div>{" "}
                      {/* /. card-body */}
                    </div>{" "}
                    {/* /. card */}
                  </div>{" "}
                  {/* /. col */}
                </div>{" "}
                {/* end section */}
                <div className="row">
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <span className="card-title">Today</span>
                        <a className="float-right small text-muted" href="#!">
                          <i className="fe fe-more-vertical fe-12" />
                        </a>
                      </div>
                      <div className="card-body my-n2">
                        <div className="d-flex">
                          <div className="flex-fill">
                            <h4 className="mb-0">120</h4>
                          </div>
                          <div className="flex-fill text-right">
                            <p className="mb-0 small">+20%</p>
                            <p className="text-muted mb-0 small">last week</p>
                          </div>
                        </div>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <span className="card-title">Yesterday</span>
                        <a className="float-right small text-muted" href="#!">
                          <span>+1.8%</span>
                        </a>
                      </div>
                      <div className="card-body my-n1">
                        <div className="d-flex">
                          <div className="flex-fill">
                            <h4 className="mb-0">2068</h4>
                          </div>
                          <div className="flex-fill text-right">
                            <span className="sparkline inlinebar">
                              <p />
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center my-1">
                          <div className="col">
                            <h4 className="mb-0">15%</h4>
                            <p className="small text-muted mb-0">Cpu Usage</p>
                          </div>
                          <div className="col-5">
                            <div id="gauge1" className="gauge-container" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col */}
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <div className="row align-items-center my-1">
                          <div className="col">
                            <h4 className="mb-0">65%</h4>
                            <p className="small text-muted mb-0">Ram Usage</p>
                          </div>
                          <div className="col-5">
                            <div id="gauge2" className="gauge-container" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* .card-body */}
                    </div>{" "}
                    {/* .card */}
                  </div>{" "}
                  {/* .col */}
                </div>
                {/* Widget card */}
                <h2 className="h5">Cards</h2>
                <p className="text-muted">
                  This primitive is meant to make it easy to display both
                  user-centric or activity-centric actions in your app.
                  Sometimes it makes sense to even blend both in a single
                  timeline, which works perfectly.
                </p>
                <div className="card-columns">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="py-5 text-center">
                        <p className="text-muted mb-2">Real time</p>
                        <h2 className="mb-1">1,254</h2>
                        <span className="small text-success">+2%</span>
                      </div>
                      <div className="row align-items-center mb-1">
                        <div className="col-auto">
                          <div className="my-2 text-left">
                            <small className="text-danger mr-2">High</small>
                            <small className="text-warning mx-2">Medium</small>
                            <small className="text-success mx-2">Low</small>
                          </div>
                        </div>
                        <div className="col text-right">
                          <small className="mb-0 text-muted">Statistics</small>
                        </div>
                      </div>
                      <div
                        className="progress rounded mb-3"
                        style={{ height: 14 }}
                      >
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          15%
                        </div>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          30%
                        </div>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          20%
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="chart-widget">
                        <div id="gradientRadial" />
                      </div>
                      <div className="row">
                        <div className="col-6 text-center">
                          <p className="text-muted mb-0">Yesterday</p>
                          <h4 className="mb-1">126</h4>
                          <p className="text-muted mb-2">+5.5%</p>
                        </div>
                        <div className="col-6 text-center">
                          <p className="text-muted mb-0">Today</p>
                          <h4 className="mb-1">86</h4>
                          <p className="text-muted mb-2">-5.5%</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
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
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="row items-align-center">
                        <div className="col-md-6 my-4">
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
                        <div className="col-md-6 border-top pt-3">
                          <p className="mb-1">
                            <strong className="text-muted">Cost</strong>
                          </p>
                          <h4 className="mb-0">108</h4>
                          <p className="small text-muted mb-0">
                            <span>37.7% Last week</span>
                          </p>
                        </div>{" "}
                        {/* .col */}
                        <div className="col-md-6 border-top pt-3">
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
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="row border-bottom">
                        <div className="col-6 text-center border-right mb-3">
                          <p className="text-uppercase text-muted mb-1">
                            Total
                          </p>
                          <h4 className="mb-1">$6,830</h4>
                          <p className="text-muted mb-0">+5.5%</p>
                        </div>
                        <div className="col-6 text-center mb-3">
                          <p className="text-uppercase text-muted mb-1">
                            Target
                          </p>
                          <h4 className="mb-1">$4,830</h4>
                          <p className="text-muted mb-0">-5.5%</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                    <div className="chart-widget mb-n3">
                      <div id="areaChartWidget" />
                    </div>
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="mb-0 text-uppercase text-muted">
                          Today
                        </strong>
                      </p>
                      <h3 className="mb-0">$2,562.30</h3>
                      <p className="text-muted">+18.9% Last week</p>
                      <div className="chart-box mt-n5">
                        <div id="lineChartWidget" />
                      </div>
                      <div className="row">
                        <div className="col-md-4 text-center mt-3">
                          <p className="mb-1 text-muted">Completions</p>
                          <h6 className="mb-0">26</h6>
                          <span className="small text-muted">+20%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                        </div>
                        <div className="col-md-4 text-center mt-3">
                          <p className="mb-1 text-muted">Goal Value</p>
                          <h6 className="mb-0">$260</h6>
                          <span className="small text-muted">+6%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                        </div>
                        <div className="col-md-4 text-center mt-3">
                          <p className="mb-1 text-muted">Conversion</p>
                          <h6 className="mb-0">6%</h6>
                          <span className="small text-muted">-2%</span>
                          <span className="fe fe-arrow-down text-danger fe-12" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="d-flex mb-2">
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
                            108 <span className="small text-muted">+37.7%</span>
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
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="chart-box mb-3">
                        <div id="customAngle" />
                      </div>{" "}
                      {/* .col */}
                      <div className="w-70 mx-auto">
                        <div className="row align-items-center mb-2">
                          <div className="col">
                            <p className="mb-0">Direct</p>
                            <span className="my-0 text-muted small">+10%</span>
                          </div>
                          <div className="col-auto text-right">
                            <p className="mb-0">218</p>
                            <span className="dot dot-md bg-success" />
                          </div>
                        </div>
                        <div className="row align-items-center mb-2">
                          <div className="col">
                            <p className="mb-0">Organic Search</p>
                            <span className="my-0 text-muted small">+0.6%</span>
                          </div>
                          <div className="col-auto text-right">
                            <p className="mb-0">1002</p>
                            <span className="dot dot-md bg-warning" />
                          </div>
                        </div>
                        <div className="row align-items-center mb-2">
                          <div className="col">
                            <p className="mb-0">Referral</p>
                            <span className="my-0 text-muted small">+1.6%</span>
                          </div>
                          <div className="col-auto text-right">
                            <p className="mb-0">67</p>
                            <span className="dot dot-md bg-primary" />
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col">
                            <p className="mb-0">Social</p>
                            <span className="my-0 text-muted small">+118%</span>
                          </div>
                          <div className="col-auto text-right">
                            <p className="mb-0">386</p>
                            <span className="dot dot-md bg-secondary" />
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <strong>Browsers</strong>
                    </div>
                    <div className="card-body">
                      <div className="chart-box mb-3">
                        <div id="radarChartWidget" />
                      </div>{" "}
                      {/* .col */}
                      <div className="mx-auto">
                        <div className="row align-items-center my-2">
                          <div className="col-6 col-xl-3 my-3">
                            <span className="small mb-0">Safari</span>
                            <div
                              className="progress my-2"
                              style={{ height: 4 }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "10%" }}
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-6 col-xl-3 my-3 text-right">
                            <span>118</span>
                            <br />
                            <span className="my-0 text-muted small">+10%</span>
                          </div>
                          <div className="col-6 col-xl-3 my-3">
                            <span className="small mb-0">Chrome</span>
                            <div
                              className="progress my-2"
                              style={{ height: 4 }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "36%" }}
                                aria-valuenow={36}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-6 col-xl-3 my-3 text-right">
                            <span>1008</span>
                            <br />
                            <span className="my-0 text-muted small">+36%</span>
                          </div>
                          <div className="col-6 col-xl-3 my-3">
                            <span className="mb-0">Opera</span>
                            <div
                              className="progress my-2"
                              style={{ height: 4 }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-6 col-xl-3 my-3 text-right">
                            <span>67</span>
                            <br />
                            <span className="my-0 text-muted small">+1.6%</span>
                          </div>
                          <div className="col-6 col-xl-3 my-3">
                            <span className="mb-0">Edge</span>
                            <div
                              className="progress my-2"
                              style={{ height: 4 }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-6 col-xl-3 my-3 text-right">
                            <span>186</span>
                            <br />
                            <span className="my-0 text-muted small">+118%</span>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className>
                        <strong className="card-title">Services</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div id="chart-box">
                            <div id="donutChartWidget" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row align-items-center my-3">
                            <div className="col">
                              <strong>Cloud Server</strong>
                              <div className="my-0 text-muted small">
                                Global, Services
                              </div>
                            </div>
                            <div className="col-auto">
                              <strong>+85%</strong>
                            </div>
                            <div className="col-3">
                              <div className="progress" style={{ height: 4 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow={85}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col">
                              <strong>CDN</strong>
                              <div className="my-0 text-muted small">
                                Global, Services
                              </div>
                            </div>
                            <div className="col-auto">
                              <strong>+75%</strong>
                            </div>
                            <div className="col-3">
                              <div className="progress" style={{ height: 4 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col">
                              <strong>Databases</strong>
                              <div className="my-0 text-muted small">
                                Local, DC
                              </div>
                            </div>
                            <div className="col-auto">
                              <strong>+62%</strong>
                            </div>
                            <div className="col-3">
                              <div className="progress" style={{ height: 4 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "62%" }}
                                  aria-valuenow={62}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* .col-md-12 */}
                      </div>{" "}
                      {/* .row */}
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="chart-widget">
                        <div id="columnChartWidget" width={300} height={200} />
                      </div>
                      <div className="row mt-2">
                        <div className="col-6 text-center mb-3 border-right">
                          <p className="text-muted mb-1">Total</p>
                          <h6 className="mb-1">830</h6>
                          <p className="text-muted mb-2">+5.5%</p>
                        </div>
                        <div className="col-6 text-center mb-3">
                          <p className="text-muted mb-1">Target</p>
                          <h6 className="mb-1">4,830</h6>
                          <p className="text-muted">-5.5%</p>
                        </div>
                        <div className="col-6 text-center border-right">
                          <p className="text-muted mb-1">Total</p>
                          <h6 className="mb-1">680</h6>
                          <p className="text-muted mb-2">+5.5%</p>
                        </div>
                        <div className="col-6 text-center">
                          <p className="text-muted mb-1">Target</p>
                          <h6 className="mb-1">430</h6>
                          <p className="text-muted">-5.5%</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <strong>Region</strong>
                    </div>
                    <div className="card-body">
                      <div
                        className="map-box"
                        style={{
                          position: "relative",
                          width: 320,
                          minHeight: 130,
                        }}
                      >
                        <div id="dataMapUSA" />
                      </div>
                      <div className="row align-items-center h-100 my-2">
                        <div className="col">
                          <p className="mb-0">France</p>
                          <span className="my-0 text-muted small">+10%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>118</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <p className="mb-0">Netherlands</p>
                          <span className="my-0 text-muted small">+0.6%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>1008</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <p className="mb-0">Italy</p>
                          <span className="my-0 text-muted small">+1.6%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>67</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <p className="mb-0">Spain</p>
                          <span className="my-0 text-muted small">+118%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>186</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <strong>Devices</strong>
                    </div>
                    <div className="card-body">
                      <div className="mb-2">
                        <div id="pieChartWidget" />
                      </div>
                      <div className="row mt-4">
                        <div className="col-4 text-center">
                          <div className="circle circle-md bg-light">
                            <span className="fe fe-monitor fe-24 text-muted" />
                          </div>
                          <div className="mt-2">
                            <strong>1086</strong>
                            <br />
                            <span className="my-0 text-muted small">+68%</span>
                          </div>
                        </div>
                        <div className="col-4 text-center">
                          <div className="circle circle-md bg-light">
                            <span className="fe fe-smartphone fe-24 text-muted" />
                          </div>
                          <div className="mt-2">
                            <strong>175</strong>
                            <br />
                            <span className="my-0 text-muted small">+18%</span>
                          </div>
                        </div>
                        <div className="col-4 text-center">
                          <div className="circle circle-md bg-light">
                            <span className="fe fe-tablet fe-24 text-muted" />
                          </div>
                          <div className="mt-2">
                            <strong>126</strong>
                            <br />
                            <span className="my-0 text-muted small">-8%</span>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* card-body */}
                  </div>{" "}
                  {/* .card */}
                </div>{" "}
                {/* .row */}
                <h2 className="h5">Timeline &amp; Activity</h2>
                <p className="text-muted">
                  This primitive is meant to make it easy to display both
                  user-centric or activity-centric actions in your app.
                  Sometimes it makes sense to even blend both in a single
                  timeline, which works perfectly.
                </p>
                <div className="row">
                  {/* Recent Activity */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title float-left">
                          Recent Activity
                        </strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="list-group list-group-flush my-n3">
                          <div className="list-group-item">
                            <div className="row">
                              <div className="col-auto">
                                <div className="avatar avatar-sm mt-2">
                                  <img
                                    src="./assets/avatars/face-1.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <small>
                                  <strong>Brown, Asher</strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  Just create new layout Index, form, table
                                </div>
                                <small className="badge badge-light text-muted">
                                  1h ago
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row">
                              <div className="col-auto">
                                <div className="avatar avatar-sm mt-2">
                                  <img
                                    src="./assets/avatars/face-2.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <small>
                                  <strong>Hester, Nissim</strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  Fusce dapibus, tellus ac cursus commodo
                                </div>
                                <small className="badge badge-light text-muted">
                                  2h ago
                                </small>
                              </div>
                            </div>{" "}
                            {/* / .row */}
                          </div>
                          <div className="list-group-item">
                            <div className="row">
                              <div className="col-auto">
                                <div className="avatar avatar-sm mt-2">
                                  <img
                                    src="./assets/avatars/face-3.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <small>
                                  <strong>Kelley, Sonya</strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  Created new layout for widgets
                                </div>
                                <small className="badge badge-light text-muted">
                                  4h ago
                                </small>
                              </div>
                            </div>
                          </div>{" "}
                          {/* / .row */}
                        </div>{" "}
                        {/* / .list-group */}
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col-md-3 */}
                  {/* Product List */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Recent Orders</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="list-group list-group-flush my-n3">
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-3 col-md-2">
                                <img
                                  src="./assets/products/p1.jpg"
                                  alt="..."
                                  className="thumbnail-sm"
                                />
                              </div>
                              <div className="col">
                                <strong>Fusion Backpack</strong>
                                <div className="my-0 text-muted small">
                                  Gear, Bags
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+85%</strong>
                                <div
                                  className="progress mt-2"
                                  style={{ height: 4 }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow={85}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-3 col-md-2">
                                <img
                                  src="./assets/products/p2.jpg"
                                  alt="..."
                                  className="thumbnail-sm"
                                />
                              </div>
                              <div className="col">
                                <strong>Luma hoodies</strong>
                                <div className="my-0 text-muted small">
                                  Jackets, Men
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+75%</strong>
                                <div
                                  className="progress mt-2"
                                  style={{ height: 4 }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-3 col-md-2">
                                <img
                                  src="./assets/products/p3.jpg"
                                  alt="..."
                                  className="thumbnail-sm"
                                />
                              </div>
                              <div className="col">
                                <strong>Luma shorts</strong>
                                <div className="my-0 text-muted small">
                                  Shorts, Men
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+62%</strong>
                                <div
                                  className="progress mt-2"
                                  style={{ height: 4 }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "62%" }}
                                    aria-valuenow={62}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-3 col-md-2">
                                <img
                                  src="./assets/products/p4.jpg"
                                  alt="..."
                                  className="thumbnail-sm"
                                />
                              </div>
                              <div className="col">
                                <strong>Brown Trousers</strong>
                                <div className="my-0 text-muted small">
                                  Trousers, Women
                                </div>
                              </div>
                              <div className="col-auto">
                                <strong>+24%</strong>
                                <div
                                  className="progress mt-2"
                                  style={{ height: 4 }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "24%" }}
                                    aria-valuenow={24}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* / .list-group */}
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col-md-3 */}
                  {/* Notification List */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">
                          Notification List
                        </strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="list-group list-group-flush my-n3">
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="fe fe-box fe-24" />
                              </div>
                              <div className="col">
                                <small>
                                  <strong>
                                    Package has uploaded successfull
                                  </strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  Package is zipped and uploaded
                                </div>
                              </div>
                              <div className="col-auto">
                                <small className="badge badge-pill badge-light text-muted">
                                  1m ago
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="fe fe-download fe-24" />
                              </div>
                              <div className="col">
                                <small>
                                  <strong>
                                    Widgets are updated successfull
                                  </strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  Just create new layout Index, form, table
                                </div>
                              </div>
                              <div className="col-auto">
                                <small className="badge badge-pill badge-light text-muted">
                                  2m ago
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
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
                              </div>
                              <div className="col-auto">
                                <small className="badge badge-pill badge-light text-muted">
                                  30m ago
                                </small>
                              </div>
                            </div>{" "}
                            {/* / .row */}
                          </div>
                          <div className="list-group-item">
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
                              </div>
                              <div className="col-auto">
                                <small className="badge badge-pill badge-light text-muted">
                                  1h ago
                                </small>
                              </div>
                            </div>
                          </div>{" "}
                          {/* / .row */}
                        </div>{" "}
                        {/* / .list-group */}
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col-md-3 */}
                  {/* Recent Activity */}
                  <div className="col-md-6 mb-4">
                    <div className="card timeline">
                      <div className="card-header">
                        <strong className="card-title">Recent Activity</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
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
                              <strong>@Fletcher Everett</strong>
                              <span className="text-muted small mx-2">
                                created new group for
                              </span>
                              <strong>Tiny Admin</strong>
                            </div>
                            <ul className="avatars-list mb-2">
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
                            <div className="mb-2">
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
                                adipiscing elit.{" "}
                              </div>
                            </div>
                            <p className="small text-muted">
                              Back-End Development{" "}
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
                </div>{" "}
                {/* / .row */}
                <div className="row">
                  {/* Files List */}
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Recent Files</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="list-group list-group-flush my-n3">
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="fe fe-image fe-24 text-muted" />
                              </div>
                              <div className="col">
                                <small>
                                  <strong>Main logo</strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  <span className="badge badge-light text-muted mr-2">
                                    1.2M
                                  </span>
                                  <span className="badge badge-pill badge-light text-muted">
                                    SVG
                                  </span>
                                </div>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="fe fe-24 fe-folder text-muted" />
                              </div>
                              <div className="col">
                                <small>
                                  <strong>Tiny Admin</strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  <span className="badge badge-pill badge-light text-muted">
                                    Folder
                                  </span>
                                </div>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>{" "}
                            {/* / .row */}
                          </div>{" "}
                          {/* / .list-group */}
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="fe fe-24 fe-file text-muted" />
                              </div>
                              <div className="col">
                                <small>
                                  <strong>Advanced Table</strong>
                                </small>
                                <div className="my-0 text-muted small">
                                  <span className="badge badge-light text-muted">
                                    120K
                                  </span>{" "}
                                  <span className="badge badge-pill badge-light text-muted">
                                    HTML
                                  </span>
                                </div>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>{" "}
                            {/* / .row */}
                          </div>{" "}
                          {/* / .list-group-item */}
                        </div>{" "}
                        {/* / .list-group */}
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col-md-3 */}
                  {/* Files List Full */}
                  <div className="col-md-8 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Files</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
                        <table className="table table-borderless my-n3">
                          <thead className="d-none">
                            <tr>
                              <th>Icon</th>
                              <th className="w-50">File</th>
                              <th>Owner</th>
                              <th>Last Update</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span className="fe fe-24 fe-folder mx-2 text-muted" />
                              </td>
                              <th scope="row">
                                <small>
                                  <strong>Bootstrap</strong>
                                  <small>
                                    <br />
                                    <span className="badge badge-light text-muted mr-2">
                                      Folder
                                    </span>
                                  </small>
                                </small>
                              </th>
                              <td>
                                <small>Lionel Carney</small>
                                <br />
                                <small className="text-muted">
                                  Jan 20, 2021
                                </small>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-dropdown"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <a className="dropdown-item" href="#">
                                      <small>Move</small>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <small>Share</small>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <small>Delete</small>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fe fe-24 fe-image mx-2 text-muted" />
                              </td>
                              <th scope="row">
                                <small>
                                  <strong>Tiny Admin Homepagge UI</strong>
                                  <small>
                                    <br />
                                    <span className="badge badge-light text-muted mr-2">
                                      PSD
                                    </span>
                                    <span className="badge badge-light text-muted mr-2">
                                      5.1M
                                    </span>
                                  </small>
                                </small>
                              </th>
                              <td>
                                <small>Leilani Larson</small>
                                <br />
                                <small className="text-muted">
                                  Feb 5, 2020
                                </small>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-dropdown"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <a className="dropdown-item" href="#">
                                      <small>Move</small>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <small>Share</small>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <small>Delete</small>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fe fe-24 fe-file mx-2 text-muted" />
                              </td>
                              <th scope="row">
                                <small>
                                  <strong>Index page</strong>
                                  <small>
                                    <br />
                                    <span className="badge badge-light text-muted mr-2">
                                      1.24M
                                    </span>
                                    <span className="badge badge-light text-muted">
                                      HTML
                                    </span>
                                  </small>
                                </small>
                              </th>
                              <td>
                                <small>Dennis Pollard</small>
                                <br />
                                <small className="text-muted">
                                  Oct 30, 2019
                                </small>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle more-dropdown"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <a className="dropdown-item" href="#">
                                      <small>Move</small>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <small>Share</small>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <small>Delete</small>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>{" "}
                      {/* / .list-group */}
                    </div>{" "}
                    {/* / .card-body */}
                  </div>{" "}
                  {/* / .card */}
                </div>{" "}
                {/* end section */}
                <div className="row">
                  {/* Log */}
                  <div className="col-md-12 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title">Logging</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="list-group list-group-flush my-n3">
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="circle circle-sm bg-warning">
                                  <i className="fe fe-shield-off fe-16 text-white" />
                                </span>
                              </div>
                              <div className="col">
                                <small>
                                  <strong>11:00 April 16, 2020</strong>
                                </small>
                                <div className="mb-2 text-muted small">
                                  Lorem ipsum dolor sit amet,{" "}
                                  <strong>consectetur adipiscing</strong> elit.
                                  Integer dignissim nulla eu quam cursus
                                  placerat. Vivamus non odio ullamcorper,
                                  lacinia ante nec, blandit leo.{" "}
                                </div>
                                <span className="badge badge-pill badge-warning">
                                  Security
                                </span>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>{" "}
                            {/* / .row */}
                          </div>
                          {/* / .list-group-item */}
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="circle circle-sm bg-success">
                                  <i className="fe fe-database fe-16 text-white" />
                                </span>
                              </div>
                              <div className="col">
                                <small>
                                  <strong>17:00 April 15, 2020</strong>
                                </small>
                                <div className="mb-2 text-muted small">
                                  Proin porta vel erat suscipit luctus. Cras
                                  rhoncus felis sed magna commodo, in{" "}
                                  <a href="#!">pretium</a> mauris faucibus. Cras
                                  rhoncus felis sed magna commodo, in pretium
                                  mauris faucibus.
                                </div>
                                <span className="badge badge-pill badge-success">
                                  System Update
                                </span>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>{" "}
                            {/* / .row */}
                          </div>
                          {/* / .list-group-item */}
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <span className="circle circle-sm bg-secondary">
                                  <i className="fe fe-user-plus fe-16 text-white" />
                                </span>
                              </div>
                              <div className="col">
                                <small>
                                  <strong>17:00 April 10, 2020</strong>
                                </small>
                                <div className="mb-2 text-muted small">
                                  {" "}
                                  Morbi id arcu convallis, eleifend justo
                                  tristique, tincidunt nisl. Morbi euismod
                                  fermentum quam, at fringilla elit posuere a.{" "}
                                  <strong>Aliquam</strong> accumsan mi venenatis
                                  risus fermentum, at sagittis velit fermentum.
                                </div>
                                <span className="badge badge-pill badge-secondary">
                                  Users
                                </span>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>{" "}
                            {/* / .row */}
                          </div>
                          {/* / .list-group-item */}
                        </div>{" "}
                        {/* / .list-group */}
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col */}
                </div>{" "}
                {/* end section */}
                <h2 className="h5" id="user-section">
                  Users
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris blandit nisl ullamcorper, rutrum metus in, congue
                  lectus. In hac habitasse platea dictumst. Cras urna quam,
                  malesuada vitae risus at, pretium blandit sapien.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-4 col-md-2 text-center">
                            <a
                              href="profile-posts.html"
                              className="avatar avatar-md"
                            >
                              <img
                                src="./assets/avatars/face-2.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </a>
                          </div>
                          <div className="col">
                            <strong className="mb-1">Leblanc Yoshio</strong>
                            <span className="dot dot-lg bg-success ml-1" />
                            <p className="small text-muted mb-1">
                              Fringilla Ornare Placerat Consulting
                            </p>
                          </div>
                          <div className="col-4 col-md-auto offset-4 offset-md-0 my-2">
                            <a href="#!" className="btn btn-sm btn-secondary">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                    <div className="card shadow mb-4">
                      <div className="card-body text-center">
                        <a href="#!" className="avatar avatar-lg">
                          <img
                            src="./assets/avatars/face-4.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </a>
                        <div className="card-text my-2">
                          <strong className="card-title my-0">
                            Bass Wendy{" "}
                          </strong>
                          <p className="small text-muted mb-0">
                            Accumsan Consulting
                          </p>
                          <p className="small">
                            <span className="badge badge-dark">
                              New York, USA
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* ./card-text */}
                      <div className="card-footer">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-auto">
                            <small>
                              <span className="dot dot-lg bg-success mr-1" />{" "}
                              Online{" "}
                            </small>
                          </div>
                          <div className="col-auto">
                            <a href="#!" className="btn btn-sm btn-primary">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* /.card-footer */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* / .col- */}
                  <div className="col-md-6">
                    <div className="card shadow mb-4">
                      <div className="card-body">
                        <div className="list-group list-group-flush my-n3">
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <a
                                  href="profile-posts.html"
                                  className="avatar avatar-sm"
                                >
                                  <img
                                    src="./assets/avatars/face-3.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </a>
                              </div>
                              <div className="col">
                                <p className="small mb-0">
                                  <strong>Kelley Sonya</strong>
                                </p>
                                <small>
                                  <span className="dot dot-md bg-success ml-1" />
                                  <span className="text-muted"> Online</span>
                                </small>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <a
                                  href="profile-posts.html"
                                  className="avatar avatar-sm"
                                >
                                  <img
                                    src="./assets/avatars/face-1.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </a>
                              </div>
                              <div className="col">
                                <p className="small mb-0">
                                  <strong>Brown, Asher</strong>
                                </p>
                                <small>
                                  <span className="dot dot-md bg-secondary ml-1" />
                                  <span className="text-muted"> Offline</span>
                                </small>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <a
                                  href="profile-posts.html"
                                  className="avatar avatar-sm"
                                >
                                  <img
                                    src="./assets/avatars/face-4.jpg"
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                  />
                                </a>
                              </div>
                              <div className="col">
                                <p className="small mb-0">
                                  <strong>Bass Wendy</strong>
                                </p>
                                <small>
                                  <span className="dot dot-md bg-success ml-1" />
                                  <span className="text-muted"> Online</span>
                                </small>
                              </div>
                              <div className="col-auto pr-0">
                                <small className="fe fe-more-vertical fe-16 text-muted" />
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* / .list-group */}
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <a
                              href="profile-posts.html"
                              className="avatar avatar-md"
                            >
                              <img
                                src="./assets/avatars/face-1.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </a>
                          </div>
                          <div className="col ml-n2">
                            <strong className="mb-1">Brown, Asher</strong>
                            <span className="dot dot-lg bg-success ml-1" />
                            <p className="small text-muted mb-1">
                              Fringilla Ornare Placerat Consulting
                            </p>
                          </div>
                          <div className="col-auto">
                            <span className="m-1">
                              <i className="fe fe-facebook fe-12 text-muted" />
                            </span>
                            <span className="m-1">
                              <i className="fe fe-twitter fe-12 text-muted" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col">
                            <div className="small mb-2 d-flex">
                              <span className="text-muted flex-fill">
                                Progress
                              </span>
                              <span className="text-muted">68</span>
                            </div>
                            <div className="progress" style={{ height: 2 }}>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                            >
                              Message
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary"
                            >
                              Profile
                            </button>
                          </div>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* / .card */}
                  </div>{" "}
                  {/* / .col- */}
                  <div className="col-md-12 mb-4">
                    <div className="card profile shadow">
                      <div className="card-body my-4">
                        <div className="row align-items-center">
                          <div className="col-md-3 text-center mb-5">
                            <a href="#!" className="avatar avatar-xl">
                              <img
                                src="./assets/avatars/face-3.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </a>
                          </div>
                          <div className="col">
                            <div className="row align-items-center">
                              <div className="col-md-7">
                                <h4 className="mb-1">Brown, Asher</h4>
                                <p className="small mb-3">
                                  <span className="badge badge-dark">
                                    New York, USA
                                  </span>
                                </p>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="row mb-4">
                              <div className="col-md-7">
                                <p className="text-muted">
                                  {" "}
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Mauris blandit nisl
                                  ullamcorper, rutrum metus in, congue lectus.
                                  In hac habitasse platea dictumst. Cras urna
                                  quam, malesuada vitae risus at, pretium
                                  blandit sapien.{" "}
                                </p>
                              </div>
                              <div className="col">
                                <p className="small mb-0 text-muted">
                                  Nec Urna Suscipit Ltd
                                </p>
                                <p className="small mb-0 text-muted">
                                  P.O. Box 464, 5975 Eget Avenue
                                </p>
                                <p className="small mb-0 text-muted">
                                  (537) 315-1481
                                </p>
                              </div>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-md-7 mb-2">
                                <span className="small text-muted mb-0">
                                  Joined April 10, 2020
                                </span>
                              </div>
                              <div className="col mb-2">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Message
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                >
                                  Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* / .row- */}
                      </div>{" "}
                      {/* / .card-body - */}
                    </div>{" "}
                    {/* / .card- */}
                  </div>{" "}
                  {/* / .col- */}
                </div>{" "}
                {/* end section */}
                <h2 className="h5" id="task-section">
                  Tasks
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris blandit nisl ullamcorper, rutrum metus in, congue
                  lectus. In hac habitasse platea dictumst. Cras urna quam,
                  malesuada vitae risus at, pretium blandit sapien.
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card shadow mb-3">
                      <div className="card-body py-3">
                        <div className="row align-items-center">
                          <div className="col-auto pr-1">
                            <span className="small text-muted fe fe-12 fe-menu mr-1 d-block d-md-inline" />
                            <span className="small text-muted">2/10</span>
                          </div>
                          <div className="col pr-0">
                            <strong>Updated layouts structures</strong>
                            <p className="small text-muted mb-0">Due 5 days</p>
                          </div>
                          <div className="col-auto px-0">
                            <ul className="avatars-list m-0">
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-2.jpg"
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
                            </ul>
                          </div>
                          <div className="col-auto">
                            <small className="fe fe-more-vertical fe-16 text-muted" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* /.card */}
                    <div className="card shadow mb-3">
                      <div className="card-body py-3">
                        <div className="row align-items-center">
                          <div className="col-auto pr-1">
                            <span className="small text-muted fe fe-12 fe-check mr-1 d-block d-md-inline" />
                            <span className="small text-muted">6/6</span>
                          </div>
                          <div className="col pr-0">
                            <strong>Create new plan</strong>
                            <p className="small text-muted mb-0">Due 5 days</p>
                          </div>
                          <div className="col-auto px-0">
                            <ul className="avatars-list m-0">
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
                          </div>
                          <div className="col-auto">
                            <small className="fe fe-more-vertical fe-16 text-muted" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* /.card */}
                    <div className="card shadow">
                      <div className="card-body py-3">
                        <div className="row align-items-center">
                          <div className="col-auto pr-1">
                            <span className="small text-muted fe fe-12 fe-menu mr-1 d-block d-md-inline" />
                            <span className="small text-muted">1/2</span>
                          </div>
                          <div className="col pr-0">
                            <strong>Setup new demo</strong>
                            <p className="small text-muted mb-0">3 days</p>
                          </div>
                          <div className="col-auto px-0">
                            <ul className="avatars-list m-0">
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-3.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#!" className="avatar avatar-sm">
                                  <img
                                    alt="..."
                                    className="avatar-img rounded-circle"
                                    src="./assets/avatars/face-2.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-auto">
                            <small className="fe fe-more-vertical fe-16 text-muted" />
                          </div>
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                  <div className="col-md-6 mb-4">
                    <div className="card shadow">
                      <div className="card-header">
                        <strong className="card-title mb-0">Checklist</strong>
                        <span className="small text-muted float-right mt-1">
                          6 items completed
                        </span>
                      </div>
                      <div className="card-body">
                        <div className="custom-control custom-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="c1"
                          />
                          <label className="custom-control-label" htmlFor="c1">
                            Create homepage layout with 3 block
                          </label>
                          <span className="small text-muted fe fe-12 fe-menu float-right" />
                        </div>
                        <div className="custom-control custom-checkbox mb-2 checked">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="c2"
                            defaultChecked
                          />
                          <label className="custom-control-label" htmlFor="c2">
                            Add latest version for bootstrap
                          </label>
                          <span className="small text-muted fe fe-12 fe-menu float-right" />
                        </div>
                        <div className="custom-control custom-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="c3"
                          />
                          <label className="custom-control-label" htmlFor="c3">
                            Update git with new layout
                          </label>
                          <span className="small text-muted fe fe-12 fe-menu float-right" />
                        </div>
                        <div className="custom-control custom-checkbox mb-2 checked">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="c4"
                            defaultChecked
                          />
                          <label className="custom-control-label" htmlFor="c4">
                            Create new document version
                          </label>
                          <span className="small text-muted fe fe-12 fe-menu float-right" />
                        </div>
                        <div className="custom-control custom-checkbox mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="c5"
                          />
                          <label className="custom-control-label" htmlFor="c5">
                            Send email to everyone
                          </label>
                          <span className="small text-muted fe fe-12 fe-menu float-right" />
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="c5"
                          />
                          <label className="custom-control-label" htmlFor="c5">
                            Build and create a new package
                          </label>
                          <span className="small text-muted fe fe-12 fe-menu float-right" />
                        </div>
                      </div>{" "}
                      {/* / .card-body */}
                    </div>{" "}
                    {/* /.card */}
                  </div>{" "}
                  {/* /.col */}
                </div>{" "}
                {/* /.row */}
              </div>
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

export default Widgets;
