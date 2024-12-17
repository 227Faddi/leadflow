import {
  getCoreRowModel,
  useReactTable,
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
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaSort } from "react-icons/fa6";

type Props = {
  leads: Lead[] | undefined;
};

type ColumnFiltersState = {
  id: string;
  value: string;
}[];

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

  // Filter
  const filteredName: string =
    columnFilters.find((f) => f.id === "name")?.value || "";

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
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full text-left">
              <thead className="sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="bg-gray-900 text-white border-b border-gray-200"
                  >
                    {headerGroup.headers.map((header) =>
                      header.column.id === "actions" ||
                      header.column.id === "status" ? (
                        <th
                          key={header.id}
                          className="px-6 py-3 text-xs font-medium leading-4 tracking-wider uppercase text-center"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ) : (
                        <th
                          key={header.id}
                          className="px-6 py-3 text-xs font-medium leading-4 tracking-wider uppercase"
                        >
                          <div
                            className="flex items-center gap-2 text-white cursor-pointer"
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {header.column.getIsSorted() === "asc" ? (
                              <FaSortUp size={25} />
                            ) : header.column.getIsSorted() === "desc" ? (
                              <FaSortDown size={25} />
                            ) : (
                              <FaSort size={25} />
                            )}
                          </div>
                        </th>
                      )
                    )}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination table={table} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadsTable;
