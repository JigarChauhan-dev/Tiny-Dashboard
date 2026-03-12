import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Header() {
  let [admin, setAdmin] = useState({});

  let [toggle, setToggle] = useState(false);

  async function FetchAdmin() {
    try {
      let response = await api.get("/admin/dashboard");
      setAdmin(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  function handleToggle() {
    if (!toggle) {
      setToggle(true);
      document.getElementsByTagName("body")[0].classList.add("collapsed");
    } else {
      setToggle(false);
      document.getElementsByTagName("body")[0].classList.remove("collapsed");
    }
  }

  useEffect(() => {
    FetchAdmin();
  }, []);

  const admindetail = {
    name: admin.name,
  };

  return (
    <>
      <nav className="topnav navbar navbar-light">
        <button
          type="button"
          className="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar"
          onClick={handleToggle}
        >
          <i className="fe fe-menu navbar-toggler-icon" />
        </button>
        <form className="form-inline mr-auto searchform text-muted">
          <input
            className="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted"
            type="search"
            placeholder="Type something..."
            aria-label="Search"
          />
        </form>
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link text-muted my-2"
              href="#"
              id="modeSwitcher"
              data-mode="light"
            >
              <i className="fe fe-sun fe-16" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted my-2"
              id="modeSwitcher"
              data-mode="light"
            >
              <h5>Welcome, {admindetail.name}</h5>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted my-2"
              href="./#"
              data-toggle="modal"
              data-target=".modal-shortcut"
            >
              <span className="fe fe-grid fe-16" />
            </a>
          </li>
          <li className="nav-item nav-notif">
            <a
              className="nav-link text-muted my-2"
              href="./#"
              data-toggle="modal"
              data-target=".modal-notif"
            >
              <span className="fe fe-bell fe-16" />
              <span className="dot dot-md bg-success" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted pr-0"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="avatar avatar-sm mt-2">
                <img
                  src="./assets/avatars/face-1.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to={"/profile"}>
                Profile
              </Link>
              <Link className="dropdown-item" to={"/settings"}>
                Settings
              </Link>
              {/* <Link className="dropdown-item" to={"/"}>Activities</Link> */}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
