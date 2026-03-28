import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import cookie from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function Login() {
  let [showPassword, setShowPassword] = useState(false);
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handelInputChange(e) {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const Login = async (user) => {
    let response = await axios.post(
      "https://backend-twxo.onrender.com/api/auth/login",
      user,
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: Login,

    onSuccess: (data) => {
      console.log("Login success:", data);

      let token = data.token;

      if (token) {
        cookie.set("token", token, { expires: 1 });

        setUser({
          email: "",
          password: "",
        });

        toast.success("Login Successful", {
          onClose: () => {
            window.location.href = "/adminmanageheritage";
          },
        });
      }
    },

    onError: () => {
      setUser({
        email: "",
        password: "",
      });
      toast.error("Invalid Details", {
        onClose: () => {
          window.location.href = "/login";
        },
      });
    },
  });

  async function handelSubmit(e) {
    e.preventDefault();

    mutation.mutate(user);
  }

  console.log(user);

  return (
    <>
      <div className="wrapper vh-100">
        <div className="row align-items-center h-100">
          <form
            className="col-lg-3 col-md-4 col-10 mx-auto text-center"
            onSubmit={handelSubmit}
          >
            <Link
              className="navbar-brand mx-auto mt-2 flex-fill text-center"
              to={"/"}
            >
              <svg
                version="1.1"
                id="logo"
                className="navbar-brand-img brand-md"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 120 120"
                xmlSpace="preserve"
              >
                <g>
                  <polygon
                    className="st0"
                    points="78,105 15,105 24,87 87,87 	"
                  />
                  <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                  <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
                </g>
              </svg>
            </Link>
            <h1 className="h6 mb-3">Sign in</h1>
            <div className="form-group">
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Email address"
                onChange={handelInputChange}
                value={user.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control form-control-lg"
                placeholder="Password*"
                onChange={handelInputChange}
                value={user.password}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "30px",
                  top: "48%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Stay logged
                in{" "}
              </label>
            </div>
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Logging in..." : "Let me in"}
            </button>
            <p className="mt-5 mb-3 text-muted">© 2026</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
