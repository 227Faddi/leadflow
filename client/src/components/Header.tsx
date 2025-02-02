import { IoIosContacts } from "react-icons/io";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { useLogin } from "../features/auth/hooks";
import useDarkMode from "../hooks/useDarkMode";
import { LinkButton } from "./ui/Button";
import ToolTip from "./ui/ToolTip";

const Header = () => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const guest = {
    email: import.meta.env.VITE_GUEST_EMAIL,
    password: import.meta.env.VITE_GUEST_PASSWORD,
  };

  const { login, isPending } = useLogin();
  const handleGuestLogin = async () => {
    await login(guest);
  };

  return (
    <header className="flex flex-col sm:flex-row gap-8 justify-around items-center py-10">
      <a
        href="/"
        className="font-bold text-3xl flex items-center justify-center dark:text-white"
      >
        <IoIosContacts className="text-green-700" size={35} />
        LeadFlow
      </a>
      <div className="flex items-center justify-center gap-8">
        {location.pathname === "/signup" || location.pathname === "/login" ? (
          <button
            onClick={handleGuestLogin}
            disabled={isPending}
            className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {isPending ? "Logging in..." : "Try as Guest"}
          </button>
        ) : (
          <div className="space-x-3">
            <LinkButton text="Login" color="green" to="/login" />
            <LinkButton text="Signup" color="blue" to="/signup" />
          </div>
        )}
        <ToolTip text={isDarkMode ? "Ligth Mode" : "Dark Mode"}>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <LuSun className="text-white w-6 h-6" />
            ) : (
              <LuMoonStar className="w-6 h-6" />
            )}
          </button>
        </ToolTip>
      </div>
    </header>
  );
};

export default Header;
