import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import users from "../loginData.json";

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("email")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const storeData = (email: string, password: string) => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // localStorage.setItem("patient", "false");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = users.find(
      (user) =>
        formValues.email === user.email && formValues.password === user.password
    );

    if (user) {
      storeData(user.email, user.password);
      navigate("/dashboard");
    } else {
      alert("Wrong email and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Log in</h2>

        <form
          className="bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="me@example.com"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
