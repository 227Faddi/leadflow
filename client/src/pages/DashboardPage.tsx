import ContactTable from "../components/ContactTable";
import DashboardInfo from "../components/DashboardInfo";

const DashboardPage = () => {
  return (
    <div className="container px-6 py-8 mx-auto">
      <DashboardInfo />
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <ContactTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
