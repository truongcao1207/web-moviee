import React from "react";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { apiKey, fetcher } from "../config";

const TvShowsDetail = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `http://api.themoviedb.org/3/tv/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { poster_path, backdrop_path, genres, overview, name } = data;

  return (
    <>
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0 bg-opacity-25"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat opacity-80  "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>

      <div className="w-full h-[500px] max-w-[800px]  mx-auto -mt-[200px] relative z-10 pb-10 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <h1 className="text-center text-3xl font-bold text-white mb-10">
        {name}
      </h1>

      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10 ">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border-primary border rounded text-center "
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <TvCreadits></TvCreadits>
      <TvVideos></TvVideos>
      <TvSimilar></TvSimilar>
    </>
  );
};

const TvCreadits = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `http://api.themoviedb.org/3/tv/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const { cast } = data;
  if (!cast && cast.length <= 0) return null;

  return (
    <>
      <h2 className="text-center text-2xl mb-10">Cast</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

const TvVideos = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `http://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const { results, title } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div key={item.id} className="w-full aspect-video  ">
            <h2 className="mb-5 text-xl font-medium text-primary">
              {item.name}
            </h2>
            <iframe
              width="1280"
              height="720"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const TvSimilar = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `http://api.themoviedb.org/3/tv/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const { results, title } = data;
  if (!results || results.length <= 0) return null;

  return (
    <>
      <h2 className="text-2xl text pb-4">Similar movie</h2>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default TvShowsDetail;
