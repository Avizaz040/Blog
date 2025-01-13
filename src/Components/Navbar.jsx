import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BiSolidEdit } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

function Navbar() {
  const [isExpand, setIsExpand] = useState(false);

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
    exit: { opacity: 0, y: -10, transition: { staggerChildren: 0.1,  staggerDirection: -1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="h-[6rem] flex justify-between items-center px-[6rem]">
      <div className="h-full flex items-center justify-center">
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
                <motion.li variants={itemVariants} className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]">
                  <Link to="">Technology & Innovation</Link>
                </motion.li>
                <motion.li variants={itemVariants} className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]">
                  <Link to="">Design & Creativity</Link>
                </motion.li>
                <motion.li variants={itemVariants} className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]">
                  <Link to="">Lifestyle & Wellness</Link>
                </motion.li>
                <motion.li variants={itemVariants} className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]">
                  <Link to="">Business & Finance</Link>
                </motion.li>
                <motion.li variants={itemVariants} className="px-4 py-2 bg-[#1068cc]  border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]">
                  <Link to="">Travel & Adventure</Link>
                </motion.li>
                <motion.li variants={itemVariants} className="px-4 py-2 bg-[#1068cc] border-b-[1px] border-white/50 rounded-md  hover:bg-gray-100 hover:text-[#333333]">
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
      <div className="flex items-center gap-6">
       
        <div className="flex items-center gap-1 cursor-pointer">
          <BiSolidEdit
            style={{ color: "#1068cc", height: "15px", width: "15px" }}
          />
          <p className="underline underline-offset-4 font-[500] font-[Inter] text-[#030612]">Write Blogs</p>
        </div>
        <IoNotifications style={{ fontSize: "1.4rem", color: "#1068cc", cursor: "pointer" }} />
        <CgProfile style={{ fontSize: "2rem", color: "gray", cursor: "pointer" }} />
        <Link to="/logout" className='font-[500] font-[Inter] text-[#030612] hover:underline underline-offset-4 hover:text-red-600'>Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
