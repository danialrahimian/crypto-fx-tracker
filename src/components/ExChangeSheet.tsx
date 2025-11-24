import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import type { ExchangeById } from "../Types/exchangesTypes";
import {
  AppWindow,
  Facebook,
  Send,
  BadgeCheck,
  CircleCheck,
  CircleX,
} from "lucide-react";
import SkeletonBox from "./SkeletonBox";
export default function ExChangeSheet({
  children,
  exchangeById,
  statusById,
  errorById,
}: {
  readonly children: React.ReactNode;
  readonly exchangeById: Partial<ExchangeById>;
  readonly statusById: string;
  readonly errorById: string;
}) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="z-102 w-full overflow-y-scroll">
        {statusById === "succeeded" && (
          <>
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src={exchangeById.image}
                  alt="exchange"
                />
                <span>{exchangeById.name}</span>
              </SheetTitle>
              <p className="text-sm">country : {exchangeById.country}</p>
              <SheetDescription>{exchangeById.description}</SheetDescription>
            </SheetHeader>
            <div className="px-5 flex gap-2.5 flex-wrap">
              {exchangeById.url && (
                <a
                  href={exchangeById.url}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <AppWindow size={16} />
                  <span>website</span>
                </a>
              )}
              {exchangeById.facebook_url && (
                <a
                  href={exchangeById.facebook_url}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <Facebook size={16} />
                  <span>facebook</span>
                </a>
              )}
              {exchangeById.reddit_url && (
                <a
                  href={exchangeById.reddit_url}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <BadgeCheck size={16} />
                  <span>reddit</span>
                </a>
              )}
              {exchangeById.telegram_url && (
                <a
                  href={exchangeById.telegram_url}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <Send size={16} />
                  <span>telegram</span>
                </a>
              )}
            </div>
            <div className="px-5 flex gap-2.5">
              <p className="flex items-center gap-1">
                <span>centralized :</span>
                {exchangeById.centralized ? (
                  <CircleCheck size={16} fill="green" />
                ) : (
                  <CircleX size={16} fill="red" />
                )}
              </p>
              <p className="flex items-center gap-1">
                <span>trust score :</span>
                {exchangeById.trust_score ? (
                  <span
                    className={`${
                      exchangeById.trust_score > 6
                        ? "text-green-500 bg-green-500/20"
                        : "text-yellow-500 bg-yellow-500/20"
                    } rounded-sm p-1`}
                  >
                    {exchangeById.trust_score} / 10
                  </span>
                ) : (
                  <span className="text-destructive">not available </span>
                )}
              </p>
            </div>
            <div className="px-5">
              <p className="flex items-center gap-1  ">
                <span>trust score rank :</span>
                <span className="font-bold bg-gray-500/20 p-1.5 rounded-sm">
                  {exchangeById.trust_score_rank} / 100
                </span>
              </p>
              <p>
                <span>coins : </span>
                <span className="font-bold ">{exchangeById.coins}</span>
              </p>
              <p>
                <span>pairs : </span>
                <span className="font-bold ">{exchangeById.pairs}</span>
              </p>
              <p>
                <span>BTC trade volume : </span>
                <span className="font-bold ">
                  {exchangeById.trade_volume_24h_btc?.toFixed(2)} $
                </span>
              </p>
            </div>
          </>
        )}

        {statusById === "failed" && (
          <>
            <SheetHeader>
              <SheetTitle className="text-destructive">Error !!!</SheetTitle>
              <SheetDescription>{errorById}</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose>Close</SheetClose>
            </SheetFooter>
          </>
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
