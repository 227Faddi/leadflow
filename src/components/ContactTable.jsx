import ContactInfo from "./ContactInfo";

const ContactTable = () => {
  const contact = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Name
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Industry
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Phone
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Email
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Status
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Notes
          </th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
        </tr>
      </thead>
      <tbody className="bg-white">
        {contact.map((lead, index) => (
          <ContactInfo key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
