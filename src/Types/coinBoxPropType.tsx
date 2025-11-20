export type coinBoxPropType = {
  id: string;
  readonly symbol: string;
  readonly name: string;
  readonly current_price: number;
  readonly market_cap: number;
  readonly market_cap_rank: number;
  readonly price_change_percentage_24h: number;
  readonly image: string;
};
