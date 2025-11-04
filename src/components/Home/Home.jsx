import React from "react";
import Hero from "./Hero";
import PopularProducts from "./PopularProducts";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <PopularProducts></PopularProducts>
      <AllProducts></AllProducts>
    </div>
  );
};

export default Home;
