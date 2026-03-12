import React from 'react'
import { Link } from 'react-router-dom'

function Team() {
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
          <li className="active">Team</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  {/* teams 32 block */}
  <section className="w3l-teams-32-main">
    <div className="teams-32">
      <div className="wrapper">
        <h3 className="title-main">Our Wonderful Team</h3>
        <p className="sub-title"> Meet our passionate team dedicated to making every journey unforgettable.</p>
        <div className="d-grid grid-col-4 align-center main-contteam-32">
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team5.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Shonda Leer</Link></h6>
              <p className="sm-text-32">Travel Agent</p>
              <div className="buttons-teams">
                <Link to={"/team"}><span className="fa fa-facebook-square" aria-hidden="true" /></Link>
                <Link to={"/team"}><span className="fa fa-google-plus-square" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team6.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Monty Carlo</Link></h6>
              <p className="sm-text-32">Tour Guide</p>
              <div className="buttons-teams">
                <Link to={"/team"}><span className="fa fa-facebook-square" aria-hidden="true" /></Link>
                <Link to={"/team"}><span className="fa fa-twitter-square" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team7.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Brock Lee</Link></h6>
              <p className="sm-text-32">Agency Director</p>
              <div className="buttons-teams">
                <Link to={"/team"}><span className="fa fa-facebook-square" aria-hidden="true" /></Link>
                <Link to={"/team"}><span className="fa fa-twitter-square" aria-hidden="true" /></Link>
                <Link to={"/team"}><span className="fa fa-google-plus-square" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team8.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Terry Aki</Link></h6>
              <p className="sm-text-32">Tour Consultant</p>
              <div className="buttons-teams">
                <Link to={"/team"}><span className="fa fa-facebook-square" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid grid-col-4 align-center main-contteam-32 content-2te">
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team1.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Chris Tina</Link></h6>
              <p className="sm-text-32">Tour Guide</p>
              <div className="buttons-teams">
                <Link to={"/team"}><span className="fa fa-facebook-square" aria-hidden="true" /></Link>
                <Link to={"/team"}><span className="fa fa-twitter-square" aria-hidden="true" /></Link>
                <Link to={"/team"}><span className="fa fa-google-plus-square" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team2.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Diego Morata</Link></h6>
              <p className="sm-text-32">Tour Consultant</p>
              <div className="buttons-teams">
                <a href="#team"><span className="fa fa-facebook-square" aria-hidden="true" /></a>
                <a href="#team"><span className="fa fa-twitter-square" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team3.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Anton Brown</Link></h6>
              <p className="sm-text-32">Travel Agent</p>
              <div className="buttons-teams">
                <Link to={"/team"}><span className="fa fa-facebook-square" aria-hidden="true" /></Link>
                <Link to={"/team"}><span className="fa fa-google-plus-square" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <div className="team-main-19">
            <div className="column-19">
              <Link to={"/team"}><img className="img-fluid" src="assets/images/team4.jpg" alt=" " /></Link>
            </div>
            <div className="right-team-9">
              <h6><Link to={"/team"} className="title-team-32">Nwoye Akachi</Link></h6>
              <p className="sm-text-32">Agency Director</p>
              <div className="buttons-teams">
                <Link to={"/team"}><span className="fa fa-facebook-square" aria-hidden="true" /></Link>
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

export default Team