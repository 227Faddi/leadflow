import { FaGithub, FaLinkedin, FaUserAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-36 sm:mt-14 p-5 text-center dark:text-white">
      <div className="flex flex-col gap-5 md:flex-row justify-around items-center">
        <p className="mb-0 col font-thin">
          © {currentYear} LeadFlow. Your Lead Management Solution.
        </p>
        <div>
          <a
            href="https://x.com/asyncfaddi"
            target="_blank"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 w-14 h-14"
          >
            <span className="text-lg relative transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center justify-center w-full h-full">
              <FaXTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/faliloukhouma/"
            target="_blank"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 w-14 h-14"
          >
            <span className="text-lg relative transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center justify-center w-full h-full">
              <FaLinkedin />
            </span>
          </a>
          <a
            href="https://github.com/227Faddi/leadflow"
            target="_blank"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 w-14 h-14"
          >
            <span className="text-lg relative transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center justify-center w-full h-full">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://faliloukhouma.com/"
            target="_blank"
            className="ml-2 relative p-0.5 inline-flex items-center justify-center overflow-hidden text-gray-900 rounded-full group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-green-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 w-14 h-14"
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
