import { FaSearch } from "react-icons/fa";

type Props = {
  setSearchValue: (value: string) => void;
};

const SearchBar = ({ setSearchValue }: Props) => {
  return (
    <form className="mt-10 max-w-3xl mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center px-4 pointer-events-none">
          <FaSearch className="w-4 h-4 text-gray-900" />
        </div>
        <input
          onChange={(e) => setSearchValue(e.target.value.trim().toLowerCase())}
          type="search"
          id="default-search"
          className="block w-full p-4 px-12 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-700 focus:border-blue-700 focus:outline-none"
          placeholder="Search by name"
        />
      </div>
    </form>
  );
};

export default SearchBar;
