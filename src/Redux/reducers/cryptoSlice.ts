import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { CryptoState } from "../../Types/cryptoTypes";
export const fetchCoins = createAsyncThunk("crypto/fetchCoins", async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const data = await response.json();
  return data;
});

const initialState: CryptoState = {
  coins: [],
  status: "idle",
  error: "",
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.coins = action.payload;
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.status = "failed";
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default cryptoSlice.reducer;
