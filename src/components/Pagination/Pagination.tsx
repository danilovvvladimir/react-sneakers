import React, { FC } from "react";
import Button from "../UI/Button/Button";
import "./Pagination.scss";

const PAGINATION_BTN_ARRAY = [...new Array(2)];

const Pagination: FC = () => {
  return (
    <div className="pagination">
      <Button extraClassName="btn--outline pagination__control-btn">
        &lt;
      </Button>
      <ul className="pagination__list">
        {PAGINATION_BTN_ARRAY.map((_, index) => (
          <li
            key={index}
            // className={`pagination__list-item ${
            //   currentPage === index && `pagination__list-item--active`
            // }`
            className="pagination__list-item pagination__list-item--active"
            // onClick={() => setCurrentPage(index)}
          >
            <Button extraClassName="btn--outline">{index + 1}</Button>
          </li>
        ))}
      </ul>
      <Button extraClassName="btn--outline pagination__control-btn">
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
