import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col text-center items-center justify-center space-y-6 px-12">
        <p className="text-5xl md:text-7xl font-semibold text-blue-700 dark:text-white">
          404
        </p>
        <h1 className="font-bold tracking-tight text-gray-900 text-xl sm:text-2xl md:text-5xl dark:text-white">
          Page not found
        </h1>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Go Back Home
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
