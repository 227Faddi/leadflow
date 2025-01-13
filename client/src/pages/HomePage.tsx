import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePageInfo from "../components/HomePageInfo";
import { useLogin } from "../features/auth/hooks";

const HomePage = () => {
  const guest = {
    email: import.meta.env.VITE_GUEST_EMAIL,
    password: import.meta.env.VITE_GUEST_PASSWORD,
  };

  const { login, isPending } = useLogin();

  const handleGuestLogin = async () => {
    await login(guest);
  };
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center my-16 md:my-48 space-y-32 md:space-y-40">
        <section className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center max-w-[75%] space-y-4 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Simplify Your Lead Management Process
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-thin max-w-3xl">
              Easily organize, track, and analyze your potential clients to stay
              ahead and close more deals, all in one powerful platform.
            </p>
          </div>
          <button
            onClick={handleGuestLogin}
            disabled={isPending}
            className="text-white bg-gradient-to-r from-blue-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {isPending ? "Logging in..." : "Try as Guest"}
          </button>
        </section>
        <HomePageInfo />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
