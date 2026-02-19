import { Pagination } from "./common.interfaces";

export interface ApiResponse<T> {
  info?: Pagination,
  results?: T[];
}