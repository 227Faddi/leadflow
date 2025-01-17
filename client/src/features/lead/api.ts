import { Lead, LeadForm } from "../../types";
import { axiosInstance } from "../../utils/axios/axios";

export const fetchLeads = async (): Promise<Lead[]> => {
  const { data } = await axiosInstance.get(`/api/leads`);
  return data;
};

export const fetchLead = async <T>(id: T): Promise<Lead> => {
  const { data } = await axiosInstance.get(`/api/leads/${id}`);
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
  id: Lead["id"];
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
