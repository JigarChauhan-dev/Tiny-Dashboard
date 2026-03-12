import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div>
<div>
  {/* inner banner */}
  <section className="w3l-inner-banner-main">
    <div className="banner-9 sec-img">
      <div className="wrapper">
        <ul className="breadcrumbs-custom-path">
          <li><Link to={"/"}>Home <span className="fa fa-angle-right" aria-hidden="true" /></Link></li>
          <li><a href="#pages">Pages <span className="fa fa-angle-right" aria-hidden="true" /></a></li>
          <li className="active">Portfolio</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  {/* portfolio1 */}
  <section className="w3l-portfolios-1">
    <div className="portfolio1">
      <div className="wrapper">
        <h3 className="title-main">Our Portfolio</h3>
        <p className="sub-title">Handpicked moments showcasing our most memorable travel experiences.</p>
        <div className="portfolio1-content">
          <div className="column1">
            <a><img src="assets/images/port1.jpg" alt className="img-fluid" /></a>
          </div>
          <div className="column2">
            <div className="portfolio1-content1">
              <div className="column3">
                <a><img src="assets/images/port2.jpg" alt className="img-fluid" /></a>
              </div>
              <div className="column4">
                <a><img src="assets/images/port3.jpg" alt className="img-fluid" /></a>
              </div>
              <div className="column5">
                <a><img src="assets/images/port4.jpg" alt className="img-fluid" /></a>
              </div>
              <div className="column6">
                <a><img src="assets/images/port5.jpg" alt className="img-fluid" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default Portfolio