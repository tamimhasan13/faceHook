import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/profile">Go to profile page</Link>
    </div>
  );
};

export default HomePage;
