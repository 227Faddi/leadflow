import { Table } from "@tanstack/react-table";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import { Lead } from "../../types/index";

const Pagination = ({ table }: { table: Table<Lead> }) => {
  return (
    <div className="flex flex-col items-center bg-white py-4">
      <div className="space-x-8 mb-2">
        <button
          aria-label="First Page"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FaAnglesLeft />
        </button>
        <button
          aria-label="Prev Page"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FaAngleLeft />
        </button>
        <button
          aria-label="Next Page"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FaAngleRight />
        </button>
        <button
          aria-label="Last Page"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <FaAnglesRight />
        </button>
      </div>
      <div className="flex gap-6">
        <p>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 15, 20, 25].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
