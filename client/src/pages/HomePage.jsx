import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center my-20 md:my-48 space-y-32 md:space-y-40">
        <section className="flex flex-col items-center justify-center space-y-14">
          <div className="text-center max-w-[75%] space-y-4">
            <h1 className="text-4xl font-bold">
              Simplify Your Lead Management Process
            </h1>
            <p className="text-xl text-gray-500">
              Track, manage, and analyze your leads in one powerful platform
            </p>
          </div>
          <div className="mt-0 space-x-8">
            <Link
              to="/login"
              className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </Link>
          </div>
        </section>
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
