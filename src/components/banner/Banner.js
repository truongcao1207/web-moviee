import { React } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const { data, error } = useSWR(
    `http://api.themoviedb.org/3/movie/upcoming?api_key=3fd2be6f0c70a2a598f084ddfb75487c`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="banner h-[700px] page-container mb-10 overflow-hidden object-center">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ item }) => {
  AOS.init();
  const {
    title,
    backdrop_path,
    id,
    vote_average,
    release_date,
    overview,
    poster_path,
  } = item;

  const { data, error } = useSWR(
    `http://api.themoviedb.org/3/movie/top_rated?api_key=3fd2be6f0c70a2a598f084ddfb75487c`,
    fetcher
  );

  const navigate = useNavigate();

  return (
    <div className="w-full h-full rounded-lg bg-white relative ">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-gray-900 rounded-lg "></div>
      <img
        className="w-full h-full object-cover rounded-lg "
        src={`https://image.tmdb.org/t/p/original/${backdrop_path} `}
        alt=""
      />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="absolute left-5 bottom-0 w-full text-white pb-40 flex justify-around "
      >
        <div className="flex flex-col justify-end items-start gap-x-3 mb-8">
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="max-w-[400px]">{overview}</p>
          <div className="pt-5 pb-5">
            <span className="py-2 p-4 border border-white rounded ">
              {release_date}
            </span>
            <span className="py-2 p-4 border border-white rounded ml-5">
              {vote_average}
            </span>
          </div>
          <button
            onClick={() => navigate(`/movies/${id}`)}
            className="py-3 px-6 rounded-lg bg-primary text-white font-medium "
          >
            Watch
          </button>
        </div>

        <div>
          <img
            className="w-[350px] h-[500px] object-cover rounded-lg "
            src={`https://image.tmdb.org/t/p/original/${poster_path} `}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
