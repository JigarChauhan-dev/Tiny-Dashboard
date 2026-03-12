import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- FETCH DATA ---
  async function fetchPlans() {
    try {
      setLoading(true);
      const response = await api.get("/plans/all");
      setPlans(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.log("Fetch Error:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="page-wrapper pb-5 mb-5">
      {" "}
      {/* Bottom Spacing */}
      {/* Breadcrumb Section */}
      <section className="w3l-inner-banner-main">
        <div
          className="banner-9"
          style={{ backgroundColor: "#1a1a1a", padding: "20px" }}
        >
          <div className="wrapper">
            <ul
              className="breadcrumbs-custom-path"
              style={{
                color: "#c5a059",
                listStyle: "none",
                display: "flex",
                gap: "10px",
              }}
            >
              <li>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>{" "}
                <span className="fa fa-angle-right" />
              </li>
              <li className="active">Plan & Pricing</li>
            </ul>
          </div>
        </div>
      </section>
      {/* --- Main Pricing Section --- */}
      <section className="heritage-pricing-section py-5 my-5">
        {" "}
        {/* Top Spacing */}
        <div className="pricing-wrapper container">
          {/* Header */}
          <div className="pricing-header text-center mb-5 pt-4">
            <h3 className="display-5 fw-bold">Step Into History</h3>
            <p className="lead px-lg-5">
              Choose how you want to experience the legacy. From immersive audio
              whispers to expert historians, we have a journey for every
              traveler.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="pricing-grid row row-cols-1 row-cols-md-3 g-4">
            {loading ? (
              <div className="text-center w-100 py-5">
                <i
                  className="fa fa-spinner fa-spin fa-3x"
                  style={{ color: "#f05448" }}
                ></i>
                <p className="mt-3">Loading plans...</p>
              </div>
            ) : plans.length > 0 ? (
              plans.map((plan) => (
                <div className="col" key={plan._id}>
                  <div
                    className={`pricing-card h-100 fade-in ${plan.isPopular ? "popular" : ""}`}
                  >
                    {plan.isPopular && (
                      <div className="popular-badge">POPULAR</div>
                    )}

                    <div className="card-icon text-center mb-3">
                      <i
                        className={`fa ${plan.icon || "fa-ticket"}`}
                        aria-hidden="true"
                      ></i>
                    </div>

                    <h4 className="plan-name text-center">{plan.plan_name}</h4>
                    <p className="plan-subtitle text-center">{plan.subtitle}</p>

                    <h2 className="plan-price text-center mt-3">
                      ₹{plan.price}{" "}
                      <span className="duration-text">
                        / {plan.duration || "person"}
                      </span>
                    </h2>

                    {/* --- NEW DESCRIPTION SECTION --- */}
                    <div className="plan-description-container my-3 px-3">
                      <p className="plan-description text-center">
                        {plan.description ||
                          "Embark on a curated journey through our shared heritage and timeless legacy."}
                      </p>
                    </div>

                    <ul className="features-list mt-4 mb-5">
                      {plan.features?.map((feature, idx) => (
                        <li key={idx}>
                          <i className="fa fa-check-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto text-center">
                      <Link
                        to={`/book/${plan._id}`}
                        className="btn-heritage w-100"
                      >
                        Select Plan
                      </Link>
                      <p className="info-note mt-2">
                        Valid for {plan.duration_days || "1"} day entry
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center w-100 py-5">
                <h3>No pricing plans found.</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;