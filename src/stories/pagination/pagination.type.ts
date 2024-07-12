import { ComponentBase } from "../../types/component-base.type";

export type PaginationProps = ComponentBase & {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
