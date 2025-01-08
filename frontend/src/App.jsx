import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import VerifyTokenPage from "./pages/VerifyToken.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-token" element={<VerifyTokenPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
