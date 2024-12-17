import { createColumnHelper, SortingFn } from "@tanstack/react-table";
import { Lead } from "../../types";

const columnHelper = createColumnHelper<Lead>();
import DeleteRow from "./DeleteRow";
import UpdateStatus from "./UpdateStatus";
import { TiEdit } from "react-icons/ti";

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
          <a
            href={`mailto:${info.getValue()}`}
            className="text-sm leading-5 text-gray-500"
          >
            {info.row.original.email}
          </a>
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
        <UpdateStatus status={info.getValue()} id={info.row.original.id} />
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
            href={`/edit/${props.row.original.id}`}
            className="text-gray-600 hover:text-gray-900"
          >
            <TiEdit size={27} />
          </a>
          <DeleteRow id={props.row.original.id} />
        </div>
      ),
    }),
  ];
};

export default Columns;
