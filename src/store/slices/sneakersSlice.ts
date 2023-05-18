import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FetchSneakersParams,
  Sneakers,
  SneakersFetchStatus,
  SneakersSliceState,
} from "../../models/sneakersTypes";

const initialState: SneakersSliceState = {
  sneakers: [],
  status: SneakersFetchStatus.LOADING,
};

export const fetchSneakers = createAsyncThunk<Sneakers[], FetchSneakersParams>(
  "sneakers/fetchSneakers",
  async (params, { rejectWithValue }) => {
    try {
      const { order, sortBy, currentPage, searchValue } = params;
      const URL = `https://646443d4043c103502b5f6e1.mockapi.io/items?page=${
        currentPage + 1
      }&limit=12&sortBy=${sortBy}&order=${order}&search=${searchValue}`;
      const response = await axios.get(URL);

      return response.data;
    } catch (error) {
      return rejectWithValue("Не удалось получить данные...");
    }
  }
);

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = SneakersFetchStatus.LOADING;
      state.sneakers = [];
    });

    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.sneakers = action.payload;
      state.status = SneakersFetchStatus.SUCCESS;
    });

    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = SneakersFetchStatus.ERROR;
      state.sneakers = [];
    });
  },
});

export const sneakersReducer = sneakersSlice.reducer;
