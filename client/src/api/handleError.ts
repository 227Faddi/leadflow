import toast from "react-hot-toast";
import { AxiosError } from "axios";

const handleError = <T>(err: T): void => {
  if (err instanceof AxiosError) {
    toast.error(
      err.response?.data?.message || "An error occurred. Please try again."
    );
  } else {
    toast.error("An error occurred. Please try again.");
  }
};

export default handleError;
