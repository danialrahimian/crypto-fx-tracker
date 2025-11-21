export interface Exchange {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
}
export interface ExchangeState {
  exchanges: Exchange[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}
