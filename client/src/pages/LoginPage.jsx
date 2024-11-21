import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="py-20 px-10 sm:px-14 md:px-20">
          <h4 className="font-bold text-3xl text-center text-blue-700">
            Login
          </h4>
          <p className="text-slate-500 mt-2 text-lg font-light">
            Welcome back! Enter your details to login.
          </p>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
