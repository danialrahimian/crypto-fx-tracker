import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import type { NFTById } from "../Types/nftsType";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

import SkeletonBox from "./SkeletonBox";

export default function NftSheet({
  children,
  nftById,
  statusById,
  errorById,
}: {
  readonly children: React.ReactNode;
  readonly nftById: Partial<NFTById>;
  readonly statusById: string;
  readonly errorById: string;
}) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="z-102 w-full overflow-y-auto">
        {statusById === "succeeded" && (
          <SheetHeader>
            <img src={nftById.banner_image} alt="" />
            <SheetTitle className="flex items-center gap-2">
              <img src={nftById.image?.small} alt="nft" />
              {nftById.name}
            </SheetTitle>
            <SheetDescription>{nftById.description}</SheetDescription>
            <div className="py-5">
              <div className="flex items-center gap-2">
                <p>platform : {nftById.asset_platform_id}</p>
                <span className="text-[10px] text-zinc-500">
                  {nftById.native_currency_symbol}
                </span>
              </div>
              {nftById.market_cap_rank ? (
                <p>market cap rank : {nftById.market_cap_rank} / 100</p>
              ) : null}
              <div className="flex justify-between items-center">
                {nftById.market_cap ? (
                  <p>market cap : {nftById.market_cap.usd} $</p>
                ) : null}
                {nftById.market_cap_24h_percentage_change?.usd ? (
                  <p className="flex items-center gap-1">
                    <span
                      className={
                        nftById.market_cap_24h_percentage_change?.usd > 0
                          ? "text-green-500"
                          : "text-destructive"
                      }
                    >
                      {nftById.market_cap_24h_percentage_change?.usd.toFixed(2)}{" "}
                      %
                    </span>
                    {nftById.market_cap_24h_percentage_change?.usd > 0 ? (
                      <ArrowBigUp fill="green" />
                    ) : (
                      <ArrowBigDown fill="red" />
                    )}
                  </p>
                ) : null}
              </div>
              <div>
                {nftById.one_day_sales ? (
                  <div className="flex justify-between items-center">
                    <p>one day sales : {nftById.one_day_sales}</p>
                    <p className="flex items-center gap-1">
                      <span
                        className={
                          nftById.one_day_sales_24h_percentage_change &&
                          nftById.one_day_sales_24h_percentage_change > 0
                            ? "text-green-500"
                            : "text-destructive"
                        }
                      >
                        {nftById.one_day_sales_24h_percentage_change} %
                      </span>
                      {nftById.one_day_sales_24h_percentage_change &&
                      nftById.one_day_sales_24h_percentage_change > 0 ? (
                        <ArrowBigUp fill="green" />
                      ) : (
                        <ArrowBigDown fill="red" />
                      )}
                    </p>
                  </div>
                ) : null}
              </div>
              <p>user favorites count : {nftById.user_favorites_count}</p>
              <p>total supply : {nftById.total_supply}</p>
            </div>
          </SheetHeader>
        )}
        {statusById === "failed" && (
          <SheetHeader>
            <SheetTitle className="text-destructive">Error !!!</SheetTitle>
            <SheetDescription>{errorById}</SheetDescription>
          </SheetHeader>
        )}
        {statusById === "loading" && (
          <>
            <SheetHeader>
              <SheetTitle>Loading...</SheetTitle>
            </SheetHeader>
            <SkeletonBox />
          </>
        )}
        <SheetFooter>
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
