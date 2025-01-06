import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchLeads,
  fetchLead,
  addLead,
  editLead,
  deleteLead,
  updateStatus,
  deleteAllLeads,
} from "./api";
import { Lead } from "../../types";
import toast from "react-hot-toast";
import leadKeys from "./queryKeys";
import { useNavigate } from "react-router-dom";

export const useGetLeads = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchLeads(),
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
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addLead,
    onSuccess: () => {
      toast.success("Lead added successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
      navigate("/dashboard");
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });

  return mutateAsync;
};

export const useDeleteLead = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      toast.success("Lead deleted successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });

  return mutateAsync;
};

export const useDeleteAllLeads = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: deleteAllLeads,
    onSuccess: () => {
      toast.success("Leads deleted successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });

  return mutateAsync;
};

export const useEditLead = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: editLead,
    onSuccess: () => {
      toast.success("Lead edited successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
      navigate("/dashboard");
    },
    onError: () => toast.error("An error occurred. Please try again."),
  });

  return mutateAsync;
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: updateStatus,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: leadKeys.all }),
    onError: () => toast.error("An error occurred. Please try again."),
  });

  return mutateAsync;
};
