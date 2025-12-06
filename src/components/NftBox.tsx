import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { useAppDispatch } from "../hooks/hooks";
import type { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit";
import type { NFT } from "../Types/nftsType";
const NftBox = ({
  nft,
  fetchNftById,
}: {
  nft: NFT;
  fetchNftById: AsyncThunk<void, string, AsyncThunkConfig>;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Card
      className="cursor-pointer w-80 xl:w-64 lg:w-72 hover:scale-105 transition-all "
      onClick={() => dispatch(fetchNftById(nft.id))}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>{nft.symbol}</span>
          <p>
            {" "}
            {nft.name.length > 10 ? nft.name.slice(0, 10) + " ..." : nft.name}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>platform : {nft.asset_platform_id}</p>
      </CardContent>
    </Card>
  );
};

export default NftBox;
