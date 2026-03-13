import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const navigate = useNavigate();
  let [showPassword, setShowPassword] = useState(false);
  let [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  let [error, setError] = useState({
    usernameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
  });

  function handelInputChange(e) {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validateForm() {
    let isvalid = true;
    let emailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneFormat = /^(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    let passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (!user.username) {
      error.usernameError = "Username is required*";
      isvalid = false;
    } else {
      error.usernameError = "";
    }

    if (!user.email) {
      error.emailError = "Email is required*";
      isvalid = false;
    } else if (!emailFormat.test(user.email)) {
      error.emailError = "Provid valid email";
      isvalid = false;
    } else {
      error.emailError = "";
    }

    if (!user.phone) {
      error.phoneError = "Phone is required*";
      isvalid = false;
    } else if (!phoneFormat.test(user.phone)) {
      error.phoneError = "Provide valid phone number";
      isvalid = false;
    } else {
      error.phoneError = "";
    }

    if (!user.password) {
      error.passwordError = "Password is required*";
      isvalid = false;
    } else if (!passwordFormat.test(user.password)) {
      error.passwordError =
        "password must contain uppercase,lowercase,special char,number and at format";
      isvalid = false;
    } else {
      error.passwordError = "";
    }
    setError((prev) => ({ ...prev }));
    return isvalid;
  }

  async function handelSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form Submitted.");

    try {
      let response = await axios.post(
        "https://backend-twxo.onrender.com/api/auth/signup",
        user,
      );

      console.log(user);

      console.log(response);
      console.log(response.data.message);

      if (response.status == 200 || response.status == 201) {
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed");
    }
  }

  return (
    <>
      <div>
        {/* inner banner */}
        <section className="w3l-inner-banner-main">
          <div className="banner-9 sec-img">
            <div className="wrapper">
              <ul className="breadcrumbs-custom-path">
                <li>
                  <Link to={"/"}>
                    Home{" "}
                    <span className="fa fa-angle-right" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <a href="#pages">
                    Pages{" "}
                    <span className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </li>
                <li className="active">Signup</li>
              </ul>
            </div>
          </div>
        </section>
        {/* //covers */}
        {/* form 34-2 */}
        <section className="w3l-form-34-main">
          <div className="form34-sub">
            <div className="form34">
              <h4 className="form-head">Sign Up</h4>
              <p className="form-para">Create your account. Its free</p>

              <hr />
              <form onSubmit={handelSubmit}>
                <div>
                  <p className="text-head">Name</p>
                  <input
                    type="text"
                    name="username"
                    className="input"
                    placeholder="Your Name"
                    onChange={handelInputChange}
                    value={user.username}
                  />
                  {error.usernameError && (
                    <p style={{ color: "red" }}>{error.usernameError}</p>
                  )}
                </div>
                <div>
                  <p className="text-head">Email</p>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Your Email"
                    onChange={handelInputChange}
                    value={user.email}
                  />
                  {error.emailError && (
                    <p style={{ color: "red" }}>{error.emailError}</p>
                  )}
                </div>
                <div>
                  <p className="text-head">Phone</p>
                  <input
                    type="tel"
                    name="phone"
                    className="input"
                    placeholder="Your Number"
                    onChange={handelInputChange}
                    value={user.phone}
                  />
                  {error.phoneError && (
                    <p style={{ color: "red" }}>{error.phoneError}</p>
                  )}
                </div>
                <div style={{ position: "relative" }}>
                  <p className="text-head">Password</p>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    onChange={handelInputChange}
                    value={user.password}
                    style={{ paddingRight: "40px" }}
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "55%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#555",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>

                  {error.passwordError && (
                    <p style={{ color: "red" }}>{error.passwordError}</p>
                  )}
                </div>

                <input
                  type="submit"
                  className="buttonbg signinbutton"
                  value="Sign Up"
                  style={{ backgroundColor: "black", cursor: "pointer" }}
                />

                <p className="signup">
                  Already have an account?
                  <Link to={"/login"} className="signuplink">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUp;
