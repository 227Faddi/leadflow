import { Link } from "react-router-dom";
import { IoIosContacts } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex flex-col sm:flex-row gap-8 justify-around items-center py-10">
        <a
          href="/"
          className="font-bold text-2xl flex items-center justify-center"
        >
          <IoIosContacts className="text-green-700" size={35} />
          Lead Leger
        </a>
        <button className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Try it as a Guest
        </button>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center space-y-8 my-52">
          <p className="text-4xl font-bold text-center max-w-[50%]">
            Lead Ledger empowers businesses and freelancers to stay on top of
            their leads. Easily save, update statuses, and manage opportunities
            in one streamlined platform, designed to help you stay organized and
            close deals efficiently.
          </p>
          <Link to="/dashboard">GO to Dashboard</Link>
          <div className="space-x-8">
            <button className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Sign in
            </button>
            <button className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Sign up
            </button>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center space-y-8 px-4 md:px-10 lg:px-56 mb-52">
          <div className="bg-gray-100 p-10 md:p-20 rounded-2xl flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-12">
              <div className="space-y-4">
                <FaUserPlus className="" size={35} />
                <h3 className="font-bold">Lorem, ipsum dolor.</h3>
                <p className="md:w-2/3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aspernatur officiis mollitia, repellat facere laborum culpa.
                </p>
              </div>
              <div className="space-y-4">
                <FaUsers className="" size={35} />
                <h3 className="font-bold">Lorem, ipsum dolor.</h3>
                <p className="md:w-2/3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aspernatur officiis mollitia, repellat facere laborum culpa.
                </p>
              </div>
            </div>
            <div>
              <img
                className="w-full h-full"
                src="https://placehold.co/600x400"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
