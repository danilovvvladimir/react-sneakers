import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from "../../store/slices/filterSlice";
import { RootState } from "../../store/store";
import Button from "../UI/Button/Button";
import "./Pagination.scss";

const PAGINATION_BTN_ARRAY = [...new Array(2)];

const Pagination: FC = () => {
  const currentPage = useSelector(
    (state: RootState) => state.filterReducer.currentPage
  );
  const dispatch = useDispatch();

  const setCurrentPage = (newPageNumber: number) => {
    dispatch(setCurrentPageAction(newPageNumber));
  };

  const changeCurrentPage = (direction: number) => {
    if (currentPage + direction > PAGINATION_BTN_ARRAY.length - 1) {
      setCurrentPage(0);
      return;
    }
    if (currentPage + direction < 0) {
      setCurrentPage(PAGINATION_BTN_ARRAY.length - 1);
      return;
    }
    setCurrentPage(currentPage + direction);
  };
  return (
    <div className="pagination">
      <Button
        extraClassName="btn--outline pagination__control-btn"
        onClick={() => changeCurrentPage(-1)}>
        &lt;
      </Button>
      <ul className="pagination__list">
        {PAGINATION_BTN_ARRAY.map((_, index) => (
          <li
            key={index}
            className={`pagination__list-item ${
              currentPage === index && `pagination__list-item--active`
            }`}
            onClick={() => setCurrentPage(index)}>
            <Button extraClassName="btn--outline">{index + 1}</Button>
          </li>
        ))}
      </ul>
      <Button
        extraClassName="btn--outline pagination__control-btn"
        onClick={() => changeCurrentPage(1)}>
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
