import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { CoinTablePropType } from "../Types/coinTablePropTypes";
import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import { Link } from "react-router";
export default function CoinsTable({ coins }: { coins: CoinTablePropType[] }) {
  return (
    <Table>
      <TableCaption>A list of top 10 coins by market cap</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Coin</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>total_volume</TableHead>
          <TableHead>high_24h</TableHead>
          <TableHead>low_24h</TableHead>
          <TableHead>ATL</TableHead>
          <TableHead>last_updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map((coin) => {
          return (
            <TableRow className="h-22 items-center" key={coin.id}>
              <TableCell>
                <Link to={`/coins/${coin.id}`}>
                  <div className="flex items-center gap-2">
                    <img src={coin.image} className="w-8 h-8" alt={coin.name} />
                    <p>{coin.name}</p>
                    <span className="text-xs text-gray-500">{coin.symbol}</span>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <span>{coin.current_price}$</span>
                <div className=" flex items-center gap-2">
                  <span
                    className={
                      coin.price_change_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {coin.price_change_24h.toFixed(2) + "$"}
                  </span>
                  {coin.price_change_24h > 0 ? (
                    <ArrowBigUpDash className="w-4 h-4" fill="green" />
                  ) : (
                    <ArrowBigDownDash className="w-4 h-4" fill="red" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {coin.price_change_percentage_24h.toFixed(2) + "%"}
                  </span>
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
                  <span
                    className={
                      coin.market_cap_change_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {coin.market_cap_change_24h.toFixed(2)}
                  </span>
                  {coin.market_cap_change_24h > 0 ? (
                    <ArrowBigUpDash className="w-4 h-4" fill="green" />
                  ) : (
                    <ArrowBigDownDash className="w-4 h-4" fill="red" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={
                      coin.market_cap_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </span>
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
