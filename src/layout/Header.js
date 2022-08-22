import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-5  ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
      <NavLink
        to="/tvshows"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Tv Shows
      </NavLink>
      {/* <Link to='/' className='isActive'>Home</Link>
    <Link to='/movies' className='isActive'>Movies</Link> */}
    </header>
  );
};

export default Header;
