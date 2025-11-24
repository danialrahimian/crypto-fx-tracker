import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ExchangeState } from "../../Types/exchangesTypes";

const initialState: ExchangeState = {
  exchangeById: {},
  statusById: "idle",
  errorById: "",
};
export const fetchExchangeById = createAsyncThunk(
  "exchange/fetchExchangeById",
  async (exchangeId: string) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/exchanges/${exchangeId}`
    );
    const data = await response.json();
    return data;
  }
);
const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeById.pending, (state) => {
        state.statusById = "loading";
      })
      .addCase(fetchExchangeById.fulfilled, (state, action) => {
        state.statusById = "succeeded";
        state.exchangeById = action.payload;
      })
      .addCase(fetchExchangeById.rejected, (state, action) => {
        state.statusById = "failed";
        if (action.error.message) {
          state.errorById = action.error.message;
        }
      });
  },
});
export default exchangeSlice.reducer;
