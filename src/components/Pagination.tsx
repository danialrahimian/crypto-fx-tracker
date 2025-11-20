import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import type { PaginationProp } from "../Types/paginationPropType";
export default function PaginationDemo({
  itemsPerPage,
  setPageNumber,
  totalItems,
  pageNumber,
}: PaginationProp) {
  const paginationItems: number[] = Array.from(
    { length: totalItems / itemsPerPage },
    (_, i) => i + 1
  );
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            onClick={() => {
              if (pageNumber === 1) {
                return;
              } else {
                setPageNumber(pageNumber - 1);
              }
            }}
          />
        </PaginationItem>
        {paginationItems
          .slice(pageNumber === 1 ? 0 : pageNumber - 2, pageNumber + 2)
          .map((item) => {
            return (
              <PaginationItem key={item} className="cursor-pointer">
                <PaginationLink
                  className={pageNumber === item ? "bg-foreground/20" : ""}
                  onClick={() => setPageNumber(item)}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        <PaginationItem className="cursor-pointer">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationNext
            onClick={() => {
              if (pageNumber === paginationItems.length) {
                return;
              } else {
                setPageNumber(pageNumber + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
