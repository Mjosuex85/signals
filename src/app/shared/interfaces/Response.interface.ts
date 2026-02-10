export interface ApiResponse<T> {
  info?: Pagination,
  results: T[];
}

export interface Pagination  {
  count?: number;
  pages?: number;
  next?: string | null;
  prev?: string | null;
  current?: number | undefined;
}

