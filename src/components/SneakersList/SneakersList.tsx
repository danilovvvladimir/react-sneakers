import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SneakersFetchStatus } from "../../models/sneakersTypes";
import { fetchSneakers } from "../../store/slices/sneakersSlice";
import { AppDispatch, RootState } from "../../store/store";
import SneakersItem from "../SneakersItem/SneakersItem";

import "./SneakersList.scss";

const SneakersList: FC = () => {
  const { sneakers, status } = useSelector(
    (state: RootState) => state.sneakersReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSneakers());
  }, [dispatch]);

  console.log(sneakers, status);

  if (status === SneakersFetchStatus.LOADING) {
    return (
      <h1 className="sneakers__title sneakers__title--loading">Загрузка...</h1>
    );
  }

  if (status === SneakersFetchStatus.ERROR) {
    return (
      <h1 className="sneakers__title sneakers__title--error">
        Произошла ошибка загрузки данных...
      </h1>
    );
  }

  return (
    <section className="sneakers">
      <div className="container">
        <div className="sneakers__top">
          <h1 className="sneakers__title">Все кроссовки</h1>
          {/* search sort */}
        </div>
        <div className="sneakers__list">
          {sneakers.map((sneaker) => (
            <SneakersItem key={sneaker.id} {...sneaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SneakersList;
