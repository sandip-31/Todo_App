import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("email");
    if (data === null) {
      navigate("/");
    }
  }, [navigate]);

  return <Dashboard />;
};

export default Home;
