import { Link } from "react-router-dom";
import {Button} from "@mui/material"

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen px-4  bg-blue-50">
      <div className="w-full max-w-md border border-blue-300 shadow-lg bg-white rounded-xl p-8">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Create Account
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-lg font-medium transition"
          >
            sign in
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
          Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
