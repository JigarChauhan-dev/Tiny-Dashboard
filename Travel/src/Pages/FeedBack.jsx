import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { LogoutWithoutNotification } from "../utils/Logout";
import { FaStar } from "react-icons/fa";

function FeedBack() {
  // --- 1. INTERACTIVE RATING STATE ---
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  let [getfeedback, setGetFeedback] = useState([]);

  async function FetchFeddbackData() {
    try {
      let response = await api.get("/feedbacks/all");
      setGetFeedback(response.data.data);
    } catch (e) {
      console.log("Fetch Error : ", e);
    }
  }

  useEffect(() => {
    FetchFeddbackData();
  }, []);

  console.log(getfeedback);

  const [userProfile, setUserProfile] = useState({});

  const [feedback, setFeedback] = useState({
    username: "",
    email: "",
    rating: "",
    message: "",
    loginId: "",
    createdAt: new Date(),
  });

  function handleInputChange(e) {
    let { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let response = await api.post("/user/feedbacks/submit", feedback);
      alert("Feedback Submitted Successfully!");
      setFeedback({
        username: "",
        email: "",
        rating: "",
        message: "",
        loginId: "",
      });
      if (response.data.token) {
        Cookies.set("token", response.data.token);

        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      alert("FeedBack Failed");
    }
  }

  async function FetchUserProfile() {
    try {
      let response = await api.get("/user/profile");
      setUserProfile(response.data.user);
      setFeedback((prev) => ({
        ...prev,
        loginId: response.data.user.id,
      }));
    } catch (E) {
      if (error.response.status === 401) {
        LogoutWithoutNotification();
      }
      console.log(E);
    }
  }

  useEffect(() => {
    FetchUserProfile();
  }, []);

  console.log(feedback);

  return (
    <div className="feedback-page">
      {/* Banner & Breadcrumbs */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9">
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
              <li>
                <a href="#pages">
                  Pages{" "}
                  <span
                    className="fa fa-angle-right"
                    style={{ color: "white" }}
                  />
                </a>
              </li>
              <li className="active">Guest Feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <div className="wrapper">
          <div className="feedback-header animate-up">
            <h3>Share Your Experience</h3>
            <p>
              Your experience helps us preserve history and improve our
              hospitality. Share your thoughts with us.
            </p>
          </div>

          <div className="feedback-container">
            {/* Left Side: The Form */}
            <div className="feedback-form-card animate-left">
              <h4>Leave a Review</h4>
              <form onSubmit={handleSubmit}>
                {/* --- 2. INTERACTIVE STAR SELECTION --- */}
                <div className="rating-selector mb-4">
                  <span className="d-block mb-2">Your Rating?</span>
                  <div
                    className="stars-interactive"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label
                          key={index}
                          style={{ cursor: "pointer", fontSize: "25px" }}
                        >
                          <input
                            type="radio"
                            name="rating"
                            style={{ display: "none" }}
                            value={ratingValue}
                            onClick={() =>
                              setFeedback({ ...feedback, rating: ratingValue })
                            }
                          />
                          <FaStar
                            color={
                              ratingValue <= (hover || feedback.rating)
                                ? "#cbaa6b"
                                : "#1a1a1a"
                            }
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            transition="color 200ms"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    name="username"
                    onChange={handleInputChange}
                    value={feedback.username}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleInputChange}
                    value={feedback.email}
                  />
                </div>

                {/* Removed 'Type of Visit' as requested */}

                <textarea
                  name="message"
                  value={feedback.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your experience..."
                  rows="5"
                ></textarea>

                <button type="submit" className="submit-feedback-btn mt-3">
                  Submit Feedback
                </button>
              </form>
            </div>

            {/* Right Side: Recent Feedback */}
            <div className="recent-feedback animate-right">
              <h4>Voice of Explorers</h4>

              {getfeedback.slice(0, 2).map((value) => (
                <div className="testimonial-item">
                  <div className="testimonial-header">
                    <img
                      src={`https://ui-avatars.com/api/?name=${value.username}&background=c5a059&color=fff`}
                      alt="User"
                    />
                    <div>
                      <h5>{value.username}</h5>
                      <div className="user-stars">
                        {[...Array(5)].map((_, index) => {
                          const isGold = index < value.rating;

                          return (
                            <i
                              key={index}
                              className="fa fa-star"
                              style={{
                                color: isGold ? "#cbaa6b" : "#1a1a1a",
                                fontSize: "16px",
                              }}
                            ></i>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <p>{value.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeedBack;
