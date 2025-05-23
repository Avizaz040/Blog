import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { AuthContext } from "../Context-Api/AuthContext";
import ToastWithProgressBar from "../Components/ToastNotification";
import checkAPI from "../Utils/Api"; // Assuming you have a utility function for API calls

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigator = useNavigate();
  const { setIsLoggedIn, isLoggedIn, setUser } =
    useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);

  // console.log("API", checkAPI());
  // Function to handle login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {ok, data} = await checkAPI("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      // const data = await response.json();
      // console.log(response, data);
      if (ok) {
        setTimeout(async () => {
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user);
          setIsLoggedIn(true);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            navigator("/");
          }, 3000);
        }, 1000);
      } else {
        setError(data?.message || "Invalid email or password");
      }
    } catch (error) {
      setError(
        error.message || "Something went wrong. Please try again later."
      );
      console.log(error);
    }
  };
  console.log("Logged in", isLoggedIn);

  return (
    <div className="min-h-screen flex justify-center items-center  lg:py-[5rem] lg:px-[10rem] gap-[5rem] ">
      {showToast && (
        <ToastWithProgressBar
          message="You are successfully logged in..."
          autoClose={3000}
        />
      )}
      <div className="hidden lg:flex w-[50%] flex-col gap-6">
        <h1 className=" text-left text-6xl font-bold text-[#1068cc]  font-[DM]">
          Blogs
        </h1>
        <p className="text-3xl">
          Blogs is a place to share knowledge and ideas with the world.
        </p>
      </div>

      <motion.div
        className="flex flex-col justify-center items-center gap-8 bg-[#1068cc] px-[3rem] md:px-[4rem] lg:px-[5rem] py-[2rem] text-white rounded-2xl shadow-2xl shadow-gray-600"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <h2 className="text-3xl font-bold  font-[DM]">Login</h2>
        <form
          className="flex flex-col justify-center items-start gap-4"
          onSubmit={handleLogin}
          type="POST"
        >
          <div className="w-full flex flex-col gap-[2px]">
            <label className="content-center" htmlFor="email">
              Email :
            </label>
            <input
              className="rounded outline-none px-2 py-[4px] text-black "
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col gap-[2px]">
            <label className="content-center" htmlFor="password">
              Password :
            </label>
            <input
              className="rounded outline-none px-2 py-[4px] text-black"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-[12px] hover:underline underline-offset-2 cursor-pointer">
              Forgot password?
            </p>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="w-full text-center">
            <button
              type="submit"
              className="w-full bg-white text-[#1068cc] font-bold py-2 px-6 rounded"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-center">Don&apos;t have an account?</p>
          <p className="text-center mb-6">
            <Link
              to={"/signup"}
              className="font-bold underline underline-offset-2  cursor-pointer"
            >
              Sign-up
            </Link>
            &nbsp;now
          </p>
          <p className="mb-2">Or Sign up with</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer">
              <FcGoogle className="w-8 h-8 " />
            </div>
            <div className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center cursor-pointer">
              <RiFacebookFill className="w-8 h-8 " />
            </div>
            <div className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center cursor-pointer">
              <FaGithub className="w-8 h-8 " />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
