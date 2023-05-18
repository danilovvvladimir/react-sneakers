import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SneakersItem from "../SneakersItem/SneakersItem";

const List = () => {
  const { sneakers } = useSelector((state: RootState) => state.sneakersReducer);

  if (sneakers.length === 0) {
    return <h2 className="sneakers__title">Список пуст</h2>;
  }

  return (
    <div className="sneakers__list">
      {sneakers.map((sneaker) => (
        <SneakersItem key={sneaker.id} {...sneaker} />
      ))}
    </div>
  );
};

export default List;
