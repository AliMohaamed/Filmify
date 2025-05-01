import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="hero-title">Discover Amazing Movies</h1>
              <p className="hero-subtitle">
                Stream thousands of movies, TV shows, and documentaries anytime,
                anywhere.
              </p>
              <div className="search-container mb-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search for movies, TV shows, actors..."
                  />
                  <button className="btn btn-dark" type="button">
                    <img src="Vector.svg" alt="Search" />
                  </button>
                </div>
              </div>
              <a href="#" className="btn btn-watch-now  btn-lg">
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
