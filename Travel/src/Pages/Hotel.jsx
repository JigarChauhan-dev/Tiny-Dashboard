import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  async function FetchHotelData() {
    try {
      const response = await api.get("/user/hotels/all");
      setHotels(response.data.data || []);
    } catch (error) {
      console.error("Hotel Fetch Error:", error);
    }
  }

  

  useEffect(() => {
    FetchHotelData();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9 sec-img">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">
                  Home <span style={{color:"white"}} className="fa fa-angle-right" />
                </Link>
              </li>
              <li className="active">Hotels</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hotel-section py-5" style={{marginTop:"60px"}}>
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
          <div className="heritage-grid mb-5">
            {hotels.length > 0 ? (
              hotels.map((hotel) => (
                <div className="heritage-card fade-in" key={hotel._id}>
                  <div className="card-image">
                    <img
                      src={`${api.defaults.baseURL}/uploads/heritage/${hotel.image_path}`}
                      alt={hotel.hotel_name}
                    />
                  </div>
                  <div className="card-content text-center">
                    <h3 className="fw-bold mb-4">{hotel.hotel_name}</h3>

                    <div className="mt-auto">
                      <Link
                        to={`/hoteldetail/${hotel._id}`}
                        className="view-btn w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center w-100 py-5">
                <i className="fa fa-bed fa-3x mb-3 text-muted"></i>
                <h3>No hotels available at the moment.</h3>
                <p>Please check back later for new accommodations.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotels;
