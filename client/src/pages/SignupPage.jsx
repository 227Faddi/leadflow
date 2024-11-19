import Header from "../components/Header";
import Footer from "../components/Footer";
import SignupForm from "../components/forms/SignupForm";

const SignupPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="py-20 px-10 sm:px-14 md:px-20">
          <h4 className="block text-xl font-medium text-blue-700 text-center">
            Signup
          </h4>
          <p className="text-slate-500 mt-2 font-light">
            Nice to meet you! Enter your details to register.
          </p>
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
