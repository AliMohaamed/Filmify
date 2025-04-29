import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg movie-navbar bg-dark text-light navbar-light">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand  text-light" href="/">
              GII
            </a>

            {/* Toggler for Mobile */}
            <button
              className="navbar-toggler text-light"
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
