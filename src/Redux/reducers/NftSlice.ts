import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { NFTState } from "../../Types/nftsType";

export const fetchNftById = createAsyncThunk(
  "nfts/fetchNftById",
  async (id: string) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/nfts/${id}`);
    const data = await response.json();
    return data;
  }
);

const initialState: NFTState = {
  nftById: {},
  statusById: "idle",
  errorById: "",
};

const nftsSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNftById.pending, (state) => {
      state.statusById = "loading";
    });
    builder.addCase(fetchNftById.fulfilled, (state, action) => {
      state.statusById = "succeeded";
      state.nftById = action.payload;
    });
    builder.addCase(fetchNftById.rejected, (state, action) => {
      state.statusById = "failed";
      if (action.error.message) {
        state.errorById = action.error.message;
      }
    });
  },
});

export default nftsSlice.reducer;
