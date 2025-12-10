import type { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit";
export type coinBoxPropType = {
  readonly id: string;
  readonly symbol: string;
  readonly name: string;
  readonly current_price: number;
  readonly market_cap: number;
  readonly market_cap_rank: number | null;
  readonly price_change_percentage_24h: number;
  readonly image: string;
   fetchCoinById: AsyncThunk<any, string, AsyncThunkConfig>;
};
