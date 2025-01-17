import { FaChartPie, FaUserPlus } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { IoIosContacts, IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useLogout } from "../features/auth/hooks";
import ConfirmModal from "./modals/ConfirmModal";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (val: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const { logout } = useLogout();
  return (
    <>
      <div
        onClick={() => setSidebarOpen(false)}
        className={
          sidebarOpen
            ? "block fixed inset-0 z-20 transition-opacity opacity-50 lg:hidden"
            : "hidden fixed inset-0 z-20 transition-opacity opacity-50 lg:hidden"
        }
      />
      <div
        className={
          sidebarOpen
            ? "translate-x-0 ease-out fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform rounded-br-xl bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
            : "-translate-x-full ease-in fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform rounded-br-xl bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
        }
      >
        <div className="flex items-center justify-center py-10">
          <div className="flex items-center">
            <a
              href="/"
              className="font-bold text-white text-2xl flex items-center justify-center"
            >
              <IoIosContacts className="text-green-700" size={35} />
              LeadFlow
            </a>
          </div>
        </div>
        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              [
                "flex items-center p-6 font-bold hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 space-x-3",
                isActive
                  ? "bg-gray-700 bg-opacity-25 text-gray-100"
                  : "text-gray-500",
              ].join(" ")
            }
          >
            <FaChartPie className="w-6 h-6" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/add"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              [
                "flex items-center p-6 font-bold hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 space-x-3",
                isActive
                  ? "bg-gray-700 bg-opacity-25 text-gray-100"
                  : "text-gray-500",
              ].join(" ")
            }
          >
            <FaUserPlus className="w-6 h-6" />
            <span>New Lead</span>
          </NavLink>
          <NavLink
            to="/analytics"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              [
                "flex items-center p-6 font-bold hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 space-x-3",
                isActive
                  ? "bg-gray-700 bg-opacity-25 text-gray-100"
                  : "text-gray-500",
              ].join(" ")
            }
          >
            <FaChartColumn className="w-6 h-6" />
            <span>Analytics</span>
          </NavLink>
          <NavLink
            to="/settings"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              [
                "flex items-center p-6 font-bold hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 space-x-3",
                isActive
                  ? "bg-gray-700 bg-opacity-25 text-gray-100"
                  : "text-gray-500",
              ].join(" ")
            }
          >
            <IoMdSettings className="w-6 h-6" />
            <span>Settings</span>
          </NavLink>
          <ConfirmModal
            children={
              <>
                <MdLogout className="w-6 h-6" />
                <span>Logout</span>
              </>
            }
            title="Logout"
            text="Do you really want to log out?"
            confirmButtonText="Yes, log out"
            onClick={logout}
            className="w-full flex items-center text-gray-500 p-6 font-bold hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 space-x-3"
          />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
