import { FaGithub, FaGoogle } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePageInfo from "../components/HomePageInfo";
import { LinkButton, SocialButton } from "../components/ui/Button";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center my-16 md:my-48 space-y-32 md:space-y-40">
        <section className="flex flex-col items-center justify-center space-y-14">
          <div className="text-center max-w-[75%] space-y-4 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white">
              Simplify Your Lead Management Process
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 dark:text-white font-thin max-w-3xl">
              Easily organize, track, and analyze your potential clients to stay
              ahead and close more deals, all in one powerful platform.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="space-x-6">
              <LinkButton text="Login" color="green" to="/login" />
              <LinkButton text="Signup" color="blue" to="/signup" />
            </div>
            <div className="w-full py-3 flex items-center text-gray-400 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
              or
            </div>
            <div className="space-y-4">
              <SocialButton
                text="Continue with Google"
                social="google"
                icon={<FaGoogle />}
              />
              <SocialButton
                text="Continue with Github"
                social="github"
                icon={<FaGithub />}
              />
            </div>
          </div>
        </section>
        <HomePageInfo />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
