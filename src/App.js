import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProtectedRoute from "./Routes/ProtectedRoutes.js";
import Details from "./Pages/Details/Details.jsx";

function App() {
  const _token = sessionStorage.getItem("authUser");
  const isAuthenticated = _token ? true : false;
  return (
    <Router>
      <>
        <ToastContainer />
        <Routes>
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              />
            }
          >
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                <Details />
              </ProtectedRoute>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
