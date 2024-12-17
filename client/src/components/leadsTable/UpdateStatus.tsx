import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus } from "../../services/api";
import toast from "react-hot-toast";
import { Lead } from "../../types";

type Props = {
  status: Lead["status"];
  id: Lead["id"];
};

const UpdateStatus = ({ status, id }: Props) => {
  const queryClient = useQueryClient();

  const { mutateAsync: updateMutation } = useMutation({
    mutationFn: updateStatus,
  });

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Lead["status"];
    await updateMutation(
      { id, newStatus },
      {
        onSuccess: () => {
          if (newStatus === "converted") {
            toast("🎉 Congratulations! Lead successfully converted.");
          }
          queryClient.setQueryData(["leads"], (leads: Lead[]) => {
            return leads.map((lead) =>
              lead.id === id ? { ...lead, status: newStatus } : lead
            );
          });
        },
        onError: () => toast.error("An error occurred. Please try again."),
      }
    );
  };

  const getStatusColor = () => {
    switch (status) {
      case "contacted":
        return "text-yellow-800 bg-yellow-100";
      case "negotiating":
        return "text-orange-800 bg-orange-100";
      case "converted":
        return "text-green-800 bg-green-100";
      case "disqualified":
        return "text-red-800 bg-red-100";
      default:
        return "text-blue-800 bg-blue-100";
    }
  };

  return (
    <div className="w-full flex justify-center">
      <select
        id="status"
        value={status}
        onChange={handleChange}
        className={`appearance-none focus:outline-none hover:cursor-pointer inline-flex px-4 py-2 text-xs font-semibold leading-5 rounded-full text-center ${getStatusColor()}`}
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="negotiating">Negotiating</option>
        <option value="converted">Converted</option>
        <option value="disqualified">Disqualified</option>
      </select>
    </div>
  );
};

export default UpdateStatus;
