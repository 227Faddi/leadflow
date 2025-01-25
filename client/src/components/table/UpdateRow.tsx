import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { LuChevronsUpDown } from "react-icons/lu";
import { useUpdateStatus } from "../../features/lead/hooks";
import { Lead } from "../../types";
import { firstLetterUpperCase } from "../../utils";
import { statuses } from "../../utils/zod/formValidation";

type Props = {
  currentStatus: Lead["status"];
  id: Lead["id"];
};

const UpdateRow = ({ currentStatus, id }: Props) => {
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
    switch (currentStatus) {
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
        value={currentStatus}
        onChange={handleChange}
        className="appearance-none focus:outline-none hover:cursor-pointer pl-6 pr-8 py-2 text-xs font-semibold leading-5 text-center bg-transparent [text-align-last:center]"
      >
        {Object.entries(statuses).map(([key, value]) => (
          <option value={value} key={key}>
            {firstLetterUpperCase(value)}
          </option>
        ))}
      </select>
      <LuChevronsUpDown className=" cursor-pointer text-gray-900 h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2" />
    </div>
  );
};

export default UpdateRow;
