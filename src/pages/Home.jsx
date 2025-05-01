import React, { useState } from "react";
import Header from "../components/Home/Header/Header";
import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Home/Movies/Movies";
import About from "../components/About/About";
import { moviesModel } from "../models/movies";

const Home = () => {
  let [movies] = useState(moviesModel);

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
