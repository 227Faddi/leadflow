import { FaChartPie, FaUserPlus } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { IoIosContacts, IoMdSettings } from "react-icons/io";
import { LuBotMessageSquare, LuMoonStar, LuSun } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { useLogout } from "../states/auth";
import ConfirmModal from "./modals/ConfirmModal";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (val: boolean) => void;
};

const navItems = [
  { to: "/dashboard", icon: FaChartPie, label: "Dashboard" },
  { to: "/add", icon: FaUserPlus, label: "New Lead" },
  { to: "/analytics", icon: FaChartColumn, label: "Analytics" },
  { to: "/lead-agent", icon: LuBotMessageSquare, label: "Lead Agent" },
  { to: "/settings", icon: IoMdSettings, label: "Settings" },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { logout } = useLogout();
  const handleClick = () => setSidebarOpen(false);

  const itemClasses =
    "flex items-center p-6 font-bold hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 space-x-3";

  return (
    <>
      <div
        onClick={handleClick}
        className={
          sidebarOpen
            ? "block fixed inset-0 z-20 transition-opacity opacity-50 lg:hidden"
            : "hidden fixed inset-0 z-20 transition-opacity opacity-50 lg:hidden"
        }
      />
      <div
        className={
          sidebarOpen
            ? "translate-x-0 ease-out fixed inset-y-0 left-0 z-30 w-64 transition duration-300 transform border-b border-slate-700 bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 flex flex-col"
            : "-translate-x-full ease-in fixed inset-y-0 left-0 z-30 w-64 transition duration-300 transform border-b border-slate-700 bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 flex flex-col"
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
        <nav className="space-y-2 border-r-2 border-slate-700 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={handleClick}
              className={({ isActive }) =>
                [
                  itemClasses,
                  isActive
                    ? "bg-gray-700 bg-opacity-25 text-gray-100"
                    : "text-gray-500",
                ].join(" ")
              }
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </NavLink>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`${itemClasses} w-full text-gray-500`}
          >
            {isDarkMode ? (
              <>
                <LuSun className="w-6 h-6" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <LuMoonStar className="w-6 h-6" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
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
            className={`${itemClasses} w-full text-gray-500`}
          />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
