import React from "react";
import { PaginationProps } from "./pagination.type";
import classNames from "classnames";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { GrPrevious, GrNext } from "react-icons/gr";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = "primary",
  className,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const classes = classNames("text-white", {
    [`pagination-${variant}`]: variant,
  });

  return (
    <div
      data-testid="pagination"
      className={`${className} flex justify-center my-4 text-neutral dark:text-white`}
    >
      {totalPages > 1 && (
        <button
          className={`${classes} px-4 py-2 mx-1 border cursor-pointer rounded-md`}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <GrPrevious />
        </button>
      )}
      {totalPages > 1 &&
        pages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 mx-1 border rounded-md ${
              page === currentPage ? `${classes}` : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      {totalPages > 1 && (
        <button
          className={`${classes} px-4 py-2 mx-1 cursor-pointer border rounded-md`}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <GrNext />
        </button>
      )}
    </div>
  );
};

export default Pagination;
