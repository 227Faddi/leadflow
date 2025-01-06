import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userGet } from "./api";
import userKeys from "./queryKeys";
import { User } from "../../types";

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
