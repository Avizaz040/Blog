import React from 'react'
import { Link } from 'react-router-dom'

function LogoutPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <h1 className='text-5xl text-red-800 font-semibold'>You are successfully logged out</h1>
      <p className='text-3xl'>To login again please click <Link to="/Blog/login" className='text-blue-600 font-semibold underline'>here</Link> </p>
      
    </div>
  )
}

export default LogoutPage