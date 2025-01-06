import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteUser, getUser } from "./api";
import userKeys from "./queryKeys";
import { User } from "../../types";
import { useToken } from "../auth/hooks";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(userKeys.user);
  const setUser = (newUser: User) => {
    queryClient.setQueryData(userKeys.user, newUser);
  };

  return { user, setUser };
};

export const useDeleteUser = () => {
  const { setToken } = useToken();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success("Profile deleted successfully.");
      setToken(null);
      navigate("/");
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });

  return mutateAsync;
};

export const useGetUser = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getUser,
    queryKey: userKeys.user,
  });
  return { user, isError, isLoading };
};
