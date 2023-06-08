import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("email");
    if (data === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
