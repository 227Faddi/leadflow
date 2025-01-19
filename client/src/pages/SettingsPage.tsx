import { Link, useLocation } from "react-router-dom";
import ChangePassForm from "../components/forms/ChangePassForm";
import EditProfileForm from "../components/forms/EditProfileForm";
import ConfirmWithTextModal from "../components/modals/ConfirmWithTextModal";
import { useDeleteAllLeads } from "../features/lead/hooks";
import { useDeleteUser } from "../features/user/hooks";

const SettingsPage = () => {
  const deleteUser = useDeleteUser();
  const deleteLeads = useDeleteAllLeads();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const isEditProfile = params.has("edit-profile");
  const isChangePassword = params.has("change-password");

  return (
    <div className="h-full container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900">Settings</h3>
      <div className="h-full flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-sm">
          {isChangePassword && <ChangePassForm />}
          {isEditProfile && <EditProfileForm />}
          {!isChangePassword && !isEditProfile && (
            <div className="flex flex-col bg-gray-50 p-12 border border-slate-200 rounded-md space-y-6">
              <Link
                to="/settings?edit-profile"
                className="max-w-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Edit Profile
              </Link>
              <Link
                to="/settings?change-password"
                className="max-w-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Change Password
              </Link>
              <ConfirmWithTextModal
                children="Delete Profile"
                title="Confirm Profile Deletion"
                text="Are you sure you want to permanently delete your profile? This action cannot be undone."
                onClick={deleteUser}
                confirmText="delete my profile"
                className="max-w-sm text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              />
              <ConfirmWithTextModal
                children="Delete All Leads"
                title="Confirm Deletion of All Leads"
                text="Are you sure you want to permanently delete all leads? This action cannot be undone."
                onClick={deleteLeads}
                confirmText="delete all leads"
                className="max-w-sm text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
