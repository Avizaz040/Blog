import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Blog",
      element: (
        <div>
          <Navbar />,
          <Home />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
