import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import AuthCallback from "./Auth/AuthCallback";
import UserProfile from "./Pages/Profile/UserProfile";
import ProtectedRoutes from "./Auth/ProtectedRoutes";
import ManageRestaurant from "./Pages/Restaurant/ManageRestaurant";
import AddRestaurant from "./Pages/Restaurant/AddRestaurant";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/callback-auth" element={<AuthCallback />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/update-profile" element={<UserProfile />} />
          <Route path="/manage-restaurant" element={<ManageRestaurant />} />
          <Route path="/add-restaurant" element={<AddRestaurant />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
