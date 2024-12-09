import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { updateStatus } from "../../services/api";
import { Lead } from "../../types";

type Props = {
  status: Lead["status"];
  id: Lead["id"];
};

const UpdateStatus = ({ status, id }: Props) => {
  const [leadStatus, setLeadStatus] = useState(status);

  const { mutateAsync: updateMutation } = useMutation({
    mutationFn: updateStatus,
  });

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Lead["status"];
    try {
      await updateMutation(
        { id, newStatus },
        {
          onSuccess: () => alert("updated"),
          onError: () => alert("err try again"),
        }
      );
      setLeadStatus(newStatus);
    } catch (err) {
      console.log(err);
    }
  };

  const getStatusColor = () => {
    switch (leadStatus) {
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
    <select
      id="status"
      value={leadStatus}
      onChange={handleChange}
      className={`appearance-none focus:outline-none hover:cursor-pointer inline-flex px-4 py-2 text-xs font-semibold leading-5 text-center rounded-full ${getStatusColor()}`}
    >
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="negotiating">Negotiating</option>
      <option value="converted">Converted</option>
      <option value="disqualified">Disqualified</option>
    </select>
  );
};

export default UpdateStatus;
