import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Blog() {
  let [heritage, setHeritage] = useState([]);

  async function fetchHeritage() {
    try {
      const res = await api.get("/user/heritage/all");
      setHeritage(res.data.data || []);
    } catch (error) {
      console.log("Heritage Fetch Error", error);
    }
  }

  useEffect(() => {
    fetchHeritage();
  }, []);

  return (
    <div>
      {/* inner banner */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to={"/"}>
                  Home{" "}
                  <span
                    className="fa fa-angle-right"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                </Link>
              </li>
              <li>
                <a href="#pages">
                  Pages{" "}
                  <span
                    className="fa fa-angle-right"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                </a>
              </li>
              <li className="active">Heritage Blog</li>
            </ul>
          </div>
        </div>
      </section>

      {/* blog section */}
      <section className="w3l-services-1">
        <div className="services1">
          <div className="wrapper">
            <h3 className="title-main">Heritage Blog</h3>
            <p className="sub-title">
              Explore stories, history, and cultural heritage from beautiful
              historical places.
            </p>
            <div className="services1-content">
              {heritage.map((heritage) => {
                return (
                  <div className="column">
                    <Link>
                      <img
                        src={`${api.defaults.baseURL}/uploads/heritage/${heritage.image_path}`}
                        alt="heitage-img"
                        className="img-responsive"
                        style={{
                          width: "100%",
                          height: "230px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Link>
                    <div
                      className="service-info"
                      style={{
                        width: "100%",
                        height: "185px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    >
                      <h4>{heritage.name}</h4>
                      <p>{heritage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
