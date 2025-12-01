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
  sortedCoins: [],
  status: "idle",
  error: "",
  priceSortDirection: "asc",
  marketCapSortDirection: "asc",
  totalVolumeSortDirection: "asc",
  high24hSortDirection: "asc",
  low24hSortDirection: "asc",
  atlSortDirection: "asc",
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    sortByPrice(state) {
      if (state.priceSortDirection === "asc") {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => a.current_price - b.current_price
        );
        state.priceSortDirection = "desc";
      } else {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => b.current_price - a.current_price
        );
        state.priceSortDirection = "asc";
      }
    },
    sortByMarketCap(state) {
      if (state.marketCapSortDirection === "asc") {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => a.market_cap - b.market_cap
        );
        state.marketCapSortDirection = "desc";
      } else {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => b.market_cap - a.market_cap
        );
        state.marketCapSortDirection = "asc";
      }
    },
    sortByTotalVolume(state) {
      if (state.totalVolumeSortDirection === "asc") {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => a.total_volume - b.total_volume
        );
        state.totalVolumeSortDirection = "desc";
      } else {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => b.total_volume - a.total_volume
        );
        state.totalVolumeSortDirection = "asc";
      }
    },
    sortByHigh24h(state) {
      if (state.high24hSortDirection === "asc") {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => a.high_24h - b.high_24h
        );
        state.high24hSortDirection = "desc";
      } else {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => b.high_24h - a.high_24h
        );
        state.high24hSortDirection = "asc";
      }
    },
    sortByLow24h(state) {
      if (state.low24hSortDirection === "asc") {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => a.low_24h - b.low_24h
        );
        state.low24hSortDirection = "desc";
      } else {
        state.sortedCoins = [...state.coins].sort(
          (a, b) => b.low_24h - a.low_24h
        );
        state.low24hSortDirection = "asc";
      }
    },
    sortByATL(state) {
      if (state.atlSortDirection === "asc") {
        state.sortedCoins = [...state.coins].sort((a, b) => a.atl - b.atl);
        state.atlSortDirection = "desc";
      } else {
        state.sortedCoins = [...state.coins].sort((a, b) => b.atl - a.atl);
        state.atlSortDirection = "asc";
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.coins = action.payload;
      state.sortedCoins = action.payload;
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.status = "failed";
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export const {
  sortByPrice,
  sortByMarketCap,
  sortByTotalVolume,
  sortByHigh24h,
  sortByLow24h,
  sortByATL,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
