import ContactTable from "../components/ContactTable";
import DashboardInfo from "../components/DashboardInfo";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const DashboardPage = () => {
  const [sortStatus, setSortStatus] = useState(false);
  const [searchValue, setSerchValue] = useState("");

  console.log(searchValue);

  return (
    <div className="container px-6 py-8 mx-auto">
      <DashboardInfo sortStatus={sortStatus} setSortStatus={setSortStatus} />
      <SearchBar setSearchValue={setSerchValue} />
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <ContactTable sortStatus={sortStatus} searchValue={searchValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
