import { FaSearch } from "react-icons/fa";
import { LuChevronsUpDown } from "react-icons/lu";

type Props = {
  onFilterChange: (id: string, value: string) => void;
  filteredName: string;
  filteredStatus: string;
};

const FilterBar = ({ filteredName, filteredStatus, onFilterChange }: Props) => {
  return (
    <form className="sm:max-w-md flex items-center w-full">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center px-4">
          <FaSearch className="w-4 h-4 text-gray-900" />
        </div>
        <input
          value={filteredName}
          onChange={(e) => onFilterChange("name", e.target.value)}
          type="text"
          className="block border-r-0 w-full h-12 pl-10 pr-2 sm:pl-12 sm:pr-28 text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none"
          placeholder="Search Leads..."
        />
      </div>
      <div className="relative">
        <select
          value={filteredStatus}
          onChange={(e) => onFilterChange("status", e.target.value)}
          id="statusFilter"
          className="h-12 cursor-pointer text-center bg-gray-900 text-white appearance-none border border-l-0 rounded-l-none border-gray-300 rounded-r-lg px-2 pr-6 text-sm focus:outline-none  [text-align-last:center]"
        >
          <option value="">All</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="negotiating">Negotiating</option>
          <option value="converted">Converted</option>
          <option value="disqualified">Disqualified</option>
        </select>
        <LuChevronsUpDown className="cursor-pointer h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2 text-white" />
      </div>
    </form>
  );
};

export default FilterBar;
