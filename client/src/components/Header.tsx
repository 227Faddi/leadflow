import { IoIosContacts } from "react-icons/io";
import { useLogin } from "../features/auth/hooks";

const Header = () => {
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
      <button
        onClick={handleGuestLogin}
        disabled={isPending}
        className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {isPending ? "Logging in..." : "Try as Guest"}
      </button>
    </header>
  );
};

export default Header;
