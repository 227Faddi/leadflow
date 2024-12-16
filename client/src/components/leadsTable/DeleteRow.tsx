import { deleteLead } from "../../services/api";
import { useMutation } from "@tanstack/react-query";
import { Lead } from "../../types";
import toast from "react-hot-toast";
import { TiDelete } from "react-icons/ti";

type Props = {
  id: Lead["id"];
};

const DeleteRow = ({ id }: Props) => {
  const { mutateAsync: deleteMutation } = useMutation({
    mutationFn: deleteLead,
  });

  const handleDelete = async () => {
    await deleteMutation(id, {
      onSuccess: () => {
        toast.success("Lead deleted successfully.");
      },
      onError: () => toast.error("An error occurred. Please try again."),
    });
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:text-red-900">
      <TiDelete size={27} />
    </button>
  );
};

export default DeleteRow;
