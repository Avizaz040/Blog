import Navbar from "../src/Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home";
import LoginPage from "../src/Pages/LoginPage";
import PrivateRoute from "../src/Private-Route/PrivateRoute";
import AuthorizationPage from "../src/Components/AuthorizationPage";
import LogoutPage from "../src/Pages/LogoutPage";
import BlogPage from "../src/Pages/BlogPage";
import { AuthProvider } from "./Context-Api/AuthContext";
import SignUpPage from "../src/Pages/SignUpPage";
import WriteBlogSection from "../src/Pages/WriteBlogSection";
import Layout from "../src/Components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/Blog-page",
          element: (
            <PrivateRoute>
              <BlogPage />
              <WriteBlogSection />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <div>
          <LoginPage />
        </div>
      ),
    },
    {
      path: "/authorization",
      element: (
        <div>
          <AuthorizationPage />
        </div>
      ),
    },
    {
      path: "/logout",
      element: (
        <div>
          <LogoutPage />
        </div>
      ),
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
