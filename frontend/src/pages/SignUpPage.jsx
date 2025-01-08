import React, { useState } from "react";
import { UserPlus, Mail, Lock, User, ArrowRight } from "lucide-react";
import FormInput from "./FormInput";
import { validateForm } from "../../utils/validation.js";
import { useAuthStore } from "../store/authStore.js";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const { signUp } = useAuthStore();

  const handleChange = async (e) => {
    e.preventDefault();
    await signUp(formData.email, formData.password, formData.fullName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-20 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center bg-cyan-600">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-cyan-500 mb-4">
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
            onChange={handleChange}
            placeholder="Full Name"
            error={errors.fullName}
          />

          <FormInput
            icon={Mail}
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            error={errors.email}
          />

          <FormInput
            icon={Lock}
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            error={errors.password}
          />

          <FormInput
            icon={Lock}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            error={errors.confirmPassword}
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Create Account</span>
            <ArrowRight size={18} />
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="http://localhost:5173/signin"
              className="text-cyan-500 hover:text-cyan-700 font-medium"
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
