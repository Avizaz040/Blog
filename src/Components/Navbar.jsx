import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidEdit } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

function Navbar() {
  const [isExpand, setIsExpand] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // useEffect(() => {
  //   if (menuOpen) {
  //     // Disable scrolling on body when menu is open
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // Enable scrolling when menu is closed
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto"; // Cleanup on unmount
  //   };
  // }, [menuOpen]);

  const handleExpand = () => {
    setIsExpand(!isExpand);
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
    <div className="lg:h-[6rem] flex justify-between items-center px-[1rem] lg:px-[6rem]">
      <div className="hidden h-full md:flex lg:flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#1068cc] mr-[6rem] font-[DM]">
          Blogs
        </h1>
        <ul className="h-full flex items-center justify-evenly gap-12 text-[#333333] font-[Inter]">
          <li className="text-center font-medium hover:text-black">
            <Link to="/Home">Home</Link>
          </li>
          <li className="text-center font-medium hover:text-black">
            <Link to="/Blog-page">Blog</Link>
          </li>
          <li className="relative text-center font-medium hover:text-black group">
            <button className="focus:outline-none" onClick={handleExpand}>
              Categories
            </button>
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
          <li className="text-center font-medium hover:text-black">
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-1 cursor-pointer">
          <BiSolidEdit
            style={{ color: "#1068cc", height: "15px", width: "15px" }}
          />
          <p className="underline underline-offset-4 font-[500] font-[Inter] text-[#030612]">
            Write Blogs
          </p>
        </div>
        <IoNotifications
          style={{ fontSize: "1.4rem", color: "#1068cc", cursor: "pointer" }}
        />
        <CgProfile
          style={{ fontSize: "2rem", color: "gray", cursor: "pointer" }}
        />
        <Link
          to="/logout"
          className="font-[500] font-[Inter] text-[#030612] hover:underline underline-offset-4 hover:text-red-600"
        >
          Logout
        </Link>
      </div>

      {/* mobile menu */}
      
      <HiMenuAlt1 className="float-left mt-4 lg:hidden w-8 h-8 cursor-pointer text-blue-600 z-30" onClick={toggleMenu} />
      
      <div className={`fixed top-0 left-0 bottom-0  transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } w-[14rem] min-h-screen bg-gray-300 z-30 py-4 px-4 flex flex-col justify-start gap-8`}>
        {/* User Profile Section */}
        <div className="flex justify-between items-center">
          <CgProfile className="w-12 h-12 text-gray-500" />
          <RiCloseLargeFill className="w-8 h-8 cursor-pointer text-blue-600" onClick={toggleMenu}/>
        </div>

        {/* Greeting Section */}
        <h1 className="text-xl font-bold text-[#1068cc] font-[DM]">
          Hello, <span>User</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 items-start text-[#333333] font-[Inter] font-semibold text-lg">
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
        <div className="flex flex-col font-semibold font-[Inter] text-[#333333] text-lg gap-4">
          <Link to="/write-blogs" className="hover:text-blue-600">
            Write Blogs
          </Link>
          <Link to="/logout" className="hover:text-blue-600">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
