import { Skeleton } from "./ui/skeleton";

export default function CoinBoxSkeleton() {
  return (
    <div className=" space-x-4 w-72 h-72 p-6">
      <div className=" gap-2 flex items-center my-5">
        <Skeleton className={`h-5 w-5 rounded-full`} />
        <Skeleton className={` h-2 w-32`} />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className={`h-5 w-full`} />
        <Skeleton className={`h-5 w-full`} />
        <Skeleton className={`h-5 w-full`} />
        <Skeleton className={`h-5 w-full`} />
        <Skeleton className={`h-5 w-full`} />
      </div>
      <Skeleton className={`h-7 w-24 mt-5`} />
    </div>
  );
}
