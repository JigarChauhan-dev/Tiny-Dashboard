import React from 'react'
import { Link } from 'react-router-dom'

function SearchResult() {
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
          <li className="active">Search Results</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  {/* form 28 block */}
  <section className="w3l-forms-28">
    <div className="form-28">
      <div className="wrapper">
        <div className="form-main-cont-28">
          <div className="content-28-form align-center">
            <h4 className="title-cont-foem28">Where do you want to go...</h4>
            <form action="#" method="post" className="w3l-forms-28-form">
              <input type="search" name="search" placeholder="Search goes here.." />
              <button type="submit" className="buttonbg">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //form 28 block */}
  {/* text-styles-30 */}
  <section className="w3l-text-30">
    <div className="text-styles-30_sur">
      <div className="wrapper">
        <div className="text-styles-top-30">
          <h3>Search Results</h3>
          <div className="text-styles-31-top_sur">
            <div className="text-styles-31-left_sur">
              <img src="assets/images/search1.jpg" className="img img-responsive" alt />
            </div>
            <div className="text-styles-31-right_sur">
              <h5><Link to={"/search"}>Explore Scenic Destinations</Link></h5>
              <p>Discover unique offers that make every journey unforgettable. From scenic tours to curated experiences, we bring you options that match your travel dreams.
              </p>
            </div>
          </div>
          <div className="text-styles-31-top_sur">
            <div className="text-styles-31-left_sur">
              <img src="assets/images/search2.jpg" className="img img-responsive" alt />
            </div>
            <div className="text-styles-31-right_sur">
              <h5><Link to={"/search"}>Curated Travel Experiences</Link></h5>
              <p>Explore thoughtfully crafted experiences designed for every traveler. Each package ensures comfort, adventure, and memories that last a lifetime.</p>
            </div>
          </div>
          <div className="text-styles-31-top_sur">
            <div className="text-styles-31-left_sur">
              <img src="assets/images/search3.jpg" className="img img-responsive" alt />
            </div>
            <div className="text-styles-31-right_sur">
              <h5><Link to={"/search"}>Tailored Journeys for You</Link></h5>
              <p>Find the perfect match for your travel style. Whether it’s relaxation, sightseeing, or adventure, every choice is curated to give you the best possible journey.</p>
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

export default SearchResult