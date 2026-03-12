import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject : "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await api.post("/user/inquiries/submit", formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        subject : "",
        message: "",
      });
      window.location.href = "/"
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="contact-page-root">
      <section className="w3l-inner-banner-main">
        <div className="banner-9">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">
                  Home <span className="fa fa-angle-right" aria-hidden="true" />
                </Link>
              </li>
              <li className="active">Contact</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Main Content Area */}
      <section className="contact-main-area">
        <div className="map-form-container">
          {/* MAP SECTION - Focused on India */}
          <div className="india-map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551321.1111!2d78.96288!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635c066e0d11af%3A0x9519198642a8b9e!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
              loading="lazy"
              title="Map of India"
            />
          </div>

          {/* FLOATING FORM CARD */}
          <div className="floating-form-card">
            <form onSubmit={handleSubmit}>
              <h3>Contacts</h3>
              <p>We want to hear from you</p>

              <div className="form-fields">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="submit-btn-red">
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM INFO SECTION */}
        <div className="contact-details-footer">
          <div className="info-column">
            <h4>Visit Us</h4>
            <p className="highlight">Heritage India HQ</p>
            <p>
              12th Floor, Statesman House,
              <br />
              Barakhamba Road, New Delhi, India.
            </p>
          </div>

          <div className="divider-line"></div>

          <div className="info-column">
            <h4>Contact Us</h4>
            <p>
              <a href="tel:+911143215678">+91 11-4321-5678</a>
            </p>
            <p>
              <a href="tel:+919988776655">+91 99887-76655</a>
            </p>
            <p>
              <a href="mailto:contact@heritageindia.com" className="email-link">
                contact@heritageindia.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
