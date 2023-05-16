import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Slider from "../../components/Slider/Slider";
import SneakersList from "../../components/SneakersList/SneakersList";

const HomePage = () => {
  return (
    <main className="home">
      <Slider />
      <SneakersList />
      <Pagination />
    </main>
  );
};

export default HomePage;
