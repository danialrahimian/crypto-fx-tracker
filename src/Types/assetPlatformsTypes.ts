export interface AssetPlatform {
  id: string;
  chain_identifier: string | null;
  name: string;
  shortname: string;
  native_coin_id: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
}

export interface AssetPlatformsState {
  assetPlatforms: AssetPlatform[];
  assetPlatformsStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}
