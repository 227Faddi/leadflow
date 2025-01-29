import { CellContext } from "@tanstack/react-table";
import { LuMail, LuPenSquare, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDeleteLead } from "../../features/lead/hooks";
import { Lead } from "../../types";
import ConfirmModal from "../modals/ConfirmModal";
import ToolTip from "../ui/ToolTip";

type Props = {
  props: CellContext<Lead, unknown>;
};

const Actions = ({ props }: Props) => {
  const deleteRow = useDeleteLead();

  return (
    <div className="flex justify-center gap-10">
      <ToolTip text="Send an Email">
        <a
          href={`mailto:${props.row.original.email}`}
          className="text-gray-900 hover:text-gray-600 dark:text-white"
        >
          <LuMail size={23} />
        </a>
      </ToolTip>
      <ToolTip text="Edit Lead">
        <Link
          to={`/edit/${props.row.original.id}`}
          className="text-gray-900 hover:text-gray-600 dark:text-white"
        >
          <LuPenSquare size={23} />
        </Link>
      </ToolTip>
      <ToolTip text="Delete Lead">
        <span>
          <ConfirmModal
            children={<LuTrash2 size={23} />}
            title="Delete Lead"
            text={`Are you sure you want to delete the lead "${props.row.original.name}"?`}
            confirmButtonText="Yes, delete it"
            onClick={() => deleteRow(props.row.original.id)}
            className="text-red-600 hover:text-red-900"
          />
        </span>
      </ToolTip>
    </div>
  );
};

export default Actions;
