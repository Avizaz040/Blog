import {useState} from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SucessSignup from "./SucessSignup";


function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigator = useNavigate();

  const togglePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
   
    try{
      const response = await fetch("https://blog-5ipy.onrender.com",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({firstName,lastName,username,email,password,confirmPassword}),
        credentials:"include"
      });
      const data = response.ok ? await response.json() : null;
      // console.log(data);
      if(response.ok){
        console.log(data);
        setShowSuccessPopup(true); // Show the popup
        setTimeout(() => {
          setShowSuccessPopup(false); // hide popup
          navigator("/login"); // Navigate after a short delay
        }, 3000); // Adjust the delay as needed (e.g., 2 seconds)
      }else{
        if(data){
          console.log(data.message);
        }else{
          console.log("Something went wrong");
      }
      }
    }
    catch(error){
      console.log(error);
    }

  }

  return (
    <>
      {showSuccessPopup && <SucessSignup onClose={() => setShowSuccessPopup(false)} />}

      <form className="flex flex-col justify-center items-center gap-[1.5rem] px-4 py-2 font-[inter]" onSubmit={formSubmit} type= "POST">
          <div className="flex justify-evenly gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-white text-[1.2rem]">
                First Name :
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange = {(e) => setLastName(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-lg outline-none"
            />
          </div>

          <input
            type="submit"
            value="Create Account"
            onClick={formSubmit}
            className="text-[1.2rem] bg-white text-blue-700 font-bold px-[1.5rem] py-[0.5rem] rounded-lg outline-none cursor-pointer"
          />
        </form>
    </>
  )
}

export default SignupForm
