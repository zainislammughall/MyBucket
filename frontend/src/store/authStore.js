import { create } from "zustand";

const API_URL = "http://localhost:3000/api/auth";
export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: false,
  isAuthenticated: false,
  isCheckingAuth: fasle,

  signUp: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      if (response.ok) {
        set({ isLoading: false, error: false });
        const data = await response.json();
        console.log(data);
        return true;
      }
      throw new Error("Request failed");
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: true });
      return false;
    }
  },
}));
