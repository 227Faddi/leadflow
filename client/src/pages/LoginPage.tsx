import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-10 sm:px-14 md:px-20 flex justify-center items-center">
        <div className="py-20 w-full max-w-sm">
          <h4 className="font-bold text-3xl text-gray-900 text-center">
            Welcome Back
          </h4>
          <p className="text-slate-500 mt-2 text-lg font-light text-center">
            Login to manage your leads
          </p>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
