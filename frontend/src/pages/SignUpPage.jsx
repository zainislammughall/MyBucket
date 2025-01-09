import React, { useState } from "react";
import { UserPlus, Mail, Lock, User, ArrowRight } from "lucide-react";
import FormInput from "./FormInput";
import { validateForm } from "../../utils/validation.js";
import { useAuthStore } from "../store/authStore.js";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(""); // State to handle API errors

  const { signup, isLoading } = useAuthStore();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the specific error field when typing
    }));
    setApiError(""); // Clear API error when user types
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Call the signup API
      await signup(
        formData.email,
        formData.password,
        formData.fullName,
        formData.role
      );

      // If successful, navigate to verify-token page
      navigate("/verify-token");
    } catch (err) {
      // Handle API error explicitly
      setApiError(
        err.message ||
          "An error occurred. Please check your input and try again."
      );
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-20 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center bg-[#3fb27f]">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#3fb27f] mb-4">
            <UserPlus size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
          <p className="text-white mt-2">
            Join us today and start your journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
          <FormInput
            icon={User}
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            error={errors.fullName}
          />

          <FormInput
            icon={Mail}
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            error={errors.email}
          />

          <FormInput
            icon={Mail}
            label="Role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleInputChange}
            placeholder="User, Rider, Admin"
            error={errors.role}
          />

          <FormInput
            icon={Lock}
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            error={errors.password}
          />

          <FormInput
            icon={Lock}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="••••••••"
            error={errors.confirmPassword}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#3fb27f] text-white py-2 px-4 rounded-lg hover:bg-[#18835a] focus:outline-none focus:ring-2 focus:ring-[#26a370] focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>{isLoading ? "Loading..." : "Create Account"}</span>
          </button>

          {apiError && <p className="text-red-500 text-sm mt-2">{apiError}</p>}

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="http://localhost:5173/signin"
              className="text-[#26a370] hover:text-[#18835a] font-medium"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
