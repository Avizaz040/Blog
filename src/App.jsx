import React from "react";
import Navbar from "../src/Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home";
import LoginPage from "../src/Pages/LoginPage";
import PrivateRoute from "../src/Private-Route/PrivateRoute";
import AuthorizationPage from "../src/Components/AuthorizationPage";
import LogoutPage from "../src/Pages/LogoutPage";
import BlogPage from "../src/Pages/BlogPage";
import ToastWithProgressBar from "./Components/ToastNotification";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Blog",
      element: (
        <div>
          <LoginPage />
        </div>
      )
    },
    {
      path: "/Blog/Home",
      element: (
        <div>
          <PrivateRoute>
          <Navbar />,
          <Home />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/Blog/login",
      element: 
      <div>
        <LoginPage />
      </div>,
    },
    {
      path: "/Blog/authorization",
      element: 
      <div>
        <AuthorizationPage />
      </div>
    },
    {
      path: "Blog/logout",
      element: 
      <div>
        <LogoutPage />
      </div>
    },
    {
      path: "Blog/Blog-page",
      element: 
      <div>
        <PrivateRoute>
        <Navbar />
        <BlogPage />
        <ToastWithProgressBar />
        </PrivateRoute>
      </div>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
