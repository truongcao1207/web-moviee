import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import "swiper/scss";

import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import Header from "./layout/Header";
import MoviesDetails from "./pages/MoviesDetails";
import TvShows from "./pages/TvShows";
import TvShowsDetail from "./pages/TvShowDetail";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <HomePage></HomePage>
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              <Header></Header>
              <Movies></Movies>
            </>
          }
        ></Route>
        <Route
          path="/tvshows"
          element={
            <>
              <Header></Header>
              <TvShows></TvShows>
            </>
          }
        ></Route>

        <Route
          path="/movies/:movieId"
          element={
            <>
              <Header></Header>
              <MoviesDetails></MoviesDetails>
            </>
          }
        ></Route>
        <Route
          path="/tv/:movieId"
          element={
            <>
              <Header></Header>
              <TvShowsDetail></TvShowsDetail>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
