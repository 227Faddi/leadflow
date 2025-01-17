import { createColumnHelper } from "@tanstack/react-table";
import { LuMail, LuPenSquare, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Lead } from "../../types";
import ConfirmModal from "../modals/ConfirmModal";
import UpdateRow from "./UpdateRow";
const columnHelper = createColumnHelper<Lead>();

type Props = {
  deleteRow: (id: string) => unknown;
};

const Columns = ({ deleteRow }: Props) => {
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
      sortingFn: (rowA, rowB) => {
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
      },
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
          <Link
            to={`/edit/${props.row.original.id}`}
            className="text-gray-900 hover:text-gray-600"
          >
            <LuPenSquare size={23} />
          </Link>
          <ConfirmModal
            children={<LuTrash2 size={23} />}
            title="Delete Lead"
            text={`Are you sure you want to delete the lead "${props.row.original.name}"?`}
            confirmButtonText="Yes, delete it"
            onClick={() => deleteRow(props.row.original.id)}
            className="text-red-600 hover:text-red-900"
          />
        </div>
      ),
    }),
  ];
};

export default Columns;
