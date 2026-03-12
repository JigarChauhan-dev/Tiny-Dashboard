import React from 'react'
import { Link } from 'react-router-dom'

function Galley() {
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
          <li className="active">Gallery</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  {/* gallery 19 block */}
  <section className="w3l-galleries-19">
    <div className="gallery-19">
      <div className="wrapper">
        <div className="gallery-main-9">
          <p className="text-tag">Travelling</p>
          <h3 className="gallery-text-19">Explore the Beauty of the Beautiful World</h3>
        </div>
        {/* gallery slider */}
        <div className="slider">
          <ul>
            <li><Link to={"/gallery"}><img src="assets/images/gallery2.jpg" alt className="img-responsive img-fluid" /></Link></li>
            <li><Link to={"/gallery"}><img src="assets/images/gallery1.jpg" alt className="img-responsive img-fluid" /></Link></li>
            <li><Link to={"/gallery"}><img src="assets/images/gallery3.jpg" alt className="img-responsive img-fluid" /></Link></li>
          </ul>
        </div>
        {/* //gallery slider */}
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default Galley