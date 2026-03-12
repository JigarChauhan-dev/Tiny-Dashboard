import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/AxiosConfig";

function HeritageDetail() {
  const { id } = useParams();
  const [site, setSite] = useState(null);
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  async function FetchHeritageData() {
    try {
      setLoading(true);

      let response = await api.get(`/user/heritage/single/${id}`);
      setSite(response.data.data);

      let guideRes = await api.get(`/guides/by-heritage/${id}`);
      setGuides(guideRes.data.data || []);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchHeritageData();
  }, [id]);

  console.log(site);
  // console.log(guides);

  if (!site)
    return (
      <div
        className="error-view text-center py-5"
        style={{ marginTop: "30px" }}
      >
        <h3>Heritage site not found.</h3>
      </div>
    );

  // console.log("Audio path:", guides[0].audio_path);

  return (
    <div className="detail-page-wrapper animate-in">
      {/* 1. Breadcrumbs */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">
                  Home
                  <span
                    className="fa fa-angle-right"
                    style={{ color: "white" }}
                  />
                </Link>
              </li>
              <li>
                <Link to="/heritageplace">
                  Heritage Sites
                  <span
                    className="fa fa-angle-right"
                    style={{ color: "white" }}
                  />
                </Link>
              </li>
              <li className="active">{site.name}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Hero Section */}
      <section className="hotel-gallery-section" style={{ marginTop: "50px" }}>
        <div className="wrapper">
          <div className="hero-image-layout shadow-lg">
            {/* LEFT BIG IMAGE */}
            <div className="hero-big">
              <img
                src={`${api.defaults.baseURL}/uploads/heritage/${site.image_path}`}
                alt="main"
              />
            </div>

            {/* RIGHT TWO IMAGES */}
            <div className="hero-small">
              {site.gallery_images &&
                site.gallery_images.map((img, index) => (
                  <img
                    key={index}
                    src={`${api.defaults.baseURL}/uploads/heritage/${img}`}
                    alt={`gallery-${index}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Section */}
      <section
        className="hotel-info-section"
        style={{ paddingTop: "20px", marginTop: "20px" }}
      >
        <div className="wrapper">
          <div className="info-layout">
            {/* Left Column: Story & History */}
            <div className="content-col">
              <div className="title-area">
                <h2 className="mb-2 font-weight-bold">{site.name}</h2>
                <p className="loc-tag mb-4">
                  <i className="fa fa-map-marker-alt"></i> {site.address}
                </p>
              </div>

              <div className="palace-story">
                <h4 className="accent-gold">The Essence</h4>
                <p className="mb-4 lead text-secondary">{site.description}</p>

                <h4 className="accent-gold mt-4">Chronicles of History</h4>
                <div className="history-text-box shadow-sm border-left-gold">
                  <p>{site.history}</p>
                </div>
              </div>

              {/* GUIDES SECTION */}
              <div
                className="guides-section-modern"
                style={{ marginTop: "20px" }}
              >
                <h4 className="accent-gold mb-4">
                  Digital Experience & Local Experts
                </h4>

                <div className="guides-container-premium">
                  {site.video_path && (
                    <Link
                      style={{ width: "115px" }}
                      to={site.video_path}
                      target="_blank"
                      className="btn-royal-v2-sm text-decoration-none"
                    >
                      <i className="fa fa-play-circle"></i> Watch Tour
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="sidebar-col" style={{ marginTop: "20px" }}>
              <div
                className="booking-sidebar shadow-premium sticky-top"
                style={{ top: "100px", paddingBottom: "15px" }}
              >
                <div className="price-header border-bottom-0">
                  <span className="subtitle uppercase tracking-widest">
                    Site Logistics
                  </span>
                  <div className="coord-pill-container mt-3">
                    <iframe
                      src={`https://www.google.com/maps?q=${site.lat},${site.long}&hl=en&z=16&output=embed`}
                      allowFullScreen
                      loading="lazy"
                      title="Map of India"
                    />
                  </div>
                </div>

                <div className="book-fields pt-0">
                  <div className="field">
                    <label className="small-label">Operational Status</label>
                    <div
                      className={`status-pill-v3 ${site.status?.toLowerCase()}`}
                    >
                      <span className="status-dot"></span> {site.status}
                    </div>
                  </div>
                  <div className="field mt-3">
                    <label className="small-label">
                      Heritage Classification
                    </label>
                    <div className="asi-tag-modern">
                      <i className="fa fa-university mr-2"></i> ASI Managed Site
                    </div>
                    <div className="asi-tag-modern">
                      <h3 style={{ marginTop: "10px" }}>
                        Ticket Price : &#8377; {site.ticket_price}
                      </h3>
                    </div>
                    <Link to="/bookheritage" state={site}>
                      <button
                        className="btn-royal-v2-sm text-decoration-none"
                        style={{
                          border: "0px",
                          marginTop: "20px",
                          width: "100%",
                        }}
                      >
                        Book Heritage Visit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Visitor Protocol */}
          <div
            className="heritage-protocol-section mt-5 py-5 border-top"
            style={{ marginBottom: "50px", marginTop: "-50px" }}
          >
            <h4 className="accent-gold mb-4 text-center">Visitor Protocol</h4>
            <div className="protocol-grid-v2">
              <div className="p-card shadow-sm">
                <div className="p-icon">
                  <i className="fa fa-camera-retro"></i>
                </div>
                <div className="p-text">
                  <h6>Photography</h6>
                  <p>Allowed in exterior areas. Restricted inside museums.</p>
                </div>
              </div>
              <div className="p-card shadow-sm">
                <div className="p-icon">
                  <i className="fa fa-hand-paper"></i>
                </div>
                <div className="p-text">
                  <h6>Preservation</h6>
                  <p>Avoid touching murals or ancient brickwork.</p>
                </div>
              </div>
              <div className="p-card shadow-sm">
                <div className="p-icon">
                  <i className="fa fa-wheelchair"></i>
                </div>
                <div className="p-text">
                  <h6>Accessibility</h6>
                  <p>Ramps available at main entrances.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeritageDetail;
