import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckToken from "../utils/CheckToken";
import Logout from "../utils/Logout";

function Header() {
  let [token, setToken] = useState("");

  useEffect(() => {
    let token = CheckToken();
    setToken(token);
  }, []);
  // console.log(token);

  return (
    <div>
      {/* header */}
      <div className="w3l-headers-9">
        <header>
          <div className="wrapper">
            <div className="header">
              {/* Logo Section */}
              <div>
                <h1>
                  <Link to="/" className="logo">
                    Heritage
                  </Link>
                </h1>
              </div>{" "}
              <div className="bottom-menu-content">
                <input type="checkbox" id="nav" />
                <label htmlFor="nav" className="menu-bar" />
                <nav>
                  <ul className="menu">
                    <li>
                      <Link to={"/"} className="link-nav">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to={"/about"} className="link-nav">
                        Our Legacy
                      </Link>
                    </li>
                    <li>
                      <Link to={"/heritageplace"} className="link-nav">
                        Historical Sites
                      </Link>
                    </li>
                    {/* <li>
                      <Link to={"/weather"}>View Weather</Link>
                    </li> */}
                    {/* <li>
                      <Link to={"/pricing"}>Visitor Guide</Link>
                    </li> */}
                    <li>
                      <Link to={"/hotel"}>Guest stay</Link>
                    </li>
                    <li>
                      <Link to={"/bookinghistory"}>Booking History</Link>
                    </li>
                    {/* <li>
                      <label htmlFor="drop-3" className="toggle toogle-2">
                        Blog{" "}
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </label>
                      <a href="#blog" className="link-nav dropdown-toggle">
                        Blog{" "}
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <input type="checkbox" id="drop-3" />
                      <ul>
                        <li>
                          <Link to={"/blog"}>Blog</Link>
                        </li>
                        <li>
                          <Link to={"/blogsingle"}>Blog Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <label htmlFor="drop-4" className="toggle toogle-2">
                        Shop{" "}
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </label>
                      <a href="#shop" className="link-nav dropdown-toggle">
                        Shop{" "}
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <input type="checkbox" id="drop-4" />
                      <ul>
                        <li>
                          <Link to={"/ecommerce"}>Ecommerce</Link>
                        </li>
                        <li>
                          <Link to={"/ecommercesingle"}>Ecommerce Single</Link>
                        </li>
                        <li>
                          <Link to={"/ecommercecart"}>Ecommerce Cart</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to={"/contact"} className="link-nav">
                        Contact
                      </Link>
                    </li>
                    {/* <li className="nav-right-sty">
                <Link to={"/book"} className="actionbg">Book Now</Link>
              </li> */}
                    {token ? (
                      <>
                        <li className="nav-right-sty">
                          <Link
                            className="actionbg"
                            onClick={() => {
                              Logout();
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                        <li className="nav-right-sty">
                          <Link to={"/profile"} className="actionbg">
                            <span className="fa fa-user"></span>
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        {" "}
                        <li className="nav-right-sty">
                          <Link to={"/login"} className="actionbg">
                            Login
                          </Link>
                        </li>
                        <li className="nav-right-sty">
                          <Link to={"/signup"} className="actionbg">
                            Signup
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* //header */}
      </div>
    </div>
  );
}

export default Header;
