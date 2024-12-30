import { Lead } from "../../types";

const leadKeys = {
  all: ["leads"] as const,
  single: (id: Lead["id"]) => ["lead", id] as const,
};

export default leadKeys;
