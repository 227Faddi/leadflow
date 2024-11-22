import EditLeadForm from "../components/forms/EditLeadForm";

const EditLeadPage = () => {
  return (
    <div className="container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900">Edit Lead</h3>
      <div className="h-full flex flex-col items-center justify-center px-10">
        <EditLeadForm />
      </div>
    </div>
  );
};

export default EditLeadPage;
