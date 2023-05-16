import React, { FC } from "react";
import EmptyBookmarks from "../../components/EmptyBookmarks/EmptyBookmarks";

const BookMarksPage: FC = () => {
  return (
    <main className="bookmarks">
      <EmptyBookmarks />
    </main>
  );
};

export default BookMarksPage;
