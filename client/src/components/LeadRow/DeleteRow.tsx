import { deleteLead } from "../../services/api";
import { useMutation } from "@tanstack/react-query";
import { Lead } from "../../types";
import toast from "react-hot-toast";

type Props = {
  id: Lead["id"];
  setIsDeleted: (value: boolean) => void;
};

const DeleteRow = ({ id, setIsDeleted }: Props) => {
  const { mutateAsync: deleteMutation } = useMutation({
    mutationFn: deleteLead,
  });

  const handleDelete = async () => {
    await deleteMutation(id, {
      onSuccess: () => {
        toast.success("Lead deleted successfully.");
        setIsDeleted(true);
      },
      onError: () => toast.error("An error occurred. Please try again."),
    });
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:text-red-900">
      Delete
    </button>
  );
};

export default DeleteRow;
