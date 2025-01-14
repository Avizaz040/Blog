
import Navbar from "../src/Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home";
import LoginPage from "../src/Pages/LoginPage";
import PrivateRoute from "../src/Private-Route/PrivateRoute";
import AuthorizationPage from "../src/Components/AuthorizationPage";
import LogoutPage from "../src/Pages/LogoutPage";
import BlogPage from "../src/Pages/BlogPage";

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
      path: "/Home",
      element: (
        <div>
          <PrivateRoute>
          <Navbar />
          <Home />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/login",
      element: 
      <div>
        <LoginPage />
      </div>,
    },
    {
      path: "/authorization",
      element: 
      <div>
        <AuthorizationPage />
      </div>
    },
    {
      path: "/logout",
      element: 
      <div>
        <LogoutPage />
      </div>
    },
    {
      path: "/Blog-page",
      element: 
      <div>
        <PrivateRoute>
        <Navbar />
        <BlogPage />
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
