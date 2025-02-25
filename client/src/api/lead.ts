import { axiosInstance } from "../api/axios";
import { IndustryChart, Lead, LeadForm, StatusChart } from "../types";

export const fetchLeads = async (): Promise<Lead[]> => {
  const { data } = await axiosInstance.get(`/api/leads`);
  return data;
};

export const fetchLead = async <T>(id: T): Promise<Lead> => {
  const { data } = await axiosInstance.get(`/api/leads/${id}`);
  return data;
};

export const getIndustryCount = async (): Promise<IndustryChart[]> => {
  const { data } = await axiosInstance.get(`/api/leads/industry-count`);
  return data;
};

export const getStatusCount = async (): Promise<StatusChart[]> => {
  const { data } = await axiosInstance.get(`/api/leads/status-count`);
  return data;
};

export const addLead = async (formData: LeadForm): Promise<void> => {
  await axiosInstance.post(`/api/leads`, formData);
};

export const deleteLead = async (id: Lead["id"]): Promise<void> => {
  await axiosInstance.delete(`/api/leads/${id}`);
};

export const deleteAllLeads = async (): Promise<void> => {
  await axiosInstance.delete(`/api/leads`);
};

export const updateStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: Lead["status"];
}): Promise<void> => {
  await axiosInstance.put(`/api/leads/${id}/status`, { status: newStatus });
};

export const editLead = async ({
  id,
  formData,
}: {
  id: Lead["id"];
  formData: LeadForm;
}): Promise<void> => {
  await axiosInstance.put(`/api/leads/${id}`, formData);
};

export const getMessage = async (id: Lead["id"]) => {
  const { data } = await axiosInstance.get(`/${id}/message`);
  return data;
};
