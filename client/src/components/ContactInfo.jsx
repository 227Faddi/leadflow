import { Link } from "react-router-dom";

const ContactInfo = ({ lead }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900">
              {lead.name}
            </div>
            <a
              href={`mailto:${lead.email}`}
              className="text-sm leading-5 text-gray-500"
            >
              {lead.email}
            </a>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        {lead.industry}
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        {lead.phone}
      </td>
      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        {lead.location}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          {lead.status}
        </span>
      </td>
      <td className="px-6 py-4 text-center text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
        <Link to="/edit" className="text-gray-600 hover:text-gray-900">
          Edit
        </Link>
      </td>
      <td className="px-6 py-4 text-center text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
        <a href="#" className="text-red-600 hover:text-red-900">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default ContactInfo;
