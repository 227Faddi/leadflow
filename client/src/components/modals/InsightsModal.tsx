import Swal from "sweetalert2";
import { axiosInstance } from "../../api/axios";
import { AxiosError } from "axios";

const InsightsModal = () => {
  const handleInsight = async () => {
    try {
      Swal.fire({
        title: "Generating Insights...",
        text: "Please wait while we create your insights.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        customClass: {
          popup:
            "outline outline-4 outline-slate-300 dark:bg-gray-900 dark:text-white dark:!outline-slate-700",
        },
      });

      const { data } = await axiosInstance.get<{ message: string }>(
        `api/leads/insights`
      );
      const message = data.message;

      await Swal.fire({
        title: "Insights",
        text: message,
        showCloseButton: true,
        customClass: {
          popup:
            "outline outline-4 outline-slate-300 dark:bg-gray-900 dark:text-white dark:!outline-slate-700",
          confirmButton:
            "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-500",
        },
      });
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      console.error(`Something went wrong: ${axiosError}`);
      const errorMessage =
        axiosError.response?.data?.message || "Please try again later.";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
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
      onClick={handleInsight}
      className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Get AI-Powered Insights
    </button>
  );
};

export default InsightsModal;
