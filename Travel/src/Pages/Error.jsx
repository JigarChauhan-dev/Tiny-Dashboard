import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
<div>
  <section className="w3l-error-page">
    <div className="covers-main">
      <div className="wrapper">
        <div className="d-gird">
          <div className="left-grid-widget">
            <h1>
              <Link to={"/"} className="logo">Travelling</Link>
            </h1>
            <p className="page-detail">404 Error Page</p>
            <Link to={"/"} className="back-button">Back to Home</Link>
          </div>
          <div className="main-cover">
            <h4 className="cover-para">404</h4>
            <p className="form-text">Sorry, we're offline right now to make our site even better.
              Please, come back later and check what we've been up to.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default Error