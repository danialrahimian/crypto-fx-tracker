export interface PaginationProp {
  readonly itemsPerPage: number;
  readonly setPageNumber: (page: number) => void;
  readonly totalItems: number;
  readonly pageNumber: number;
}
