import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  let [showPassword, setShowPassword] = useState(false);
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let response = await axios.post(
        "http://localhost:8000/api/auth/login",
        user,
      );

      if (response.data.token) {
        Cookies.set("token", response.data.token);

        alert("Login Successful");
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  }

  return (
    <div>
      <div>
        {/* inner banner */}
        <section className="w3l-inner-banner-main">
          <div className="banner-9 sec-img">
            <div className="wrapper">
              <ul className="breadcrumbs-custom-path">
                {/* <li>
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
                </li> */}
                <li className="active">Login</li>
              </ul>
            </div>
          </div>
        </section>
        {/* //covers */}
        {/* form 34 */}
        <section className="w3l-form-34-main">
          <div className="form34-sub">
            <div className="form34">
              <h4 className="form-head">Welcome back</h4>
              <p className="form-para">
                Enter your credentials to access your account.
              </p>
              <hr />

              <form onSubmit={handleSubmit}>
                <div className>
                  <p className="text-head">Email</p>
                  <input
                    type="email"
                    className="input"
                    placeholder="Your Email"
                    name="email"
                    onChange={handleInputChange}
                    value={user.email}
                  />
                </div>
                <div style={{ position: "relative" }}>
                  <p className="text-head">Password</p>

                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Your Password"
                    name="password"
                    onChange={handleInputChange}
                    value={user.password}
                    style={{ paddingRight: "40px" }}
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "47%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#555",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>

                  <p style={{ textAlign: "right" }}>
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </p>
                </div>
                <label className="container">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark" />
                  Remember me
                </label>
                <input
                  type="submit"
                  value={"Login"}
                  className="buttonbg signinbutton"
                  style={{ backgroundColor: "black", cursor: "pointer" }}
                />
                <p className="signup">
                  Have not an account yet?
                  <Link to={"/signUp"} className="signuplink">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
