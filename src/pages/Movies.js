import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";
import { v4 } from "uuid";

const Movies = ({ type = "popular" }) => {
  const [movies, setMovies] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    `http://api.themoviedb.org/3/movie/${type}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${nextPage}`
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${filterDebounce}`
      );
    } else {
      setUrl(
        `http://api.themoviedb.org/3/movie/${type}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );
    }
  }, [filterDebounce]);

  const loadMore = () => {
    if ((data.page = 1)) {
      setNextPage(nextPage + 1);
      const newMovies = [...data.results, ...movies];

      setMovies(newMovies);
    }
  };
  useEffect(() => {
    if (data && data.results && data.page) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div>
      <div className="py-10 ">
        <div className="flex flex-nowrap">
          <div className="flex-1">
            <input
              className="w-full p-4 bg-transparent text-white rounder"
              placeholder="Search.."
              type="text"
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <button className="p-4 bg-primary text-white rounded ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 py-10">
          {movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={v4()} item={item}></MovieCard>
            ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={loadMore}
          className="text-white bg-primary rounded-lg p-5 "
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Movies;
