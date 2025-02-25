import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Lead } from "../../types";
import Columns from "./Columns";
import ExportTable from "./ExportTable";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

type Props = {
  leads: Lead[] | undefined;
};

type ColumnFiltersState = {
  id: string;
  value: string;
}[];

const Table = ({ leads }: Props) => {
  const { getItem, setItem } = useLocalStorage("tableFilter");
  const savedFilter = getItem();

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    savedFilter || []
  );

  // Filter
  const filteredName: string =
    columnFilters.find((item) => item.id === "name")?.value || "";

  const filteredStatus =
    columnFilters.find((item) => item.id === "status")?.value || "";

  const onFilterChange = (id: string, value: string) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  useEffect(() => {
    const status = columnFilters.filter((item) => item.id === "status");
    setItem(status);
  }, [columnFilters, setItem]);

  const columns = useMemo(() => Columns(), []);
  const data = leads || [];

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-between mt-10">
        <FilterBar
          filteredName={filteredName}
          filteredStatus={filteredStatus}
          onFilterChange={onFilterChange}
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            to="/add"
            aria-label="Add New Lead"
            className="border-slate-200 border-2 flex items-center p-3 xl:p-4 bg-gray-50 rounded-lg shadow-lg dark:border-slate-700 dark:bg-gray-900 dark:text-white"
          >
            <div className="p-2 bg-gray-900 text-white rounded-full dark:bg-white dark:text-gray-900">
              <FaUserPlus className="w-4 h-4" />
            </div>
            <p className="text-lg mx-5 font-semibold">Add New</p>
          </Link>
          <ExportTable table={table} />
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border border-gray-200 shadow rounded-lg dark:border-gray-600">
            <table className="min-w-full text-left">
              <thead className="sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="bg-gray-900 text-white border-b border-gray-200 dark:border-gray-600"
                  >
                    {headerGroup.headers.map((header) =>
                      header.column.id === "actions" ||
                      header.column.id === "status" ||
                      header.column.id === "select" ? (
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
                              <HiArrowNarrowUp size={25} />
                            ) : header.column.getIsSorted() === "desc" ? (
                              <HiArrowNarrowDown size={25} />
                            ) : (
                              <PiArrowsDownUpBold size={25} />
                            )}
                          </div>
                        </th>
                      )
                    )}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                {table.getRowModel().rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={table.getAllColumns().length}
                      className="text-center px-6 py-24 text-lg leading-5 text-gray-500 dark:text-gray-300"
                    >
                      No Leads Available
                    </td>
                  </tr>
                ) : (
                  table.getRowModel().rows.map((row) => (
                    <motion.tr
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      key={row.id}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 dark:text-white dark:border-gray-800"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
            <Pagination table={table} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
