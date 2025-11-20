import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { MarketState } from "../../Types/marketTypes";
export const fetchMarketData = createAsyncThunk(
  "market/fetchMarketData",
  async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/categories"
    );
    const data = await response.json();

    return data;
  }
);

const initialState: MarketState = {
  marketData: [],
  marketDataStatus: "idle",
  error: "",
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMarketData.pending, (state) => {
      state.marketDataStatus = "loading";
    });
    builder.addCase(fetchMarketData.fulfilled, (state, action) => {
      state.marketDataStatus = "succeeded";
      state.marketData = action.payload;
    });
    builder.addCase(fetchMarketData.rejected, (state, action) => {
      state.marketDataStatus = "failed";
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default marketSlice.reducer;
