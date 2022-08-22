import React from "react";
import { useNavigate } from "react-router";

const MovieCard = ({ item }) => {
  const {
    title,
    vote_average,
    release_date,
    poster_path,
    id,
    name,
    first_air_date,
  } = item;
  const navigate = useNavigate();

  return (
    <div className="  movie-card rounded-2xl p-3 bg-slate-800 h-full flex flex-col select-none">
      <div className="flex flex-col ">
        <img
          onClick={() => navigate(`/${name ? "tv" : "movies"}/${id}`)}
          className="scale-95 hover:scale-105 duration-200 w-full h-[350px] object-cover rounded-lg mb-5 cursor-pointer"
          src={`https://image.tmdb.org/t/p/w500/${poster_path} `}
          alt=""
        />
        <h3 className="text-white text-xl font-bold mb-4 flex-row">
          {title ? title : name}
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 ">
          <span>{release_date ? release_date : first_air_date}</span>
          <span>{vote_average}</span>
        </div>
      </div>
      {/* <button
        onClick={() => navigate(`/movies/${id}`)}
        className="py-3 px-6 rounded-lg capitalize bg-primary w-full bottom-0"
      >
        Watch Now
      </button> */}
    </div>
  );
};

export default MovieCard;
