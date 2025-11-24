import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { NFTsState } from "../../Types/nftsType";

export const fetchNfts = createAsyncThunk("nfts/fetchNfts", async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/nfts/list");
  const data = await response.json();
  return data;
});

const initialState: NFTsState = {
  nfts: [],
  status: "idle",
  error: "",
};

const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNfts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchNfts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.nfts = action.payload;
    });
    builder.addCase(fetchNfts.rejected, (state, action) => {
      state.status = "failed";
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default nftsSlice.reducer;
