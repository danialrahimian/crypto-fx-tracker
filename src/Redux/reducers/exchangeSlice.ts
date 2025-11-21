import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ExchangeState } from "../../Types/exchangeTypes";

export const fetchExchange = createAsyncThunk("exchange/fetchExchange", async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/exchanges");
  const data = await response.json();
  return data;
});
const initialState: ExchangeState = {
  exchanges: [],
  status: "idle",
  error: "",
};
const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchange.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExchange.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.exchanges = action.payload;
      })
      .addCase(fetchExchange.rejected, (state, action) => {
        state.status = "failed";
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});
export const { actions } = exchangeSlice;
export default exchangeSlice.reducer;
