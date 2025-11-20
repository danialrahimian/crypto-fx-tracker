export interface MarketData {
  id: string;
  name: string;
  market_cap: number;
  market_cap_change_24h: number;
  content: string;
  top_3_coins_id: string[];
  top_3_coins: string[];
  volume_24h: number;
  updated_at: string;
}

export interface MarketState {
  marketData: MarketData[];
  marketDataStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}
