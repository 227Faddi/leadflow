/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="py-20 px-10 sm:px-14 md:px-20">
          <h4 className="block text-xl font-medium text-center text-blue-700">
            Login
          </h4>
          <p className="text-slate-500 mt-2 font-light">
            Welcome back! Enter your details to login.
          </p>
          <form className="mt-8 mb-2 w-full">
            <div className="mb-4 flex flex-col gap-6">
              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Your Password"
                />
              </div>
            </div>
            <button
              className="mt-4 w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
            >
              Login
            </button>
            <p className="flex justify-center mt-6 text-sm text-slate-600">
              Don't have an account?
              <Link
                to="/signup"
                className="ml-1 text-sm font-semibold text-blue-700 underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
