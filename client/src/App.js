import LoginForm from "./components/loginpage/LoginForm";
import SignupForm from "./components/signup/SignupForm";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

const { Route, Routes } = require("react-router-dom");
import Layout from "./components/layout/Layout";









function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Layout>

  );
}



export default App;
