import { useContext, useState } from "react";
import { AuthContext } from "../Context-Api/AuthContext";
import { useNavigate } from "react-router-dom";
import checkAPI from "../Utils/Api"; // Assuming you have a utility function for API calls
import ToastWithProgressBar from "../Components/ToastNotification"; // Assuming you have a Toast component

function Logout() {
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const { ok, data } = await checkAPI("/auth/logout", {
        method: "POST",
      });
      if (ok) {
        console.log(data.message);
        setShowToast(true); // Show toast notification
        // Clear user data and redirect to login page

        setTimeout(() => {
          setShowToast(false); // Hide toast notification after 3 seconds
          setIsLoggedIn(false);
          setUser(null); // Clear user data from context
          localStorage.removeItem("user");
          navigate("/"); // Redirect to login page after logout
        }, 3000);
      } else {
        console.error("Logout failed", data.message);
      }
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <>
      {showToast && (
        <ToastWithProgressBar
          message="Logged out successfully!"
          duration={3000} // Duration for the toast notification
        />
      )}
      <button onClick={handleLogout}>Logout</button>
      {/* Add any additional UI elements or styles as needed */}
    </>
  );
}

export default Logout;
