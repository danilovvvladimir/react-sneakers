export enum SneakersFetchStatus {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}

export type Sneakers = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
};

export interface SneakersSliceState {
  sneakers: Sneakers[];
  status: SneakersFetchStatus;
}

export type FetchSneakersParams = {
  sortBy: string;
  order: string;
  category: string;
  currentPage: number;
  searchValue: string;
};
