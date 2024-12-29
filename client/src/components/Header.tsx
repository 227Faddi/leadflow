import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { IoIosContacts } from "react-icons/io";
import { loginPost } from "../services/api/auth";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();

  const guest = {
    email: import.meta.env.VITE_GUEST_EMAIL,
    password: import.meta.env.VITE_GUEST_PASSWORD,
  };

  const { mutateAsync: loginMutation, isPending } = useMutation({
    mutationFn: loginPost,
  });

  const handleGuestLogin = async () => {
    await loginMutation(guest, {
      onSuccess: () => {
        toast.success("Logged in as a Guest");
        navigate("/dashboard");
      },
      onError: () => toast.error("An error occurred. Please try again."),
    });
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
      <button
        onClick={handleGuestLogin}
        className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {isPending ? "Loading..." : "Try as Guest"}
      </button>
    </header>
  );
};

export default Header;
