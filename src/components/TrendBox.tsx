import { useState } from "react";
import type { TrendBoxPropType } from "../Types/trendItemsType";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
const TrendBox = ({ trend }: { trend: TrendBoxPropType }) => {
  const [fullDescribtion, setFullDescribtion] = useState({
    describtion: "",
    isShow: false,
  });
  if (trend.kind === "coin") {
    return (
      <Card className="cursor-pointer xl:w-80 lg:w-96 w-full hover:scale-105 transition-all ">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <img className="w-10 h-10" src={trend.item.thumb} alt="" />
            <p>{trend.item.name}</p>
            <span>{trend.item.symbol}</span>
          </CardTitle>
        </CardHeader>
        <CardDescription className="px-5">
          {trend.item.data.content === null ? (
            <p>no content</p>
          ) : (
            <>
              <p className="text-gray-500 text-lg">
                {trend.item.data.content.title}
              </p>

              {trend.item.data.content.description.length > 200 ? (
                <p>
                  {trend.item.data.content.description.slice(0, 201)}
                  {fullDescribtion.isShow && fullDescribtion.describtion}

                  <button
                    className="text-[16px] text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => {
                      if (fullDescribtion.isShow) {
                        setFullDescribtion({
                          describtion: "",
                          isShow: false,
                        });
                      } else {
                        setFullDescribtion({
                          describtion:
                            trend.item.data.content.description.slice(201),
                          isShow: true,
                        });
                      }
                    }}
                  >
                    {fullDescribtion.isShow ? "less" : " ... more"}
                  </button>
                </p>
              ) : (
                <p>{trend.item.data.content.description}</p>
              )}
            </>
          )}
        </CardDescription>
        <CardContent>
          <div className="flex items-center gap-2">
            <p> price: {trend.item.data.price.toFixed(4)}$</p>
            <p
              className={`${
                trend.item.data.price_change_percentage_24h.usd > 0
                  ? "text-green-500"
                  : "text-red-500"
              } flex items-center`}
            >
              <span>
                {trend.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </span>
              {trend.item.data.price_change_percentage_24h.usd > 0 ? (
                <ArrowUp />
              ) : (
                <ArrowDown />
              )}
            </p>
          </div>

          <p> market cap rank: {trend.item.market_cap_rank}</p>
          <p> market cap : {trend.item.data.market_cap}</p>
          <p> total volume : {trend.item.data.total_volume}</p>
        </CardContent>
        <CardFooter>
          <img src={trend.item.data.sparkline} alt="" />
        </CardFooter>
      </Card>
    );
  }
  if (trend.kind === "nft") {
    return (
      <Card className="cursor-pointer xl:w-80 lg:w-96 w-full hover:scale-105 transition-all ">
        <CardHeader>
          <CardTitle className="flex items-center  justify-between">
            <div className="flex items-center gap-2 ">
              <img className="w-10 h-10" src={trend.thumb} alt="" />

              <p>{trend.name}</p>
            </div>
            <span
              className={`text-xs text-gray-500 ${
                trend.symbol.length > 15 ? "ml-2" : null
              }`}
            >
              {trend.symbol.length > 15
                ? trend.symbol.slice(0, 15) + "..."
                : trend.symbol}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <p>price: {trend.data.floor_price}</p>
            <p
              className={`${
                Number(trend.data.floor_price_in_usd_24h_percentage_change) > 0
                  ? "text-green-500"
                  : "text-red-500"
              } flex items-center`}
            >
              {Number(
                trend.data.floor_price_in_usd_24h_percentage_change
              ).toFixed(2)}
              %
              {Number(trend.data.floor_price_in_usd_24h_percentage_change) >
              0 ? (
                <ArrowUp />
              ) : (
                <ArrowDown />
              )}
            </p>
          </div>
          <p>24h volume: {trend.data.h24_volume}</p>
          <img className="my-2" src={trend.data.sparkline} alt="" />
        </CardContent>
        <CardFooter>
          {trend.data.content === null ? (
            <p className="text-xs text-gray-500">no content</p>
          ) : (
            <p>{trend.data.content}</p>
          )}
        </CardFooter>
      </Card>
    );
  }
  if (trend.kind === "category") {
    return (
      <Card className="cursor-pointer h-48 xl:w-80 lg:w-96 w-full hover:scale-105 transition-all ">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <p>{trend.name}</p>
          </CardTitle>
          <CardDescription>Coin Count: {trend.coins_count}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <p>market cap: {trend.data.market_cap.toFixed(2)}$</p>
            <p
              className={`${
                Number(
                  trend.data.market_cap_change_percentage_24h.usd.toFixed(2)
                ) > 0
                  ? "text-green-500"
                  : "text-red-500"
              } flex items-center`}
            >
              {Number(trend.data.market_cap_change_percentage_24h.usd).toFixed(
                2
              )}
              %
              {Number(trend.data.market_cap_change_percentage_24h.usd) > 0 ? (
                <ArrowUp />
              ) : (
                <ArrowDown />
              )}
            </p>
          </div>
          <p>volume: {trend.data.total_volume.toFixed(2)}$</p>
          <img src={trend.data.sparkline} alt="" />
        </CardContent>
      </Card>
    );
  }
};

export default TrendBox;
