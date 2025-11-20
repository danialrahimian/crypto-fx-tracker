import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import type { coinBoxPropType } from "../Types/coinBoxPropType";
import { Button } from "./ui/button";
import { ArrowUp, ArrowDown, Heart } from "lucide-react";
import { useNavigate } from "react-router";

import { useState } from "react";
import { toast } from "sonner";
export default function CoinBox({
  id,
  symbol,
  name,
  current_price,
  market_cap,
  market_cap_rank,
  price_change_percentage_24h,
  image,
}: coinBoxPropType) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <Card className=" w-full sm:w-72  h-72 hover:scale-105 transition-all ">
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
            <img src={image} alt="coin" className="w-5" />
            {name}
          </CardTitle>
          <CardDescription>{symbol}</CardDescription>
        </div>
        <Heart
          className={
            isLiked
              ? "w-5 h-5 cursor-pointer fill-red-500"
              : "w-5 h-5 cursor-pointer"
          }
          onClick={() => {
            if (isLiked) {
              toast.error(`${name} removed from favorites`);
            } else {
              toast.success(`${name} added to favorites`);
            }
            setIsLiked(!isLiked);
          }}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <p className="hover:bg-gray-300/30 transition-all rounded-sm p-1">
          price : {current_price} $
        </p>
        <p className="hover:bg-gray-300/30 transition-all bg-gray-300/10 rounded-sm p-1">
          market cap : {market_cap} $
        </p>
        <p className="hover:bg-gray-300/30 transition-all rounded-sm p-1">
          market cap rank : {market_cap_rank}
        </p>
        <p
          className={`hover:bg-${
            price_change_percentage_24h > 0 ? "green-500/30" : "destructive/30"
          } transition-all rounded-sm p-1 flex items-center gap-2`}
        >
          24h :
          <span
            className={`text-${
              price_change_percentage_24h > 0 ? "green-500" : "destructive"
            } flex`}
          >
            {price_change_percentage_24h}%
            {price_change_percentage_24h > 0 ? <ArrowUp /> : <ArrowDown />}
          </span>
        </p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <CardAction>
          <Button onClick={() => navigate(`/coin/${id}`)}>more details</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
