import React from "react";
import { Link } from "react-router-dom";

function SinglePage() {
  return (
    <div>
      <div>
        {/* inner banner */}
        <section className="w3l-inner-banner-main">
          <div className="banner-9">
            <div className="wrapper">
              <ul className="breadcrumbs-custom-path">
                <li>
                  <Link to={"/"}>
                    Home{" "}
                    <span className="fa fa-angle-right" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <a href="#pages">
                    Pages{" "}
                    <span className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </li>
                <li className="active">Single Page</li>
              </ul>
            </div>
          </div>
        </section>
        {/* //covers */}
        {/* w3l-text-22 */}
        <section className="w3l-text-22">
          <div className="text">
            <div className="wrapper">
              <div className="text-txt">
                <h3>Top Travel Destinations for 2026</h3>
                <p>
                  With 365 potential vacation days to choose from in 2026, it’s
                  time to start planning your big adventures for the year. We’ve
                  been hard at work helping you narrow down the choices. Whether
                  you are ready for a bucket-list vacation, are looking to take
                  your first solo trip, or want to plan a trip to the next big
                  destination, we’ve got you covered. Here’s a roundup of our
                  top travel destinations for 2026.
                </p>
                <div className="two-columns">
                  <div className="left-column">
                    <img
                      src="assets/images/single.jpg"
                      alt
                      className="arrow-png image-fluid img-responsive"
                    />
                  </div>
                  <div className="right-column">
                    <p>
                      Plan smart, travel far, and make every moment count. Let
                      our expert guides and tips help you craft the perfect
                      itinerary for your 2025 adventures.
                    </p>
                    <p>
                      From sun-kissed beaches to vibrant cities and serene
                      mountain retreats, our selections ensure unforgettable
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //w3l-text-22 */}
        {/* text15 block */}
        <section className="w3l-text-15">
          <div id="text15-block">
            <div className="wrapper">
              <div className="text15-max-align">
                <h5 className="text15-heading">Big Trips</h5>
                <p className="text15-para">
                  Embark on unforgettable journeys designed to create memories
                  that last a lifetime. From iconic landmarks to hidden gems,
                  our trips are carefully curated for comfort, adventure, and
                  excitement every step of the way.
                </p>
                <div className="align-text15-cols">
                  <div className="text15-left">
                    <p>
                      Explore breathtaking destinations, indulge in local
                      experiences, and enjoy seamless travel with our expert
                      planning
                    </p>
                    <div className="text15-list">
                      <li>Discover world-famous landmarks</li>
                      <li>Experience authentic local culture</li>
                      <li>Enjoy guided tours and excursions</li>
                      <li>Relax in premium accommodations</li>
                      <li>Participate in unique adventures</li>
                      <li>Create unforgettable memories</li>
                      <li>Travel with ease and comfort</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* text15 block */}
        {/* Text14 block */}
        <section className="w3l-text-14">
          <div id="text14-block">
            <div className="wrapper">
              <div className="text14-max-align">
                <h5 className="text14-heading">Affordable Trips</h5>
                <div className="align-text14-cols">
                  <div className="text14-right">
                    <img
                      src="assets/images/single2.jpg"
                      alt
                      className="img-responsive"
                    />
                  </div>
                  <div className="text14-left">
                    <p>
Explore amazing destinations without breaking the bank. Our trips are designed to offer unforgettable experiences at pocket-friendly prices.
                    </p>
                    <p>
Enjoy guided tours, local adventures, and comfortable accommodations, all planned with your budget in mind
                    </p>
                    <p>
Make the most of your holidays with hassle-free travel,Enjoy guided tours, local adventures personalized itineraries, and experiences that create lasting memories.Explore amazing destinations without breaking the bank.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SinglePage;
