import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center space-y-6">
        <p className="text-7xl font-semibold text-blue-700">404</p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="text-lg leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Go Back Home
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
