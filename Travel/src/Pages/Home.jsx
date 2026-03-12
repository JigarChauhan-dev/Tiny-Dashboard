import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Home() {
  let [user, setUser] = useState({});
  const [heritageSites, setHeritageSites] = useState([]);
  const [feedback, setFeedback] = useState([]);

  async function FetchProfile() {
    try {
      let response = await api.get("/user/profile/profilehome");
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user);

  async function FetchHeritage() {
    try {
      let response = await api.get("/user/heritage/all");
      setHeritageSites(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function FetchFeedback() {
    try {
      let response = await api.get("/user/feedbacks/all");
      setFeedback(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchProfile();
    FetchHeritage();
    FetchFeedback();
  }, []);

  console.log(heritageSites);
  console.log(feedback);

  return (
    <div>
      <div>
        {/* covers */}
        <section className="w3l-covers-9-main">
          <div className="covers-9">
            <div className="csslider infinity" id="slider1">
              <input
                type="radio"
                name="slides"
                defaultChecked="checked"
                id="slides_1"
              />
              <input type="radio" name="slides" id="slides_2" />
              <input type="radio" name="slides" id="slides_3" />
              <input type="radio" name="slides" id="slides_4" />
              <ul className="banner_slide_bg">
                <li>
                  <div className="wrapper">
                    <div className="cover-top-center-9">
                      <div className="w3ls_cover_txt-9">
                        <h6 className="tag-cover-9">Legacy</h6>
                        <h3 className="title-cover-9">
                          Unveiling India's Soul
                        </h3>
                        <p className="para-cover-9">
                          Journey through time to discover breathtaking
                          monuments, ancient architecture, and the silent
                          stories that shaped a five-thousand-year-old
                          civilization.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper">
                    <div className="cover-top-center-9">
                      <div className="w3ls_cover_txt-9">
                        <h6 className="tag-cover-9">Architecture</h6>
                        <h3 className="title-cover-9">A Symphony in Stone</h3>
                        <p className="para-cover-9">
                          Explore the intricate carvings of UNESCO World
                          Heritage sites, from the caves of Ajanta to the
                          majestic ruins of the Vijayanagara Empire.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper">
                    <div className="cover-top-center-9">
                      <div className="w3ls_cover_txt-9">
                        <h6 className="tag-cover-9">Sacred Lands</h6>
                        <h3 className="title-cover-9">
                          Where Time Stands Still
                        </h3>
                        <p className="para-cover-9">
                          Witness the eternal rituals on the banks of the Ganges
                          in Varanasi, the world's oldest living city, where
                          history and divinity meet.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper">
                    <div className="cover-top-center-9">
                      <div className="w3ls_cover_txt-9">
                        <h6 className="tag-cover-9">Next Destination</h6>
                        <h3 className="title-cover-9">
                          Discover Historic Cities
                        </h3>
                        <p className="para-cover-9">
                          Explore iconic heritage towns known for their
                          architecture, traditions, and unforgettable historical
                          landmarks.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="arrows">
                <label htmlFor="slides_1" />
                <label htmlFor="slides_2" />
                <label htmlFor="slides_3" />
                <label htmlFor="slides_4" />
              </div>
              <div className="navigation">
                <div>
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                  <label htmlFor="slides_4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w3l-grids-6">
          {/* grids */}
          <div className="grids-layout">
            <div className="wrapper">
              <h3 className="title-main">Heritage Destinations</h3>
              <p className="sub-title">
                Explore India’s most treasured heritage sites, from majestic
                forts to sacred temples, reflecting centuries of art and
                tradition.
              </p>
              <div className="d-grid grid-column-3">
                {heritageSites.slice(0, 3).map((value) => (
                  <div className="gd-innf">
                    <Link>
                      <img
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "cover",
                          display: "block",
                        }}
                        className="img-responsive"
                        src={`${api.defaults.baseURL}/uploads/heritage/${value.image_path}`}
                        alt="image"
                      />
                    </Link>
                    <h3>
                      <h2
                        className="vv-link"
                        style={{ marginTop: "10px", textAlign: "center" }}
                      >
                        {value.name}
                      </h2>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* //grids */}
        </section>

        {/* features */}
        <section className="w3l-feature-9">
          <div className="main-w3">
            <div className="wrapper">
              <div className="d-grid main-cont-wthree-fea">
                <div className="grids-feature">
                  <div className="icon-bg">
                    <span className="fa fa-university" aria-hidden="true" />
                  </div>
                  <h4>
                    <Link to={"/book"} className="title-head">
                      Heritage Sites
                    </Link>
                  </h4>
                  <p>
                    Explore ancient monuments, forts, temples, and UNESCO World
                    Heritage sites that tell the story of our glorious past.
                  </p>
                  {/* <Link to={"/book"} className="button">
                    Read More{" "}
                  </Link> */}
                </div>
                <div className="grids-feature">
                  <div className="icon-bg">
                    <span className="fa fa-map-signs" aria-hidden="true" />
                  </div>
                  <h4>
                    <Link to={"/team"} className="title-head">
                      Heritage Guides
                    </Link>
                  </h4>
                  <p>
                    Walk through history with expert local guides who bring
                    ancient civilizations and royal stories to life.
                  </p>
                  {/* <Link to={"/team"} className="button">
                    Read More{" "}
                  </Link> */}
                </div>
                <div className="grids-feature">
                  <div className="icon-bg">
                    <span className="fa fa-home" aria-hidden="true" />
                  </div>
                  <h4>
                    <Link to={"/book"} className="title-head">
                      Heritage Stays
                    </Link>
                  </h4>
                  <p>
                    Stay in traditional havelis, forts, and heritage hotels that
                    reflect timeless architecture and royal hospitality.
                  </p>
                  {/* <Link to={"/book"} className="button">
                    Read More{" "}
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //features */}

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
              <h3 className="title-main">Clients Says</h3>
              <div className="customers-top_sur">
                {feedback.slice(0, 3).map((value) => (
                  <div className="customers-left_sur" >
                    <div className="customers_grid" style={{
                          width: "100%",
                          height: "320px",
                          objectFit: "cover",
                          display: "block",
                        }}>
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
      </div>

      {/* //w3l-customers-7 */}
    </div>
  );
}

export default Home;
