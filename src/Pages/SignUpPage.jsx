
import SignupForm from "../Components/SignupForm"
import { Link } from "react-router-dom";

function SignUpPage() {


  return (
    <div className=" flex justify-center items-center gap-2 font-[inter]">
      <div className="w-[40%] min-h-screen  text-center content-center bg-white px-[2rem] py-[5rem]">
        <h1 className="text-8xl font-bold text-blue-700"><span className="">B</span>lo<span>g</span></h1>
      </div>
      <div className="w-[60%] min-h-screen bg-blue-700 px-[5rem] py-[2rem] flex flex-col items-center justify-start gap-[2rem]">
        <h1 className="text-5xl font-bold text-white">Fill the details</h1>
        <SignupForm />
        <p className="text-white">Already have an account? <span><Link to="/login" className="text-white font-semibold underline">Login</Link> here</span></p>
      </div>
    </div>
  );
}

export default SignUpPage;
