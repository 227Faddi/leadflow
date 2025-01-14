import { ReactNode } from "react";
import Swal from "sweetalert2";

type Props = {
  children: string | ReactNode;
  title: string;
  text: string;
  confirmText: string;
  onClick: () => unknown;
  className?: string;
};

const ConfirmWithTextModal = ({
  children,
  title,
  text,
  confirmText,
  onClick,
  className,
}: Props) => {
  const showModal = async () => {
    const result = await Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      iconColor: "#b91c1c",
      input: "text",
      showCancelButton: true,
      inputPlaceholder: `Type "${confirmText}" here`,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      preConfirm: (inputValue) => {
        if (inputValue !== confirmText) {
          Swal.showValidationMessage(
            `You must type "${confirmText}" to confirm.`
          );
        }
      },
      customClass: {
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
    </button>
  );
};

export default ConfirmWithTextModal;
