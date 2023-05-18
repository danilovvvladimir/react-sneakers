import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sort, SortProperty } from "../../models/filterTypes";
import { RootState } from "../../store/store";
import { AiOutlineSearch } from "react-icons/ai";
import debounce from "lodash.debounce";

import "./Filter.scss";
import { setSearchValue, setSort } from "../../store/slices/filterSlice";

const LI_SORT_CLASSNAME = "filter__sort-list-item";
const LI_SORT_ACTIVE_CLASSNAME = "filter__sort-list-item--active";

const SORT_LIST: Sort[] = [
  { name: "цене ↓", sortProperty: SortProperty.PRICE_DESC },
  { name: "цене ↑", sortProperty: SortProperty.PRICE_ASC },
  { name: "алфавиту ↓", sortProperty: SortProperty.TITLE_DESC },
  { name: "алфавиту ↑", sortProperty: SortProperty.TITLE_ASC },
];

const Filter: FC = () => {
  const { sort: sortState } = useSelector(
    (state: RootState) => state.filterReducer
  );
  const dispatch = useDispatch();
  const [localValue, setLocalValue] = useState("");
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const onTriggerPopup = (sort: Sort) => {
    dispatch(setSort(sort));
    setIsPopupOpened(false);
  };

  // eslint-disable-next-line
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [dispatch]
  );

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsPopupOpened(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="filter">
      <div className="filter__search">
        <AiOutlineSearch className="filter__search-icon" />
        <input
          value={localValue}
          onChange={(event) => handleChangeValue(event)}
          type="text"
          className="filter__search-input"
          placeholder="Поиск..."
        />
      </div>
      <div className="filter__sort" ref={sortRef}>
        Сортировать по:
        <span
          className="filter__sort-type"
          onClick={() => setIsPopupOpened((isPopupOpened) => !isPopupOpened)}>
          {sortState.name}
        </span>
        <div className="filter__sort-popup">
          <ul className="filter__sort-list">
            {isPopupOpened &&
              SORT_LIST.map((sort) => (
                <li
                  key={sort.sortProperty}
                  onClick={() => onTriggerPopup(sort)}
                  className={
                    sortState.sortProperty === sort.sortProperty
                      ? `${LI_SORT_CLASSNAME} ${LI_SORT_ACTIVE_CLASSNAME}`
                      : `${LI_SORT_CLASSNAME}`
                  }>
                  {sort.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
