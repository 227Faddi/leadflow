import { IoIosContacts } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row gap-8 justify-around items-center py-10">
      <a
        href="/"
        className="font-bold text-2xl flex items-center justify-center"
      >
        <IoIosContacts className="text-green-700" size={35} />
        LeadFlow
      </a>
      <a
        href="/dashboard"
        className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm md:text-base px-5 py-2.5 text-center"
      >
        Try as Guest
      </a>
    </header>
  );
};

export default Header;
