import React from 'react'
import {Link} from 'react-router-dom'

function AuthorizationPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <h1 className='text-8xl text-red-800 font-bold mb-4'><span>🙁</span><span className='animate-pulse'>Sorry !!</span> </h1>
      <h2 className='text-5xl text-red-800 font-semibold'>You are not authorized to access this page</h2>
      <p className='text-3xl'>Please login <Link to="/login" className='text-blue-600 font-semibold underline'>here</Link></p>
    </div>
  )
}

export default AuthorizationPage