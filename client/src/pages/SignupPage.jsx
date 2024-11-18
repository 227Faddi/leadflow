import Header from "../components/Header";
import Footer from "../components/Footer";

const SignupPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
