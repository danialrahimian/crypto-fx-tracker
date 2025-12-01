import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchTrendItems } from "../Redux/reducers/trendItemsSlice";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import TrendBox from "../components/TrendBox";
import type {
  TrendCoin,
  TrendNft,
  TrendCategory,
} from "../Types/trendItemsType";
export default function Trend() {
  const dispatch = useAppDispatch();
  const { trendItems } = useAppSelector((state) => state.trendItems);
  useEffect(() => {
    dispatch(fetchTrendItems());
  }, [dispatch]);
  return (
    <div>
      <div>
        <TextGenerateEffect
          duration={1}
          words={"Trend Coins"}
          className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto
        mb-5"
        />
        <div className="flex justify-center flex-wrap gap-5">
          {trendItems.coins.map((coin: TrendCoin) => (
            <TrendBox key={coin.item.id} trend={{ ...coin, kind: "coin" }} />
          ))}
        </div>
      </div>
      <div>
        <TextGenerateEffect
          duration={1}
          words={"Trend NFTs"}
          className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto
        mb-5"
        />
        <div className="flex justify-center flex-wrap gap-5">
          {trendItems.nfts.map((nft: TrendNft) => (
            <TrendBox key={nft.id} trend={{ ...nft, kind: "nft" }} />
          ))}
        </div>
      </div>
      <div>
        <TextGenerateEffect
          duration={1}
          words={"Trend Categories"}
          className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto
        mb-5"
        />
        <div className="flex justify-center flex-wrap gap-5">
          {trendItems.categories.map((category: TrendCategory) => (
            <TrendBox
              key={category.id}
              trend={{ ...category, kind: "category" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
