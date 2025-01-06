import { IoIosContacts } from "react-icons/io";
import { useGetUser } from "../features/user/hooks";

type Props = {
  setSidebarOpen: (val: boolean) => void;
};

const Topbar = ({ setSidebarOpen }: Props) => {
  const { user } = useGetUser();
  return (
    <header className="flex items-center justify-between px-6 sm:px-14 py-8 bg-white border-b-4 border-green-700">
      <div className="flex items-center">
        <button
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="relative mx-4 lg:mx-0">
          <a
            href="/"
            className="font-bold text-2xl flex items-center justify-center lg:hidden"
          >
            <IoIosContacts className="text-green-700" size={35} />
            LeadFlow
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="hidden lg:block font-bold">{user?.username}</p>
        <picture className="w-12 h-12 overflow-hidden rounded-full shadow focus:outline-none">
          <img
            className="object-cover w-full h-full"
            src={user?.profileImg}
            alt="Your avatar"
          />
        </picture>
      </div>
    </header>
  );
};

export default Topbar;
