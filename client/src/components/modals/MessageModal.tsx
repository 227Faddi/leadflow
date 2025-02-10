import toast from "react-hot-toast";
import { LuMail } from "react-icons/lu";
import Swal from "sweetalert2";
import { axiosInstance } from "../../api/axios";

type Props = {
  id: string;
};

const MessageModal = ({ id }: Props) => {
  const handleReachOut = async () => {
    try {
      Swal.fire({
        title: "Generating Message...",
        text: "Please wait while we create your message.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        customClass: {
          popup:
            "outline outline-4 outline-slate-300 dark:bg-gray-900 dark:text-white dark:!outline-slate-700",
        },
      });

      const { data } = await axiosInstance.get(`api/leads/${id}/message`);
      const message = data.message;

      const popup = await Swal.fire({
        text: "Outreach Message Preview",
        inputValue: message,
        input: "textarea",
        inputAttributes: {
          "aria-label": "Type your message here",
        },
        showConfirmButton: true,
        confirmButtonText: "Copy",
        showCloseButton: true,
        customClass: {
          popup:
            "outline outline-4 outline-slate-300 dark:bg-gray-900 dark:text-white dark:!outline-slate-700",
          confirmButton:
            "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-500",
        },
      });

      if (popup.isConfirmed) {
        navigator.clipboard.writeText(popup.value);
        toast.success("Message copied succceffuly");
      }
    } catch (err) {
      console.error(`Something went wrong: ${err}`);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please try again later.",
        customClass: {
          popup:
            "outline outline-4 outline-slate-300 dark:bg-gray-900 dark:text-white dark:!outline-slate-700",
          confirmButton:
            "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-500",
        },
      });
    }
  };
  return (
    <button
      onClick={handleReachOut}
      className="text-gray-900 hover:text-gray-600 dark:text-white"
    >
      <LuMail size={23} />
    </button>
  );
};

export default MessageModal;
