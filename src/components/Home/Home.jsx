import React, { Component } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "../Footer/Footer";
import Movies from "./Movies/Movies";
import About from "../About/About";
export default class Home extends Component {
  state = {
    movies: [
      {
        movieTitle: "The Shawshank Redemption",
        movieGenre: "Drama",
        movieRating: "9.3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        releaseYear: 1994,
      },
      {
        movieTitle: "The Godfather",
        movieGenre: "Crime, Drama",
        movieRating: "9.2",
        image:
          "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        releaseYear: 1972,
      },
      {
        movieTitle: "The Dark Knight",
        movieGenre: "Action, Crime, Drama",
        movieRating: "9.0",
        image: "https://i.pinimg.com/736x/ee/d0/72/eed072c2f0de7e4c8d72c3f8d04d920b.jpg",
        releaseYear: 2008,
      },
      {
        movieTitle: "Pulp Fiction",
        movieGenre: "Crime, Drama",
        movieRating: "8.9",
        image:
          "https://i.pinimg.com/736x/6e/d0/f4/6ed0f489369bedbc269c35e3c22d2d6e.jpg",
        releaseYear: 1994,
      },
      {
        movieTitle: "Fight Club",
        movieGenre: "Drama",
        movieRating: "8.8",
        image:
          "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        releaseYear: 1999,
      },
    ],
  };

  render() {
    return (
      <>
        <Header />
        <Hero />
        <About/>
        <section className="movies-section">
          <div className="container">
            <h2 className="section-title text-light">Featured Movies</h2>
            <div className="category-tabs">
              <button className="category-tab active">All</button>
              <button className="category-tab">Action</button>
              <button className="category-tab">Comedy</button>
              <button className="category-tab">Drama</button>
              <button className="category-tab">Horror</button>
              <button className="category-tab">Sci-Fi</button>
            </div>
            <div className="row">
              {this.state.movies.map((movie,i) => (
                <Movies movieDetails={movie} key={i}/>
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="load-more">
                Load More <i className="fas fa-arrow-down ms-2" />
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
