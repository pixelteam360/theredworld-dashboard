import ChangePassForm from "@/components/modules/Auth/ChangePassForm";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-7 rounded-2xl">
      <h2 className="text-2xl font-medium mb-12 text-center">Change Password</h2>
      <ChangePassForm />
    </div>
  );
};

export default page;
