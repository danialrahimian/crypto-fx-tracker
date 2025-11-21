import CoinsTable from "../components/CoinsTable";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchCoins } from "../Redux/reducers/cryptoSlice";
export default function Coins() {
  const { coins } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return <CoinsTable coins={coins} />;
}
