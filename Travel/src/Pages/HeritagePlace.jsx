import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { useQuery } from "@tanstack/react-query";

function HeritagePlace() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

const { data: heritageSites = [] } = useQuery({
  queryKey: ["heritage"],
  queryFn: async () => {
    const res = await api.get("/user/heritage/all");
    return res.data.data || [];
  },
});

const { data: states = [] } = useQuery({
  queryKey: ["states"],
  queryFn: async () => {
    const res = await api.get("/user/states/all");
    return res.data.data || [];
  },
});

const { data: cities = [] } = useQuery({
  queryKey: ["cities"],
  queryFn: async () => {
    const res = await api.get("/user/cities/all");
    return res.data.data || [];
  },
});

  console.log(cities);

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
