import React, { FC } from "react";
import GoBackButton from "../UI/GoBackButton/GoBackButton";

import emptyBookmarksIMG from "../../assets/images/empty-cart-emoji.png";

import "./EmptyBookmarks.scss";

const EmptyBookmarks: FC = () => {
  return (
    <section className="empty-bookmarks">
      <div className="container">
        <div className="empty-bookmarks__wrapper">
          <img
            src={emptyBookmarksIMG}
            alt="sad-emoji"
            className="empty-bookmarks__image"
          />
          <h1 className="empty-bookmarks__title">Закладок нет :(</h1>
          <div className="empty-bookmarks__subtitle">
            Вы ничего не добавляли в закладки
          </div>
          <GoBackButton />
        </div>
      </div>
    </section>
  );
};

export default EmptyBookmarks;
