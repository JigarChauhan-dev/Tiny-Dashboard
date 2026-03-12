import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/AxiosConfig";

function HotelDetail() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    async function FetchHotel() {
      try {
        const response = await api.get(`/user/hotels/single/${id}`);
        setHotel(response.data.data);
      } catch (error) {
        console.error("Hotel Detail Fetch Error:", error);
      }
    }
    if (id) FetchHotel();
  }, [id]);

  console.log(hotel);

  if (!hotel)
    return (
      <div className="error-view text-center py-5">
        <h3>Hotel not found.</h3>
        <Link
          to="/hotel"
          className="view-btn-gold"
          style={{ display: "inline-block", marginTop: "20px" }}
        >
          Back to Hotels
        </Link>
      </div>
    );

  return (
    <div className="detail-page-wrapper">
      {/* 1. Breadcrumbs */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner">
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
              <li>
                <Link to="/hotel">
                  Hotels <span className="fa fa-angle-right" />
                </Link>
              </li>
              <li className="active">{hotel.hotel_name}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Hero Section - Radius Fixed */}
      <section
        className="hotel-gallery-section"
        style={{ marginTop: "30px", paddingBottom: "0" }}
      >
        <div className="wrapper">
          <div className="single-hero-frame shadow-custom">
            <img
              src={`${api.defaults.baseURL}/uploads/heritage/${hotel.image_path}`}
              alt={hotel.hotel_name}
              className="hero-main-img"
            />

            {/* Overlay Info */}
            <div className="hero-instruction-overlay">
              <div className="badge-royal-v2">Heritage Stays</div>
              <div className="quick-guidelines">
                <div className="q-item">
                  <i className="fa fa-star"></i> {hotel.star_rating || 5} Star
                </div>
                <div className="q-item">
                  <i className="fa fa-phone"></i> 24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Section - Grid Layout (No Bootstrap) */}
      <section
        className="hotel-info-section"
        style={{ paddingTop: "40px", paddingBottom: "60px" }}
      >
        <div className="wrapper">
          <div className="info-grid-layout">
            {/* Left Column */}
            <div className="content-col">
              <div className="title-area" style={{ marginBottom: "30px" }}>
                <h2 className="hotel-title">{hotel.hotel_name}</h2>
                <p className="loc-tag">
                  <i className="fa fa-map-marker-alt"></i> {hotel.address}
                </p>
              </div>

              <div className="palace-story">
                <h4 className="accent-gold">The Stay Experience</h4>
                <p className="lead-text">
                  {hotel.description ||
                    "Stay in the heart of heritage and experience luxury where tradition, comfort, and style unite to create memorable journeys filled with charm and authentic hospitality."}
                </p>

                <h4 className="accent-gold" style={{ marginTop: "40px" }}>
                  Essential Information
                </h4>
                <div className="guides-container-premium">
                  <div className="guide-card-modern">
                    <div
                      className="guide-main-info"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="icon-box-gold">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div style={{ marginLeft: "15px" }}>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.8rem",
                            color: "#888",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          Contact
                        </span>

                        <span
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                         <a href={`tel:${hotel.contact_number}`} style={{textDecoration:"none",color:"#333"}}>
                          {hotel.contact_number}
                         </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="sidebar-col">
              <div
                className="booking-sidebar shadow-custom"
                style={{ position: "sticky", top: "100px" }}
              >
                <div className="price-header border-bottom-0">
                  <span className="subtitle uppercase tracking-widest">
                    Stay Logistics
                  </span>
                  <div className="coord-pill-container mt-3">
                    <iframe
                      src={`https://www.google.com/maps?q=${hotel.lat},${hotel.long}&hl=en&z=16&output=embed`}
                      allowFullScreen
                      loading="lazy"
                      title="Map of India"
                    />
                  </div>
                </div>
                <div className="price-header" style={{ marginTop: "10px" }}>
                  <span className="subtitle">Starting From</span>
                  <h3 className="price-tag">
                    ₹{hotel.price_range}{" "}
                    <span className="per-night">/ night</span>
                  </h3>
                </div>

                <div className="book-fields">
                  <div
                    className={`status-pill-v3 ${hotel.status?.toLowerCase()}`}
                  >
                    <span className="status-dot"></span> Status: {hotel.status}
                  </div>
                </div>

                <p
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    fontSize: "0.85rem",
                    color: "#888",
                  }}
                >
                  <i className="fa fa-shield-alt"></i> Best Price Guaranteed
                </p>
              </div>
            </div>

            <div className="heritage-instruction-container">
              <h4 className="accent-gold" style={{ marginBottom: "25px" }}>
                Stay Guidelines
              </h4>

              <div className="instruction-grid-v4">
                {/* Instruction 1 */}
                <div className="ins-card">
                  <div className="ins-icon-shell">
                    <i className="fa fa-key"></i>
                  </div>
                  <div className="ins-details">
                    <h6>Check-in Protocol</h6>
                    <p>
                      A valid government ID is mandatory upon arrival for
                      heritage registration.
                    </p>
                  </div>
                </div>

                {/* Instruction 2 */}
                <div className="ins-card">
                  <div className="ins-icon-shell">
                    <i className="fa fa-tshirt"></i>
                  </div>
                  <div className="ins-details">
                    <h6>Palace Dress Code</h6>
                    <p>
                      Smart casual or formal attire is requested for common
                      dining halls.
                    </p>
                  </div>
                </div>

                {/* Instruction 3 */}
                <div className="ins-card">
                  <div className="ins-icon-shell">
                    <i className="fa fa-shield-alt"></i>
                  </div>
                  <div className="ins-details">
                    <h6>Heritage Preservation</h6>
                    <p>
                      We request guests to respect the antique murals and
                      original brickwork.
                    </p>
                  </div>
                </div>

                {/* Instruction 4 */}
                <div className="ins-card">
                  <div className="ins-icon-shell">
                    <i className="fa fa-leaf"></i>
                  </div>
                  <div className="ins-details">
                    <h6>Garden Etiquette</h6>
                    <p>
                      Respect the manicured gardens and free-roaming local
                      wildlife.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelDetail;
