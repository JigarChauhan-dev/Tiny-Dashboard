import React from 'react'
import { Link } from 'react-router-dom'

function BlogSingle() {
  return (
    <div>
<div>
  {/* inner banner */}
  <section className="w3l-inner-banner-main">
    <div className="banner-9">
      <div className="wrapper">
        <ul className="breadcrumbs-custom-path">
          <li><Link to={"/"}>Home <span className="fa fa-angle-right" aria-hidden="true" /></Link></li>
          <li><a href="blog.html">Blog <span className="fa fa-angle-right" aria-hidden="true" /></a></li>
          <li className="active">Blog Single</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  {/* text */}
  <section className="w3l-text-9">
    <div className="text-element-9">
      <div className="wrapper">
        <div className="d-grid grid-w3l-text-9">
          <div className="left-w3l-text-9">
            <aside>
              <img src="assets/images/grid1.jpg" alt className="img-responsive" />
              <h6 className="text-left-inner-9"><a href="#text">Chasing Sunsets in Coastal Cities</a></h6>
              <span className="sub-inner-w3l-text-9">Aug 01, 2019</span>
              <hr />
            </aside>
            <aside>
              <img src="assets/images/grid3.jpg" alt className="img-responsive" />
              <h6 className="text-left-inner-9"><a href="#text">Hidden Gems Every Traveler Should Know</a>
              </h6>
              <span className="sub-inner-w3l-text-9">Sep 03, 2019</span>
              <hr />
            </aside>
            <aside>
              <img src="assets/images/grid6.jpg" alt className="img-responsive" />
              <h6 className="text-left-inner-9"><a href="#text">Why Slow Travel Is the New Luxury</a></h6>
              <span className="sub-inner-w3l-text-9">Sep 06, 2019</span>
            </aside>
          </div>
          <div className="right-w3l-text-9">
            <p className="text-tag">Travel Inspiration</p>
            <h4 className="text-head-w3l-text-9">Travel Recommends: Top 10 Cities to Visit This Year</h4>
            <h5 className="sub-head-w3l-text-9">From iconic landmarks to emerging hotspots, these cities offer unforgettable culture, cuisine, and experiences for every kind of traveler.</h5>
            <h6 className="heading-small-w3l-text-9">Let’s explore further</h6>
            <p className="sub-para">Travel is more than visiting places—it’s about collecting moments. Each destination on our list offers a unique blend of history, local flavors, and modern charm. Whether you love vibrant city life or peaceful escapes, these cities promise meaningful experiences.</p>
            <p className="sub-para">With improved connectivity, better accommodations, and authentic local experiences, now is the perfect time to explore. Plan wisely, travel responsibly, and immerse yourself fully in every journey.</p>
            <img src="assets/images/bsingle.jpg" alt className="img-responsive" />
            <div className="comment-top">
              <h6 className="content-heading-2">Comments</h6>
              <div className="media">
                <img src="assets/images/testi5.jpg" alt className="img-responsive" />
                <div className="media-body ml-3">
                  <h6 className="content-heading">Anna Sthesia</h6>
                  <p>Loved this list! The recommendations are practical, inspiring, and perfect for planning future trips.
                  </p>
                  <a href="#follow" className="btn button mt-3">Follow</a>
                </div>
              </div>
              <div className="media mt-5 grid-2">
                <img src="assets/images/testi2.jpg" alt className="img-responsive" />
                <div className="media-body ml-3">
                  <h6 className="content-heading">Paul Molive</h6>
                  <p>A great mix of popular destinations and lesser-known cities. Very helpful insights.
                  </p>
                  <a href="#follow" className="btn button mt-3">Follow</a>
                </div>
              </div>
              <div className="media mt-5 grid-3">
                <img src="assets/images/testi3.jpg" alt className="img-responsive" />
                <div className="media-body ml-3">
                  <h6 className="content-heading">Mario Spe</h6>
                  <p>This article made me want to pack my bags immediately. Well written and informative.
                  </p>
                  <a href="#follow" className="btn button">Follow</a>
                </div>
              </div>
              <div className="add-review content12-1">
                <h6 className="content-heading-2">Leave a comment</h6>
                <form action="#" method="post">
                  <div className="media">
                    <input type="text" name="Name" required="Name" placeholder="Your Name" />
                    <input type="email" name="Email" required="Email" placeholder="Your Email" />
                  </div>
                  <textarea name="Message" required placeholder="Write your comments here" defaultValue={""} />
                  <button className="buttonbg" type="submit">Post comment</button>
                </form>
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

export default BlogSingle