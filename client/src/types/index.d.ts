export type Lead = {
  id: string;
  name: string;
  email: string;
  industry: string;
  phone: string;
  location: string;
  status: "new" | "contacted" | "negotiating" | "converted" | "disqualified";
};
