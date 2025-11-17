import Home from "../pages/Home";
import AssetPlatforms from "../pages/AssetPlatforms";
import Coins from "../pages/Coins";
import Exchanges from "../pages/Exchanges";
import NFTs from "../pages/NFTs";
import Trends from "../pages/Trend";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/asset-platforms",
    element: <AssetPlatforms />,
  },
  {
    path: "/coins",
    element: <Coins />,
  },
  {
    path: "/exchanges",
    element: <Exchanges />,
  },
  {
    path: "/nfts",
    element: <NFTs />,
  },
  {
    path: "/trends",
    element: <Trends />,
  },
];
