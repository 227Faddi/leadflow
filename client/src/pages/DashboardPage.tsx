import ContactTable from "../components/ContactTable";
import DashboardInfo from "../components/DashboardInfo";
import { useState } from "react";

const DashboardPage = () => {
  const [sortStatus, setSortStatus] = useState(false);

  return (
    <div className="container px-6 py-8 mx-auto">
      <DashboardInfo sortStatus={sortStatus} setSortStatus={setSortStatus} />

      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <ContactTable sortStatus={sortStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
