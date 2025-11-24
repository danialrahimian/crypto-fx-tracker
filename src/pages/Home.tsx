import CoinBox from "../components/CoinBox";
import type { coinBoxPropType } from "../Types/coinBoxPropType";
import { useEffect, useState } from "react";
import { fetchCoins } from "../Redux/reducers/cryptoSlice";
import Pagination from "../components/Pagination";
import CoinBoxSkeleton from "../components/SkeletonBox";
import ErorBox from "../components/ErorBox";
import HomeHighlights from "../components/HomeHighlights";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export default function Home() {
  const { coins, status, error } = useAppSelector((state) => state.crypto);

  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  return (
    <>
      <div className="w-full pb-5">
        <TextGenerateEffect
          duration={1}
          words={"Cryptocurrency Prices by Market Cap"}
          className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto"
        />
      </div>
      <HomeHighlights coins={coins} />
      <div className="flex flex-col gap-4 items-center">
        <TextGenerateEffect
          duration={1}
          className="font-bold text-3xl "
          words={"coins "}
        />
        <div className="flex flex-wrap gap-4 justify-around">
          {status === "succeeded" &&
            coins
              .slice((pageNumber - 1) * 10, pageNumber * 10)
              .map((coin: coinBoxPropType) => {
                return <CoinBox key={coin.id} {...coin} />;
              })}
          {status === "loading" &&
            Array.from({ length: 10 }, (_, i) => i + 1).map((c) => {
              return <CoinBoxSkeleton key={c} />;
            })}
          {status === "failed" && (
            <ErorBox
              fetchAction={fetchCoins}
              title="coins"
              error_message={error}
            />
          )}
        </div>
      </div>
      {status === "succeeded" && (
        <div className="flex justify-center my-5 ">
          <Pagination
            itemsPerPage={10}
            setPageNumber={setPageNumber}
            totalItems={coins.length}
            pageNumber={pageNumber}
          />
        </div>
      )}
    </>
  );
}
