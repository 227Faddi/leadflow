import axios from "axios";
import { Lead, LeadForm } from "../../types";

const serverURL = import.meta.env.VITE_SERVER_URL;

export const fetchLeads = async (): Promise<Lead[]> => {
  const { data } = await axios.get(`${serverURL}/api/leads/sort/name/ASC`);
  return data;
};

export const fetchLead = async <T>(id: T): Promise<Lead> => {
  const { data } = await axios.get(`${serverURL}/api/leads/${id}`);
  return data;
};

export const addLead = async (formData: LeadForm): Promise<void> => {
  await axios.post(`${serverURL}/api/leads/add`, formData);
};

export const deleteLead = async (id: Lead["id"]): Promise<void> => {
  await axios.delete(`${serverURL}/api/leads/delete/${id}`);
};

export const updateStatus = async ({
  id,
  newStatus,
}: {
  id: Lead["id"];
  newStatus: Lead["status"];
}): Promise<void> => {
  await axios.put(`${serverURL}/api/leads/status/${id}`, { status: newStatus });
};

export const editLead = async ({
  id,
  formData,
}: {
  id: Lead["id"];
  formData: LeadForm;
}): Promise<void> => {
  await axios.put(`${serverURL}/api/leads/edit/${id}`, formData);
};
