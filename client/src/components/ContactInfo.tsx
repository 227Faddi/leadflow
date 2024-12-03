import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import axios from "axios";

type Lead = {
  id: string;
  name: string;
  email: string;
  industry: string;
  phone: string;
  location: string;
  status: "new" | "contacted" | "negotiating" | "converted" | "disqualified";
};

type Props = {
  lead: Lead;
};

const ContactInfo = ({ lead }: Props) => {
  const { id, name, email, industry, phone, location, status } = lead;
  const [formStatus, setFormStatus] = useState(status);

  const [isDeleted, setIsDeleted] = useState(false);

  const { mutateAsync: deleteLead } = useMutation({
    mutationFn: () => {
      return axios.delete(`http://localhost:3000/api/leads/delete/${id}`);
    },
  });
  const handleDelete = async () => {
    try {
      await deleteLead();
      setIsDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  const { mutateAsync: updateStatus } = useMutation({
    mutationFn: (data: { status: Lead["status"] }) => {
      return axios.put(`http://localhost:3000/api/leads/status/${id}`, data);
    },
  });

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Lead["status"];
    try {
      console.log(newStatus);
      await updateStatus({ status: newStatus });
      setFormStatus(newStatus);
    } catch (err) {
      console.log(err);
    }
  };

  const getStatusColor = () => {
    switch (formStatus) {
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
    <tr className={isDeleted ? "hidden" : ""}>
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
        <select
          id="status"
          value={formStatus}
          onChange={handleChange}
          className={`appearance-none focus:outline-none hover:cursor-pointer inline-flex px-4 py-2 text-xs font-semibold leading-5 text-center rounded-full ${getStatusColor()}`}
        >
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="negotiating">Negotiating</option>
          <option value="converted">Converted</option>
          <option value="disqualified">Disqualified</option>
        </select>
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

export default ContactInfo;
