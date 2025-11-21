import type { Exchange } from "../Types/exchangeTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CircleCheck, CircleX } from "lucide-react";
import { Link } from "react-router";
export default function exchangeBox({ exchange }: { exchange: Exchange }) {
  return (
    <Card className="w-72 hover:scale-105 transition-all cursor-pointer">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>{exchange.trust_score_rank}</span>
          <img className="w-6 h-6" src={exchange.image} alt="exchange" />
          <span>{exchange.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle>
          <span>BTC trade volume : </span>
          <span>{exchange.trade_volume_24h_btc.toFixed(2)}$</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-2 mt-2">
          <span>
            {exchange.has_trading_incentive
              ? "Trading Incentive"
              : "No Trading Incentive"}
          </span>
          {exchange.has_trading_incentive ? (
            <CircleCheck width={16} height={16} fill="green" />
          ) : (
            <CircleX width={16} height={16} fill="red" />
          )}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardTitle>
          <Link
            className="text-blue-500/70 hover:text-blue-500 transition-all"
            to={exchange.url}
            target="_blank"
          >
            website
          </Link>
        </CardTitle>
      </CardFooter>
    </Card>
  );
}
