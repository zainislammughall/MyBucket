import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
