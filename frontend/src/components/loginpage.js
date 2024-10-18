import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // Example: Navigate to the home page after login
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
