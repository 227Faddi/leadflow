import { axiosInstance } from "../../utils/axios/axios";
import { Lead, LeadForm } from "../../types";

export const fetchLeads = async (): Promise<Lead[]> => {
  const { data } = await axiosInstance.get(`/api/leads`);
  return data;
};

export const fetchLead = async <T>(id: T): Promise<Lead> => {
  const { data } = await axiosInstance.get(`/api/leads/${id}`);
  return data;
};

export const addLead = async (formData: LeadForm): Promise<void> => {
  await axiosInstance.post(`/api/leads/add`, formData);
};

export const deleteLead = async (id: Lead["id"]): Promise<void> => {
  await axiosInstance.delete(`/api/leads/delete/${id}`);
};

export const updateStatus = async ({
  id,
  newStatus,
}: {
  id: Lead["id"];
  newStatus: Lead["status"];
}): Promise<void> => {
  await axiosInstance.put(`/api/leads/status/${id}`, { status: newStatus });
};

export const editLead = async ({
  id,
  formData,
}: {
  id: Lead["id"];
  formData: LeadForm;
}): Promise<void> => {
  await axiosInstance.put(`/api/leads/edit/${id}`, formData);
};
