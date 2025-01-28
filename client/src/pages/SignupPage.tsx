import Footer from "../components/Footer";
import SignupForm from "../components/forms/SignupForm";
import Header from "../components/Header";

const SignupPage = () => {
  return (
    <div>
      <Header />
      <main className="flex-1 px-10 sm:px-14 md:px-20 flex justify-center items-center">
        <div className="py-20 w-full max-w-sm">
          <h4 className="font-bold text-3xl text-gray-900 text-center dark:text-white">
            Join LeadFlow
          </h4>
          <p className="text-slate-500 mt-2 text-lg font-light text-center dark:text-gray-300">
            Sign up to get started
          </p>
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
