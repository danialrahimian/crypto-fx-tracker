import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { fetchExchange } from "../Redux/reducers/exchangesSlice";
import ExchangeBox from "../components/ExchangeBox";
import ExChangeSheet from "../components/ExChangeSheet";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import type { Exchange } from "../Types/exchangesTypes";
import BoxSkeleton from "../components/SkeletonBox";
import ErorBox from "../components/ErorBox";
import Pagination from "../components/Pagination";
import { fetchExchangeById } from "../Redux/reducers/exchangeSlice";
export default function Exchanges() {
  const { exchanges, status, error } = useAppSelector(
    (state) => state.exchanges
  );
  const { exchangeById, statusById, errorById } = useAppSelector(
    (state) => state.exchange
  );
  const [pageNumber, setPageNumber] = useState(1);
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
          className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto
          mb-5"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-around">
        {status === "succeeded" &&
          exchanges
            .slice((pageNumber - 1) * 20, pageNumber * 20)
            .map((exchange: Exchange) => {
              return (
                <ExChangeSheet
                  statusById={statusById}
                  errorById={errorById}
                  exchangeById={exchangeById}
                  key={exchange.id}
                >
                  <ExchangeBox
                    fetchExchangeById={fetchExchangeById}
                    exchange={exchange}
                  />
                </ExChangeSheet>
              );
            })}
        {status === "loading" &&
          Array.from({ length: 20 }, (_, i) => i + 1).map((c) => {
            return <BoxSkeleton key={c} />;
          })}
        {status === "failed" && (
          <ErorBox
            fetchAction={fetchExchange}
            title="exchanges"
            error_message={error}
          />
        )}
      </div>
      <div className="flex justify-center my-5 ">
        <Pagination
          itemsPerPage={20}
          setPageNumber={setPageNumber}
          totalItems={exchanges.length}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}
