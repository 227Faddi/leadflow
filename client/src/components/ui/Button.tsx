import { ReactNode } from "react";
import { Link } from "react-router-dom";
const clientUrl = import.meta.env.VITE_SERVER_URL;

type SocialButtonProps = {
  text: string;
  social: string;
  icon: ReactNode;
};

export const SocialButton = ({ text, social, icon }: SocialButtonProps) => {
  return (
    <a
      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white focus:ring-4 focus:outline-none shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      href={`${clientUrl}/auth/${social}`}
    >
      {icon}
      {text}
    </a>
  );
};

type LinkButtonProps = {
  text: string;
  to: string;
  color: string;
};

export const LinkButton = ({ text, to, color }: LinkButtonProps) => {
  return (
    <Link
      className={`text-white bg-gradient-to-r from-${color}-500 via-${color}-600 to-${color}-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-${color}-300 shadow-lg shadow-${color}-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      to={to}
    >
      {text}
    </Link>
  );
};
