import Movie from "./Movie";
import Search from "./Search";
import React from "react";
const Home = () => {
  return (
    <>
      <div className="container">
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;