import React, { useEffect, useState } from "react";
import Logout from "../utils/Logout";
import api from "../utils/AxiosConfig";
import { Link } from "react-router-dom";

function Profile() {
  const [userProfile, setUserProfile] = useState({});

  async function FetchUserProfile() {
    try {
      let response = await api.get("/user/profile");

      console.log(response.data);

      setUserProfile(response.data.users);
    } catch (E) {
      console.log(E);
    }
  }

  useEffect(() => {
    FetchUserProfile();
  }, []);



  return (
    <div className="profile-page">
      {/* Profile Section */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px 0",
          overflow: "hidden",
        }}
      >
        <div className="wrapper">
          <div className="profile-card-container animate-slide-up">
            <div className="profile-content">
              <div className="header-text">
                <h3>Account Settings</h3>
                <p>
                  Manage your personal information and security preferences.
                </p>
              </div>

              {/* Info Grid */}
              <div className="info-grid">
                <div className="info-box staggered-1">
                  <label>Full Name</label>
                  {<p>{userProfile.username}</p>}
                </div>

                <div className="info-box staggered-2">
                  <label>Email Address</label>
                  {<p>{userProfile.email}</p>}
                </div>
              </div>

              {/* Bio Section */}
              <div className="bio-section staggered-3">
                <h4>Biography</h4>
                <p>
                  This information is part of your public profile within our
                  heritage community. Keep your details updated to ensure a
                  seamless experience during your visits and tours.
                </p>
              </div>

              {/* Actions */}
              <div className="action-footer staggered-4">
                <Link
                  state={userProfile}
                  to={"/editprofile"}
                  className="btn-primary-slate"
                >
                  Edit Profile
                </Link>

                {
                  <button
                    onClick={() => Logout()}
                    className="btn-outline-slate"
                  >
                    Sign Out
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
