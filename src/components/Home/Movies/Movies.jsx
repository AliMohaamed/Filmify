import React, { useContext, useState } from "react";
import "./Movies.css";
import { ThemeContext } from "../../../context/themeContext";
import MovieModal from "./MovieModal";

const Movies = ({ movies }) => {
  let [filterMovies, setFilterMovies] = useState(movies);
  let { theme } = useContext(ThemeContext);
  let onFilterMovies = (e) => {
    const value = e.target.value;
    setFilterMovies(
      movies.filter((movie) => {
        if (movie.title.toLowerCase().includes(value.toLowerCase())) {
          return movie;
        } else if (value.length === 0) {
          return movie;
        }
      })
    );
  };
  // Show Product Details
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  function handleClick(movieDetails) {
    setSelectedMovie(movieDetails);
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };
  return (
    <>
      <section
        className={`movies-section ${theme === "dark" ? "dark" : "light"}`}
      >
        <div className="container">
          <h2 className="section-title">Featured Movies</h2>

          <div className="d-flex justify-content-center align-items-center mb-5 gap-2">
            <input
              type="search"
              name="search"
              onInput={onFilterMovies}
              className="form-control w-25"
              placeholder="Search for movie"
            />
          </div>

          <div className="row">
            {filterMovies.map((movie) => {
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
                        <button
                          className="action-button"
                          onClick={() => handleClick(movie)}
                        >
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
      {showModal && selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal}/>}
    </>
  );
};

export default Movies;
