import React, { useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function ResetPassword() {
  const { token } =  useParams();


  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.success("Passwords do not match");
      return;
    }

    try {
      const res = await api.post(
        "/user/resetpassword/reset-password",
        {
          token: token,
          password: formData.password,
        }
      );

      toast.success("Password reset successful", {
          onClose: () => {
            window.location.href = "/login";
          },
        });
    } catch (error) {
      console.log(error);
      toast.error("Reset password failed");
    }
  }

  return (
    
    <section className="w3l-form-34-main">
              {/* inner banner */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9 sec-img">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li className="active" style={{color:"white"}}>Forgot Password</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="form34-sub">
        <div className="form34">
          <h4 className="form-head">Reset Password</h4>
          <p className="form-para">Enter your new password</p>
          <hr />

          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-head">New Password</p>
              <input
                type="password"
                className="input"
                placeholder="New Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="text-head">Confirm Password</p>
              <input
                type="password"
                className="input"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="submit"
              value="Reset Password"
              className="buttonbg signinbutton"
              style={{ backgroundColor: "black", cursor: "pointer" }}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;