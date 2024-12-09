import { deleteLead } from "../../services/api";
import { useMutation } from "@tanstack/react-query";
import { Lead } from "../../types";

type Props = {
  id: Lead["id"];
  setIsDeleted: (value: boolean) => void;
};

const DeleteRow = ({ id, setIsDeleted }: Props) => {
  const { mutateAsync: deleteMutation } = useMutation({
    mutationFn: deleteLead,
  });

  const handleDelete = async () => {
    try {
      await deleteMutation(id, {
        onSuccess: () => alert("deleted"),
        onError: () => alert("err try again"),
      });
      setIsDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:text-red-900">
      Delete
    </button>
  );
};

export default DeleteRow;
