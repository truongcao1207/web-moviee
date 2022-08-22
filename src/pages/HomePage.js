import React from "react";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie/MovieList";
import Footer from "../layout/Footer";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <section className="movie-layout page-container pb-10">
        <h2 className=" text-white mb-5 text-3xl font-bold">Now playing</h2>
        <MovieList></MovieList>
      </section>

      <section className="movie-layout page-container pb-10">
        <h2 className=" text-white mb-5 text-3xl font-bold">Top rate</h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movie-layout page-container pb-10">
        <h2 className=" text-white mb-5 text-3xl font-bold">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
