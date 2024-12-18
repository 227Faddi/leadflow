import { FaSearch } from "react-icons/fa";

type Props = {
  onFilterChange: (id: string, value: string) => void;
  filteredName: string;
  filteredStatus: string;
};

const FilterBar = ({ filteredName, filteredStatus, onFilterChange }: Props) => {
  return (
    <div className="flex justify-center">
      <form className="mt-10 max-w-3xl w-full flex items-center">
        <div className="relative w-full items-center">
          <div className="absolute inset-y-0 start-0 flex items-center px-4 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-900" />
          </div>
          <input
            value={filteredName}
            onChange={(e) => onFilterChange("name", e.target.value)}
            type="text"
            className="block w-full p-4 px-12 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-700 focus:border-blue-700 focus:outline-none"
            placeholder="Search Leads..."
          />
          <select
            value={filteredStatus}
            onChange={(e) => onFilterChange("status", e.target.value)}
            id="statusFilter"
            className="h-full cursor-pointer border text-center bg-gray-900 text-white appearance-none border-gray-300 rounded-r-lg px-2 py-1 text-sm absolute inset-y-0 end-0 border-l-0 outline-none"
          >
            <option value="">All</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="negotiating">Negotiating</option>
            <option value="converted">Converted</option>
            <option value="disqualified">Disqualified</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
