import { createColumnHelper } from "@tanstack/react-table";
import { Lead } from "../../types";

const columnHelper = createColumnHelper<Lead>();
import DeleteRow from "../LeadRow/DeleteRow";
import UpdateStatus from "../LeadRow/UpdateStatus";
import { TiEdit } from "react-icons/ti";

const Columns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => "Name",
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
      header: () => "Industry",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phone", {
      header: () => "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("location", {
      header: () => "Location",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: () => (
        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center uppercase">
          Status
        </th>
      ),
      cell: (info) => (
        <UpdateStatus status={info.getValue()} id={info.row.original.id} />
      ),
      meta: {
        filterVariant: "status",
      },
    }),
    columnHelper.display({
      id: "actions",
      header: () => (
        <div className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center uppercase">
          Actions
        </div>
      ),
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
