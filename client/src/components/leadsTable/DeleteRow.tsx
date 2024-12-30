import { Lead } from "../../types";
import { useDeleteLead } from "../../features/lead/hooks";
import { TiDelete } from "react-icons/ti";

type Props = {
  id: Lead["id"];
};

const DeleteRow = ({ id }: Props) => {
  const { mutateAsync } = useDeleteLead();

  const handleDelete = async () => {
    await mutateAsync(id);
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:text-red-900">
      <TiDelete size={27} />
    </button>
  );
};

export default DeleteRow;
