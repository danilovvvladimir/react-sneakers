import React from "react";
import SneakersItem from "../SneakersItem/SneakersItem";

import "./SneakersList.scss";

const SneakersList = () => {
  return (
    <section className="sneakers">
      <div className="container">
        <div className="sneakers__top">
          <h1 className="sneakers__title">Все кроссовки</h1>
          {/* search sort */}
        </div>
        <div className="sneakers__list">
          <SneakersItem />
          <SneakersItem />
          <SneakersItem />
        </div>
      </div>
    </section>
  );
};

export default SneakersList;
