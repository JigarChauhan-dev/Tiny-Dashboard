import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function About() {
  const [feedback, setFeedback] = useState([]);

  async function FetchFeedback() {
    try {
      let response = await api.get("/user/feedbacks/all");
      setFeedback(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchFeedback();
  }, []);

  console.log(feedback);

  return (
    <div>
      <div>
        {/* inner banner */}
        <section className="w3l-inner-banner-main">
          <div className="about-inner">
            <div className="wrapper">
              <ul className="breadcrumbs-custom-path">
                <li>
                  <Link to={"/"}>
                    Home{" "}
                    <span
                      className="fa fa-angle-right"
                      style={{ color: "white" }}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
                <li className="active">Our Legacy</li>
              </ul>
            </div>
          </div>
        </section>
        {/* //covers */}
        {/* w3l-content-23 block */}
        <section className="w3l-content-23">
          <div id="content23-block">
            <div className="wrapper">
              <div className="content23-head text-center">
                <h3>A Legacy Beyond Time</h3>
                <p>
                  We are dedicated to the preservation and celebration of
                  India's historical marvels. Through rigorous documentation and
                  community advocacy, we ensure that our shared past remains a
                  vibrant part of our future.
                </p>
              </div>
              <div className="d-grid content23-col-2 text-center">
                <div className="content23-grid back-cont-1">
                  <div className="content-texts">
                    <h4>
                      <Link to="/heritageplace">Research & Documentation</Link>
                    </h4>
                    <p>
                      History is more than just ruins. We provide detailed
                      archaeological insights and historical context for every
                      site, bringing silent stones back to life through
                      authenticated research.
                    </p>
                  </div>
                </div>
                <div className="content23-grid back-cont-2">
                  <div className="content-texts">
                    <h4>
                      <Link to="/contact">Preservation Advocacy</Link>
                    </h4>
                    <p>
                      We believe every monument deserves protection. Our network
                      of historians and curators works tirelessly to raise
                      awareness and support restoration efforts for endangered
                      heritage sites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* w3l-content-23 block */}
        {/* w3l-features-5 */}
        <section className="w3l-features-5">
          <div className="features">
            <div className="wrapper">
              <div className="d-grid">
                <div className="feature">
                  <Link>
                    <div className="icon-bg">
                      <span className="fa fa-university" aria-hidden="true" />
                    </div>
                    <h4>Heritage Walks</h4>
                  </Link>
                </div>
                <div className="feature">
                  <Link >
                    <div className="icon-bg">
                      <span className="fa fa-history" aria-hidden="true" />
                    </div>
                    <h4>Archaeology Research</h4>
                  </Link>
                </div>
                <div className="feature">
                  <Link>
                    <div className="icon-bg">
                      <span className="fa fa-shield" aria-hidden="true" />
                    </div>
                    <h4>Site Preservation</h4>
                  </Link>
                </div>
                <div className="feature">
                  <Link>
                    <div className="icon-bg">
                      <span className="fa fa-book" aria-hidden="true" />
                    </div>
                    <h4>Cultural Archives</h4>
                  </Link>
                </div>
                <div className="feature">
                  <Link>
                    <div className="icon-bg">
                      <span className="fa fa-camera" aria-hidden="true" />
                    </div>
                    <h4>Digital Documentation</h4>
                  </Link>
                </div>
                <div className="feature">
                  <Link>
                    <div className="icon-bg">
                      <span className="fa fa-globe" aria-hidden="true" />
                    </div>
                    <h4>UNESCO Partnerships</h4>
                  </Link>
                </div>
                <div className="feature">
                  <Link>
                    <div className="icon-bg">
                      <span className="fa fa-users" aria-hidden="true" />
                    </div>
                    <h4>Community Outreach</h4>
                  </Link>
                </div>
                <div className="feature">
                  <Link>
                    <div className="icon-bg">
                      <span className="fa fa-fort-awesome" aria-hidden="true" />
                    </div>
                    <h4>Imperial Legacy</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*// w3l-features-5 */}
        <div className="w3l-content-with-photo-15">
          {/* content-photo-15 */}
          <div className="content-photo">
            <div className="wrapper">
              <div className="d-grid">
                <div className="content-left-sec">
                  <Link to="/heritageplace">
                    <img
                      src="assets/images/about3.jpg"
                      className="img img-responsive img-fluid"
                      alt
                    />
                  </Link>
                </div>
                <div className="content-photo-left">
                  <h4>Guardians of History</h4>
                  <p>
                    We craft immersive historical narratives that combine
                    scholarly research, local folklore, and conservation
                    efforts. From UNESCO-listed fortresses to local hidden
                    temples, every site is treated as a sacred trust of the
                    past.
                  </p>

                  <div className="content-photo-grid">
                    <div className="content-photo-bot1">
                      <h5>
                        <a>
                          <span
                            className="fa fa-check-circle-o"
                            aria-hidden="true"
                          />
                          Verified Site Records
                        </a>
                      </h5>
                    </div>
                    <div className="content-photo-bot1 content-photo-gap">
                      <h5>
                        <a>
                          <span
                            className="fa fa-check-circle-o"
                            aria-hidden="true"
                          />
                          Expert Historian Panels
                        </a>
                      </h5>
                    </div>
                    <div className="content-photo-bot1">
                      <h5>
                        <a>
                          <span
                            className="fa fa-check-circle-o"
                            aria-hidden="true"
                          />
                          +120 Documented Monuments
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //content-photo-15 */}
        </div>

        {/* specifications */}
        <section className="w3l-specifications-9">
          <div className="main-w3">
            <div className="wrapper">
              <div className="d-flex main-cont-wthree-fea">
                <div className="grids-speci">
                  <h3 className="title-spe">42</h3>
                  <p>UNESCO Heritage Sites</p>
                </div>
                <div className="grids-speci midd-eff-spe">
                  <h3 className="title-spe">5000+</h3>
                  <p>Years of History</p>
                </div>
                <div className="grids-speci">
                  <h3 className="title-spe">120+</h3>
                  <p>Expert Historians</p>
                </div>
              </div>
            </div>
          </div>
          {/* //specifications */}
        </section>
        {/* w3l-customers-7 */}
        <section className="w3l-customers-7">
          <div className="customers_sur">
            <div className="wrapper">
              <h3 className="title-main">What Our Clients Says</h3>
              <div className="customers-top_sur">
                {feedback.slice(0, 3).map((value) => (
                  <div className="customers-left_sur">
                    <div
                      className="customers_grid"
                      style={{
                        width: "100%",
                        height: "320px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    >
                      <p className="sub-test">{value.message}</p>
                      <div className="customers-bottom_sur">
                        <div className="custo-img-res">
                          <img
                            src={`https://ui-avatars.com/api/?name=${value.username}&background=c5a059&color=fff`}
                            alt="User"
                            style={{ borderRadius: "30px", height: "50px" }}
                          />
                        </div>
                        <div className="custo_grid">
                          <h5 style={{ marginBottom: "10px" }}>
                            {value.username}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* //w3l-customers-7 */}
      </div>
    </div>
  );
}

export default About;
