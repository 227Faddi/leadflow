import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signupPost, loginPost, logoutPost, refreshGet } from "./api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import authKeys from "./queryKeys";
import { useNavigate } from "react-router-dom";
import { updateAxiosHeader } from "../../utils/axios/axios";
import { Token } from "../../types";

export const useToken = () => {
  const queryClient = useQueryClient();
  const token = queryClient.getQueryData(authKeys.token);
  const setToken = (newToken: Token) => {
    queryClient.setQueryData(authKeys.token, newToken);
    updateAxiosHeader(newToken);
  };
  return { token, setToken };
};

export const useGetRefreshToken = () => {
  // const { setToken } = useToken();
  const {
    data: token,
    isLoading,
    isError,
  } = useQuery<Token>({
    queryFn: refreshGet,
    queryKey: authKeys.token,
  });
  // setToken(token);
  return { token, isLoading, isError };
};

export const useSignup = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutateAsync: signup, isPending } = useMutation({
    mutationFn: signupPost,
    onSuccess: (response) => {
      setToken(response.data.accessToken);
      toast.success(response.data.message || "Welcome!");
      navigate("/dashboard");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(
          err.response?.data?.message || "An error occurred. Please try again."
        );
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  return { signup, isPending };
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: loginPost,
    onSuccess: (response) => {
      setToken(response.data.accessToken);
      toast.success("Welcome Back!");
      navigate("/dashboard");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(
          err.response?.data?.message || "An error occurred. Please try again."
        );
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  return { login, isPending };
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutateAsync: logout, isPending } = useMutation({
    mutationFn: logoutPost,
    onSuccess: () => {
      setToken(undefined);
      toast.success("Logout completed successfully");
      navigate("/");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(
          err.response?.data?.message || "An error occurred. Please try again."
        );
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  return { logout, isPending };
};
