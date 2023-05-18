export enum SortProperty {
  TITLE_DESC = "name",
  TITLE_ASC = "-name",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type Sort = {
  name: string;
  sortProperty: SortProperty;
};

export interface FilterSliceState {
  categoryId: number;
  sort: Sort;
  currentPage: number;
  searchValue: string;
}
