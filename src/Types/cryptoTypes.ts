export type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";
export type SortDirection = "asc" | "desc";

export interface Roi {
  times: number;
  currency: string;
  percentage: number;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number | null;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number | null;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: Roi | null;
  last_updated: string;
}

export interface CryptoState {
  coins: Coin[];
  sortedCoins: Coin[];
  status: LoadingStatus;
  error: string;
  priceSortDirection: SortDirection;
  marketCapSortDirection: SortDirection;
  totalVolumeSortDirection: SortDirection;
  high24hSortDirection: SortDirection;
  low24hSortDirection: SortDirection;
  atlSortDirection: SortDirection;
}

export type CurrencyValueMap = Record<string, number | null>;

export interface PlatformDetail {
  decimal_place: number | null;
  contract_address: string;
}

export interface CoinLinks {
  homepage: string[];
  whitepaper: string | null;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  snapshot_url: string | null;
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: string | null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: {
    github: string[];
    bitbucket: string[];
  };
}

export interface CoinImage {
  thumb: string;
  small: string;
  large: string;
}

export interface MarketData {
  current_price: CurrencyValueMap;
  total_value_locked: number | null;
  mcap_to_tvl_ratio: number | null;
  fdv_to_tvl_ratio: number | null;
  roi: Roi | null;
  ath: CurrencyValueMap;
  ath_change_percentage: CurrencyValueMap;
  ath_date: Record<string, string>;
  atl: CurrencyValueMap;
  atl_change_percentage: CurrencyValueMap;
  atl_date: Record<string, string>;
  market_cap: CurrencyValueMap;
  fully_diluted_valuation: CurrencyValueMap;
  market_cap_fdv_ratio: number | null;
  total_volume: CurrencyValueMap;
  high_24h: CurrencyValueMap;
  low_24h: CurrencyValueMap;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number | null;
  price_change_percentage_14d: number | null;
  price_change_percentage_30d: number | null;
  price_change_percentage_60d: number | null;
  price_change_percentage_200d: number | null;
  price_change_percentage_1y: number | null;
  market_cap_change_24h: number | null;
  market_cap_change_percentage_24h: number | null;
  price_change_24h_in_currency: CurrencyValueMap;
  price_change_percentage_1h_in_currency: CurrencyValueMap;
  price_change_percentage_24h_in_currency: CurrencyValueMap;
  price_change_percentage_7d_in_currency: CurrencyValueMap;
  price_change_percentage_14d_in_currency: CurrencyValueMap;
  price_change_percentage_30d_in_currency: CurrencyValueMap;
  price_change_percentage_60d_in_currency: CurrencyValueMap;
  price_change_percentage_200d_in_currency: CurrencyValueMap;
  price_change_percentage_1y_in_currency: CurrencyValueMap;
  market_cap_change_24h_in_currency: CurrencyValueMap;
  market_cap_change_percentage_24h_in_currency: CurrencyValueMap;
  total_supply: number | null;
  max_supply: number | null;
  max_supply_infinite?: boolean;
  circulating_supply: number | null;
  last_updated: string;
}

export interface CommunityData {
  facebook_likes: number | null;
  reddit_average_posts_48h: number | null;
  reddit_average_comments_48h: number | null;
  reddit_subscribers: number | null;
  reddit_accounts_active_48h: number | null;
  telegram_channel_user_count: number | null;
}

export interface CodeAdditionsDeletions {
  additions: number;
  deletions: number;
}

export interface DeveloperData {
  forks: number | null;
  stars: number | null;
  subscribers: number | null;
  total_issues: number | null;
  closed_issues: number | null;
  pull_requests_merged: number | null;
  pull_request_contributors: number | null;
  code_additions_deletions_4_weeks: CodeAdditionsDeletions | null;
  commit_count_4_weeks: number | null;
  last_4_weeks_commit_activity_series: number[];
}

export interface StatusUpdate {
  description?: string;
  category?: string;
  created_at?: string;
  user?: string;
  user_title?: string;
  pin?: boolean;
  project?: {
    type?: string;
    id?: string;
    name?: string;
    image?: {
      thumb?: string;
      small?: string;
    };
  };
}

export interface ConvertedValue {
  btc: number | null;
  eth: number | null;
  usd: number | null;
}

export interface Ticker {
  base: string;
  target: string;
  market: {
    name: string;
    identifier: string;
    has_trading_incentive: boolean;
  };
  last: number;
  volume: number;
  converted_last: ConvertedValue;
  converted_volume: ConvertedValue;
  trust_score: string | null;
  bid_ask_spread_percentage: number | null;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string | null;
  token_info_url: string | null;
  coin_id?: string;
  target_coin_id?: string | null;
  coin_mcap_usd?: number | null;
}

export interface CoinById {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: Record<string, string>;
  detail_platforms: Record<string, PlatformDetail>;
  block_time_in_minutes: number;
  hashing_algorithm: string | null;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  localization: Record<string, string>;
  description: Record<string, string>;
  links: CoinLinks;
  image: CoinImage;
  country_origin: string;
  genesis_date: string | null;
  sentiment_votes_up_percentage: number | null;
  sentiment_votes_down_percentage: number | null;
  watchlist_portfolio_users: number;
  market_cap_rank: number | null;
  market_data: MarketData;
  community_data: CommunityData;
  developer_data: DeveloperData;
  status_updates: StatusUpdate[];
  last_updated: string;
  tickers: Ticker[];
}

export interface CoinState {
  coinById: Partial<CoinById>;
  statusById: LoadingStatus;
  errorById: string;
}
