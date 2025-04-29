import React, { Component } from 'react'
import './Movies.css'
export default class Movies extends Component {
  render() {
    const {movieTitle,movieGenre,movieRating,image,releaseYear} = this.props.movieDetails;
    return (
      <>
      {/* Movie Card 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="movie-card">
          <div className="trending-badge">Trending</div>
          <div className="release-year">{releaseYear}</div>
          <div className="movie-poster">
            <img src={image} alt="Movie Poster" />
            <div className="movie-overlay" />
            <div className="play-button">
              <i className="fas fa-play" />
            </div>
            <div className="movie-info">
              <h3 className="movie-title">{movieTitle}</h3>
              <div className="movie-genre">{movieGenre}</div>
              <div className="movie-rating">
                <span className="rating-value text-light">{movieRating}</span>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              <div className="movie-actions">
                <button className="action-button">
                  <i className="fas fa-info-circle" /> Details
                </button>
                <button className="action-button">
                  <i className="fas fa-remove" /> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
      </>
    )
  }
}
