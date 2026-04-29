import React, { useState } from "react";
import axios from "axios";
import Footer from "../Common/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validation Function
  const validate = () => {
    let newError = {};

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const phoneRegex = /^[6-9]\d{9}$/; // Indian format

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*]).{8,}$/;

    if (!formData.username) {
      newError.username = "Username is required";
    }

    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Invalid email";
    }

    if (!formData.phone) {
      newError.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newError.phone = "Invalid phone number";
    }

    if (!formData.password) {
      newError.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newError.password =
        "Min 8 chars, include A-Z, a-z, number & special char";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // ❌ stop if invalid

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );

      toast.success("Signup successful",{
        onClose : ()=>{
          navigate("/")
        }
      })

      // ✅ Reset Form
      setFormData({
        username: "",
        email: "",
        phone: "",
        address: "",
        password: "",
      });

      setError({});
    } catch (err) {
      console.log(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <h2 className="title">🎮 Create Account</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="👤 Username"
              value={formData.username}
              onChange={handleChange}
            />
            {error.username && (
              <p style={{ color: "red" }}>{error.username}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && (
              <p style={{ color: "red" }}>{error.email}</p>
            )}

            <input
              type="text"
              name="phone"
              placeholder="📱 Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {error.phone && (
              <p style={{ color: "red" }}>{error.phone}</p>
            )}

            <textarea
              name="address"
              placeholder="📍 Address"
              value={formData.address}
              onChange={handleChange}
            />

            {/* Password */}
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="🔒 Password"
                value={formData.password}
                onChange={handleChange}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "35%",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error.password && (
              <p style={{ color: "red" }}>{error.password}</p>
            )}

            <button
              type="submit"
              className="signup-btn"
              disabled={loading}
            >
              {loading ? "⏳ Signing Up..." : "🚀 Sign Up"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;