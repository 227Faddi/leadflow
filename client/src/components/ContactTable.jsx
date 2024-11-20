import ContactInfo from "./ContactInfo";

const ContactTable = () => {
  const contact = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <table className="min-w-full">
      <thead>
        <tr className="bg-gray-900 text-white border-b border-gray-200">
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Name
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Industry
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Phone
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Email
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Status
          </th>
          <th className="px-6 py-3" />
          <th className="px-6 py-3" />
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
