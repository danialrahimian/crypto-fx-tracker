import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { AssetPlatformsState } from "../../Types/assetPlatformsTypes";
export const fetchAssetPlatforms = createAsyncThunk(
  "assetPlatforms/fetchAssetPlatforms",
  async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/asset_platforms"
    );
    const data = await response.json();

    return data;
  }
);

const initialState: AssetPlatformsState = {
  assetPlatforms: [],
  assetPlatformsStatus: "idle",
  error: "",
};

const assetPlatformsSlice = createSlice({
  name: "assetPlatforms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAssetPlatforms.pending, (state) => {
      state.assetPlatformsStatus = "loading";
    });
    builder.addCase(fetchAssetPlatforms.fulfilled, (state, action) => {
      state.assetPlatformsStatus = "succeeded";
      state.assetPlatforms = action.payload;
    });
    builder.addCase(fetchAssetPlatforms.rejected, (state, action) => {
      state.assetPlatformsStatus = "failed";
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default assetPlatformsSlice.reducer;
