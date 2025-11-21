import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cryptoReducer from "./reducers/cryptoSlice";
import trendItemsReducer from "./reducers/trendItemsSlice";
import marketReducer from "./reducers/marketSlice";
import exchangeSlice from "./reducers/exchangeSlice";
const reducer = combineReducers({
  crypto: cryptoReducer,
  trendItems: trendItemsReducer,
  market: marketReducer,
  exchange: exchangeSlice,
});
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
