import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  getRefreshToken,
  postLogin,
  postLogout,
  postSignup,
} from "../api/auth";
import { updateAxiosHeader } from "../api/axios";
import handleError from "../api/handleError";
import { Token } from "../types";

export const authKeys = {
  token: ["token"] as const,
};

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
    queryFn: getRefreshToken,
    queryKey: authKeys.token,
    retry: false,
  });
  return { token, isLoading, isError };
};

export const useSignup = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutateAsync: signup, isPending } = useMutation({
    mutationFn: postSignup,
    onSuccess: ({ accessToken, message }) => {
      setToken(accessToken);
      toast.success(message || "Welcome!");
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
    mutationFn: postLogin,
    onSuccess: ({ accessToken, message }) => {
      setToken(accessToken);
      toast.success(message || "Welcome Back!");
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
    mutationFn: postLogout,
    onSuccess: () => {
      setToken(undefined);
      navigate("/");
    },
    onError: (err) => handleError(err),
  });

  return { logout, isPending };
};
