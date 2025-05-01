import React, { useState } from "react";
import Header from "../components/Home/Header/Header";
import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Home/Movies/Movies";
import About from "../components/About/About";

const Home = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: 9.3,
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      releaseYear: 1994,
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime, Drama",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: 9.2,
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      releaseYear: 1972,
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      description:
        "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 9.0,
      image:
        "https://i.pinimg.com/736x/ee/d0/72/eed072c2f0de7e4c8d72c3f8d04d920b.jpg",
      releaseYear: 2008,
    },
    {
      id: 4,
      title: "Pulp Fiction",
      genre: "Crime, Drama",
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rating: 3.9,
      image:
        "https://i.pinimg.com/736x/6e/d0/f4/6ed0f489369bedbc269c35e3c22d2d6e.jpg",
      releaseYear: 1994,
    },
    {
      id: 5,
      title: "Fight Club",
      genre: "Drama",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.",
      rating: 8.8,
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
      releaseYear: 1999,
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      genre: "Drama",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: 9.3,
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      releaseYear: 1994,
    },
    {
      id: 7,
      title: "Interstellar",
      genre: "Adventure, Drama, Sci-Fi",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: 8.6,
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      releaseYear: 2014,
    },
  ]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Movies movies={movies} />
      <Footer />
    </>
  );
};

export default Home;
