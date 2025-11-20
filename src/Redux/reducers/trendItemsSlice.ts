import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { TrendItemsState } from "../../Types/trendItemsType";
export const fetchTrendItems = createAsyncThunk(
  "trendItems/fetchTrendItems",
  async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const data = await response.json();
    return data;
  }
);

const initialState: TrendItemsState = {
  trendItems: {
    coins: [],
    nfts: [],
    categories: [],
  },
  status: "idle",
  error: "",
};

const trendItemsSlice = createSlice({
  name: "trendItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTrendItems.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.trendItems = action.payload;
    });
    builder.addCase(fetchTrendItems.rejected, (state, action) => {
      state.status = "failed";
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default trendItemsSlice.reducer;
