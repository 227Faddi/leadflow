import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IndustryChart, Lead, StatusChart } from "../../types";
import handleError from "../../utils/axios/handleError";
import {
  addLead,
  deleteAllLeads,
  deleteLead,
  editLead,
  fetchLead,
  fetchLeads,
  getIndustryCount,
  getStatusCount,
  updateStatus,
} from "./api";

export const leadKeys = {
  all: ["leads"] as const,
  single: (id: Lead["id"]) => ["lead", id] as const,
};

export const useGetLeads = () => {
  const { data, isLoading, isError } = useQuery<Lead[]>({
    queryFn: fetchLeads,
    queryKey: leadKeys.all,
  });
  return { data, isLoading, isError };
};

export const useGetIndustryCount = () => {
  const { data, isLoading, isError } = useQuery<IndustryChart[]>({
    queryFn: getIndustryCount,
    queryKey: ["industry"],
  });
  return { data, isLoading, isError };
};

export const useGetStatusCount = () => {
  const { data, isLoading, isError } = useQuery<StatusChart[]>({
    queryFn: getStatusCount,
    queryKey: ["status"],
  });
  return { data, isLoading, isError };
};

export const useGetLead = (id: Lead["id"]) => {
  const { data, isLoading, isError } = useQuery<Lead>({
    queryFn: () => fetchLead(id),
    queryKey: leadKeys.single(id),
  });
  return { data, isLoading, isError };
};

export const useAddLead = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: addLead,
    onSuccess: () => {
      toast.success("Lead added successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
      navigate("/dashboard");
    },
    onError: (err) => handleError(err),
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
    onError: (err) => handleError(err),
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
    onError: (err) => handleError(err),
  });

  return mutateAsync;
};

export const useEditLead = (id: Lead["id"]) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: editLead,
    onSuccess: () => {
      toast.success("Lead edited successfully.");
      queryClient.invalidateQueries({ queryKey: leadKeys.single(id) });
      queryClient.invalidateQueries({ queryKey: leadKeys.all });
      navigate("/dashboard");
    },
    onError: (err) => handleError(err),
  });

  return mutateAsync;
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: updateStatus,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: leadKeys.all }),
    onError: (err) => handleError(err),
  });

  return mutateAsync;
};
