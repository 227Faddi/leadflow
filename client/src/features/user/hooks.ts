import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import handleError from "../../utils/axios/handleError";
import { useToken } from "../auth/hooks";
import { changePassword, deleteUser, editProfile, getUser } from "./api";

export const userKeys = {
  user: ["user"] as const,
};

export const useUser = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(userKeys.user);
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
  } = useQuery<User>({
    queryFn: getUser,
    queryKey: userKeys.user,
  });
  return { user, isError, isLoading };
};

export const useDeleteUser = () => {
  const { setToken } = useToken();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success("Profile deleted successfully.");
      setToken(undefined);
      navigate("/");
    },
    onError: (err) => handleError(err),
  });

  return mutateAsync;
};

export const useChangePassword = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success("Password changed successfully.");
      navigate("/settings");
    },
    onError: (err) => handleError(err),
  });

  return mutateAsync;
};

export const useEditProfile = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: editProfile,
    onSuccess: (response) => {
      setUser(response);
      toast.success("Profile edited successfully.");
      navigate("/settings");
    },
    onError: (err) => handleError(err),
  });

  return mutateAsync;
};
