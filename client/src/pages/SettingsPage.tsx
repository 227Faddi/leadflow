import { Link } from "react-router-dom";

const SettingsPage = () => {
  const handleDeleteProfile = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your profile? This action cannot be undone."
    );
    if (confirmed) {
      console.log('deleted"');
    }
  };
  const handleDeleteAll = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all your leads? This action cannot be undone and all data will be permanently lost."
    );
    if (confirmed) {
      console.log('deleted"');
    }
  };
  return (
    <div className="h-full container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900">Settings</h3>
      <div className="h-full flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col">
            <Link
              to="/edit/profile"
              className="mt-4 max-w-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Edit Profile
            </Link>
            <Link
              to="/edit/profile"
              className="mt-4 max-w-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Change Password
            </Link>
            <button
              onClick={handleDeleteAll}
              className="mt-4 max-w-sm text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Delete All Leads
            </button>
            <button
              onClick={handleDeleteProfile}
              className="mt-4 max-w-sm text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
