import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form className="mt-8 mb-2 w-full">
      <div className="mb-4 flex flex-col gap-6">
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">Username</label>
          <input
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Username"
          />
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">Email</label>
          <input
            type="email"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Email"
          />
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">Password</label>
          <input
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Password"
          />
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Confirm Password"
          />
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">
            Profile Image
          </label>
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="file"
          />
        </div>
      </div>
      <button
        className="mt-4 w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Signup
      </button>
      <p className="flex justify-center mt-6 text-sm text-slate-600">
        Already have an account?
        <Link
          to="/login"
          className="ml-1 text-sm font-semibold text-blue-700 underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
