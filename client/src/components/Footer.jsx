import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-5 text-center">
      <div className="flex flex-col gap-5 md:flex-row justify-around items-center">
        <p className="mb-0 col font-bold">
          © 2024 Leads Track. Moving forward together.
        </p>
        <div>
          <a
            href="https://x.com/khoumaDev"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            style={{ width: 60, height: 60 }}
          >
            <span className="text-lg relative transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center justify-center w-full h-full">
              <FaXTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/faliloukhouma/"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            style={{ width: 60, height: 60 }}
          >
            <span className="text-lg relative transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center justify-center w-full h-full">
              <FaLinkedin />
            </span>
          </a>
          <a
            href="https://github.com/227Faddi/"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            style={{ width: 60, height: 60 }}
          >
            <span className="text-lg relative transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center justify-center w-full h-full">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://faliloukhouma.com/"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            style={{ width: 60, height: 60 }}
          >
            <span className="text-lg relative transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center justify-center w-full h-full">
              <FaUserAlt />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
