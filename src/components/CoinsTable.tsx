import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { Coin } from "../Types/cryptoTypes";
import {
  ArrowBigDownDash,
  ArrowBigUpDash,
  ArrowUpFromDot,
  ArrowDownToDot,
} from "lucide-react";
import { Link } from "react-router";
import { Spinner } from "./ui/spinner";
import { useAppDispatch } from "../hooks/hooks";
import type { UnknownAction } from "@reduxjs/toolkit";
export default function CoinsTable({
  coins,
  status,
  sortByPrice,
  sortByMarketCap,
  sortByTotalVolume,
  sortByHigh24h,
  sortByLow24h,
  sortByATL,
  priceSortDirection,
  marketCapSortDirection,
  totalVolumeSortDirection,
  high24hSortDirection,
  low24hSortDirection,
  atlSortDirection,
}: {
  readonly coins: Coin[];
  readonly status: string;
  readonly sortByPrice: () => UnknownAction;
  readonly sortByMarketCap: () => UnknownAction;
  readonly sortByTotalVolume: () => UnknownAction;
  readonly sortByHigh24h: () => UnknownAction;
  readonly sortByLow24h: () => UnknownAction;
  readonly sortByATL: () => UnknownAction;
  readonly priceSortDirection: string;
  readonly marketCapSortDirection: string;
  readonly totalVolumeSortDirection: string;
  readonly high24hSortDirection: string;
  readonly low24hSortDirection: string;
  readonly atlSortDirection: string;
}) {
  const spinnerCount = new Array(7).fill(1);
  const dispatch = useAppDispatch();
  return (
    <Table>
      <TableCaption>A list of top 10 coins by market cap</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Coin</TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => dispatch(sortByPrice())}
          >
            <div className="flex items-center gap-2">
              <span>Price</span>
              {priceSortDirection === "asc" ? (
                <ArrowUpFromDot className="w-4 h-4" fill="green" />
              ) : (
                <ArrowDownToDot className="w-4 h-4" fill="red" />
              )}
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => dispatch(sortByMarketCap())}
          >
            <div className="flex items-center gap-2">
              <span>Market Cap</span>
              {marketCapSortDirection === "asc" ? (
                <ArrowUpFromDot className="w-4 h-4" fill="green" />
              ) : (
                <ArrowDownToDot className="w-4 h-4" fill="red" />
              )}
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => dispatch(sortByTotalVolume())}
          >
            <div className="flex items-center gap-2">
              <span>total_volume</span>
              {totalVolumeSortDirection === "asc" ? (
                <ArrowUpFromDot className="w-4 h-4" fill="green" />
              ) : (
                <ArrowDownToDot className="w-4 h-4" fill="red" />
              )}
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => dispatch(sortByHigh24h())}
          >
            <div className="flex items-center gap-2">
              <span>high_24h</span>
              {high24hSortDirection === "asc" ? (
                <ArrowUpFromDot className="w-4 h-4" fill="green" />
              ) : (
                <ArrowDownToDot className="w-4 h-4" fill="red" />
              )}
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => dispatch(sortByLow24h())}
          >
            <div className="flex items-center gap-2">
              <span>low_24h</span>
              {low24hSortDirection === "asc" ? (
                <ArrowUpFromDot className="w-4 h-4" fill="green" />
              ) : (
                <ArrowDownToDot className="w-4 h-4" fill="red" />
              )}
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => dispatch(sortByATL())}
          >
            <div className="flex items-center gap-2">
              <span>ATL</span>
              {atlSortDirection === "asc" ? (
                <ArrowUpFromDot className="w-4 h-4" fill="green" />
              ) : (
                <ArrowDownToDot className="w-4 h-4" fill="red" />
              )}
            </div>
          </TableHead>
          <TableHead>last_updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {status === "loading" && (
          <TableRow>
            {spinnerCount.map((_, index) => (
              <TableCell key={index + 1}>
                <Spinner />
              </TableCell>
            ))}
          </TableRow>
        )}
        {status === "succeeded" &&
          coins.map((coin: Coin) => {
            return (
              <TableRow className="h-22 items-center" key={coin.id}>
                <TableCell>
                  <Link to={`/coins/${coin.id}`}>
                    <div className="flex items-center gap-2">
                      <img
                        src={coin.image}
                        className="w-8 h-8"
                        alt={coin.name}
                      />
                      <p>{coin.name}</p>
                      <span className="text-xs text-gray-500">
                        {coin.symbol}
                      </span>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <span>{coin.current_price}$</span>
                  <div className=" flex items-center gap-2">
                    {coin.price_change_24h && (
                      <span
                        className={
                          coin.price_change_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {coin.price_change_24h.toFixed(2)} $
                      </span>
                    )}
                    {coin.price_change_24h > 0 ? (
                      <ArrowBigUpDash className="w-4 h-4" fill="green" />
                    ) : (
                      <ArrowBigDownDash className="w-4 h-4" fill="red" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {coin.price_change_percentage_24h && (
                      <span
                        className={
                          coin.price_change_percentage_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {coin.price_change_percentage_24h.toFixed(2) + "%"}
                      </span>
                    )}
                    {coin.price_change_percentage_24h > 0 ? (
                      <ArrowBigUpDash className="w-4 h-4" fill="green" />
                    ) : (
                      <ArrowBigDownDash className="w-4 h-4" fill="red" />
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <span>{coin.market_cap}$</span>
                  <div className="flex items-center gap-2">
                    {coin.market_cap_change_24h && (
                      <span
                        className={
                          coin.market_cap_change_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {coin.market_cap_change_24h.toFixed(2)}
                      </span>
                    )}
                    {coin.market_cap_change_24h > 0 ? (
                      <ArrowBigUpDash className="w-4 h-4" fill="green" />
                    ) : (
                      <ArrowBigDownDash className="w-4 h-4" fill="red" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {coin.market_cap_change_percentage_24h && (
                      <span
                        className={
                          coin.market_cap_change_percentage_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {coin.market_cap_change_percentage_24h.toFixed(2)}%
                      </span>
                    )}
                    {coin.market_cap_change_percentage_24h > 0 ? (
                      <ArrowBigUpDash className="w-4 h-4" fill="green" />
                    ) : (
                      <ArrowBigDownDash className="w-4 h-4" fill="red" />
                    )}
                  </div>
                </TableCell>
                <TableCell>{coin.total_volume}$</TableCell>
                <TableCell>{coin.high_24h}$</TableCell>
                <TableCell>{coin.low_24h}$</TableCell>
                <TableCell>
                  {" "}
                  <span>{coin.atl}$</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        coin.atl_change_percentage > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {coin.atl_change_percentage.toFixed(2)}%
                    </span>
                    {coin.atl_change_percentage > 0 ? (
                      <ArrowBigUpDash className="w-4 h-4" fill="green" />
                    ) : (
                      <ArrowBigDownDash className="w-4 h-4" fill="red" />
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col justify-center">
                    <span>Date : {coin.last_updated.slice(0, 10)}</span>
                    <span>Time : {coin.last_updated.slice(11, 19)}</span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
