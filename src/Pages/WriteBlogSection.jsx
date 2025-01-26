import { useContext, useEffect } from "react";
import { AuthContext } from "../Context-Api/AuthContext";
import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

function WriteBlogSection() {
  const { showWriteBlogs, setShowWriteBlogs } = useContext(AuthContext);
  
  const handleShowWriteBlogs = () => {
    setShowWriteBlogs(!showWriteBlogs);
  };
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (showWriteBlogs) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "auto";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showWriteBlogs]);
  
  return (
    <AnimatePresence>
    {showWriteBlogs && (
      <motion.div
        className="fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.form
          className="w-[90%] md:w-[50%] h-[70%] md:h-[50%] px-[1rem] py-[1rem] bg-white p-4 flex flex-col gap-4 rounded border-[4px] border-blue-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center bg-white">
            <h2 className="text-2xl font-semibold">Write a blog -</h2>
            <GrClose
              onClick={handleShowWriteBlogs}
              className="cursor-pointer text-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter blog category"
              className="p-2 text-[1.2rem] outline-none border-[2px] border-gray-300 rounded"
            />
            <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:gap-4">
              <label htmlFor="coverImage" className="lg:text-[1.2rem]">
                Upload cover image
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                accept="image/*"
                className="p-auto text-[16px] lg:text-[1.2rem] outline-none border-[2px] border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Enter blog title"
              className="p-2 text-[1.2rem] outline-none border-[2px] border-gray-300 rounded"
            />
            <textarea
              placeholder="Write your blog content here..."
              className="p-2 text-[1.2rem] outline-none border-[2px] border-gray-300 rounded h-[200px]"
            />
            <button className="bg-blue-500 text-white p-2 rounded mt-4">
              Publish
            </button>
          </div>
        </motion.form>
      </motion.div>
    )}
  </AnimatePresence>
  );
}

export default WriteBlogSection;
