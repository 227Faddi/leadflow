import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import ChangePassForm from "../components/forms/ChangePassForm";
import EditProfileForm from "../components/forms/EditProfileForm";
import ConfirmWithTextModal from "../components/modals/ConfirmWithTextModal";
import { useDeleteAllLeads } from "../states/lead";
import { useDeleteUser, useUser } from "../states/user";

const SettingsPage = () => {
  const deleteUser = useDeleteUser();
  const deleteLeads = useDeleteAllLeads();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const isEditProfile = params.has("edit-profile");
  const isChangePassword = params.has("change-password");

  const { user } = useUser();

  let isGuest = false;
  if (user?.username === "Guest") {
    isGuest = true;
  }

  return (
    <div className="h-full container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
        Settings
      </h3>
      <div className="h-full flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-sm">
          {isChangePassword && <ChangePassForm />}
          {isEditProfile && <EditProfileForm />}
          {!isChangePassword && !isEditProfile && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col bg-gray-50 p-12 border-2 border-slate-200 rounded-md space-y-6 shadow-lg dark:text-white dark:bg-gray-900 dark:border-slate-700"
            >
              <Link
                to="/settings?edit-profile"
                className={`max-w-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${
                  isGuest && "pointer-events-none line-through"
                }`}
              >
                Edit Profile
              </Link>
              <Link
                to="/settings?change-password"
                className={`max-w-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${
                  isGuest && "pointer-events-none line-through"
                }`}
              >
                Change Password
              </Link>
              <ConfirmWithTextModal
                children="Delete All Leads"
                title="Confirm Deletion of All Leads"
                text="Are you sure you want to permanently delete all leads? This action cannot be undone."
                onClick={deleteLeads}
                confirmText="delete all leads"
                className={`max-w-sm text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${
                  isGuest && "pointer-events-none line-through"
                }`}
              />
              <ConfirmWithTextModal
                children="Delete Profile"
                title="Confirm Profile Deletion"
                text="Are you sure you want to permanently delete your profile? This action cannot be undone."
                onClick={deleteUser}
                confirmText="delete my profile"
                className={`max-w-sm text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  isGuest && "pointer-events-none line-through"
                }`}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
