import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Services/FirebaseConfig";
import { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCred.user, {
        displayName: formData.name,
      });
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-4 bg-blue-50">
      <div className="w-full max-w-md border border-blue-300 shadow-lg bg-white rounded-xl p-8">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Create Account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" className="w-full border px-4 py-2 rounded-md" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" className="w-full border px-4 py-2 rounded-md" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full border px-4 py-2 rounded-md" onChange={handleChange} required />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-lg font-medium transition">
            Sign Up
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
