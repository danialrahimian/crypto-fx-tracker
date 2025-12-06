import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import type { coinBoxPropType } from "../Types/coinBoxPropType";
import { ArrowUp, ArrowDown, Heart } from "lucide-react";
import { useAppDispatch } from "../hooks/hooks";
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
  fetchCoinById,
}: coinBoxPropType) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  return (
    <Card
      onClick={() => dispatch(fetchCoinById(id))}
      className=" w-full sm:w-72 h-72 hover:scale-105 transition-all cursor-pointer"
    >
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
      <CardContent className="flex flex-col gap-1 items-start">
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
    </Card>
  );
}
