import { createColumnHelper, SortingFn } from "@tanstack/react-table";
import { Lead } from "../../types";

const columnHelper = createColumnHelper<Lead>();
import DeleteRow from "./DeleteRow";
import UpdateRow from "./UpdateRow";
import { LuMail, LuPenSquare } from "react-icons/lu";

// Custom sorting for status
const sortStatusFn: SortingFn<Lead> = (rowA, rowB) => {
  const statusA = rowA.original.status;
  const statusB = rowB.original.status;
  const statusOrder = [
    "new",
    "contacted",
    "negotiating",
    "converted",
    "disqualified",
  ];
  return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
};

const Columns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => "name",
      cell: (info) => (
        <>
          <div className="text-sm font-medium leading-5 text-gray-900">
            {info.getValue()}
          </div>
          <p className="text-sm leading-5 text-gray-500">
            {info.row.original.email}
          </p>
        </>
      ),
    }),
    columnHelper.accessor("industry", {
      header: () => "industry",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phone", {
      header: () => "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("location", {
      header: () => "location",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: () => "status",
      cell: (info) => (
        <UpdateRow status={info.getValue()} id={info.row.original.id} />
      ),
      sortingFn: sortStatusFn,
      meta: {
        filterVariant: "status",
      },
    }),
    columnHelper.display({
      id: "actions",
      header: () => "actions",
      cell: (props) => (
        <div className="flex justify-center gap-10">
          <a
            href={`mailto:${props.row.original.email}`}
            className="text-gray-900 hover:text-gray-600"
          >
            <LuMail size={23} />
          </a>
          <a
            href={`/edit/${props.row.original.id}`}
            className="text-gray-900 hover:text-gray-600"
          >
            <LuPenSquare size={23} />
          </a>
          <DeleteRow id={props.row.original.id} />
        </div>
      ),
    }),
  ];
};

export default Columns;
