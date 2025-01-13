import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Lead } from "../../types";
import { useUpdateStatus } from "../../features/lead/hooks";
import { LuChevronsUpDown } from "react-icons/lu";

type Props = {
  status: Lead["status"];
  id: Lead["id"];
};

const UpdateRow = ({ status, id }: Props) => {
  const updateStatus = useUpdateStatus();
  const queryClient = useQueryClient();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Lead["status"];
    await updateStatus(
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
    <div
      className={`w-full flex justify-center relative ${getStatusColor()} rounded-lg`}
    >
      <select
        id="status"
        value={status}
        onChange={handleChange}
        className="appearance-none focus:outline-none hover:cursor-pointer pl-6 pr-8 py-2 text-xs font-semibold leading-5 text-center bg-transparent [text-align-last:center]"
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="negotiating">Negotiating</option>
        <option value="converted">Converted</option>
        <option value="disqualified">Disqualified</option>
      </select>
      <LuChevronsUpDown className=" cursor-pointer text-gray-900 h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2" />
    </div>
  );
};

export default UpdateRow;
