import CoinsTable from "../components/CoinsTable";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import {
  fetchCoins,
  sortByPrice,
  sortByMarketCap,
  sortByTotalVolume,
  sortByHigh24h,
  sortByLow24h,
  sortByATL,
} from "../Redux/reducers/cryptoSlice";
import ErorBox from "../components/ErorBox";
export default function Coins() {
  const {
    priceSortDirection,
    marketCapSortDirection,
    totalVolumeSortDirection,
    high24hSortDirection,
    low24hSortDirection,
    atlSortDirection,
    status,
    error,
    sortedCoins,
  } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div>
      {status !== "failed" && (
        <CoinsTable
          coins={sortedCoins}
          status={status}
          sortByPrice={sortByPrice}
          sortByMarketCap={sortByMarketCap}
          sortByTotalVolume={sortByTotalVolume}
          sortByHigh24h={sortByHigh24h}
          sortByLow24h={sortByLow24h}
          sortByATL={sortByATL}
          priceSortDirection={priceSortDirection}
          marketCapSortDirection={marketCapSortDirection}
          totalVolumeSortDirection={totalVolumeSortDirection}
          high24hSortDirection={high24hSortDirection}
          low24hSortDirection={low24hSortDirection}
          atlSortDirection={atlSortDirection}
        />
      )}
      {status === "failed" && (
        <div className="flex justify-center mt-5">
          <ErorBox
            error_message={error}
            title="Coins"
            fetchAction={fetchCoins}
          />
        </div>
      )}
    </div>
  );
}
