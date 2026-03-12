import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>

<div>
  {/* inner banner */}
  <section className="w3l-inner-banner-main">
    <div className="banner-9">
      <div className="wrapper">
        <ul className="breadcrumbs-custom-path">
          <li><Link to={"/"}>Home <span className="fa fa-angle-right" aria-hidden="true" /></Link></li>
          <li><a href="#pages">Pages <span className="fa fa-angle-right" aria-hidden="true" /></a></li>
          <li className="active">Services</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  {/* content 29 block */}
  <section className="w3l-content-28-main">
    <div className="content-28">
      <div className="wrapper">
        <div className="d-grid grid-col-4 main-cont-28">
          <div className="grids-content-29">
            <h5><Link to={"/single"} className="title-cont-29">Air Service</Link></h5>
            <p className="sub-paragraph cont-para-29">We offer reliable flights to top destinations with comfort and safety guaranteed.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
          <div className="grids-content-29">
            <h5><Link to={"/single"} className="title-cont-29">Bus Service</Link></h5>
            <p className="sub-paragraph cont-para-29">Enjoy hassle-free bus rides across cities with punctual schedules and friendly staff.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
          <div className="grids-content-29">
            <h5><Link to={"/single"} className="title-cont-29">Tour Service</Link></h5>
            <p className="sub-paragraph cont-para-29">Explore exciting destinations with guided tours designed for memorable experiences.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
          <div className="grids-content-29">
            <h5><Link to={"/single"} className="title-cont-29">Hotel Service</Link></h5>
            <p className="sub-paragraph cont-para-29">Stay in top-rated hotels offering comfort, convenience, and exceptional hospitality.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
        </div>
        <div className="d-grid grid-col-4 main-cont-28">
          <div className="grids-content-29">
            <h5><Link to={"/single"} className="title-cont-29">Guide Service</Link></h5>
            <p className="sub-paragraph cont-para-29">Professional guides ensure you discover the hidden gems and local secrets of every city.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
          <div className="grids-content-29">
            <h5><a href="single.html" className="title-cont-29">Taxi Service</a></h5>
            <p className="sub-paragraph cont-para-29">Quick and safe taxi services available anytime to take you wherever you need to go.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
          <div className="grids-content-29">
            <h5><Link to={"/single"} className="title-cont-29">Travel Insurance</Link></h5>
            <p className="sub-paragraph cont-para-29">Comprehensive insurance coverage ensures peace of mind for all your trips abroad.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
          <div className="grids-content-29">
            <h5><Link to={"/single"} className="title-cont-29">World Class Service</Link></h5>
            <p className="sub-paragraph cont-para-29">Experience top-tier services that cater to your every need during your travels.</p>
            <Link to={"/single"} className="button">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //content 29 block */}
  {/* text-29 */}
  <section className="w3l-text-29-main">
    <div className="text-29">
      <div className="wrapper">
        <div className="text-styles-top-29">
          <h3>We are the travel planning experts.
            Let us plan the perfect journey for you!</h3>
          <div className="text-info-29-top">
            <div className="text-styles-29-left_img">
              <img src="assets/images/check1.png" className="img" alt />
            </div>
            <div className="text-styles-29-right_content">
              <h5><a href="single.html" className="link">Tips for travellers</a></h5>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.</p>
            </div>
          </div>
          <div className="text-info-29-top">
            <div className="text-styles-29-left_img">
              <img src="assets/images/check2.png" className="img" alt />
            </div>
            <div className="text-styles-29-right_content">
              <h5><a href="single.html" className="link">Need a hotel room? We've got deals for you!</a></h5>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>
          <div className="text-info-29-top">
            <div className="text-styles-29-left_img">
              <img src="assets/images/check3.png" className="img" alt />
            </div>
            <div className="text-styles-29-right_content">
              <h5><a href="single.html" className="link">Reliable Booking System</a></h5>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati
                cupiditate non provident, similique sunt in culpa. </p>
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

export default Services