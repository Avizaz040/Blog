import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidEdit } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { LuSun } from "react-icons/lu";
import { AuthContext } from "../Context-Api/AuthContext";
import Logout from "./Logout";
import { MdOutlineNightlightRound } from "react-icons/md";
import TimeAndDate from "./TimeAndDate";

// import { LogOut } from "lucide-react";

function Navbar() {
  const [isExpand, setIsExpand] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(AuthContext);
  const { showWriteBlogs, setShowWriteBlogs, isLoggedIn, user } =
    useContext(AuthContext);
  console.log("isLoggedIn:", isLoggedIn);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleExpand = () => {
  //   setIsExpand(!isExpand);
  // };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleShowWriteBlogs = () => {
    setShowWriteBlogs(!showWriteBlogs);
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div
      className={`lg:h-[6rem] flex justify-between items-center px-[1rem] lg:px-[6rem] ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-[#333333]"
      }`}
    >
      <div className="hidden h-full md:flex lg:flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#1068cc] mr-[6rem] font-[DM] ">
          Blogs
        </h1>
        <ul className="h-full flex items-center justify-evenly gap-12 font-[Inter]">
          <li
            className={`relative text-center font-medium group ${
              theme === "dark" ? "hover:text-blue-500 " : "hover:text-black "
            } `}
          >
            <Link
              to="/"
              className={`relative z-10 
                          after:content-[''] 
                          after:absolute 
                          after:left-0 
                          after:bottom-[-4px] 
                          after:h-[2.5px] 
                          after:w-0 
                          after:bg-current 
                          after:transition-all 
                          after:duration-300 
                          group-hover:after:w-full`}
            >
              Home
            </Link>
          </li>
          <li
            className={`relative text-center font-medium group
               ${
                 theme === "dark" ? "hover:text-blue-500 " : "hover:text-black "
               } `}
          >
            <Link
              to="/Blog-page"
              className={`relative z-10 
                          after:content-[''] 
                          after:absolute 
                          after:left-0 
                          after:bottom-[-4px] 
                          after:h-[2.5px] 
                          after:w-0 
                          after:bg-current 
                          after:transition-all 
                          after:duration-300 
                          group-hover:after:w-full`}
            >
              Blog
            </Link>
          </li>
          <li
            className={`relative text-center font-medium group ${
              theme === "dark" ? "hover:text-blue-500 " : "hover:text-black "
            }`}
            onMouseEnter={() => setIsExpand(true)}
            onMouseLeave={() => setIsExpand(false)}
          >
            <span
              className={`relative z-10 
                          after:content-[''] 
                          after:absolute 
                          after:left-0 
                          after:bottom-[-4px] 
                          after:h-[2.5px] 
                          after:w-0 
                          after:bg-current 
                          after:transition-all 
                          after:duration-300 
                          group-hover:after:w-full`}
            >
              Categories
            </span>
            <AnimatePresence>
              {isExpand && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={submenuVariants}
                  className="absolute left-0 mt-2 min-w-52 bg-transparent  rounded-md text-left text-white text-[14px] z-10"
                >
                  <motion.li
                    variants={itemVariants}
                    className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]"
                  >
                    <Link to="">Technology & Innovation</Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]"
                  >
                    <Link to="">Design & Creativity</Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]"
                  >
                    <Link to="">Lifestyle & Wellness</Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]"
                  >
                    <Link to="">Business & Finance</Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="px-4 py-2 bg-[#1068cc]  border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]"
                  >
                    <Link to="">Travel & Adventure</Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]"
                  >
                    <Link to="">Education & Learning</Link>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li
            className={`relative text-center font-medium group ${
              theme === "dark" ? "hover:text-blue-500" : "hover:text-black"
            } `}
          >
            <Link
              to=""
              className={`relative z-10 
                          after:content-[''] 
                          after:absolute 
                          after:left-0 
                          after:bottom-[-4px] 
                          after:h-[2.5px] 
                          after:w-0 
                          after:bg-current 
                          after:transition-all 
                          after:duration-300 
                          group-hover:after:w-full`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`hidden md:flex items-center gap-6 ${
          theme === "dark" ? "text-white" : "text-[#030612]"
        }`}
      >
        <TimeAndDate />
        <div className="flex items-center gap-1 cursor-pointer">
          {isLoggedIn && (
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center gap-1 border-b-2 ${
                  theme === "dark" ? "border-white" : "border-black"
                } cursor-pointer`}
              >
                <BiSolidEdit
                  className={`text-[#1068cc] h-[15px] w-[15px] ${
                    theme === "dark" ? "text-white" : "text-[#030612]"
                  }`}
                />
                <p
                  className={` font-[500] font-[Inter] `}
                  onClick={handleShowWriteBlogs}
                >
                  Write Blogs
                </p>
              </div>
              <IoNotifications
                className={`text-[#1068cc] cursor-pointer text-[1.4rem] ${
                  theme === "dark" ? "text-white" : "text-[#030612]"
                }`}
              />
              {/* <CgProfile
                className={`text-gray-500 cursor-pointer text-[2rem] ${
                  theme === "dark" ? "text-white" : "text-[#030612]"
                }`}
              /> */}
              {/* <Link
                to="/logout"
                className={`font-[500] font-[Inter] ${
                  theme === "dark" ? "text-white" : "text-[#030612]"
                } hover:underline underline-offset-4 hover:text-red-600"`}
              >
                Logout
              </Link> */}
              {/* {isLoggedIn ? <Logout/> : (
              <Link
                to="/login"
                className={`font-[500] font-[Inter] ${
                  theme === "dark" ? "text-white" : "text-[#030612]"
                } hover:underline underline-offset-4 hover:text-red-600`}
              >
                Login
              </Link>
              )} */}
              {isLoggedIn && (
                <div className="flex items-center gap-2 border-b-2 cursor-pointer">
                  <CgProfile
                    className={`text-gray-500 cursor-pointer text-[2rem] ${
                      theme === "dark" ? "text-white" : "text-[#030612]"
                    }`}
                  />
                  <p className="font-[500] font-[Inter] text-blue -600">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <Link
                    to="/logout"
                    className={`font-[500] font-[Inter] ${
                      theme === "dark" ? "text-white" : "text-[#030612]"
                    } hover:underline underline-offset-4 hover:text-red-600"`}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
          {!isLoggedIn && (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className={`font-[500] font-[Inter] ${
                  theme === "dark" ? "text-white" : "text-[#030612]"
                } hover:underline underline-offset-4 hover:text-red-600`}
              >
                Login
              </Link>
            </div>
          )}
        </div>

        <div className="w-8 h-8 cursor-pointer" onClick={toggleTheme}>
          {theme === "dark" ? (
            <MdOutlineNightlightRound className="w-full h-full text-blue-600" />
          ) : (
            <LuSun className="w-full h-full text-blue-600" />
          )}
        </div>
      </div>

      {/* mobile menu */}

      <HiMenuAlt1
        className="fixed top-4 lg:hidden w-8 h-8 cursor-pointer text-blue-600 z-30"
        onClick={toggleMenu}
      />
      <div
        className="lg:hidden fixed top-4 right-4 w-8 h-8 cursor-pointer z-30"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <MdOutlineNightlightRound className="w-full h-full text-blue-600" />
        ) : (
          <LuSun className="w-full h-full text-blue-600" />
        )}
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0  transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } w-[14rem] min-h-screen z-30 py-4 px-4 flex flex-col justify-start gap-8 ${
          theme === "dark"
            ? "text-white bg-gray-800"
            : "text-[#333333] bg-white"
        }`}
      >
        {/* User Profile Section */}
        <div className="flex justify-between items-center">
          <CgProfile
            className={`w-12 h-12 text-gray-500 ${
              theme === "dark" ? "text-white" : "text-[#333333]"
            }`}
          />

          <RiCloseLargeFill
            className={`w-8 h-8 cursor-pointer text-blue-600 ${
              theme === "dark" ? "text-white" : "text-[#333333]"
            }`}
            onClick={toggleMenu}
          />
        </div>

        {/* Greeting Section */}
        <h1 className="text-xl font-bold text-[#1068cc] font-[DM]">
          Hello, <span>User</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 items-start  font-[Inter] font-semibold text-lg">
          <li className="font-medium hover:text-blue-600">
            <Link to="/Home">Home</Link>
          </li>
          <li className="font-medium hover:text-blue-600">
            <Link to="/Blog-page">Blog</Link>
          </li>
          <li className="font-medium hover:text-blue-600">
            <Link to="/Categories">Categories</Link>
          </li>
          <li className="font-medium hover:text-blue-600">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Additional Options */}
        <div className="flex flex-col font-semibold font-[Inter]  text-lg gap-4">
          <p className="hover:text-blue-600" onClick={handleShowWriteBlogs}>
            Write Blogs
          </p>
          <Link to="/logout" className="hover:text-blue-600">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
