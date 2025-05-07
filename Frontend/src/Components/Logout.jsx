
import { useContext } from "react";
import { AuthContext } from "../Context-Api/AuthContext";
import { useNavigate } from "react-router-dom";
import checkAPI from "../Utils/Api"; // Assuming you have a utility function for API calls

function Logout() {
  const { setIsLoggedIn, setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const {ok, data} = await checkAPI("/auth/logout", {
        method: "POST",
      });
      if (ok) {
        console.log(data.message);
        setIsLoggedIn(false);
        setUser(null); // Clear user data from context
        localStorage.removeItem("user");
        localStorage.removeItem("token"); // Clear user data from local storage
        setToken(null); // Clear token from context
        navigate("/login"); // Redirect to login page after logout
      } else {
        console.error("Logout failed", data.message);
      }
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
