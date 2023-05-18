import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SneakersFetchStatus } from "../../models/sneakersTypes";
import { fetchSneakers } from "../../store/slices/sneakersSlice";
import { AppDispatch, RootState } from "../../store/store";
import Filter from "../Filter/Filter";
import List from "../List/List";
import SneakersItemSkeleton from "../SneakersItem/SneakersItemSkeleton";

import "./SneakersList.scss";

const skeletons = [...new Array(12)].map((_, index) => (
  <SneakersItemSkeleton key={index} />
));

const SneakersList: FC = () => {
  const { status } = useSelector((state: RootState) => state.sneakersReducer);

  const {
    categoryId,
    sort: sortState,
    currentPage,
    searchValue,
  } = useSelector((state: RootState) => state.filterReducer);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const sortBy = sortState.sortProperty.replace("-", "");
    const order = sortState.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    dispatch(
      fetchSneakers({
        sortBy,
        order,
        category,
        currentPage,
        searchValue,
      })
    );
  }, [sortState.sortProperty, categoryId, currentPage, searchValue, dispatch]);

  return (
    <section className="sneakers">
      <div className="container">
        <div className="sneakers__top">
          <h1 className="sneakers__title">Все кроссовки</h1>
          <Filter />
        </div>
        {status === SneakersFetchStatus.LOADING && (
          <>
            <h2 className="sneakers__title sneakers__title--loading">
              Загрузка...
            </h2>
            <div className="sneakers__loading-skeletons">{skeletons}</div>
          </>
        )}
        {status === SneakersFetchStatus.ERROR && (
          <h2 className="sneakers__title sneakers__title--loading">
            Произошла ошибка загрузки данных...
          </h2>
        )}
        {status === SneakersFetchStatus.SUCCESS && <List />}
      </div>
    </section>
  );
};

export default SneakersList;
