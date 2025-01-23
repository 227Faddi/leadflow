import AddLeadForm from "../components/forms/AddLeadForm";

const NewLeadPage = () => {
  return (
    <div className="h-full container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900 mb-10">New Lead</h3>
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <AddLeadForm />
        </div>
      </div>
    </div>
  );
};

export default NewLeadPage;
