import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { deleteLead } from "../../services/api";
import { Lead } from "../../types";
import UpdateStatus from "./UpdateStatus";

type Props = {
  lead: Lead;
};

const LeadRow = ({ lead }: Props) => {
  const { id, name, email, industry, phone, location, status } = lead;
  const [isDeleted, setIsDeleted] = useState(false);

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

  if (isDeleted) return null;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900">
              {name}
            </div>
            <a
              href={`mailto:${email}`}
              className="text-sm leading-5 text-gray-500"
            >
              {email}
            </a>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        {industry}
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        {phone}
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        {location}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        <UpdateStatus status={status} id={id} />
      </td>
      <td className="px-6 py-4 text-center text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
        <a href={`/edit/${id}`} className="text-gray-600 hover:text-gray-900">
          Edit
        </a>
      </td>
      <td className="px-6 py-4 text-center text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default LeadRow;
