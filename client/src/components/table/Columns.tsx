import { createColumnHelper } from "@tanstack/react-table";
import { Lead } from "../../types";
import { firstLetterUpperCase } from "../../utils";
import { statuses } from "../../utils/zod/formValidation";
import Actions from "./Actions";
import UpdateRow from "./UpdateRow";

const columnHelper = createColumnHelper<Lead>();

const Columns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => "name",
      cell: (info) => (
        <>
          <div className="text-sm font-medium leading-5 text-gray-900 dark:text-white">
            {firstLetterUpperCase(info.getValue())}
          </div>
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-300">
            {info.row.original.email}
          </p>
        </>
      ),
    }),
    columnHelper.accessor("industry", {
      header: () => "industry",
      cell: (info) => firstLetterUpperCase(info.getValue()),
    }),
    columnHelper.accessor("phone", {
      header: () => "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("location", {
      header: () => "location",
      cell: (info) => firstLetterUpperCase(info.getValue()),
    }),
    columnHelper.accessor("status", {
      header: () => "status",
      cell: (info) => (
        <UpdateRow currentStatus={info.getValue()} id={info.row.original.id} />
      ),
      sortingFn: (rowA, rowB) => {
        const statusA = rowA.original.status;
        const statusB = rowB.original.status;
        const statusOrder = statuses;
        return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
      },
      meta: {
        filterVariant: "status",
      },
    }),
    columnHelper.display({
      id: "actions",
      header: () => "actions",
      cell: (props) => <Actions props={props} />,
    }),
  ];
};

export default Columns;
