import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context-Api/AuthContext";
import checkAPI from "../Utils/Api"; // Assuming you have a utility function for API calls

function PrivateRoute({ children }) {
  const { isLoggedIn, setIsLoggedIn, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const { ok, data } = await checkAPI("/auth/check", {
          method: "GET",
        });
        if (ok) {
          setIsLoggedIn(true);
          setUser(data.user);
        }
      } catch {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, [setIsLoggedIn, setUser]);

  if (loading) return <div>Loading...</div>;
  return isLoggedIn ? children : <Navigate to="/authorization" />;
}

export default PrivateRoute;
