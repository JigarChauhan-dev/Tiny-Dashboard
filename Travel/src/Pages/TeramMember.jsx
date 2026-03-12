import React from 'react'
import { Link } from 'react-router-dom'

function TeramMember() {
  return (
    <div>
<div>
  {/* inner banner */}
  <section className="w3l-inner-banner-main">
    <div className="banner-9">
      <div className="wrapper">
        <ul className="breadcrumbs-custom-path">
          <li><Link to={"/"}>Home <span className="fa fa-angle-right" aria-hidden="true" /></Link></li>
          <li><a href="team.html">Team <span className="fa fa-angle-right" aria-hidden="true" /></a></li>
          <li className="active">Team Member</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  <section className="w3l-teams-single-9">
    {/* team single */}
    <div className="team-single">
      <div className="wrapper">
        <div className="main-grid d-grid">
          <div className="team-grids-single">
            <img src="assets/images/team1.jpg" className="img-responsive" alt />
          </div>
          <div className="team-grids-single">
            <h3 className="title-wthree-tem">Chris Tina</h3>
            <p className="sub-title-top-3">Tour Guide</p>
            <p className="para">Chris has years of experience leading tours around the world. He ensures every trip is seamless, enjoyable, and unforgettable.</p>
            <p className="para">Passionate about travel, he provides personalized guidance and recommendations to make every journey unique and memorable.
</p>
            <ul className="left-single-team">
              <li><span>Tel: </span><a href="tel:+1-800-999-800">+91-9876543210</a></li>
              <li><span>Mail: </span><a>info@travelagency.com</a></li>
            </ul>
            <div className="footerv4-social d-flex align-items-center mt-5">
              <h6 className="team-txt mr-3">Stay Connected :</h6>
              <ul className="d-flex list-unstyled team-socials">
                <li>
                  <a href="#team"><span className="fa fa-facebook-square" aria-hidden="true" /></a>
                </li>
                <li>
                  <a href="#team"><span className="fa fa-twitter-square" aria-hidden="true" /></a>
                </li>
                <li>
                  <a href="#team"><span className="fa fa-google-plus-square" aria-hidden="true" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* teams single */}
  {/* content */}
  <section className="w3l-content-9">
    <div className="content-w3">
      <div className="wrapper">
        <div className="main-cont-wthree-3">
          <div className="left-contect-real">
            <h3 className="title-head-con">Expert Travel Planning</h3>
            <p>From flights to accommodations, we handle every detail so your journey is smooth, stress-free, and memorable.
            </p>
          </div>
          <div className="left-contect-real">
            <h3 className="title-head-con">Personalized Guidance</h3>
            <p>Our team provides tailored recommendations and local insights to ensure every trip is unique and enjoyable.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default TeramMember