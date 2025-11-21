import CoinsTable from "../components/CoinsTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCoins } from "../Redux/reducers/cryptoSlice";
export default function Coins() {
  const { coins } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return <CoinsTable coins={coins} />;
}
