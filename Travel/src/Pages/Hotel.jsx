import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { useQuery } from "@tanstack/react-query";

function Hotels() {
  async function FetchHotel() {
    try {
      const response = await api.get("/user/hotels/all");
      return response.data.data || [];
    } catch (error) {
      console.error("Hotel Fetch Error:", error);
    }
  }

  const {
    data: hotel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hotel"],
    queryFn: FetchHotel,
  });

  if (isLoading) {
    return <h2 className="text-center mt-5">Loading hotels...</h2>;
  }

  if (isError) {
    return <h2 className="text-center mt-5">Error: {error.message}</h2>;
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9 sec-img">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">
                  Home{" "}
                  <span
                    style={{ color: "white" }}
                    className="fa fa-angle-right"
                  />
                </Link>
              </li>
              <li className="active">Hotels</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hotel-section py-5" style={{ marginTop: "60px" }}>
        <div className="container">
          <div className="heritage-header text-center mb-5">
            <div className="header-text mt-5">
              <h2 className="mt-5">Find Your Stay</h2>
              <p>
                Explore premium accommodations near world-renowned heritage
                sites.
              </p>
            </div>
          </div>

          {/* --- RESULTS GRID --- */}
          <div className="heritage-grid">
            {hotel.length > 0 ? (
              hotel.map((hotel) => (
                <div
                  className="heritage-card w-100"
                  key={hotel._id}
                  style={{ marginTop: "30px" }}
                >
                  <div className="card-image">
                    <img
                      style={{ objectFit: "cover", minHeight: "100px" }}
                      src={`${api.defaults.baseURL}/uploads/heritage/${hotel.image_path}`}
                      alt={hotel.hotel_name}
                    />
                  </div>
                  <div className="card-content">
                    <h3>{hotel.hotel_name}</h3>

                    <Link to={`/hoteldetail/${hotel._id}`} className="view-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="text-center w-100 py-5"
                style={{ marginTop: "30px" }}
              >
                <h3>No hotels available</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotels;
