import React, { useState, useEffect } from "react";
import { CheckCircle, Lock, ArrowRight } from "lucide-react";
import { useAuthStore } from "../store/authStore.js"; // Importing your auth store
import { useNavigate } from "react-router-dom"; // For navigation

function VerifyTokenPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(5); // Timer state for countdown

  const navigate = useNavigate();
  const { verifyEmail, isLoading } = useAuthStore(); // Accessing the verifyEmail function and state

  const handleInputChange = (e) => {
    setToken(e.target.value);
    setError(""); // Clear error when typing
    setSuccess(false); // Reset success state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      await verifyEmail(token); // Call the verifyEmail API
      setSuccess(true);
    } catch (err) {
      setError("Invalid token or an error occurred. Please try again.");
    }
  };

  // Timer to navigate after successful verification
  useEffect(() => {
    if (success) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            navigate("/signin"); // Navigate to /signin after 5 seconds
          }
          return prevTimer - 1;
        });
      }, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(countdown);
    }
  }, [success, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-20 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center bg-cyan-600">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-cyan-500 mb-4">
            <Lock size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white">Verify Your Token</h2>
          <p className="text-white mt-2">
            Enter the token sent to your email to complete registration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Token
            </label>
            <input
              type="text"
              name="token"
              value={token}
              onChange={handleInputChange}
              placeholder="Enter your token"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-lg text-white transition-colors duration-200 flex items-center justify-center space-x-2 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
            }`}
          >
            <span>{isLoading ? "Verifying..." : "Verify Token"}</span>
            <ArrowRight size={18} />
          </button>

          {success && (
            <div className="text-center text-green-500 mt-4">
              <CheckCircle size={24} className="inline-block" />
              <p>Token verified successfully!</p>
              <p className="text-gray-500">
                Redirecting to sign-in page in {timer} seconds...
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default VerifyTokenPage;
