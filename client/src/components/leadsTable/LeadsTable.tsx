import {
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { Lead } from "../../types";
import Pagination from "./Pagination";
import Columns from "./Columns";
import FilterBar from "./FilterBar";

type Props = {
  leads: Lead[] | undefined;
};

const LeadsTable = ({ leads }: Props) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: leads ?? [],
    columns: Columns(),
    debugTable: true,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const filteredName = columnFilters.find((f) => f.id === "name")?.value || "";

  const filteredStatus =
    columnFilters.find((f) => f.id === "status")?.value || "";

  const onFilterChange = (id: string, value: string) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <>
      <FilterBar
        filteredName={filteredName}
        filteredStatus={filteredStatus}
        onFilterChange={onFilterChange}
      />
      <table className="min-w-full">
        <thead className="sticky top-0 z-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-gray-900 text-white border-b border-gray-200"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase"
                >
                  <button
                    className="bg-white text-black"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    Sort
                  </button>
                  <p>{header.column.getIsSorted()}</p>

                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 text-left"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination table={table} />
    </>
  );
};

export default LeadsTable;
