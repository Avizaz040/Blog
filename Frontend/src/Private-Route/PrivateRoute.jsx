import {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context-Api/AuthContext'


function PrivateRoute({children}) {

  const {isLoggedIn} = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/authorization" />

}

export default PrivateRoute