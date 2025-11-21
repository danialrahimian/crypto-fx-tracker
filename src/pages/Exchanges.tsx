import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchExchange } from "../Redux/reducers/exchangeSlice";
import ExchangeBox from "../components/exchangeBox";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import type { Exchange } from "../Types/exchangeTypes";
export default function Exchanges() {
  const { exchanges, status } = useAppSelector((state) => state.exchange);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExchange());
  }, []);
  return (
    <div>
      <div>
        <TextGenerateEffect
          duration={1}
          words={"Exchanges"}
          className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-around">
        {status === "succeeded" &&
          exchanges.map((exchange: Exchange) => {
            return <ExchangeBox key={exchange.id} exchange={exchange} />;
          })}
      </div>
    </div>
  );
}
