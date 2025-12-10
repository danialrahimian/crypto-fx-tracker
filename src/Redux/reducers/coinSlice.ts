import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { CoinState } from "../../Types/cryptoTypes";
export const fetchCoinById = createAsyncThunk(
  "coin/fetchCoinById",
  async (id: string) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState: CoinState = {
  coinById: {},
  statusById: "idle",
  errorById: "",
};

const coinSlice = createSlice({
  name: "coinSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinById.pending, (state) => {
        state.statusById = "loading";
      })
      .addCase(fetchCoinById.fulfilled, (state, action) => {
        state.statusById = "succeeded";
        state.coinById = action.payload;
      })
      .addCase(fetchCoinById.rejected, (state, action) => {
        state.statusById = "failed";
        if (action.error.message) {
          state.errorById = action.error.message;
        }
      });
  },
});

export default coinSlice.reducer;
