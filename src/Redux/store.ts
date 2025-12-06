import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cryptoReducer from "./reducers/cryptoSlice";
import trendItemsReducer from "./reducers/trendItemsSlice";
import marketReducer from "./reducers/marketSlice";
import exchangesReducer from "./reducers/exchangesSlice";
import exchangeReducer from "./reducers/exchangeSlice";
import nftsReducer from "./reducers/NftsSlice";
import nftReducer from "./reducers/NftSlice";
import assetPlatformsReducer from "./reducers/assetPlatformsSlice";
import coinReducer from "./reducers/coinSlice";
const reducer = combineReducers({
  crypto: cryptoReducer,
  trendItems: trendItemsReducer,
  market: marketReducer,
  exchanges: exchangesReducer,
  exchange: exchangeReducer,
  assetPlatforms: assetPlatformsReducer,
  nfts: nftsReducer,
  nft: nftReducer,
  coin: coinReducer,
});
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
