
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
const { Route, Routes } = require("react-router-dom");





function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Layout>

  );
}



export default App;


