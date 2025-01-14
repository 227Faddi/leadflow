import { IoIosContacts } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useLogin } from "../features/auth/hooks";

const Header = () => {
  const guest = {
    email: import.meta.env.VITE_GUEST_EMAIL,
    password: import.meta.env.VITE_GUEST_PASSWORD,
  };

  const location = useLocation();

  const { login, isPending } = useLogin();

  const handleGuestLogin = async () => {
    await login(guest);
  };

  return (
    <header className="flex flex-col sm:flex-row gap-8 justify-around items-center py-10">
      <a
        href="/"
        className="font-bold text-3xl flex items-center justify-center"
      >
        <IoIosContacts className="text-green-700" size={35} />
        LeadFlow
      </a>

      {location.pathname === "/signup" || location.pathname === "/login" ? (
        <button
          onClick={handleGuestLogin}
          disabled={isPending}
          className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {isPending ? "Logging in..." : "Try as Guest"}
        </button>
      ) : (
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
