import {useState} from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className="flex flex-col justify-center items-center gap-[1.5rem] px-4 py-2 font-[inter]">
          <div className="flex justify-evenly gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-white text-[1.2rem]">
                First Name :
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                required
                className="text-[1.2rem] px-[1rem] py-[0.5rem] rounded-lg outline-none "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-white text-[1.2rem]">
                Last Name :
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                required
                className="text-[1.2rem] px-[1rem] py-[0.5rem] rounded-lg outline-none"
              />
            </div>
          </div>
          <div className="w-full flex  gap-4">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="username" className="text-white text-[1.2rem]">
                Username :
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                required
                className="text-[1.2rem] px-[1rem] py-[0.5rem] rounded-lg outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-[1.2rem]">
                Email Id :
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="text-[1.2rem] px-[1rem] py-[0.5rem] rounded-lg outline-none"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-white text-[1.2rem]">
              Password :
            </label>
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                
                className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-lg outline-none"
              />
              <div className="absolute right-[5%] top-[35%] cursor-pointer" onClick={togglePasswordShow}>
              {showPassword ? <IoMdEye /> : <IoMdEyeOff /> }
              </div>
              
            </div>

            <p className="text-white text-[1rem]">
              * Password should contain at least 8 characters
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-white text-[1.2rem]">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
              className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-lg outline-none"
            />
          </div>

          <input
            type="submit"
            value="Create Account"
            className="text-[1.2rem] bg-white text-blue-700 font-bold px-[1.5rem] py-[0.5rem] rounded-lg outline-none cursor-pointer"
          />
        </form>
  )
}

export default SignupForm