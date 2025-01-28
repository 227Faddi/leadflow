import { ReactNode } from "react";
import Swal from "sweetalert2";

type Props = {
  children?: string | ReactNode;
  title: string;
  text: string;
  confirmButtonText: string;
  onClick: () => unknown;
  className?: string;
  icon?: string;
};

const ConfirmModal = ({
  children,
  title,
  text,
  confirmButtonText,
  onClick,
  className,
}: Props) => {
  const showModal = async () => {
    const result = await Swal.fire({
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: "Cancel",
      customClass: {
        popup:
          "outline outline-4 outline-slate-300 dark:bg-gray-900 dark:text-white dark:!outline-slate-700",
        confirmButton:
          "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-500",
        cancelButton:
          "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-500",
      },
    });

    if (result.isConfirmed) {
      onClick();
    }
  };

  return (
    <button onClick={showModal} className={className}>
      {children}
      {/* <div aria-labelledby="swal2-title" aria-describedby="swal2-html-container" class="swal2-popup swal2-modal dark:bg-gray-900 dark:text-white dark:!border-2 dark:!border-red-500 shadow-none swal2-show" tabindex="-1" role="dialog" aria-live="assertive" aria-modal="true" style="display: grid;"><div> */}
    </button>
  );
};

export default ConfirmModal;
