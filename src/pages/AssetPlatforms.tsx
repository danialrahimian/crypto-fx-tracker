import AssetPlatformsTable from "../components/AssetPlatformsTable";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchAssetPlatforms } from "../Redux/reducers/assetPlatformsSlice";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
export default function AssetPlatforms() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAssetPlatforms());
  }, [dispatch]);
  const { assetPlatforms, assetPlatformsStatus, error } = useAppSelector(
    (state) => state.assetPlatforms
  );
  return (
    <div className="flex flex-col items-center justify-center">
      <TextGenerateEffect
        duration={1}
        words={"Asset Platforms"}
        className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto"
      />
      <AssetPlatformsTable
        assetPlatforms={assetPlatforms}
        assetPlatformsStatus={assetPlatformsStatus}
        fetchAction={fetchAssetPlatforms}
        error={error}
      />
    </div>
  );
}
