import React from "react";
import "./MovieModal.css";
export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;
  const { title, genre, description, rating, image, releaseYear } = movie;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-body">
          <div className="row">
            <div className="col-md-4">
              <img src={image} alt={title} className="modal-poster" />
            </div>
            <div className="col-md-8">
              <h2 className="modal-title">{title}</h2>
              <div className="movie-meta">
                <span className="release-year">{releaseYear}</span>
                <span className="genre">{genre}</span>
                <div className="rating">
                  <span className="rating-value">{rating}</span>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, index) => {
                      const starValue = rating / 2 - index;
                      if (starValue >= 1) {
                        return (
                          <i key={index} className="fas fa-star text-warning" />
                        );
                      } else if (starValue >= 0.5) {
                        return (
                          <i
                            key={index}
                            className="fas fa-star-half-alt text-warning"
                          />
                        );
                      } else {
                        return (
                          <i key={index} className="far fa-star text-warning" />
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className="movie-description">
                <h4>Overview</h4>
                <p>{description}</p>
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary">
                  <i className="fas fa-play me-2"></i> Watch Now
                </button>
                <button className="btn btn-outline-light ms-2">
                  <i className="fas fa-plus me-2"></i> Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
