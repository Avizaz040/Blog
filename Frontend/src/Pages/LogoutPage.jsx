
import { Link } from 'react-router-dom'

function LogoutPage() {
  return (
    <div className='flex flex-col justify-center items-center text-center min-h-screen gap-4'>
      <h1 className=' text-2xl lg:text-5xl text-red-800 font-semibold text-center'>You are successfully logged out</h1>
      <p className='text-xl lg:text-3xl'>To login again please click <Link to="/login" className='text-blue-600 font-semibold underline'>here</Link> </p>
      
    </div>
  )
}

export default LogoutPage