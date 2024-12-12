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
        <button onClick={() => table.firstPage()}>
          <FaAnglesLeft />
        </button>
        <button aria-label="Prev Page" onClick={() => table.previousPage()}>
          <FaAngleLeft />
        </button>
        <button aria-label="Next Page" onClick={() => table.nextPage()}>
          <FaAngleRight />
        </button>
        <button aria-label="Last Page" onClick={() => table.lastPage()}>
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
