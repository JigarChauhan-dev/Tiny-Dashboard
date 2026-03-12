import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioSingle() {
  return (
    <div>
<div>
  {/* inner banner */}
  <section className="w3l-inner-banner-main">
    <div className="banner-9 sec-img">
      <div className="wrapper">
        <ul className="breadcrumbs-custom-path">
          <li><Link to={"/"}>Home <span className="fa fa-angle-right" aria-hidden="true" /></Link></li>
          <li><a href="portfolio.html">Portfolio <span className="fa fa-angle-right" aria-hidden="true" /></a></li>
          <li className="active">Portfolio Single</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  <section className="w3l-_content-3">
    <div className="grid top-bottom background">
      <div className="wrapper">
        <h3 className="title-main">Portfolio Single</h3>
        <p className="sub-title">Exploring places, emotions, and memories that last a lifetime.</p>
        <div className="middle-section">
          <img src="assets/images/ports.jpg" alt className="img-fluid" />
          <h2>Travel That Inspires</h2>
          <div className="two-columns">
            <div className="three-grids-columns">
              <p>Every journey we create is thoughtfully planned to offer comfort, discovery,
      and meaningful experiences across carefully selected destinations.</p>
            </div>
            <div className="three-grids-columns">
              <p className="spacing-none2">      From iconic landmarks to lesser-known locations, our itineraries balance
      exploration with relaxation for a smooth travel experience.</p>
            </div>
          </div>
          <div className="three-grids-columns">
            <p className="spacing-none">    Our portfolio reflects a commitment to quality travel, combining reliable service,
    personalized planning, and attention to detail. Each trip is designed to feel
    effortless, memorable, and truly rewarding from start to finish.  </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default PortfolioSingle