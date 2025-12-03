import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Spinner } from "./ui/spinner";
import { Link } from "react-router";
import { useEffect } from "react";
import { fetchTrendItems } from "../Redux/reducers/trendItemsSlice";
import { fetchMarketData } from "../Redux/reducers/marketSlice";
import type { Coin } from "../Types/cryptoTypes";
import type { MarketData } from "../Types/marketTypes";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import type { TrendCoin } from "../Types/trendItemsType";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
export default function HomeHighlights({
  coins,
  coinsStatus,
}: {
  readonly coins: Coin[];
  readonly coinsStatus: string;
}) {
  const { trendItems, status } = useAppSelector((state) => state.trendItems);
  const {
    marketData,
    marketDataStatus,
  }: { marketData: MarketData[]; marketDataStatus: string } = useAppSelector(
    (state) => state.market
  );
  const topGainers: Coin[] = [...coins]
    .sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    )
    .slice(0, 3);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrendItems());
    dispatch(fetchMarketData());
  }, []);
  const spinnerCount = new Array(3).fill(1);
  return (
    <div
      className="flex gap-2 justify-around  w-full md:flex-nowrap  mb-4 flex-wrap  lg:flex-row
      flex-col lg:h-64"
    >
      <div className="sm:w-full xl:w-1/3  gap-2  sm:flex lg:flex-col lg:justify-between">
        {marketDataStatus === "succeeded" && (
          <>
            <Card className="sm:w-1/2 lg:w-full lg:h-full">
              <CardHeader>
                <CardTitle>
                  <p className="mb-2">Market Cap : </p>
                  <span>{marketData[0].market_cap}$</span>
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  Market Cap
                  <span
                    className={`${
                      marketData[0].market_cap_change_24h > 0
                        ? "text-green-500"
                        : "text-destructive"
                    }`}
                  >
                    {marketData[0].market_cap_change_24h.toFixed(2)}%
                  </span>
                  {marketData[0].market_cap_change_24h > 0 ? (
                    <ArrowBigUp fill="green" />
                  ) : (
                    <ArrowBigDown fill="red" />
                  )}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sm:w-1/2 lg:w-full lg:h-full">
              <CardHeader>
                <CardTitle>
                  <p className="mb-2">24h Trading Volume : </p>
                  <span>{marketData[0].volume_24h}$</span>
                </CardTitle>
                <CardDescription>24h Trading Volume</CardDescription>
              </CardHeader>
            </Card>
          </>
        )}
        {marketDataStatus === "loading" && (
          <>
            <Card className="h-1/2 ">
              <CardHeader>
                <CardTitle className=" flex gap-2 items-center">
                  <Spinner />
                  <span className="font-semibold">Loading...</span>
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="h-1/2 ">
              <CardHeader>
                <CardTitle className=" flex gap-2 items-center">
                  <Spinner />
                  <span className="font-semibold">Loading...</span>
                </CardTitle>
              </CardHeader>
            </Card>
          </>
        )}
        {marketDataStatus === "failed" && (
          <>
            <Card className="h-1/2 ">
              <CardHeader>
                <CardTitle className=" flex gap-2 items-center">
                  <span className="font-semibold text-destructive">
                    Failed to load market data
                  </span>
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="h-1/2 ">
              <CardHeader>
                <CardTitle className=" flex gap-2 items-center">
                  <span className="font-semibold text-destructive">
                    Failed to load market data
                  </span>
                </CardTitle>
              </CardHeader>
            </Card>
          </>
        )}
      </div>
      <div className="w-full h-full  xl:w-1/3">
        <Card className="h-full"> 
          <CardHeader className="flex items-center justify-between">
            <CardTitle>🔥 Trending</CardTitle>
            <Link to="/trends">view more</Link>
          </CardHeader>
          {status === "succeeded" &&
            trendItems.coins.slice(0, 3).map((trend: TrendCoin) => {
              return (
                <CardContent key={trend.item.coin_id}>
                  <div className="flex justify-between  items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        className="w-8 h-8"
                        src={trend.item.small}
                        alt="coin"
                      />
                      <p>{trend.item.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <p>{trend.item.data.price.toFixed(2)}$</p>
                      {trend.item.data.price_change_percentage_24h.usd > 0 ? (
                        <ArrowBigUp fill="green" />
                      ) : (
                        <ArrowBigDown fill="red" />
                      )}
                      <p
                        className={`${
                          trend.item.data.price_change_percentage_24h.usd > 0
                            ? "text-green-500"
                            : "text-destructive"
                        }`}
                      >
                        {trend.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              );
            })}
          {status === "loading" &&
            spinnerCount.map((_, index) => {
              return (
                <CardContent key={index + 1}>
                  <Spinner /> Loading...
                </CardContent>
              );
            })}
          {status === "failed" && (
            <CardContent>
              <p className="text-destructive">failed to load top trends !!</p>
            </CardContent>
          )}
        </Card>
      </div>
      <div className="w-full h-full  xl:w-1/3">
        <Card className="h-full">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>🚀 Top Gainers</CardTitle>
            <Link to="/coins">view more</Link>
          </CardHeader>
          {coinsStatus === "succeeded" &&
            topGainers.map((topGainer) => {
              return (
                <CardContent key={topGainer.id}>
                  <div className="flex justify-between  items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        className="w-8 h-8"
                        src={topGainer.image}
                        alt="coin"
                      />
                      <p>{topGainer.name}</p>
                      <p>{topGainer.symbol}</p>
                    </div>
                    <div className="flex gap-2">
                      <p>{topGainer.current_price.toFixed(2)}$</p>
                      {topGainer.price_change_percentage_24h > 0 ? (
                        <ArrowBigUp fill="green" />
                      ) : (
                        <ArrowBigDown fill="red" />
                      )}
                      <p className="text-green-500">
                        {topGainer.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              );
            })}
          {coinsStatus === "loading" &&
            spinnerCount.map((_, index) => {
              return (
                <CardContent key={index + 1}>
                  <Spinner /> Loading...
                </CardContent>
              );
            })}
          {coinsStatus === "failed" && (
            <CardContent>
              <p className="text-destructive">failed to load coins !!</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
