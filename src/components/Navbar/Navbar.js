import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div class="sidebar">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <div class="content">
        <div className="d-flex justify-content-end  ">
          <nav className="navbar navbar-expand-lg navbar-dark nav_style container">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <Link to="/home" className="navbar-brand">
                  <small>Developer</small>
                </Link>
                <ul className="mx-5 navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item dropdown ">
                    <Link
                      to="home/thanksBP"
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Free, Pro, & Team
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Free, Pro, & Team
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Cloud
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.4
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.3
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.2
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.1
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.0
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          GitHub AE
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          <small>All Enterprise Server release </small>
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          <small>About versions </small>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="home/thanksBP"
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          简体中文 (Simplified Chinese)
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          日本 (Japanese)
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Española (Spanish)
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Portuguese do brasil (Portuguese)
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </ul>
                  </li>
                  <li className="btn btn-outline-info" type="submit">
                    <Link
                      to="/home/thanksBP"
                      style={{ textDecoration: "none" }}
                    >
                      Sign Up
                    </Link>
                  </li>
        
                </ul>
                <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search Topics, Products.."
                      aria-label="Search"
                    />
                  </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
