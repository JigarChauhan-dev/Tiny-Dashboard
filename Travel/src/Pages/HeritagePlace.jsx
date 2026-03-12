import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function HeritagePlace() {
  const [heritageSites, setHeritageSites] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  async function fetchHeritage() {
    try {
      const res = await api.get("/user/heritage/all");
      setHeritageSites(res.data.data || []);
    } catch (error) {
      console.log("Heritage fetch error", error);
    }
  }

  async function fetchStates() {
    try {
      const res = await api.get("/user/states/all");
      setStates(res.data.data || []);
    } catch (error) {
      console.log("State fetch error", error);
    }
  }

  console.log(states);

  async function fetchCities() {
    try {
      const res = await api.get("/user/cities/all");
      console.log(res.data);
      setCities(res.data.data || []);
    } catch (error) {
      console.log("City fetch error", error);
    }
  }

  console.log(cities);

  useEffect(() => {
    fetchHeritage();
    fetchStates();
    fetchCities();
  }, []);

  const filteredHeritage = heritageSites.filter((site) => {
    if (selectedCity) {
      return site.city_id === selectedCity;
    }

    if (selectedState) {
      return site.state_id === selectedState;
    }

    return true;
  });

  return (
    <>
      <section className="w3l-inner-banner-main">
        <div className="banner-9 sec-img">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">
                  Home{" "}
                  <span
                    className="fa fa-angle-right"
                    style={{ color: "white" }}
                  />
                </Link>
              </li>
              <li className="active">Heritage Sites</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="heritage-section">
        <div className="container">
          <div className="heritage-header">
            <div className="header-text">
              <h2>Explore Cultural Wonders</h2>
              <p>
                Where every stone tells a story and every corner holds a legacy
              </p>
            </div>
          </div>

          {/* --- FILTER  --- */}
          <div className="filter-row">
            {/* State Select */}
            <div className="select-box">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="form-control"
              >
                <option value="">Select State</option>
                {states.length > 0 &&
                  states.map((state) => (
                    <option key={state._id} value={state._id}>
                      {state.state_name}
                    </option>
                  ))}
              </select>
            </div>

            {/* City Select */}
            <div className="select-box">
              <select
                value={selectedCity}
                disabled={!selectedState}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="form-control"
              >
                <option value="">Select City</option>

                {cities.length > 0 &&
                  cities
                    .filter(
                      (city) =>
                        city.state_id === selectedState || selectedState === "",
                    )
                    .map((city) => (
                      <option key={city._id} value={city._id}>
                        {city.city_name}
                      </option>
                    ))}
              </select>
            </div>
          </div>

          {/* --- DYNAMIC RESULTS GRID --- */}
          <div className="heritage-grid">
            {/* Note: Loading logic is now handled by the early return above */}
            {filteredHeritage.length > 0 ? (
              filteredHeritage.map((site) => (
                <div
                  className="heritage-card w-100"
                  key={site._id}
                  style={{ marginTop: "30px" }}
                >
                  <div className="card-image">
                    <img
                      style={{ objectFit: "cover", minHeight: "100px" }}
                      src={`${api.defaults.baseURL}/uploads/heritage/${site.image_path}`}
                      alt={site.name}
                    />
                  </div>
                  <div className="card-content">
                    <h3>{site.name}</h3>
                    {/* Ensure this Link matches your Route path exactly */}
                    <Link
                      to={`/heritagedetail/${site._id}`}
                      className="view-btn"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="text-center w-100 py-5"
                style={{ marginTop: "30px" }}
              >
                <h3>No heritage sites found for this selection.</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeritagePlace;
