import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchLeads,
  fetchLead,
  addLead,
  editLead,
  deleteLead,
  updateStatus,
} from "./api";
import { Lead } from "../../types";
import toast from "react-hot-toast";
import leadKeys from "./queryKeys";

export const useGetLeads = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: fetchLeads,
    queryKey: leadKeys.all,
  });
  return { data, isLoading, isError };
};

export const useGetLead = (id: Lead["id"]) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchLead(id),
    queryKey: leadKeys.single(id),
  });
  return { data, isLoading, isError };
};

export const useAddLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addLead,
    onSuccess: () => {
      toast.success("Lead added successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });
};

export const useDeleteLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      toast.success("Lead deleted successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });
};

export const useEditLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editLead,
    onSuccess: () => {
      toast.success("Lead edited successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStatus,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: leadKeys.all }),
    onError: () => toast.error("An error occurred. Please try again."),
  });
};
