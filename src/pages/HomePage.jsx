import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useReducer } from "react";
import { initialState, postReducer } from "../reducers/PostReducer";

const HomePage = () => {
  const { auth } = useAuth();
  const [state,dispatch]=useReducer(postReducer,initialState)
  console.log(auth);
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/profile">Go to profile page</Link>
    </div>
  );
};

export default HomePage;
