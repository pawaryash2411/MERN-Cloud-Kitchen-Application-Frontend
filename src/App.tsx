import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import AuthCallback from "./Auth/AuthCallback";
import UserProfile from "./Pages/Profile/UserProfile";
import ProtectedRoutes from "./Auth/ProtectedRoutes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/callback-auth" element={<AuthCallback />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/update-profile" element={<UserProfile />} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: " #6a1b9a",
            color: "#ffff",
          },
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
