import React from "react";
import Slider from "../../components/Slider/Slider";
import SneakersList from "../../components/SneakersList/SneakersList";

const HomePage = () => {
  return (
    <section className="home">
      <Slider />
      <SneakersList />
    </section>
  );
};

export default HomePage;
