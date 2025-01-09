import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import VerifyTokenPage from "./pages/VerifyToken.jsx";
import SigninPage from "./pages/SignInPage.jsx";
import Dashboard from "./pages/HomePage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-token" element={<VerifyTokenPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </div>
  );
}

export default App;
