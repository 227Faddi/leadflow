import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signupPost, loginPost, logoutPost, refreshGet } from "./api";
import toast from "react-hot-toast";
import authKeys from "./queryKeys";
import { useNavigate } from "react-router-dom";
import { updateAxiosHeader } from "../../utils/axios/axios";
import { Token } from "../../types";
import handleError from "../../utils/axios/handleError";

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
  const {
    data: token,
    isLoading,
    isError,
  } = useQuery<Token>({
    queryFn: refreshGet,
    queryKey: authKeys.token,
  });
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
    onError: (err) => handleError(err),
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
    onError: (err) => handleError(err),
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
    onError: (err) => handleError(err),
  });

  return { logout, isPending };
};
