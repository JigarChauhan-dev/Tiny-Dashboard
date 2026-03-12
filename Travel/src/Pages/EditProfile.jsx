import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../utils/AxiosConfig";

function EditProfile() {
  let profile = useLocation().state;
  let [formData, setFormData] = useState(profile);
  let id = formData._id;
  console.log(formData);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.put(`/user/profile/update/${id}`, formData);

      if(response.data.status){
        alert("Profile Updated Successfully..");
      }

      window.location.href="/profile";
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  }

  const user = {
    name : formData.username,
    email : formData.email,
  }

  return (
    <div className="profile-page">
      <section
        style={{
          padding: "80px 0",
          overflow: "hidden",
        }}
      >
        <div className="wrapper">
          <div className="profile-card-container animate-slide-up">
            <div className="profile-content">
              <div className="header-text">
                <h3>Edit Profile</h3>
                <p>Update your personal information.</p>
              </div>

              {/* Form */}
              <form className="info-grid" onSubmit={handelSubmit}>
                <div className="info-box">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="info-box">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Buttons */}
                <div className="action-footer">
                  <button type="submit" className="btn-primary-slate">
                    Save Changes
                  </button>

                  <Link to="/profile" className="btn-outline-slate">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditProfile;
