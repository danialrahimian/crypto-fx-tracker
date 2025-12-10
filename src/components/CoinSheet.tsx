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
import type { CoinById } from "../Types/cryptoTypes";
import SkeletonBox from "./SkeletonBox";
import { AppWindow, BadgeCheck, Facebook, Github} from "lucide-react";
export default function CoinSheet({
  children,
  coin,
  status,
  error,
}: {
  readonly children: React.ReactNode;
  readonly coin: Partial<CoinById>;
  readonly status: string;
  readonly error: string;
}) {
  return (
    <Sheet>
      <SheetTrigger className=" w-full sm:w-72 h-72 hover:scale-105 transition-all cursor-pointer">
        {children}
      </SheetTrigger>
      <SheetContent className="z-102 w-full overflow-y-scroll">
        {status === "succeeded" && (
          <>
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src={coin.image?.thumb}
                  alt="exchange"
                />
                <h3>{coin.name}</h3>
                <span className="text-sm text-gray-500/90">{coin.symbol}</span>
              </SheetTitle>
              <SheetDescription>{coin.description?.en}</SheetDescription>
            </SheetHeader>
            <div className="px-5 flex gap-2.5 flex-wrap">
              {coin.links?.homepage && (
                <a
                  href={coin.links?.homepage[0]}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <AppWindow size={16} />
                  <span>website</span>
                </a>
              )}
              {coin.links?.facebook_username && (
                <a
                  href={`https://www.facebook.com/${coin.links.facebook_username}`}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <Facebook size={16} />
                  <span>facebook</span>
                </a>
              )}
              {coin.links?.subreddit_url && (
                <a
                  href={coin.links.subreddit_url}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <BadgeCheck size={16} />
                  <span>reddit</span>
                </a>
              )}
              {coin.links?.repos_url && (
                <a
                  href={coin.links.repos_url.github[0]}
                  className="flex items-center gap-1 text-sm"
                  target="_blank"
                >
                  <Github size={16} />
                  <span>github</span>
                </a>
              )}
            </div>
            <div className="px-5 flex-col gap-2.5 flex-wrap">
              {coin.developer_data && (
                <>
                  <p> forks : {coin.developer_data.forks}</p>
                  <p> stars : {coin.developer_data.stars}</p>
                  <p> subscribers : {coin.developer_data.subscribers}</p>
                  <p> total_issues : {coin.developer_data.total_issues}</p>
                </>
              )}
            </div>
          </>
        )}

        {status === "failed" && (
          <>
            <SheetHeader>
              <SheetTitle className="text-destructive">Error !!!</SheetTitle>
              <SheetDescription>{error}</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose>Close</SheetClose>
            </SheetFooter>
          </>
        )}
        {status === "loading" && (
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
