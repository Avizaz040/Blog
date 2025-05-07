import {useContext, useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context-Api/AuthContext'
import checkAPI from '../Utils/Api' // Assuming you have a utility function for API calls


function PrivateRoute({children}) {

  const {isLoggedIn, setIsLoggedIn, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const response = await checkAPI("/auth/check", {
            method: "GET",
          });
          const userData = await response.json();
         setIsLoggedIn(true);
          setUser(userData.user);
          
        } catch {
          setIsLoggedIn(false);
        }
        finally {
          setLoading(false);
        }
      };

      checkLoginStatus();
    }, []);

    if (loading) return <div>Loading...</div>;
    return isLoggedIn ? children : <Navigate to="/authorization" />;
    

}

export default PrivateRoute