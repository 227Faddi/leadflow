import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link to="/dashboard">GO to Dashboard</Link>
    </>
  );
};

export default HomePage;
