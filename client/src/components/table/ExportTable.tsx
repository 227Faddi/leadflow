import { Row, Table } from "@tanstack/react-table";
import { download, generateCsv, mkConfig } from "export-to-csv";
import { LuDownload } from "react-icons/lu";
import { Lead } from "../../types";

type Props = {
  table: Table<Lead>;
};

const ExportTable = ({ table }: Props) => {
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
    filename: "leads-list",
    showTitle: true,
    title: "Leads",
  });

  const handleExportRows = (rows: Row<Lead>[]) => {
    const rowData = rows.map((row) => {
      const { name, email, industry, phone, location, status } = row.original;
      return { name, email, industry, phone, location, status };
    });
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };
  return (
    <button
      disabled={table.getPrePaginationRowModel().rows.length === 0}
      onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
      className="border-slate-200 border-2 flex items-center p-3 xl:p-4 bg-gray-50 rounded-lg shadow-lg dark:bg-gray-900 dark:border-slate-700 dark:text-white"
      aria-label="export table"
    >
      <div className="p-2 bg-gray-900 text-white rounded-full dark:bg-white dark:text-gray-900">
        <LuDownload className="w-4 h-4" />
      </div>
      <p className="text-lg mx-5 font-semibold">Export</p>
    </button>
  );
};

export default ExportTable;
