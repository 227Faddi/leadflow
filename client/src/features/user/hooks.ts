import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signupPost, loginPost, logoutPost, userGet, refreshGet } from "./api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import userKeys from "./queryKeys";
import { useNavigate } from "react-router-dom";
import { updateAxiosHeader } from "../../utils/axios/axios";
import { User } from "../../types";

export const useToken = () => {
  const queryClient = useQueryClient();
  const token = queryClient.getQueryData(userKeys.token);
  const setToken = (newToken: string | null) => {
    queryClient.setQueryData(userKeys.token, newToken);
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
  } = useQuery({
    queryFn: refreshGet,
    queryKey: userKeys.token,
  });
  // setToken(token);
  return { token, isLoading, isError };
};

export const useUser = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(userKeys.user);
  const setUser = (newUser: User) => {
    queryClient.setQueryData(userKeys.user, newUser);
  };

  return { user, setUser };
};

export const useGetUser = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryFn: userGet,
    queryKey: userKeys.user,
  });
  return { user, isError, isLoading };
};

export const useSignup = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutateAsync } = useMutation({
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

  return mutateAsync;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutateAsync } = useMutation({
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

  return mutateAsync;
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const { mutateAsync } = useMutation({
    mutationFn: logoutPost,
    onSuccess: () => {
      setToken(null);
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

  return mutateAsync;
};
