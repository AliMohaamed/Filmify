import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../../context/themeContext";
import { Navbar } from "react-bootstrap";

const Header = () => {
  let { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar
        bg={theme}
        className="navbar navbar-expand-lg movie-navbar fixed-top"
        data-bs-theme={theme}
      >
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand " href="/">
            Filmify
          </a>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/series">
                  Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  News
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <i className="fa-solid fa-sun"></i>
                  ) : (
                    <i className="fa-solid fa-moon"></i>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
