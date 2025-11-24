import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { fetchNfts } from "../Redux/reducers/NftsSlice";
import NftBox from "../components/NftBox";
import NftsSheet from "../components/NftSheet";
import type { NFT } from "../Types/nftsType";
import ErorBox from "../components/ErorBox";
import { fetchNftById } from "../Redux/reducers/NftSlice";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Pagination from "../components/Pagination";

export default function NFTs() {
  const dispatch = useAppDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const { nfts, status, error } = useAppSelector((state) => state.nfts);
  const { nftById, statusById, errorById } = useAppSelector(
    (state) => state.nft
  );
  useEffect(() => {
    dispatch(fetchNfts());
  }, []);

  return (
    <div>
      <TextGenerateEffect
        duration={1}
        words={"NFTs"}
        className="font-bold text-2xl transition-all rounded-sm p-1 text-center w-72 mx-auto
        mb-5"
      />
      <div className="flex flex-wrap gap-4 justify-around">
        {status === "succeeded" &&
          nfts.slice((pageNumber - 1) * 20, pageNumber * 20).map((nft: NFT) => {
            return (
              <NftsSheet
                key={nft.id}
                nftById={nftById}
                statusById={statusById}
                errorById={errorById}
              >
                <NftBox nft={nft} fetchNftById={fetchNftById} />
              </NftsSheet>
            );
          })}
        {status === "failed" && (
          <ErorBox error_message={error} title="NFTs" fetchAction={fetchNfts} />
        )}
      </div>
      <div className="flex justify-center my-5 ">
        {status === "succeeded" && (
          <Pagination
            itemsPerPage={20}
            setPageNumber={setPageNumber}
            totalItems={nfts.length}
            pageNumber={pageNumber}
          />
        )}
      </div>
    </div>
  );
}
