import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log(formData);

  const ForgetPassword = async (formData) => {
    const res = await axios.post(
      "http://localhost:8000/api/user/password/forgotpassword",
      formData,
    );
    return Response.data; 
  };

  const mutation = useMutation({
    mutationFn : ForgetPassword,

    onSuccess: ()=>{
      if (res.data.status) {
        setMessage("Password reset link sent to your email.");
      } else {
        setMessage("Email not found.");
      }
    },

    onError:()=>{
      setMessage("Something went wrong. Try again.");
    }
  })

  async function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(formData);
  }

  return (
    <div>
      {/* inner banner */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9 sec-img">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li className="active">Forgot Password</li>
            </ul>
          </div>
        </div>
      </section>

      {/* form */}
      <section className="w3l-form-34-main">
        <div className="form34-sub">
          <div className="form34">
            <h4 className="form-head">Forgot Password</h4>
            <p className="form-para">
              Enter your email to receive a password reset link.
            </p>
            <hr />

            <form onSubmit={handleSubmit}>
              <div>
                <p className="text-head">Email</p>  
                <input
                  type="email"
                  className="input"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="buttonbg signinbutton" style={{ backgroundColor: "black", cursor: "pointer" }} disabled={mutation.isPending}>
                {mutation.isPending? "Sending Reset Link" : "Send Reset Link"}
              </button>

              {message && <p style={{ marginTop: "15px" }}>{message}</p>}

              <p className="signup">
                Remember your password?
                <Link to="/login" className="signuplink">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
