import React from 'react'
import { Link } from 'react-router-dom'

function ComingSonn() {
  return (
    <div>
<div>
  <section className="w3l-forms-30">
    <div className="covers-main">
      <div className="wrapper">
        <div className="d-gird">
          <div className="left-grid-widget">
            <h1>
              <Link to={"/"} className="logo">Travelling</Link>
            </h1>
            <p className="page-detail">Coming Soon Page</p>
            <Link to={"/"} className="back-button">Back to Home</Link>
          </div>
          <div className="main-cover">
            <h4 className="cover-para">Coming Soon</h4>
            <p className="form-text">Our Website is about to launch pretty soon. Be the first to know about that
              and
              subscribe today.</p>
            <form action="#" method="post" className="d-grid w3l-forms-28-form">
              <input type="email" name="email" placeholder="Your Email" required />
              <button type="submit" className="buttonbg">Notify Me</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default ComingSonn