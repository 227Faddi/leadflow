const SearchBar = () => {
  return (
    <form className="mt-10 max-w-3xl mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 px-12 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-700 focus:border-blue-700 focus:outline-none"
          placeholder="Search Leads..."
        />
        <button
          type="submit"
          className="absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium text-sm px-4 py-2 p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 text-white rounded-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
