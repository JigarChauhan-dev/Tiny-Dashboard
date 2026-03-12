import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../../Travel/src/utils/Logout";
import {
  FaLandmark,
  FaMoneyBillWave,
  FaCommentDots,
  FaMapMarkedAlt,
  FaHotel,
  FaUsers,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";

function Aside() {
  const handleCloseSidebar = (e) => {
    e.preventDefault();
    // This removes the class that the Header added
    document.body.classList.remove("collapsed");
  };

  return (
    <>
      <aside
        className="sidebar-left border-right bg-white shadow"
        id="leftSidebar"
        data-simplebar
      >
        <a
          href="#"
          className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
          data-toggle="toggle"
          onClick={handleCloseSidebar}
        >
          <i className="fe fe-x">
            <span className="sr-only" />
          </i>
        </a>
        <nav className="vertnav navbar navbar-light">
          {/* nav bar */}
          <div className="w-100 mb-4 d-flex">
            <Link
              className="navbar-brand mx-auto mt-2 flex-fill text-center"
              to={"/"}
            >
              <svg
                version="1.1"
                id="logo"
                className="navbar-brand-img brand-sm"
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
                    points="78,105 15,105 24,87 87,87   "
                  />
                  <polygon
                    className="st0"
                    points="96,69 33,69 42,51 105,51   "
                  />
                  <polygon className="st0" points="78,33 15,33 24,15 87,15  " />
                </g>
              </svg>
            </Link>
          </div>

          {/* ... DASHBOARD SECTION (Unchanged) ... */}
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#dashboard"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fe fe-home fe-16" />
                <span className="ml-3 item-text">Dashboard</span>
                <span className="sr-only">(current)</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="dashboard">
                <li className="nav-item active">
                  <Link className="nav-link pl-3" to={"/"}>
                    <span className="ml-1 item-text">Default</span>
                  </Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link pl-3" to={"/"}>
                    <span className="ml-1 item-text">Default</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/analytics"}>
                    <span className="ml-1 item-text">Analytics</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/sales"}>
                    <span className="ml-1 item-text">E-commerce</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/saas"}>
                    <span className="ml-1 item-text">Saas Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/system"}>
                    <span className="ml-1 item-text">Systems</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* ================================================= */}
          {/* NEW: MANAGEMENT SECTION (Direct Links, No Parent) */}
          {/* ================================================= */}

          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Management</span>
          </p>

          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanageheritage"}>
                <FaLandmark size={16} />
                <span className="ml-3 item-text">Manage Heritage</span>
              </Link>
            </li>

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanagehotel"}>
                <FaHotel size={16} />
                <span className="ml-3 item-text">Manage Hotel</span>
              </Link>
            </li>

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanagestate"}>
                <FaMapMarkedAlt size={16} />
                <span className="ml-3 item-text">Manage State</span>
              </Link>
            </li>

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanagelocation"}>
                <FaMapMarkedAlt size={16} />
                <span className="ml-3 item-text">Manage City</span>
              </Link>
            </li>

            {/* <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanageguide"}>
                <FaUserTie size={16} />
                <span className="ml-3 item-text">Manage Guide</span>
              </Link>
            </li> */}

            {/* <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanagesubscription"}>
                <FaCreditCard size={16} />
                <span className="ml-3 item-text">Manage Plan</span>
              </Link>
            </li> */}

            {/* <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminusersubcription"}>
                <FaUserTag size={16} />
                <span className="ml-3 item-text">User Subscription</span>
              </Link>
            </li> */}

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanagebooking"}>
                <FaMoneyBillWave size={16} />
                <span className="ml-3 item-text">Manage Booking</span>
              </Link>
            </li>

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminbookinghistory"}>
                <FaCalendarAlt size={16} />
                <span className="ml-3 item-text">Booking History</span>
              </Link>
            </li>

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanageusers"}>
                <FaUsers size={16} />
                <span className="ml-3 item-text">Manage Users</span>
              </Link>
            </li>

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanagefeedback"}>
                <FaCommentDots size={16} />
                <span className="ml-3 item-text">Manage Feedback</span>
              </Link>
            </li>

            <li className="nav-item w-100">
              <Link className="nav-link" to={"/adminmanageinquiries"}>
                <FaEnvelope size={16} />
                <span className="ml-3 item-text">Manage Inquiries</span>
              </Link>
            </li>
          </ul>

          {/* ================================================= */}
          {/* PAGES SECTION (Dropdown for Orders, Invoice, etc) */}
          {/* ================================================= */}

          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#pages"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fe fe-file fe-16"></i>
                <span className="ml-3 item-text">Pages</span>
              </a>
              <ul
                className="collapse list-unstyled pl-4 w-100 w-100"
                id="pages"
              >
                {/* Removed the Manage Links from here */}

                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/orders"}>
                    <span className="ml-1 item-text">Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/timeline"}>
                    <span className="ml-1 item-text">Timeline</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/invoice"}>
                    <span className="ml-1 item-text">Invoice</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/error404"}>
                    <span className="ml-1 item-text">Page 404</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/error500"}>
                    <span className="ml-1 item-text">Page 500</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/pageblank"}>
                    <span className="ml-1 item-text">Blank</span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* --- AUTHENTICATION SECTION --- */}
            <li className="nav-item dropdown">
              <a
                href="#auth"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fe fe-shield fe-16" />
                <span className="ml-3 item-text">Authentication</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="auth">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/login"}>
                    <span className="ml-1 item-text">Login 1</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/halflogin"}>
                    <span className="ml-1 item-text">Login 2</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/signup"}>
                    <span className="ml-1 item-text">Register</span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* --- LAYOUT SECTION --- */}
            <li className="nav-item dropdown">
              <a
                href="#layouts"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fe fe-layout fe-16" />
                <span className="ml-3 item-text">Layout</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="layouts">
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/"}>
                    <span className="ml-1 item-text">Default</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/indexhorizontal"}>
                    <span className="ml-1 item-text">Top Navigation</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-3" to={"/indexboxed"}>
                    <span className="ml-1 item-text">Boxed</span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* ... LAYOUT (Unchanged) ... */}
          </ul>

          {/* ... APPS & REST OF CODE (Unchanged) ... */}
          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Apps</span>
          </p>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            {/* ... Calendar, etc ... */}
          </ul>

          {/* ... LOGOUT BUTTON ... */}
          <div className="btn-box w-100 mt-4 mb-1">
            <Link
              onClick={() => Logout()}
              target="_blank"
              className="btn mb-2 btn-primary btn-lg btn-block"
            >
              <i />
              <span className="small">Logout</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
