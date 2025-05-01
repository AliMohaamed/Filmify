import React, { useContext } from "react";
import "./Movies.css";
import { MovieDetails } from "./movieDetails/MovieDetails";
import { ThemeContext } from "../../../context/themeContext";

const Movies = ({ movies }) => {
  let { theme } = useContext(ThemeContext);
  return (
    <>
      <section
        className={`movies-section ${theme === "dark" ? "dark" : "light"}`}
      >
        <div className="container">
          <h2 className="section-title">Featured Movies</h2>
          <div className="row">
            {movies.map((movie) => {
              return (
                <div
                  className="col-lg-4 col-md-6"
                  key={movie.id}
                  data-movie-id={movie.id}
                >
                  <div className="movie-card">
                    <div className="trending-badge">Trending</div>
                    <div className="release-year">{movie.releaseYear}</div>
                    <div className="movie-poster">
                      <img src={movie.image} alt="Movie Poster" />
                      <div className="movie-overlay" />
                      <div className="play-button">
                        <i className="fas fa-play" />
                      </div>
                      <div className="movie-info">
                        <h3 className="movie-title">{movie.title}</h3>
                        <div className="movie-genre">{movie.genre}</div>
                        <button className="action-button">
                          <i className="fas fa-info-circle" /> Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <button className="load-more">
              Load More <i className="fas fa-arrow-down ms-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
